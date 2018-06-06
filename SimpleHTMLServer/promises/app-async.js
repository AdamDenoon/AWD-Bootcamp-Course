$(document).ready(() => {
	async function hasMostFollowers(...users) {
		let profiles = await Promise.all(users.map(user => $.getJSON(`https://api.github.com/users/${user}`)));
		profiles.sort((a,b) => a.followers < b.followers);
		return `${profiles[0].name} has the most followers with ${profiles[0].followers}`;
	}

	async function starWarsString(id) {
		let person = await $.getJSON(`https://swapi.co/api/people/${id}/`)
		let film = await $.getJSON(person.films[0])
		let planet = await $.getJSON(film.planets[0])

		return `${person.name} is featured in ${film.title}, directed by ${film.director} and it takes place on ${planet.name}`;
	}

	hasMostFollowers('elie','tigarcia','colt').then(data => console.log(data));
	starWarsString(1).then(data => console.log(data));
});
