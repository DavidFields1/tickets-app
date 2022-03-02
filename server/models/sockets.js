const TicketList = require("./ticket-list");
class Sockets {
	constructor(io) {
		this.io = io;
		this.ticketList = new TicketList();

		this.socketEvents();
	}

	socketEvents() {
		this.io.on("connection", (socket) => {
			console.log("socket connected");

			socket.on("newTicket", (data, callback) => {
				const newTicket = this.ticketList.createTicket();
				callback(newTicket);
			});

			socket.on("nextTicket", ({ name, desk }, callback) => {
				const nextTicket = this.ticketList.attendTicket(name, desk);
				callback(nextTicket);

				this.io.emit("ticketList", this.ticketList.lastTickets);
			});
		});
	}
}

module.exports = Sockets;
