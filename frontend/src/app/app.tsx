import { useEffect } from "react";
import httpService from "../services/http.service";
import { Route, Routes } from "react-router-dom";
import SecuredPage from "../pages/SecuredPage";
import PrivateRoute from "./helpers/PrivateRoute";
import { useKeycloak } from "@react-keycloak/web";
import MainLayout from "../layouts/MainLayout";
import "./app.scss";
import IndexPage from "../pages/WelcomePage";

function App() {
  const { keycloak } = useKeycloak();

  useEffect(() => {
    httpService.configure(keycloak);
  }, [keycloak]);

  // Заглушки для функций покупки и очереди
  const handlePurchase = (trainNumber: string) => {
    console.log(`Покупка билета на поезд: ${trainNumber}`);
  };

  const handleWaitlist = (trainNumber: string) => {
    console.log(`Добавление в очередь на поезд: ${trainNumber}`);
  };

  return (
    <MainLayout>
      <Routes>
        <Route 
          path="/" 
          element={
            <IndexPage />
          } 
        />
        <Route
          path="/secured"
          element={
            <PrivateRoute>
              <SecuredPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
