interface Vehicule {
  marque: string;
  modele: string;
  annee: number;
  start(): void;
}

class Voiture implements Vehicule {
  marque: string;
  modele: string;
  annee: number;

  constructor(marque: string, modele: string, annee: number) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
  }

  start(): void {
    console.log("Car engine wanted");
  }
}

const maVoiture = new Voiture("Toyota", "Corolla", 2022);
maVoiture.start();
