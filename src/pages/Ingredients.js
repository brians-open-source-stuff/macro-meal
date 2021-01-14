import { useEffect, useState } from "react";

export default function Ingredients() {
	let [ingredients, setIngredients] = useState([]);

	useEffect(function() {
		fetch(".netlify/functions/get-ingredients")
			.then(res => res.json())
			.then(function(data) {
				setIngredients(data);
			});
	}, []);

	return (
		<>
		<div className="container">
			<div className="input-field">
				<input id="filter" type="search" className="validate"/>
				<label htmlFor="filter">Filter</label>
			</div>
		</div>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Kcal</th>
					<th>Fat</th>
					<th>Carbs</th>
					<th>Protein</th>
				</tr>
			</thead>
			<tbody>
				{ingredients.map(ingredient => (
					<tr key={ingredient._id}>
						<td>{ingredient.name}</td>
						<td>{ingredient.kcal}</td>
						<td>{ingredient.fat.toFixed(2)} g</td>
						<td>{ingredient.carbs.toFixed(2)} g</td>
						<td>{ingredient.protein.toFixed(2)} g</td>
					</tr>
				))}
			</tbody>
		</table>
		</>
	);
}
