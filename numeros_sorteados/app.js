
	function gerarNumeroAleatorio(){

		let numero1 = document.getElementById('num1').value
		let numero2 = document.getElementById('num2').value

		var roll = []

		let resultado = document.getElementById('resultado')

		numero1 = parseInt(numero1)
		numero2 = parseInt(numero2)

		for (numero1 = numero1; numero1 <= numero2; numero1++) {

			roll.push(numero1)

		}

		resultado.innerHTML = roll[Math.floor(Math.random() * roll.length)]

		if (isNaN(numero1) && isNaN(numero2) || isNaN(numero1) || isNaN(numero2)) {

			resultado.innerHTML = 'Preencha os campos necessários'

		} 

	}