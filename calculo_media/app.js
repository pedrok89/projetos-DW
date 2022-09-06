
	function calcularNota(){

		let nota1 = document.getElementById('nota1').value
		let nota2 = document.getElementById('nota2').value
		let nota3 = document.getElementById('nota3').value
		let nota4 = document.getElementById('nota4').value

		let resultado = document.getElementById('resultado')

		if (nota1 == '' && nota2 == '' && nota3 == '') {

			resultado.innerHTML = 'Preencha no minimo 2 campos, o cálculo é realizado somente com relação aos campos preenchidos'

		} else if (nota2 == '' && nota3 == '' && nota4 == '') {

			resultado.innerHTML = 'Preencha no minimo 2 campos, o cálculo é realizado somente com relação aos campos preenchidos'

		} else if (nota1 == '' && nota2 == '' && nota4 == '') {

			resultado.innerHTML = 'Preencha no minimo 2 campos, o cálculo é realizado somente com relação aos campos preenchidos'

		} else if (nota1 == '' && nota3 == '' && nota4 == '') {

			resultado.innerHTML = 'Preencha no minimo 2 campos, o cálculo é realizado somente com relação aos campos preenchidos'

		}

		else

		if (nota3 == '' && nota4 == '') {

		let media1 = (parseFloat(nota1) + parseFloat(nota2)) / 2

		media1 = parseFloat(media1)

		resultado.innerHTML = 'A média é: ' + media1.toFixed(1)

		}

		else

		if (nota1 == '' && nota4 == '') {

		let media1x = (parseFloat(nota2) + parseFloat(nota3)) / 2

		media1x = parseFloat(media1x)

		resultado.innerHTML = 'A média é: ' + media1x.toFixed(1)

		}

		 else

		 if (nota2 == '' && nota4 == '') {

		let media2 = (parseFloat(nota1) + parseFloat(nota3)) / 2

		media2 = parseFloat(media2)

		resultado.innerHTML = 'A média é: ' + media2.toFixed(1)

		}

		else

		 if (nota1 == '' && nota3 == '') {

		let media2x = (parseFloat(nota2) + parseFloat(nota4)) / 2

		media2x = parseFloat(media2x)

		resultado.innerHTML = 'A média é: ' + media2x.toFixed(1)

		}

		 else

		 if (nota2 == '' && nota3 == '') {

		let media3 = (parseFloat(nota1) + parseFloat(nota4)) / 2

		media3 = parseFloat(media3)

		resultado.innerHTML = 'A média é: ' + media3.toFixed(1)

		} 

		else

		 if (nota1 == '' && nota2 == '') {

		let media3x = (parseFloat(nota3) + parseFloat(nota4)) / 2

		media3x = parseFloat(media3x)

		resultado.innerHTML = 'A média é: ' + media3x.toFixed(1)

		}
		 else

		if (nota1 == '') {

		let media4x = (parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 3

		media4x = parseFloat(media4x)

		resultado.innerHTML = 'A média é: ' + media4x.toFixed(1)

		} else

		 if (nota4 == '') {

		let media4 = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3

		media4 = parseFloat(media4)

		resultado.innerHTML = 'A média é: ' + media4.toFixed(1)

		} else

		 if (nota3 == '') {

		let media5 = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota4)) / 3

		media5 = parseFloat(media5)

		resultado.innerHTML = 'A média é: ' + media5.toFixed(1)

		} else

		 if (nota2 == '') {

		let media5x = (parseFloat(nota1) + parseFloat(nota3) + parseFloat(nota4)) / 3

		media5x = parseFloat(media5x)

		resultado.innerHTML = 'A média é: ' + media5x.toFixed(1)

		}

		 else {

		let mediaTotal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4

		mediaTotal = parseFloat(mediaTotal)

		resultado.innerHTML = 'A média é: ' + mediaTotal.toFixed(1)

		} 

		document.getElementById('nota1').value = ''
		document.getElementById('nota2').value = ''
		document.getElementById('nota3').value = ''
		document.getElementById('nota4').value = ''
	}
