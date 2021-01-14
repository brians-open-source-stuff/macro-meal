import { useEffect, useState, useRef } from "react";

export default function Ingredients() {
	var tableRef = useRef();
	let [ingredients, setIngredients] = useState([]);

	useEffect(function() {
		(async function() {
			var res = await fetch(".netlify/functions/get-ingredients");
			try {
				setIngredients(await res.json());
			} catch (error) {
				setIngredients([]);
				console.log(error);
			}
		}())
	}, []);

	function filter(e) {
		var nameFields = tableRef.current.querySelectorAll("tr :first-child");
		nameFields.forEach(field => {
			if (!field.innerText.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== "")
				field.parentElement.classList.add("hidden");
			else
				field.parentElement.classList.remove("hidden");
		});

	}

	return (
		<>
		<div className="container">
			<div className="input-field">
				<input id="filter" type="search" className="validate" onKeyUp={filter}/>
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
			<tbody ref={tableRef}>
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
