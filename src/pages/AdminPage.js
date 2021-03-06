import React, { useState, useEffect, useContext } from "react";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { getAdminStorage } from "../helpers/getAdminStorage";
import { SocketContext } from "../context/socketContext";

const { Text, Title } = Typography;

const AdminPage = () => {
	const navigate = useNavigate();
	const [admin] = useState(getAdminStorage());

	const { socket } = useContext(SocketContext);
	const [ticket, setTicket] = useState(null);

	const logout = () => {
		localStorage.removeItem("name");
		localStorage.removeItem("desk");
		navigate("/login");
	};

	const nextTicket = () => {
		socket.emit("nextTicket", admin, (ticket) => {
			setTicket(ticket);
		});
	};

	useEffect(() => {
		if (!admin.name) {
			navigate("/login");
		}
	}, [admin.name, navigate]);

	return (
		<>
			<Row>
				<Col span={20}>
					<Title level={2}>{admin.name}</Title>
					<Text>Working on desktop: </Text>
					<Text type="success">{admin.desk}</Text>
				</Col>
				<Col span={4} align="right">
					<Button shape="round" type="danger" onClick={logout}>
						Log Out
						<CloseCircleOutlined />
					</Button>
				</Col>
			</Row>
			<Divider />
			<Row>
				<Col>
					<Text>Attending ticket number: </Text>
					<Text style={{ fontSize: 30 }} type="danger">
						{ticket ? ticket.number : "-"}
					</Text>
				</Col>
			</Row>
			<Row>
				<Col offset={18} span={6} align="right">
					<Button onClick={nextTicket} shape="round" type="primary">
						Next ticket
						<RightOutlined />
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default AdminPage;
