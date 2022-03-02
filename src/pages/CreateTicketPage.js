import React, { useContext, useState } from "react";
import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { SocketContext } from "../context/socketContext";

const { Text, Title } = Typography;

const CreateTicketPage = () => {
	const { socket } = useContext(SocketContext);

	const [ticket, setTicket] = useState(null);

	const newTicket = () => {
		socket.emit("newTicket", null, (ticket) => {
			setTicket(ticket);
		});
	};

	return (
		<>
			<Row>
				<Col span={14} offset={5} align="center">
					<Title level={3}>Push the button to get a new ticket</Title>
					<Button
						type="primary"
						icon={<DownloadOutlined />}
						size="large"
						onClick={newTicket}
					>
						New Ticket
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: 100 }}>
				<Col span={14} offset={5} align="center">
					<Text level={2}>Your number:</Text>
					<br />
					<Text type="success" style={{ fontSize: 50 }}>
						{ticket ? ticket.number : "-"}
					</Text>
				</Col>
			</Row>
		</>
	);
};

export default CreateTicketPage;
