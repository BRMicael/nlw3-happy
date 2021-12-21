/*O mapa dessa página é basicamente igual ao da outra mas ele não tem popup e é fixo */

const options = {
    dragging: false, /*"dragging" é mover o mapa para os lados com o ponteiro */
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false /*"zoomControl" faz desaparecer os botões de zoom no canto superior do mapa */
}

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng



// create map
const map = L.map('mapid', options).setView([lat, lng], 15);
/*L é um objeto criado por essa biblioteca */
/*array com latitude e longitude, e o outro valor é o zoom*/

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);
/*tileLayer é uma camada */

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68], /*width e hight */
    iconAnchor: [29, 68], /*local da marcação */
    popupAnchor: [170, 2]
})



// create and add marker
L
.marker([lat, lng], {icon:icon})// ou só icon pq a propriedade e o valor tem o mesmo nome
.addTo(map)

/* image gallery */

function selectImage(event) { /*O "event" é o evento de click */
    const button = event.currentTarget; /*currentTarget oq foi clicado (o elemento) */
    
    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button") /*classe images inclui as 6 imagens pequenas */
    buttons.forEach(removeActiveClass) /*"forEach" para cada botão */ // "() => {}" isso é uma forma de declarar uma função, e é chamada de arrow function

    function removeActiveClass(button) { /*esse button não é o mesmo do "const" */
        button.classList.remove("active"); /*classList se refere as classes. (meio óbvio) */
    }

    // selecionar a imagem clicada
    const image = button.children[0]; /*button == elemento clicado, children[0] == primeiro filho desse elemento, ou seja o img */
    const imageContainer = document.querySelector(".orphanage-details > img"); /*">" o primeiro*/


    // atualizar o container da imagem
    imageContainer.src = image.src;

    // adicionar a classe .active para este botão
    //console.log(button.children)

    console.log(buttons.currentTarget);
    button.classList.add('active');
}

