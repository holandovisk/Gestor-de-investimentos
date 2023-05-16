document.querySelector("#salvar").addEventListener("click", cadastrar)


let lista_tarefas = []


window.addEventListener("load", () => {
  lista_tarefas = JSON.parse(localStorage.getItem("lista_tarefas")) || []
  lista_tarefas.forEach((tarefa)=> {
    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
  })
  
})

function cadastrar() {
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))
    let titulo = document.querySelector("#titulo").value
    let descricao = document.querySelector("#descricao").value
    let pontos = document.querySelector("#pontos").value
    let categoria = document.querySelector("#categoria").value
    let cota = document.querySelector("#cota").value
    let qtd = document.querySelector("#qtd").value
    const tarefa = {
        titulo,
        descricao,
        pontos,
        categoria,
        cota,
        qtd,
    }
    if (tarefa.titulo.length == 0 ){
      document.querySelector("#titulo").classList.add("is-invalid")
      return
    }
    lista_tarefas.push(tarefa)
    document.querySelector("#tarefas").innerHTML += gerarCard(tarefa)
    document.querySelector("#titulo").value=""
    document.querySelector("#descricao").value=""
    localStorage.setItem("lista_tarefas", JSON.stringify(lista_tarefas))
    modal.hide()
}

function apagar(botao){
  botao.parentNode.parentNode.parentNode.remove()
}
function gerarCard(tarefa) {
    return `<div class="col-12 col-md-6 col-lg-3">
    <div class="card">
    <div class="card-header">
      ${tarefa.titulo}
    </div>
    <div class="card-body">
      <p class="card-text"> Data: ${tarefa.descricao}</p>
      <p>
        <span class="badge text-bg-warning">${tarefa.categoria}</span>
      </p>
      <p> Valor investido: R$${tarefa.pontos}</p>
      <p> Valor da cota: R$${tarefa.cota} </p>
      <p> Quantidade de cotas ${tarefa.qtd} cota(s) </p>
      <a href="#" class="btn btn-success">
        <i class="bi bi-check-lg"></i>
      </a>
      <a href="#" onClick='apagar(this)' class="btn btn-danger">
        <i class="bi bi-x-circle"></i>
      </a>
    </div>
  </div>
  </div>`
}