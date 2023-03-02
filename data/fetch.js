




fetch('destinations.json')
			.then((response) => {
                return response.json();
            })
			.then(data => {
				const destinationsList = document.getElementById('destinations-list');
                console.log(data)
			data.destinations.forEach(destination => {
				const li = document.createElement('li');
				li.textContent = destination.title;
				destinationsList.appendChild(li);
			});
			});
		
