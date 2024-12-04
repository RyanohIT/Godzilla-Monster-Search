fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => populateTable(data))
    .catch(error => console.error('Error fetching data:', error));

    function populateTable(data) {
      const tableBody = document.querySelector('#data-table tbody');
      tableBody.innerHTML = ''; // Clear existing data
  
      data.forEach(item => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${item.row-1}</td>
              <td>${item.row-2}</td>
              <td>${item.row-3}</td>
              <td>${item.row-4}</td>
              <td>${item.row-5}</td>
          `;
          tableBody.appendChild(row);
      });
  }