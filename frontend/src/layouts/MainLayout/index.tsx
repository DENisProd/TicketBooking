import { useState } from "react";
import Navigation from "../../widjets/Navigation";
import styles from "./styles.module.scss";
import { Layout, MenuTheme, Switch } from "antd";
import FooterComponent from "../../widjets/Footer";
import Sidebar from "../../widjets/Sidebar";

const { Header, Footer, Sider, Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  const [menuTheme, setMenuTheme] = useState<MenuTheme>("light");

  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? "dark" : "light");
  };

  return (
    <Layout className={styles.layout}>
      <Navigation />
      <Layout>
        <Content><div className="wrapper">{children}</div></Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
