import React from "react";
import RouterPage from "./pages/RouterPage";
import { BrowserRouter as Router } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import { SocketProvider } from "./context/socketContext";

const TicketApp = () => {
	return (
		<UiProvider>
			<SocketProvider>
				<Router>
					<RouterPage />
				</Router>
			</SocketProvider>
		</UiProvider>
	);
};

export default TicketApp;
