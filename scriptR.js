// wyświetlanie daty
var today = new Date();
var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + " " + time;

// wyswietlanie/zamykanie formularza
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// dodawanie licznika w tabeli - jeszcze do zmiany raczej
var tables = document.getElementsByTagName('table');
var table = tables[tables.length -1];
var rows = table.rows;
for(var i = 0, td; i < rows.length; i++){
    td = document.createElement('td');
    td.appendChild(document.createTextNode(i + 1));
    rows[i].insertBefore(td, rows[i].firstChild);
}

// dodawanie elementow do listy - do zrobienia
const nazwaFN = document.getElementById("nazwa_input");
const iloscFN = document.getElementById("ilosc_input");
const cenaFN = document.getElementById("cena_input");
const form = document.getElementById("myForm");

//var createTableElement = document.createElement('tr');
//document.getElementById('paragon_body').appendChild(createTableElement);

/*
function createItem(_id, _name, _count, _price){
	id = _id;
	name = _name;
	count = _count;
	price = _price;
}
*/

//var shopping_items = document.querySelectorAll('input_line');

