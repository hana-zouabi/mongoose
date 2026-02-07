var Voiture = /** @class */ (function () {
    function Voiture(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    Voiture.prototype.start = function () {
        console.log("Car engine wanted");
    };
    return Voiture;
}());
var maVoiture = new Voiture("Toyota", "Corolla", 2022);
maVoiture.start();
