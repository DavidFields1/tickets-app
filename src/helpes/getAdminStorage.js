export const getAdminStorage = () => {
	return {
		name: localStorage.getItem("name") || null,
		desk: localStorage.getItem("desk") || null,
	};
};
