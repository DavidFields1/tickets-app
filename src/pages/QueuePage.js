import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Typography, List, Card, Tag, Divider } from "antd";
import { SocketContext } from "../context/socketContext";
import { getLatestTickets } from "../helpers/getLatestTickets";

const { Text, Title } = Typography;

const QueuePage = () => {
	const { socket } = useContext(SocketContext);
	const [tickets, setTickets] = useState([]);

	useEffect(() => {
		socket.on("ticketList", (data) => {
			setTickets(data);
		});

		return () => {
			socket.off("ticketList");
		};
	}, [socket]);

	useEffect(() => {
		getLatestTickets().then((data) => {
			setTickets(data);
		});
	}, []);

	return (
		<>
			<Title level={1}>Attending client</Title>
			<Row>
				<Col span={12}>
					<List
						dataSource={tickets.slice(0, 3)}
						renderItem={(item) => (
							<List.Item>
								<Card
									style={{ width: 300, marginTop: 15 }}
									actions={[
										<Tag color={"volcano"}>{item.agent}</Tag>,
										<Tag color={"purple"}>Desk: {item.desk}</Tag>,
									]}
								>
									<Title>No. {item.number}</Title>
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={12}>
					<Divider>Historial</Divider>
					<List
						dataSource={tickets.slice(3)}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta
									title={`Ticket No. ${item.number}`}
									description={
										<>
											<Text type="secondary">On desk: </Text>
											<Tag color={"purple"}>{item.desk}</Tag>
											<Text type="secondary">Agent: </Text>
											<Tag color={"volcano"}>{item.agent}</Tag>
										</>
									}
								/>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</>
	);
};

export default QueuePage;
