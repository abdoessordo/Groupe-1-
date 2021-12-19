let items = []; 
let nextId = 0; 

let data = JSON.parse('[ {"name": "La nuit étoilée", "description": "Le tableau représente ce que Van Gogh pouvait voir et extrapoler de la chambre qu\'il occupait dans l\'asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence en mai 1889.", "price": 110.15},    {"name": "Autoportrait", "description": "L\'œuvre, qui pourrait être le dernier autoportrait de Van Gogh, a été peinte peu de temps avant son départ de Saint-Rémy-de-Provence dans le sud France.", "price": 125.99},    {"name": "Terrasse du café le soir", "description": "Terrasse du café le soir, également connu sous le nom de Terrasse de café sur la place du Forum, est une peinture de l\'artiste néerlandais Vincent van Gogh réalisée à Arles en septembre 1888, entre le 9 et 16 du mois.", "price": 89.50},    {"name": "Les Mangeurs de pommes", "description": "D\'abord confiée à Théo Van Gogh pour une éventuelle vente, cette huile sur toile fait partie de l\'exposition permanente du musée van Gogh à Amsterdam.", "price": 80.00},    {"name": "Iris", "description": "Iris est une peinture de Vincent van Gogh, une des premières exécutées à l\'asile du monastère Saint-Paul-de-Mausole à Saint-Rémy-de-Provence, l\'année précédant sa mort.", "price": 200.99},    {"name": "Champ de blé aux corbeaux", "description": "Champ de blé aux corbeaux est une peinture à l\'huile réalisée par le peintre Vincent van Gogh en juillet 1890.", "price": 65.00},    {"name": "Nuit étoilée sur le Rhône", "description": "La Nuit étoilée est une huile sur toile de Vincent van Gogh, réalisée à la fin septembre 1888, représentant Arles la nuit, ville où le peintre vivait à l\'époque.", "price": 49.00},    {"name": "Le Café de nuit", "description": "Le Café de nuit est une peinture réalisée à Arles, en septembre 1888, par le peintre néerlandais Vincent van Gogh. Son titre est inscrit en bas à droite sous la signature.", "price": 175.25}]');

$('document').ready(function() { 
	generateItems(data);
	renderItems();
	generateEventListeners();
	$('.card-img-top').mouseenter(function(){
		$('d-block').hide(3000);
	});
	
	$('.card-img-top').on('mouseleave', function(){
		$('d-block').show(3000);
	}); 
	
	
	
});

function generateItems(data) {
	for (let item of data) 
		items.push(new Item(++nextId, item, "img/item" + nextId + ".jpg"));
}
function renderItems() {
	for (let item of items) {
		$(".card-deck").append(item.getCardHtml());
		$(".card-deck").append(item.getCardWrappers());
	}
}


function generateEventListeners() {
	let buttons = $('.card-footer form');

	for (let i = 0; i < buttons.length; i++)
		$(buttons[i]).on("submit", function(e) {
			e.preventDefault();
			items[e.target.id - 1].addToQty(e.target[0].value); 
			cart.addItem(items[e.target.id - 1].getReactCartItem());
	});
}

class Item {
	constructor(id, props, urlImage) {
		let savedQty = localStorage.getItem('item' + id + 'Qty');
		this.id = id;
		this.name = props.name;
		this.description = props.description;
		this.price = props.price;
		this.qtyInCart = savedQty != undefined ? savedQty : 0;
		this.image = urlImage;
	}

addToQty(qty) {
	this.qtyInCart += parseInt(qty);
	this.saveQty();
}

saveQty() {  
	localStorage.setItem('item' + this.id + 'Qty', this.qtyInCart);
}

getReactCartItem() {
	return {
	  id: this.id,
	  name: this.name,
	  qty: this.qtyInCart,
	  price: this.price
  }
}

getCardHtml() {
	let content = $('#card').prop("content");
	let div = $('.card', content).clone();
	$('.card-header', div).text(this.name);
	$('.card-title', div).text(this.price + "$");
	$('.card-text', div).text(this.description);
	$('form', div).prop('id', this.id);
	$("img", div).prop('src', this.image);
	$("img", div).prop('alt', this.name);
	return div;
}


getCardWrappers() {
   let wrappers = `<div class="w-100 d-none d-sm-block d-md-none">
						<!-- wrap every on sm-->
					</div>`;
   if (this.id % 2 == 0)
		wrappers += `<div class="w-100 d-none d-md-block d-lg-none">
						<!-- wrap every 2 on md-->
					  </div>`;
   if (this.id % 3 == 0)
		wrappers += `<div class="w-100 d-none d-lg-block d-xl-none">
						<!-- wrap every 3 on lg-->
					 </div>`;
   if (this.id % 4 == 0)
		wrappers += `<div class="w-100 d-none d-xl-block">
						<!-- wrap every 4 on xl-->
					  </div>`;
   return wrappers;
}
}
