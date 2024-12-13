async function search() {
    const query = document.getElementById('search').value;
    const response = await fetch(`https://godzilla.fandom.com/w/api.php?action=parse&page=List_of_Godzilla_monsters&format=json&origin=*`);
    const data = await response.json();
    displayResults(data);
}

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    data.results.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name; // Adjust based on your API response structure
        resultsContainer.appendChild(div);
    });
}