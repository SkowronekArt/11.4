/*
Dopisz do telefonu funkcję applyDiscount z parametrem, która będzie obniżać cenę telefonu.
Funkcja ma modyfikować cenę telefonu w taki sposób,
że wartość telefonu zostanie obniżona o podaną kwotę podaną jako parametr.
Aby sprawdzić poprawność działania kodu,
wypisz dane telefonu,
zastosuj obniżkę
i ponownie wypisz dane telefonu.
Powinny pokazać się 2 różne wartości.

Generalnie rzecz ujmując, po wywołaniu odpowiednio poleceń
printInfo,
applyDiscount 
i ponownie printInfo,
cena telefonu powinna ulec zmianie:
var phone = new Phone(…, 1000, …); // ustawiamy cenę na 1000
phone.printInfo(); // price = 1000
phone.applyDiscount(100); // nic się nie wypisuje
phone.printInfo(); // price = 900
*/
function Phone(brand, price, color, img, idBrandShortcut) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.img = img;
	this.idBrandShortcut = idBrandShortcut;
}

function capitaliseFirstLetterSentence(sentence) {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}	

Phone.prototype.printInfo = function() {
	var myFirstPrintInfo = `${this.color} ${this.brand} kosztuje ${this.price}$.`;
	console.log(capitaliseFirstLetterSentence(myFirstPrintInfo));
	document.getElementById(this.idBrandShortcut).innerHTML = '<img src="' + this.img + '" alt="">';
};


var samsung = new Phone("Samsung Galaxy S6", 1000, "brązowy", "http://www.komputerswiat.pl/media/2015/107/3843430/edge_p.jpg", "samsung");
var iPhone6s = new Phone("iPhone6s", 1000, "różowy", "http://gadgetlio.com/wp-content/uploads/2015/07/kuuzagy.png", "apple");
var onePlus = new Phone("huawei", 1000, "czarny", "http://img.c.huaweistatic.com/content/dam/huawei-cbg-site/weu/uk/support/P10&P10%20PLUS.png", "one-plus");


	
samsung.printInfo();
iPhone6s.printInfo();
onePlus.printInfo();

//				apply Discount
Phone.prototype.applyDiscount = function(discountValue) {
	this.price = this.price - discountValue;
}

samsung.applyDiscount(100);
iPhone6s.applyDiscount(100);
onePlus.applyDiscount(100);


//console.log(typeof nowaCena + nowaCena);
Phone.prototype.printInfoDiscountedPrice = function() {
	var mySecondPrintInfo = `${this.brand} po obniżce kosztuje ${this.price}$`;
	console.log(capitaliseFirstLetterSentence(mySecondPrintInfo));
};

console.log('___________A TERAZ OBNIŻKA___________');

samsung.printInfoDiscountedPrice();
iPhone6s.printInfoDiscountedPrice();
onePlus.printInfoDiscountedPrice();

