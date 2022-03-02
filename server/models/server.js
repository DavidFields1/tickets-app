const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");
const Sockets = require("./sockets");

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		// Http server
		this.server = http.createServer(this.app);

		// Sockets config
		this.io = socketio(this.server, {
			/* config */
		});

		this.sockets = new Sockets(this.io);
	}

	middlewares() {
		// Serve public directory
		this.app.use(express.static(path.resolve(__dirname, "../public")));
		// CORS
		this.app.use(cors());

		// rest to get tickets the first time
		this.app.get("/api/tickets", (req, res) => {
			res.json({
				tickets: this.sockets.ticketList.lastTickets,
			});
		});
	}

	execute() {
		// Init Middlewares
		this.middlewares();

		// Init Server
		this.server.listen(this.port, () => {
			console.log("Running on port:", this.port);
		});
	}
}

module.exports = Server;
