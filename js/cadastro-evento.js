// Criar Evento
const btnSubmit = document.querySelector(".btn-primary");
<<<<<<< HEAD
const descriptionSelector = document.querySelector('#descricao');
descriptionSelector.setAttribute("maxlength", "300");
descriptionSelector.setAttribute("style", "resize:none");

btnSubmit.addEventListener("click", () => cadastrarEvento());

//Função que pega o objeto transforma em json e envia para a api
=======

btnSubmit.addEventListener("click", () => cadastrarEvento());


>>>>>>> 04efca4444a07c01d64c888ac3829f43b4ed3f0a
function fazPost(url, corpo) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': "application/json", },
        body: JSON.stringify(corpo),
    })
        .then(() => console.log(JSON.stringify(corpo)))
        .then(() => alert('Evento Cadastrado com Sucesso'))
        .then(() => window.location.href = "admin.html")
        .catch((error) => alert('Não foi possível realizar o cadastro, tente novamente'))

}


<<<<<<< HEAD
//Função que seleciona os inputs, pega a informação em forma de objeto e executa função para fazer post
function cadastrarEvento() {
    event.preventDefault()
    const url = "https://xp41-soundgarden-api.herokuapp.com/events";
    const nameSelector = document.querySelector('#nome').value;
    const attractionsSelector = document.querySelector('#atracoes').value.split(", ");
    const descriptionSelector = document.querySelector('#descricao').value;
    const dateSelector = document.querySelector('#data').value;
    const capacitySelector = document.querySelector('#lotacao').value;

=======


function cadastrarEvento() {
    event.preventDefault()
    const url = "https://xp41-soundgarden-api.herokuapp.com/events";
    let nome = document.querySelector("#nome").value;
    let atracoes = document.querySelector("#atracoes").value.split(", ");
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#data").value;
    let lotacao = document.querySelector("#lotacao").value;
>>>>>>> 04efca4444a07c01d64c888ac3829f43b4ed3f0a


    corpo =
    {
<<<<<<< HEAD
        "name": nameSelector,
        "poster": "https://i.imgur.com/fQHuZuv.png",
        "attractions": attractionsSelector,
        "description": descriptionSelector,
        "scheduled": dateSelector,
        "number_tickets": capacitySelector
=======
        "name": nome,
        "poster": "https://i.imgur.com/fQHuZuv.png",
        "attractions": atracoes,
        "description": descricao,
        "scheduled": data,
        "number_tickets": lotacao
>>>>>>> 04efca4444a07c01d64c888ac3829f43b4ed3f0a
    }
    fazPost(url, corpo);
}
