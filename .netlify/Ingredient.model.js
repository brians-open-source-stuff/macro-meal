require("./database");
var { Schema, model } = require("mongoose");

var Ingredient = new Schema({
	name: { type: String, required: [ true, "Name cannot be blank" ] },
	kcal: { type: Number, required: [ true, "Kcal must be at least 0" ] },
	fat: { type: Number, required: [ true, "Fat must be at least 0" ] },
	carbs: { type: Number, required: [ true, "Carbs must be at least 0" ] },
	protein: { type: Number, required: [ true, "Protein must be at least 0" ] }
});

exports.ingredientSchema = Ingredient;
module.exports = model("Ingredient", Ingredient);
