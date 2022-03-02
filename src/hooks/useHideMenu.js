import { useContext, useEffect } from "react";
import { UiContext } from "../context/UiContext";

export const useHideMenu = (state) => {
	const [showMenu, hideMenu] = useContext(UiContext);

	useEffect(() => {
		if (state) {
			hideMenu();
		} else {
			showMenu();
		}
	}, [state, hideMenu, showMenu]);
};
