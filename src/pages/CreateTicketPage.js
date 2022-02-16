import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { useContext } from "react/cjs/react.development";
import { UiContext } from "../context/UiContext";

const { Text, Title } = Typography;

const CreateTicketPage = () => {
	// useHideMenu(true);
	const { hideMenu } = useContext(UiContext);
	console.log("hideMenu", hideMenu);

	return (
		<>
			<Row>
				<Col span={14} offset={5} align="center">
					<Title level={3}>Push the button to get a new ticket</Title>
					<Button type="primary" icon={<DownloadOutlined />} size="large">
						New Ticket
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: 100 }}>
				<Col span={14} offset={5} align="center">
					<Text level={2}>Your number:</Text>
					<br />
					<Text type="success" style={{ fontSize: 50 }}>
						4
					</Text>
				</Col>
			</Row>
		</>
	);
};

export default CreateTicketPage;
