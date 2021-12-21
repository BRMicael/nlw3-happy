
// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);
/*L é um objeto criado por essa biblioteca */
/*array com latitude e longitude, e o outro valor é o zoom*/

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68], /*width e hight */
    iconAnchor: [29, 68], /*local da marcação */
    popupAnchor: [170, 2]
})


function addMarker({id, name, lat, lng} /*desestruturação*/) {
    

    // create pop-up overlay
    const popup = L.popup({ /*pop-up é o balãozinho com as informações do orfanato */
    closeButton: false, /*botão "x" para fechar o balão */
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg" </a>`)
    // "setContent" botão para a outra página 

    // create and add marker
    L.marker([lat,lng], {icon:icon})// ou só icon pq a propriedade e o valor tem o mesmo nome
    .addTo(map)
    .bindPopup(popup)

    /*tileLayer é uma camada */
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
     const orphanage = {
         id: span.dataset.id,
         name: span.dataset.name,
         lat: span.dataset.lat,
         lng: span.dataset.lng
     }

     addMarker(orphanage)
})


