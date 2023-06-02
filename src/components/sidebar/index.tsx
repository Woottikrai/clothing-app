export type SiderTheme = "light" | "dark";
import type { MenuProps } from "antd";
import { Row, Col, Space, Avatar, Dropdown, Typography } from "antd";
import logo from '../../assets/img/logoclothing.jpg'
import { defaultLayout } from "../../routes/defaultRoutes";
type MenuItem = Required<MenuProps>["items"][number];


import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const { Sider } = Layout;
type Props = {
  trigger: boolean | null;
  collapsed: boolean;
  setTheme: SiderTheme;
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
) => {
  return { key, icon, children, label, type } as MenuItem;
};
export default function AppSidebar({ trigger, collapsed, setTheme }: Props) {
  const navigate = useNavigate();

  const sidebarMenu: Array<MenuItem> = [

    getItem("Adproduct", 1,),
    getItem("Listroduct", 2)

  ];

  const handleMenu: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case e.key:
        defaultLayout.children.find((routes) => {
          if (routes.key === Number(e.key)) {
            navigate(`${routes.path}`);
          }
        });

        break;
      default:
        alert("page not found");
    }
  };

  const handleMouseEnter: MenuProps["onClick"] = (e) => {
    console.log(e.key);
  };
  return (
    <Sider
      trigger={trigger}
      collapsible
      collapsed={collapsed}
      width={250}
      breakpoint="lg"
      collapsedWidth="75"
      theme={setTheme}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      className="!transition-all !ease-linear !delay-75"
    >
      <Row
        className="logo center"
        align="stretch"
        style={collapsed ? { opacity: 0 } : {}}
      >
        <img
          src={logo}
          alt="image-logo"
          className="object-fill h-32 w-32 "

        />
      </Row>
      <Menu
        theme={setTheme}
        mode="inline"
        defaultSelectedKeys={[]}
        items={sidebarMenu}
        onClick={handleMenu}
        onMouseEnter={() => handleMouseEnter}
        style={{ flex: 1, padding: "0px 5px" }}
      />
    </Sider>
  );
}
