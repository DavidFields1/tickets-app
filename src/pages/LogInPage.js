import React, { useState } from "react";
import {
	Form,
	Input,
	Button,
	Checkbox,
	InputNumber,
	Typography,
	Divider,
} from "antd";
import { useNavigate } from "react-router-dom";
import { getAdminStorage } from "../helpes/getAdminStorage";
const { Title, Text } = Typography;

const LogInPage = () => {
	const navigate = useNavigate();

	const [admin] = useState(getAdminStorage());

	const onFinish = ({ name, number }) => {
		navigate("/admin");

		localStorage.setItem("name", name);
		localStorage.setItem("desk", number);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	if (admin.name) {
		navigate("/admin");
	}

	return (
		<>
			<Title level={2}>Agent account</Title>
			<Text>
				Log into your account and start attending costumers in their turn
			</Text>
			<Divider />
			<Form
				name="basic"
				labelCol={{ span: 6 }}
				wrapperCol={{ span: 12 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Name"
					name="name"
					rules={[{ required: true, message: "Please input your name" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Desktop number"
					name="number"
					rules={[{ required: true, message: "Please input desktop number" }]}
				>
					<InputNumber min="1" max="99" />
				</Form.Item>

				<Form.Item
					name="remember"
					valuePropName="checked"
					wrapperCol={{ offset: 6, span: 12 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 6, span: 12 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default LogInPage;
