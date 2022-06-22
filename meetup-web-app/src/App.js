import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  CalendarOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Space } from "antd";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Events from "./components/EventsPage";
import People from "./components/People";
import Profile from "./components/Profile";
import { BrowserRouter } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const getItem = (key, icon, label, link) => {
  //   return {
  //     key,
  //     icon,
  //     label,
  //     link,
  //   };
  // };
  // const menuItems = [getItem("1", <CalendarOutlined />, "events")];
  return (
    <BrowserRouter>
      <Layout>
        {/* style={{ height: "100vh" }} */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <CalendarOutlined />
              <span>Events</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/people" />
              <TeamOutlined />
              <span>People</span>
            </Menu.Item>
            <Menu.Item key="3">
              <UserOutlined />
              <span>Profile</span>
              <Link to="/profile" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}

            <Space wrap size="middle" className="button-container">
              <Button className="btn-login" type="primary" ghost>
                Login
              </Button>
              <Button type="primary">Sign up</Button>
            </Space>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "30px 30px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/people" element={<People />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/" element={<Events />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
