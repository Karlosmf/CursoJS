class Argentina {
    constructor(capital = "", clima = "", region = "", poblacion = 0) {
        this.capital = capital;
        this.clima = clima;
        this.region = region;
        this.poblacion = parseInt(poblacion);
        
    }
adhesionRigi(){ 
    console.log("Aumento 10%")
    
}
}
const santaFe = new Argentina("Santa Fe", "templado", "sudamerica", 15000000);
const argentina = new Argentina("Buenos Aires", "caluroso", "sudamerica", 15000000);
santaFe.adhesionRigi();
