function Phone(brand, price, color, img, brandShortcut) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.img = img;
	this.brandShortcut = brandShortcut;
}


	

Phone.prototype.printInfo = function() {
	var idBrandShortcut = '"#' + this.brandShortcut + '"';
	console.log("Telefon marki " + this.brand + ", którego kolor jest " + this.color + " kosztuje, bagatela " + this.price + "$. Chcę, żeby zdjęcie znajdywało sobie div z określonym id - np. " + idBrandShortcut);
	document.getElementById(idBrandShortcut).innerHTML = '<img src="' + this.img + '" alt="">';

}

var Samsung = new Phone("Samsung Galaxy S6", 1250, "brązowy", "https://cdn2.techadvisor.co.uk/cmsdata/features/3596185/Samsung_Galaxy_S6_Edge_2_800.jpg", "samsung");
var iPhone6s = new Phone("Apple", 2750, "czekoladka", "https://cdn2.techadvisor.co.uk/cmsdata/features/3596185/Samsung_Galaxy_S6_Edge_2_800.jpg", "apple");
var OnePlus = new Phone("chyba Huawei albo inny czort", 2050, "czarny", "https://cdn2.techadvisor.co.uk/cmsdata/features/3596185/Samsung_Galaxy_S6_Edge_2_800.jpg", "one-plus");


Samsung.printInfo();
iPhone6s.printInfo();
OnePlus.printInfo();

/*

Konstrukcja
Zaczniemy od stworzenia funkcji konstruującej nasze telefony (klasy) - jako argumenty podaj markę, cenę oraz kolor. Aby stworzyć taką funkcję, deklarujemy:

function Phone(brand, price, color) {
    //Here we put interior of the constructing function.
}Copy
Twoja "klasa" (czyli nasza forma do tworzenia nowych telefonów) powinna posiadać następujące parametry: brand, price, color. Aby dodać te parametry, musimy skorzystać z this w następujący sposób:

function Phone(brand, price, color) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
}Copy
Funkcje telefonu
Teraz pora na utworzenie metody - korzystając z prototypu, utwórz dla klasy Phone metodę o nazwie printInfo opisującą telefon za pomocą console.log().

Zdanie skonstruowane przez tę metodę powinno wyglądać mniej więcej tak - "The phone brand is (marka), color is (kolor) and the price is (cena).".

Aby to zrobić, tuż pod swoją funkcją konstruującą zadeklaruj następującą funkcję prototypową:

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}Copy
Produkcja telefonów
Klasa gotowa - efekt naszej dotychczasowej pracy powinien wyglądać następująco:

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}Copy
Teraz na jej podstawie utwórz obiekty, które będą przedstawiać następujące modele telefonów:

Samsung Galaxy S6
iPhone 6s
OnePlus One.
Przykładowo utworzenie obiektu dla iPhone 6s na podstawie naszej funkcji konstruującej będzie wyglądało następująco:

var iPhone6S = new Phone("Apple", 2250, "silver");Copy
Teraz przedstawimy w konsoli informacje na temat każdego utworzonego przed chwilą obiektu za pomocą metody printInfo.

Dla naszego nowo utworzonego obiektu iPhone6s, wywołanie metody przedstawiającej telefon dla naszego nowo utworzonego obiektu iPhone6s będzie wyglądało następująco:

iPhone6S.printInfo();Copy
Gotowe! :)

Rozbuduj swoje telefony o dowolne właściwości. W ramach ćwiczenia możesz stworzyć im też dodatkowe funkcjonalności za pomocą prototypów.


*/