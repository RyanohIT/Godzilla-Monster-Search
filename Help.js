async function fetchData() {
    const url = ("https://en.wikipedia.org/w/api.php?action=parse&page=Godzilla_(franchise)&format=json&origin=*");
    try {
      const response = await fetch(url);
      console.log (response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error.message);
    }

  }
    function array() {
    let input = document.getElementsByName('array[]');

    for (let i = 0; i < item.length; i++) {
        let a = input[i];
        k = k + "array[" + i + "].value= "
            + a.value + " ";
            console.log(array);
            console.log(input);
    }
}
    function displayTable(data) {
      console.log(displayTable);
      console.log(data);
      const tableBody = document.getElementById("monsterbody");
      tableBody.innerHTML = ""; // Clear existing data\
      script = document.createElement("script");
      script.innerHTML = "for (let i = 0; i < item.length; i++)";
          const row = document.createElement("tr");
          row.innerHTML = ` <script>
              <td>${item.movie}<\/td>
              <td>${item.domgross}<\/td>
              <td>${item.intgross}<\/td>
              <td>${item.cost}<\/td>
              <td>${item.releaseyear}<\/td>
          <\/script>`;
          tableBody.appendChild(row);
          console.log(tableBody);
          return data;
      }


  
 

  