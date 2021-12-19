let informations = JSON.parse(localStorage.getItem("reactCartState"));
const TAXE_FED = 0.05;
const TAXE_PROVINC = 0.09975;
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
	<tr class="bg-dark text-white"><th></th><th>Item</th><th>Quantité</th><th>Prix unitaire</th><th>Prix total</th></tr>
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

	table += `<tr><td>${id}</td><td>${name}</td><td>${qty}</td><td>${price}$</td><td>${priceTotalUnit}$</td></tr>`;
}

priceTaxeF = priceTaxeF.toFixed(2);
priceTaxePro = priceTaxePro.toFixed(2);
Total = Total.toFixed(2);

table += `
	<tr class="bg-light">
		<td></td>
		<td>Sous-total:</td>
		<td></td>
		<td></td>
		<td>${priceTotalSansTaxe}$</td>
	</tr>
	<tr class="bg-light">
		<td></td>
		<td>Taxe fédérale (TPS: 5%)</td>
		<td></td>
		<td></td>
		<td>${priceTaxeF}$</td>
	</tr>
	<tr class="bg-light">
		<td></td>
		<td>Taxe provinciale (TVQ: 9,975%)</td>
		<td></td>
		<td></td>
		<td>${priceTaxePro}$</td>
	</tr>
	<tfoot class="bg-primary">
		<td></td>
		<td>Total:</td>
		<td></td>
		<td></td>
		<td>${Total}$</td>
	</tfoot>
`;
document.getElementById("tableHTML").innerHTML += table;

