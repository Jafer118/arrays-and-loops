// Functie om de lijst te tonen (Programmeertip: Herbruikbare code)
function toonPassagiers(lijst) {
    for (let i = 0; i < lijst.length; i++) {
        console.log(lijst[i]);
    }
}

// --- Opdracht 1 ---
// Array met 10 namen aanmaken en tonen met een for-loop
let passagiers = [
    "Jan", 
    "Piet", 
    "Klaas", 
    "Truus", 
    "Miep", 
    "Henk", 
    "Ingrid", 
    "Mo", 
    "Sam", 
    "Lotte"
];
console.log("Stap 1: De startlijst (10 mensen):");
toonPassagiers(passagiers);

// --- Opdracht 2 ---
// Iemand stapt in: naam toevoegen met .push() en tonen
passagiers.push("Kevin");
console.log("\nStap 2: Kevin is ingestapt:");
toonPassagiers(passagiers);

// --- Opdracht 3 ---
// Vijfde persoon stapt uit: verwijderen met .splice()
// Index 4 is de vijfde persoon in de lijst
passagiers.splice(4, 1);
console.log("\nStap 3: De vijfde persoon is uitgestapt:");
toonPassagiers(passagiers);

// --- Opdracht 4 ---
// De 'barrel roll': array shuffelen en tonen
passagiers.sort(function() { 
    return 0.5 - Math.random(); 
});
console.log("\nStap 4: Na de 'barrel roll' (nieuwe volgorde):");
toonPassagiers(passagiers);

// --- Opdracht 5 ---
// Iedereen stapt één voor één uit met een while-loop
console.log("\nStap 5: Eindhalte bereikt, iedereen stapt uit:");

while (passagiers.length > 0) {
    // .pop() verwijdert de laatste persoon uit de array
    let persoonDieUitstapt = passagiers.pop();
    console.log(persoonDieUitstapt + " stapt uit de bus.");
    console.log("Passagiers over in de bus: " + passagiers.length);
}

console.log("\nDe bus is nu leeg.");