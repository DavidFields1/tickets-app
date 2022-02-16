import React from "react";
import RouterPage from "./pages/RouterPage";
import { BrowserRouter as Router } from "react-router-dom";
import { UiProvider } from "./context/UiContext";

const TicketApp = () => {
	return (
		<UiProvider>
			<Router>
				<RouterPage />
			</Router>
		</UiProvider>
	);
};

export default TicketApp;
