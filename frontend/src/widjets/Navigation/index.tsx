import { useKeycloak } from "@react-keycloak/web";
import { Link } from "react-router-dom";
import { Button, Flex, Layout, Typography } from "antd";
import { Logo } from "../../assets/svg";

const { Header } = Layout;

const Navigation = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <Header
      style={{
        width: "100%",
        backgroundColor: "var(--primary-color)",
      }}
    >
      <div className="wrapper">
        <Typography>
          <Logo />
        </Typography>
        <Flex gap="small" align="center">
          <Link to={""}>Home</Link>
          <Link to={"secured"}>Secured</Link>

          {!keycloak.authenticated && (
            <Button type="primary" onClick={() => keycloak.login()}>
              Login
            </Button>
          )}

          {!!keycloak.authenticated && (
            <Button type="default" onClick={() => keycloak.logout()}>
              Logout (
              {keycloak.tokenParsed && keycloak.tokenParsed.preferred_username})
            </Button>
          )}
        </Flex>
      </div>
    </Header>
  );
};

export default Navigation;
