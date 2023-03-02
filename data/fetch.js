fetch('yourJSONfile.json')
  .then(response => response.json())
  .then(data => {
  
    const id = data.id;
    const image = data.image;
    const destination = data.destination;
    const title = data.title;
    const subtitle = data.subtitle;
    const text = data.text;
    const facilities = data.facilities;

    document.getElementById('id').innerHTML = id;
    document.getElementById('image').src = image;
    document.getElementById('destination').innerHTML = destination;
    document.getElementById('title').innerHTML = title;
    document.getElementById('subtitle').innerHTML = subtitle;
    document.getElementById('text').innerHTML = text;
    document.getElementById('facilities').innerHTML = facilities.join(', ');
  })
  .catch(error => console.error(error));
