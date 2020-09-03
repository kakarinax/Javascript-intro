
function clicou(){
	document.getElementById("agradecimento").innerHTML = "Obrigada por clicar";
	//alert("Obrigada por clicar!")
}

function redirecionar(){
	window.open("https://www.google.com/");
	//window.location.href = "https://www.google.com/";
}

function trocar(elemento){
	elemento.innerHTML = "Passou eim!";
	//alert("trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui";
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("Página carregada");
}

function funcaoChange (elemento){
	console.log(elemento.value);
}

/*
var validar;
function validaIdade(idade){
	validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
	return n1 + n2;
}
*/

//alert(soma(5,10));


/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay()+1);
alert(d.getHours()+1);
alert(d.Minutes()+1);
*/
/*
var count;
for (count=0; count <= 5; count++){
	alert(count)
}
*/

/*
var count = 0;
while (count < 5){
	console.log(count);
	count++;
}
*/
/*
var idade = prompt("Qual sua idade?")
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxo"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelho"};
console.log(fruta.nome);
*/

/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
//lista.pop("pera");

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" "));
*/


/* var nome = "Karina Almeida";
var idade = 26;
var idade2 = 10;
var frase = "Alemanha é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");	
//alert(idade + idade2);

console.log (nome);
console.log (idade);
console.log(frase.replace("Alemanha", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLoweCase()); */
