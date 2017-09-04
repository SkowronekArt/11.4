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


var samsung = new Phone("Samsung Galaxy S6", 1250, "brązowy", "https://cdn2.techadvisor.co.uk/cmsdata/features/3596185/Samsung_Galaxy_S6_Edge_2_800.jpg", "samsung");
var iPhone6s = new Phone("apple", 2750, "różowy", "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/r/ef/refurb/iphone6s/refurb-iphone6s-rosegold?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1476208848115", "apple");
var onePlus = new Phone("huawei", 2050, "czarny", "http://img.c.huaweistatic.com/content/dam/huawei-cbg-site/en/mkt/pdp/phones/p9lite/assets/matebook/images/index-img/sec9/phone2.png", "one-plus");


	
samsung.printInfo();
iPhone6s.printInfo();
onePlus.printInfo();

//				apply Discount
Phone.prototype.applyDiscount = function(discountValue) {
	return this.price - discountValue;
};
Phone.prototype.printInfoDiscountedPrice = function() {
	var mySecondPrintInfo = `${this.brand} po obniżce kosztuje ${this.applyDiscount(100)}$`;
	console.log(capitaliseFirstLetterSentence(mySecondPrintInfo));
};

console.log('___________A TERAZ OBNIŻKA___________');

samsung.printInfoDiscountedPrice();
iPhone6s.printInfoDiscountedPrice();
onePlus.printInfoDiscountedPrice();

