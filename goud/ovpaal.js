// 1. Gegevens omzetten naar een array met objecten
let passagiers = [
    {
        id: 163821,
        naam: "Leo Daams",
        saldo: 34,
        woonplaats: "Den Bosch"
    },
    {
        id: 145032,
        naam: "Nicole Hops",
        saldo: 18,
        woonplaats: "Maastricht"
    }
];

// 2. Functionaliteiten met beperkte regels code

// A. Nieuwe passagier toevoegen
function voegPassagierToe(id, naam, saldo, woonplaats) {
    passagiers.push({ id, naam, saldo, woonplaats });
}

// B. In- en uitchecken (saldo veranderen)
// We zoeken de passagier op basis van hun ID en passen het saldo aan
function updateSaldo(id, bedrag) {
    let passagier = passagiers.find(p => p.id === id);
    if (passagier) {
        passagier.saldo += bedrag;
        console.log("Saldo van " + passagier.naam + " is nu: " + passagier.saldo);
    }
}

// C. OV-kaart opzeggen (verwijderen uit systeem)
function verwijderPassagier(id) {
    passagiers = passagiers.filter(p => p.id !== id);
}

// D. De lijst met passagiers oproepen
function toonAllePassagiers() {
    console.log("--- Actuele Passagierslijst Bussie ---");
    passagiers.forEach(p => {
        console.log("ID: " + p.id + " | Naam: " + p.naam + " | Saldo: " + p.saldo);
    });
}

// --- TEST DE CODE ---
voegPassagierToe(192837, "Jan Jansen", 25, "Utrecht"); // Nieuwe passagier
updateSaldo(163821, -4); // Leo checkt in, rit kost 4 euro
verwijderPassagier(145032); // Nicole zegt haar kaart op
toonAllePassagiers(); // Toon wie er nog in het systeem staan