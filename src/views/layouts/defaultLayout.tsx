import React from "react";
import { Layout } from "antd";
// import AppSidebar from "../../components/sidebar";
// import AppHeader from "../../components/header";
// import AppContent from "../../components/content";
import Header from '../../views/header/header'
import { Outlet } from "react-router-dom";
import AppSidebar from "../../components/sidebar";
import AppContent from "../../components/content";

type Props = {};

export default function DefaultLayout({ }: Props) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}

    >
      <AppSidebar trigger={null} collapsed={collapsed} setTheme={"light"} />
      <Layout
        style={collapsed ? { marginLeft: 75 } : { marginLeft: 250 }}
        className="!transition-all !ease-linear !delay-75"
      >
        <Header></Header>
        <AppContent>
          <Outlet />
        </AppContent>
      </Layout>
    </Layout>
  );
}
