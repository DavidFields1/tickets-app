import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
	const [menuState, setMenuState] = useState(false);

	const showMenu = () => {
		setMenuState(true);
	};

	const hideMenu = () => {
		setMenuState(false);
	};

	return (
		<UiContext.Provider
			value={{
				showMenu,
				hideMenu,
				menuState,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
