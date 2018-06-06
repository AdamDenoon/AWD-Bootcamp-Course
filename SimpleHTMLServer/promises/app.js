$(document).ready(() => {
	let getMostFollowers = (...args) => {
		return new Promise((resolve,reject) => {
			var promises = [];
			args.forEach(arg => {
				let name = "";
				let followers = 0;
				promises.push(new Promise((resolve,reject) => {
					$.getJSON(`https://api.github.com/users/${arg}`)
						.then(data => {
							let {name,followers} = data;
							//resolve({data.name, data.followers});
							resolve({name, followers});
						})
						.catch(err => reject(err));
				}));
			});
			const pAll = Promise.all(promises).then(users => {
				users.sort(sortByFollowers);
				const topUser = users[0];
				//console.log(`users == ${JSON.stringify(users)}`);
				resolve(`${topUser.name} has the most followers with ${topUser.followers}`);
			}).catch(err => reject(err));
		});
	};

	let sortByFollowers = (obja,objb) => {
		if (obja.followers > objb.followers) {
			return -1;
		} else if (obja.followers < objb.followers) {
			return 1;
		} else {
			return 0;
		}
	};

	let starWarsString = (id) => {
		return new Promise((resolve,reject) => {
			var returnString = "";
			$.getJSON(`https://swapi.co/api/people/${id}`)
				.then(person => {
					returnString += person.name;
					$.getJSON(person.films[0])
						.then(film => {
							returnString += ` is featured in ${film.title}, directed by ${film.director}`;
							$.getJSON(film.planets[0])
								.then(planet => {
									returnString += ` and it takes place on ${planet.name}`;
									resolve(returnString);
								});
						});
				});
		});
	};

	getMostFollowers('elie','tigarcia','colt').then(data => console.log(data));
	starWarsString(1).then(data => console.log(data));
});
