import { useKeycloak } from "@react-keycloak/web";
import { useUserStore } from "../app/store/user.store";

const SecuredPage = () => {
    const { keycloak } = useKeycloak();
    const { fetchUserByEmail } = useUserStore();

    const getData = () => {
        const userEmail = keycloak?.tokenParsed?.email;
        if (userEmail) {
            fetchUserByEmail(userEmail);
        }
    };

    return (
        <div>
            <button onClick={getData}>Получить данные</button>
            SecuredPage
        </div>
    );
};

export default SecuredPage;
