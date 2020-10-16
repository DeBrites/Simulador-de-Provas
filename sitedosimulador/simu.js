function capit() {
    var num = document.getElementById('capitulo').value
    var x = 1
    document.getElementById('demo').innerHTML = `<h2>Descreva os capítulos se quiser</h2>`
    while (x <= num) {
        document.getElementById('formulario1').innerHTML += `<section id="div">Quantos exercícios possui o ${x}º capítulo escolhido? <input type="number" name="exercicios" id="exercicio${x}" min="1" max="1000"><fieldset><legend>Seu nível de afinidade com este capítulo</legend><input type="radio" name="dificuldade${x}" id="facil${x}" checked><label for="facil${x}">Fácil</label><input type="radio" name="dificuldade${x}" id="medio${x}"><label for="medio${x}">Médio</label><input type="radio" name="dificuldade${x}" id="dificil${x}"><label for="dificil${x}">Difícil</label></fieldset>`
        x = x + 1
    }
    document.getElementById('formulario1').innerHTML += `<input type="button" value="Confirmar" onclick="exerc()"><input type="button" value="Limpar" onclick="limpa()"><br></section>`
}
function limpe() {
    document.getElementById('formulario1').innerHTML = null
    document.getElementById('formulario2').innerHTML = null
}
function exerc() {
    var num = document.getElementById('capitulo').value
    for (var i = 1; i <= num + 1; i++) {
        var nam = document.getElementById('exercicio' + i).value
        if (document.getElementById('facil' + i).checked) {
            nam = nam / 4
            var x = parseInt(Math.random() * nam)
            while (x == 0) {
                var x = parseInt(Math.random() * nam)
            }
        } else if (document.getElementById('medio' + i).checked) {
            var x = parseInt(Math.random() * nam)
            while (x <= nam / 4 || x >= nam / 1.6) {
                var x = parseInt(Math.random() * nam)
            }
        } else if (document.getElementById('dificil' + i).checked) {
            var x = parseInt(Math.random() * nam)
            while (x <= nam / 1.6) {
                var x = parseInt(Math.random() * nam)
            }
        }
        document.getElementById('formulario2').innerHTML += `Sua ${i}º Questão é a de número ${x} do Capítulo ${i}<br>`
    }
}
function limpa() {
    document.getElementById('formulario2').innerHTML = null
}
