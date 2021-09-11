// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}




//PSEUDOCODE: GRAB DATA ENTERED INTO FILTERED SEARCH AND RETURN THE FILTERED DATA WITHIN THE TABLE
//1. grab value & id of each element as someone clicks 
//2. use the values & id of the elements to filter each row inside the data table
//3. forEach element add an eventListener (when something changes)
//4. grab id and value of what was changed and put it into the filters object
//5. use id and value that is put inside the filters object to filter the table

// 1. Create a variable to keep track of all the filters as an object.
var filters = {}

let date = document.getElementById("datetime")
    date.addEventListener("change", e => {
      filters[e.target.id] = e.target.value 
  });

let state = document.getElementById("state")
  state.addEventListener("change", e => {
    filters[e.target.id] = e.target.value 
  });
  
let city = document.getElementById("city")
  city.addEventListener("change", e => {
    filters[e.target.id] = e.target.value 
  });

let country = document.getElementById("country")
  country.addEventListener("change", e => {
    filters[e.target.id] = e.target.value 
  });

let shape = document.getElementById("shape")
  shape.addEventListener("change", e => {
    filters[e.target.id] = e.target.value 
  });

function updateFilter() {
  let filteredData = tableData;  
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value)
      })
  
  
    // 6. Call function to apply all filters and rebuild the table
    buildTable(filteredData);
  }
    
  
  // 2. Attach an event to listen for changes to each filter
  d3.select('#filter-btn').on('click', updateFilter)
  
  // Build the table when the page loads
  buildTable(tableData);
