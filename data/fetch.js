fetch('destinations.json')
			.then(response => response.json())
			.then(destinations => {
				const destinationsList = document.getElementById('destinations-list');

				destinations.forEach(destination => {
					const li = document.createElement('li');
					li.textContent = destination.title;
					destinationsList.appendChild(li);
				});
			})
			.catch(error => console.error(error));
