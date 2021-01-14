var { connect } = require("mongoose");
var connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_ADDRESS}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});
