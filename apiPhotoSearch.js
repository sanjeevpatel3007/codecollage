
      
      function searchImages() {
        const query = document.getElementById('searchInput').value;
        const apiUrl = `https://pixabay.com/api/?key=42052463-9d6c20875775947b500de2dae&q=${query}`;

        // Make the API request
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayResults(data.hits))
            // .catch(error => console.error('Error:', error));
    }

    // Function to display search results
    function displayResults(images) {
        const imageResults = document.getElementById('imageResults');

        // Clear previous results
        imageResults.innerHTML = '';

        // Display each image result
        images.forEach(function (image) {
            const imageUrl = image.webformatURL;
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            // imgElement.alt = 'Image';
            imageResults.appendChild(imgElement);
        });
    }


    searchImages();