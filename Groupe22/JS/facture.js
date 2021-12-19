let informations = JSON.parse(localStorage.getItem("reactCartState"));
const TAXE_FED = 0.05;
const TAXE_PROVINC = 0.09975;
let nbItems = informations.nbItems;
let name;
let id;
let price;
let qty;
let priceTotalUnit;
let priceTotalSansTaxe = 0;
let priceTaxeF = 0;
let priceTaxePro = 0;
let Total;

var table = `
<tr class="bg-dark text-white"><th>FACTURE</th><th>Date de livraison</th><th>${nbItems} Items</th></tr>
<tr class="bg-dark text-white"><td></td><td>Item</td><td>Quantité</td></tr>
`;

for (let i = 0; i < informations.childrens.length; i++) {
	name = informations.childrens[i].name;
	id = informations.childrens[i].id;
	price = informations.childrens[i].price;
	qty = informations.childrens[i].qty;
	priceTotalUnit = price * qty;
	priceTotalSansTaxe = priceTotalSansTaxe + priceTotalUnit;
	priceTaxeF = priceTotalSansTaxe * TAXE_FED;
	priceTaxePro = priceTotalSansTaxe * TAXE_PROVINC;
	Total = priceTotalSansTaxe + priceTaxeF + priceTaxePro;
	
	table +=`<tr><td>${id}</td><td>${name}</td><td>${qty}</td>`;
}

Total = Total.toFixed(2);
table +=`<tfoot class="bg-primary">
			<td></td>
			<td>Total:</td>
			<td>${Total}$</td>
		</tfoot>`;
		
document.getElementById("tableHTML").innerHTML += table;

function clearStorage() {
	localStorage.clear();
}


