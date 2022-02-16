const { v4 } = require("uuid");

class Ticket {
	constructor(number) {
		this.id = v4();
		this.number = number;
		this.desk = null;
		this.agent = null;
	}
}
