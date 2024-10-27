import { createRoot } from "react-dom/client";
import App from "./app/app.tsx";
import ProvidersWrapper from "./app/providers/ProvidersWrapper.tsx";

createRoot(document.getElementById("root")!).render(
    <ProvidersWrapper>
        <App />
    </ProvidersWrapper>
);
