import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import App from "src/apps/app_chess/App";
import store from "src/apps/app_chess/store/store";

createRoot(document.getElementById("chess")).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
