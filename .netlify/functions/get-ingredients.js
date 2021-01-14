var Ingredient = require("../Ingredient.model");

exports.handler = async function(event, context) {
	if (event.httpMethod != "GET") return { body: "", statusCode: 405 };

	try {
		var ingredients = await Ingredient.find().sort("name");
		return {
			body: JSON.stringify(ingredients),
			statusCode: 200
		}
	}
	catch(err) {
		console.log(err);
		return {
			body: "",
			statusCode: 500
		}
	}
};
