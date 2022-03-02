const Ticket = require("./ticket");

class TicketList {
	constructor() {
		this.lastTicket = 0;
		this.pendingTickets = [];
		this.tickets = [];
	}

	get nextNumber() {
		this.lastTicket++;
		return this.lastTicket;
	}

	get lastTickets() {
		return this.tickets.slice(0, 13);
	}

	createTicket() {
		const newTicket = new Ticket(this.nextNumber);
		this.pendingTickets.push(newTicket);
		return newTicket;
	}

	attendTicket(admin, desk) {
		if (this.tickets.length == 0) {
			return null;
		}

		const nextTicket = this.pendingTickets.shift();

		nextTicket.agent = admin;
		nextTicket.desk = desk;

		this.tickets.unshift(nextTicket);

		return nextTicket;
	}
}

module.exports = TicketList;
