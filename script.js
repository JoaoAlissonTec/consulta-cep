let btn_consultar = document.getElementById('consulta')
btn_consultar.addEventListener('click', enviar)
let alert = document.getElementById('alerta')
function enviar() {
    let cep = document.getElementById('cep')
    let log = document.getElementById('logradouro')
    let complemento = document.getElementById('complemento')
    let bairro = document.getElementById('bairro')
    let cidade = document.getElementById('cidade')
    let uf = document.getElementById('uf')
    console.log(cep.value)

    if (cep.value != '' && cep.value != null) {
        alert.innerHTML = ''
        let url = `https://viacep.com.br/ws/${cep.value}/json/`
        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                log.value = data.logradouro
                complemento.value = data.complemento
                bairro.value = data.bairro
                cidade.value = data.localidade
                uf.value = data.uf
            }).catch(function (error) {
                alert.innerHTML = 'CEP não existe'
                console.log(error)
            })
    }else{
        alert.innerHTML = 'Informe um CEP'
    }
}

function alertaDeleta(){
    alert.innerHTML = ''
}