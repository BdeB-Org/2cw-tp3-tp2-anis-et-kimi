//Affectation des éléments.
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

//Déclaration des API.
const cli_ul = document.getElementById("clients");
const curl = "http://localhost:8080/ords/hr3/clients/";

const des_ul = document.getElementById("destinations");
const durl = "http://localhost:8080/ords/hr3/destinations/";

const res_ul = document.getElementById("reservations");
const rurl = "http://localhost:8080/ords/hr3/reservations/";

const pai_ul = document.getElementById("paiements");
const purl = "http://localhost:8080/ords/hr3/paiements/";

//Affichage des données des quatre tables sur le site web.
fetch(curl)
    .then((resp) => resp.json())
    .then(function (data) {
        let clients = data.items;
        clients.forEach(function (client) {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${"Nom : " + client.nom} <br> ${"Prénom : " + client.prénom} <br> ${"Date de naissance : " + client.date_de_naissance} <br> ${"E-mail : " + client.email} <br><br>`;
            append(li, span);
            append(cli_ul, li);
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

fetch(durl)
    .then((resp) => resp.json())
    .then(function (data) {
        let destinations = data.items;
        destinations.forEach(function (destination) {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${"ID : " + destination.id_destination} <br> ${"Pays : " + destination.pays} <br> ${"Ville : " + destination.ville} <br> ${"Description : " + destination.description} <br><br>`;
            append(li, span);
            append(des_ul, li);
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

fetch(rurl)
    .then((resp) => resp.json())
    .then(function (data) {
        let reservations = data.items;
        reservations.forEach(function (reservation) {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${"ID : " + reservation.id_réservation} <br> ${"Date de réservation : " + reservation.date_de_réservation} <br> ${"Date de départ : " + reservation.date_de_départ} <br> ${"Date de retour : " + reservation.date_de_retour} <br> ${"ID du client : " + reservation.clients_id_client} <br> ${"ID de destination : " + reservation.id_destination} <br><br>`;
            append(li, span);
            append(res_ul, li);
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

fetch(purl)
    .then((resp) => resp.json())
    .then(function (data) {
        let paiements = data.items;
        paiements.forEach(function (paiement) {
            let li = createNode("li"),
                span = createNode("span");
            span.innerHTML = `${"ID : " + paiement.id_paiement} <br> ${" ID du client : " + paiement.id_client} <br> ${"Montant : " + paiement.montant}$ <br><br>`;
            append(li, span);
            append(pai_ul, li);
        });
    })
    .catch(function (error) {
        console.log(JSON.stringify(error));
    });

    var map = L.map('map').setView([45.5017, -73.5673], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function showMap(lat, lng) {
        map.setView([lat, lng], 13);
    }