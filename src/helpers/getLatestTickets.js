export const getLatestTickets = async () => {
	const tickets = await fetch("http://localhost:8080/api/tickets");
	const data = await tickets.json();
	return data;
};
