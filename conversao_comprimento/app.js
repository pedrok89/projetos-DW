	
	class Valores{

	constructor(campo1, campo2, resultado, valor1){

		this.campo1 = campo1
		this.campo2 = campo2
		this.resultado = resultado
		this.valor1 = valor1

	}

	}
	
	function calcularcomprimento(){

		let campo1 = document.getElementById('campo1').value

		let campo2 = document.getElementById('campo2').value

		let resultado = document.getElementById('resultado')

		let valor1 = document.getElementById('valor1').value

		let valores = new Valores(campo1, campo2, resultado, valor1)

		calculo(valores)

	}

	function calculo(valores){

		let calculo = 0

		if (valores.valor1 === '') {

			valores.resultado.innerHTML = 'Preencha o campo corretamente!'

		} else

		 if (valores.campo1 == 'km' && valores.campo2 == 'km') {

			valores.resultado.innerHTML = valores.valor1 + ' km'

		} else
		
		if (valores.campo1 == 'km' && valores.campo2 == 'm') {

			calculo = valores.valor1 * 1000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' m'

		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * 10000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' dm'
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * 100000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' cm'
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * 1000000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' mm'
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'um') {

			calculo = valores.valor1 * 1000000000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' um'
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 12)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' nm'
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 13)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}

		if (valores.campo1 == 'm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -3)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' km'
			
		}

		console.log(valores)

	}
	


