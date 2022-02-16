const Ticket = require("./ticket");

class TicketList {
	constructor() {
		this.lastTicket = 0;
		this.pendingTicker = [];
		this.tickets = [];
	}

	getNextNumber() {
		this.lastTicket++;
		return this.lastTicket;
	}

	getLastTickets() {
		return this.tickets.slice(0, 13);
	}

	createTicket() {
		const newTicket = new Ticket(this.getNextNumber());
		this.tickets.push(newTicket);
		return newTicket;
	}

	attendTicket(admin, desk) {
		if (this.tickets.length == 0) {
			return null;
		}

		const nextTicket = this.tickets.shift();
		nextTicket.agent = admin;
		nextTicket.desk = desk;

		this.tickets.unshift(nextTicket);
		return nextTicket;
	}
}

module.exports = TicketList;
