import React, { useContext, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { Routes, Route, Link } from "react-router-dom";
import LogInPage from "./LogInPage";
import QueuePage from "./QueuePage";
import CreateTicketPage from "./CreateTicketPage";
import AdminPage from "./AdminPage";
import { UiContext } from "../context/UiContext";
import { getAdminStorage } from "../helpes/getAdminStorage";

const { Sider, Content } = Layout;

const RouterPage = () => {
	const { menuState } = useContext(UiContext);
	const [admin] = useState(getAdminStorage());
	return (
		<Layout>
			<Sider
				style={{ height: "100vh" }}
				collapsedWidth="0"
				breakpoint="md"
				hidden={menuState}
			>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						{admin.name ? (
							<Link to="/admin">Admin</Link>
						) : (
							<Link to="/login">Log In</Link>
						)}
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
						<Link to="/queue">Queue</Link>
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						<Link to="/ticket">Create Ticket</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}
				>
					<Routes>
						<Route path="*" element={<LogInPage />} />
						<Route path="/login" element={<LogInPage />} />
						<Route path="/queue" element={<QueuePage />} />
						<Route path="/ticket" element={<CreateTicketPage />} />
						<Route path="/admin" element={<AdminPage />} />
					</Routes>
				</Content>
			</Layout>
		</Layout>
	);
};

export default RouterPage;
