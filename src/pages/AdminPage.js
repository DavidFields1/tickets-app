import React from "react";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Row, Col, Typography, Button, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";

const { Text, Title } = Typography;

const AdminPage = () => {
	// useHideMenu(false);
	const navigate = useNavigate();
	const [admin] = useState(getAdminStorage());

	const logout = () => {
		localStorage.clear();
		navigate("/");
	};

	const nextTicket = () => {
		console.log("next ticket");
	};

	if (!admin.name) {
		navigate("/login");
	}

	return (
		<>
			<Row>
				<Col span={20}>
					<Title level={2}>{user.name}</Title>
					<Text>Working on desktop: </Text>
					<Text type="success">{user.desktop}</Text>
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
						5
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
