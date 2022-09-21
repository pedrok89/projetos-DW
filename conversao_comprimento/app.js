
	$(function() {
		$('#valor1').attr('value', 1)
	})

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

		return valores

	}

	function calculo(valores){

		let calculo = 0
		let calculodm = 0

		if (valores.valor1 === '') {

			valores.resultado.innerHTML = 'Preencha o campo corretamente!'

		} else

		 if (valores.campo1 == 'km' && valores.campo2 == 'km' ||
		 	valores.campo1 == 'm' && valores.campo2 == 'm' ||
		 	valores.campo1 == 'dm' && valores.campo2 == 'dm' ||
		 	valores.campo1 == 'cm' && valores.campo2 == 'cm' ||
		 	valores.campo1 == 'mm' && valores.campo2 == 'mm' ||
		 	valores.campo1 == 'um' && valores.campo2 == 'um' ||
		 	valores.campo1 == 'nm' && valores.campo2 == 'nm' ||
		 	valores.campo1 == 'a' && valores.campo2 == 'a') {

			valores.resultado.innerHTML = valores.valor1 + ' ' + valores.campo1

		} else
		
		if (valores.campo1 == 'km' && valores.campo2 == 'm') {

			calculo = valores.valor1 * 1000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2

		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * 10000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * 100000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * 1000000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'um') {

			calculo = valores.valor1 * 1000000000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 12)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		} else

		if (valores.campo1 == 'km' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 13)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		} else

		if (valores.campo1 == 'm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -3)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * 10

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * 100

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * 1000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'um') {

			calculo = valores.valor1 * Math.pow(10, 6)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 9)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'm' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 10)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}

		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -4)

			valores.resultado.innerHTML = 'É igual a ' + calculo.toFixed(4) + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -1)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * 10

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * 100

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'um') {

			calculo = valores.valor1 * 100000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 8)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'dm' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 9)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}
		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -5)

			valores.resultado.innerHTML = 'É igual a ' + calculo.toFixed(5) + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -2)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * Math.pow(10, -1)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * 10

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'um') {

			calculo = valores.valor1 * 10000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'cm' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 7)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else
			
		if (valores.campo1 == 'cm' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 8)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}

		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -6)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -3)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * Math.pow(10, -2)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * Math.pow(10, -1)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'um') {

			calculo = valores.valor1 * 1000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'mm' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, 6)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else
			
		if (valores.campo1 == 'mm' && valores.campo2 == 'a') {

			calculo = valores.valor1 * Math.pow(10, 7)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}

		else

		if (valores.campo1 == 'um' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -9)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'um' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -6)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'um' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * Math.pow(10, -5)

			valores.resultado.innerHTML = 'É igual a ' + calculo.toFixed(5) + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'um' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * Math.pow(10, -4)

			valores.resultado.innerHTML = 'É igual a ' + calculo.toFixed(4) + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'um' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * Math.pow(10, -3)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'um' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * 1000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else
			
		if (valores.campo1 == 'um' && valores.campo2 == 'a') {

			calculo = valores.valor1 * 10000

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}

		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -12)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -9)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * Math.pow(10, -8)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * Math.pow(10, -7)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * Math.pow(10, -6)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'nm' && valores.campo2 == 'um') {

			calculo = valores.valor1 * Math.pow(10, -3)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else
			
		if (valores.campo1 == 'nm' && valores.campo2 == 'a') {

			calculo = valores.valor1 * 10

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' Å'
			
		}
	
		else

		if (valores.campo1 == 'a' && valores.campo2 == 'km') {

			calculo = valores.valor1 * Math.pow(10, -13)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'a' && valores.campo2 == 'm') {

			calculo = valores.valor1 * Math.pow(10, -10)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'a' && valores.campo2 == 'dm') {

			calculo = valores.valor1 * Math.pow(10, -9)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'a' && valores.campo2 == 'cm') {

			calculo = valores.valor1 * Math.pow(10, -8)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

		else

		if (valores.campo1 == 'a' && valores.campo2 == 'mm') {

			calculo = valores.valor1 * Math.pow(10, -7)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}
		else

		if (valores.campo1 == 'a' && valores.campo2 == 'um') {

			calculo = valores.valor1 * Math.pow(10, -4)

			valores.resultado.innerHTML = 'É igual a ' + calculo.toFixed(4) + ' ' + valores.campo2
			
		}
		
		else 

		if (valores.campo1 == 'a' && valores.campo2 == 'nm') {

			calculo = valores.valor1 * Math.pow(10, -1)

			valores.resultado.innerHTML = 'É igual a ' + calculo + ' ' + valores.campo2
			
		}

	}

	function converterselect(){

		let valores = this.calcularcomprimento()

		if (valores.campo1 != valores.campo2) {

			document.getElementById('campo1').value = valores.campo2

			document.getElementById('campo2').value = valores.campo1

		}

	}
	


