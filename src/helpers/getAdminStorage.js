export const getAdminStorage = () => {
	return {
		name: localStorage.getItem("name") || "",
		desk: localStorage.getItem("desk") || null,
	};
};
