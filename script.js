//your JS code here. If required.
let output = document.getElementById("output");

//Creating a default table with Loading...
let tableRow = document.createElement("tr");

let tableColumn = document.createElement("td");

tableColumn.colSpan = 2;

tableColumn.innerText = "Loading...";

tableRow.appendChild(tableColumn);

output.appendChild(tableRow);

//Creating Promises

let prom1 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 3000) + 1000;
  setTimeout(() => {
    resolve("Promise 1");
  }, time);
});

let prom2 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 3000) + 1000;
  setTimeout(() => {
    resolve("Promise 2");
  }, time);
});

let prom3 = new Promise((resolve) => {
  let time = Math.floor(Math.random() * 3000) + 1000;
  setTimeout(() => {
    resolve("Promise 3");
  }, time);
});

let x = Promise.all([prom1, prom2, prom3]);

x.then((data) => {
  output.removeChild(tableRow);
  data.forEach((val) => {
    console.log(val);
    let newTableRow = document.createElement("tr");

    let tableColumn_1 = document.createElement("td");

    let tableColumn_2 = document.createElement("td");

    tableColumn_1.innerText = `${val}`;

    tableColumn_2.innerText = `${(new Date() - startTime) / 1000}`;

    newTableRow.appendChild(tableColumn_1);
    newTableRow.appendChild(tableColumn_2);
    output.appendChild(newTableRow);
  });

  let newTableRow = document.createElement("tr");

  let tableColumn_1 = document.createElement("td");

  let tableColumn_2 = document.createElement("td");

  tableColumn_1.innerText = `Total`;

  tableColumn_2.innerText = `${(new Date() - startTime) / 1000}`;

  newTableRow.appendChild(tableColumn_1);
  newTableRow.appendChild(tableColumn_2);
  output.appendChild(newTableRow);
});

const startTime = new Date();
