import pizzas from "../assets/db.json"

export const getPizzasImitate = (category, sortBy) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			let result = [...pizzas.pizzas];

			if (category > 0) {
				result = result.filter(pizza => pizza.category === category);
			}

			result.sort((a, b) => {
				if (sortBy.type === 'name') {
					return sortBy.order === 'asc'
						? a[sortBy.type].localeCompare(b[sortBy.type])
						: b[sortBy.type].localeCompare(a[sortBy.type]);
				} else {
					return sortBy.order === 'asc'
						? a[sortBy.type] - b[sortBy.type]
						: b[sortBy.type] - a[sortBy.type];
				}
			});

			resolve({data: result});
		}, 1000);
	});
};