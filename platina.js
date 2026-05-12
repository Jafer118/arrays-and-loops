// Data object
let passagier = {
    naam: "Leo Daams",
    saldo: 34,
    foto: "https://i.pravatar.cc/150?u=leo"
};

// De bus laten bewegen
function rijden() {
    const bus = document.getElementById("bus");
    bus.style.left = "110%";
    
    setTimeout(() => {
        bus.style.left = "-60px";
    }, 3200);
}

// Inchecken met geluid en beeld
function inchecken() {
    document.getElementById("biep").play();
    passagier.saldo -= 4;

    const scherm = document.getElementById("scherm");
    scherm.innerHTML = `
        <div class="kaart">
            <img src="${passagier.foto}">
            <h3>${passagier.naam}</h3>
            <p>Saldo: <strong>€${passagier.saldo}</strong></p>
            <span style="color: #27ae60; font-weight: bold;">Ingecheckt ✅</span>
        </div>
    `;
}