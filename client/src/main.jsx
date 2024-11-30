import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import "./index.css";
import App from "./App.jsx";
import { store } from "./store/index.js";
import { Provider as ProviderApp } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <ProviderApp store={store}>
        <App />
      </ProviderApp>
    </Provider>
  </StrictMode>
);
