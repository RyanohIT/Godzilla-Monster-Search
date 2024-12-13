async function fetchData() {
    const url = ('https://en.wikipedia.org/w/api.php?action=parse&page=Godzilla_(franchise)&format=json&origin=*');
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }
   

    function displayTable(data) {
      const tableBody = document.querySelector('tbody');
      tableBody.innerHTML = ''; // Clear existing data
  
      data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.movie}</td>
              <td>${item.domgross}</td>
              <td>${item.intgross}</td>
              <td>${item.cost}</td>
              <td>${item.releaseyear}</td>
          `;
          
          tableBody.appendChild(row);
      });
  }
  window.onload = fetchData;

 

  