function clicar(){
    var a = window.document.getElementById('tel')
    var n1 = Number(a.value)
    var link2 = 'wa.me/'
    var s = link2 + n1
    var res = window.document.getElementById('res')
    link1.innerHTML = s
}

var ftr = window.document.getElementById('dev')

ftr.addEventListener('mouseenter', entrar)
ftr.addEventListener('mouseout', sair)

function entrar(){
    ftr.style.color = '#075e54'
}

function sair(){
    ftr.style.color = 'black'
}