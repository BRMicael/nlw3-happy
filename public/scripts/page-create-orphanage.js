// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68], /*width e hight */
    iconAnchor: [29, 68], /*local da marcação */
})


let marker; /*let permite que o valor seja alterado, ao contrário do const */

// create and add marker 

map.on('click', (event) => { // event reposavel pela altitude e longitude
    //console.log(event);
    const lat = event.latlng.lat; //latitude
    const lng = event.latlng.lng; //longitude

    document.querySelector('[name=lat]').value = lat;/**para passar os valores pros input e no final ficar na url */
    document.querySelector('[name=lng]').value = lng;


    // remover icon
    marker && map.removeLayer(marker); /*se houver um valor no marker -> map.removeLayer */

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})


// adicionar o campo de fotos

function addPhotoField() {
    //console.log('photo')

    //pegar o container de fotos #images
    const container = document.querySelector('#images')


    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')


    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)/*se for verdadeiro ele vai copiar
    tudo que tem dentro desse campo, se for falso ele vai copiar somente as tags */


    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return; // se o campo for vazio, execute o return (executar o return faz com que a função acabe aqui)
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value ="";

    // adicionar o clone ao container de #images 
    container.appendChild(newFieldContainer);       
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    //console.log(fieldsContainer.length)

    if(fieldsContainer.length <= 1){

        //limpar o valor do campo
        span.parentNode.children[0].value = ""; /*os filhos do .new-upload são o input e e o span, no caso eu quero que pegue o primeiro */
        return; // se houver apenas um container pare a função aqui. (pq na aplicação não será permitido excluir o container se houver apenas um)
    }

    // deletor o campo

    //console.log(span.parentNode);
    span.parentNode.remove(span); /*"parentNode" o pai do span */

}




// selecionar sim ou não
function toggleSelect(event) {

    // retirar a class active dos botões
    document.querySelectorAll('.button-select button') // a linha de baixo é continuação desse linha
    .forEach(function(button) { // forEach para executar a função para os dois botões
        button.classList.remove('active')
    })

    /* A função acima pode ser simplificda
        .forEach(button =>                            // como só há um argumento o "button" é possível tirar os ()
        button.classList.remove('active'))            // como só há um valor é possível tirar as {}.
    */

    
    // colocar a class active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')


    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name ="open_on_weekends"]')

    input.value = button.dataset.value // o value do meu input agora vai ter mesmo do valor do value do meu button

}