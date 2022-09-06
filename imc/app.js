	
	let altura = 0
	let peso = 0

	function CalculoImc(){

		let altura = document.getElementById('altura').value
		let peso = document.getElementById('peso').value

		let imc = parseFloat(peso / (altura * altura))

		imc = imc.toFixed(2)

		imc.replace(',', '.')

		return imc
	}

	function calculoif(){

		if (sexo() === 'M') {

		if (CalculoImc() < 20.7) {

			return 'abaixo do peso'

		} else if (CalculoImc() > 20.7 && CalculoImc() < 26.4) {

			return 'com peso ideal parabéns!'

		} else if (CalculoImc() > 26.4 && CalculoImc() < 27.8) {

			return 'levemente acima do peso'

		} else if (CalculoImc() > 27.8 && CalculoImc() < 31.1) {

			return 'acima do peso ideal'

		} else if (CalculoImc() > 31.1) {

			return 'obeso'

		}

		}

		if (sexo() === 'F') {

		if (CalculoImc() < 19.1) {

			return 'abaixo do peso'

		} else if (CalculoImc() > 19.1 && CalculoImc() < 25.8) {

			return 'com peso ideal parabéns!'

		} else if (CalculoImc() > 25.8 && CalculoImc() < 27.3) {

			return 'levemente acima do peso'

		} else if (CalculoImc() > 27.3 && CalculoImc() < 32.3) {

			return 'acima do peso ideal'

		} else if (CalculoImc() > 32.3) {

			return 'obeso'

		}

		}

	}

	function pesoIdealMinimo(){

		let altura = document.getElementById('altura').value
		let peso = document.getElementById('peso').value

		let imcminimohomem = (20.7 * (altura * altura))

		imcminimohomem = imcminimohomem.toFixed(2)

		let imcminimomulher = (19.1 * (altura * altura))

		imcminimomulher = imcminimomulher.toFixed(2)

		if (sexo() === 'M') {

			return imcminimohomem

		} else { 

			return imcminimomulher
		}

	}

	function pesoIdealMaximo(){

		let altura = document.getElementById('altura').value
		let peso = document.getElementById('peso').value

		let imcmaximohomem = (26.4 * (altura * altura))

		imcmaximohomem = imcmaximohomem.toFixed(2)

		let imcmaximomulher = (25.8 * (altura * altura))

		imcmaximomulher = imcmaximomulher.toFixed(2)

		if (sexo() === 'M') {

			return imcmaximohomem
				
		} else { 

			return imcmaximomulher
		}

	}

	function calcularImc(){

		let resultado = document.getElementById('resultado')

		resultado.innerHTML = 'Seu Imc é ' + CalculoImc() + ' e você está ' + calculoif() + '<br>' + 
		'para seu Imc ser ideal seu peso deve estar entre ' + pesoIdealMinimo() + ' kg ' + ' e ' + pesoIdealMaximo() + ' kg'

		if (CalculoImc() === NaN || calculoif() === undefined) {

			resultado.innerHTML = 'escolha o sexo e verifique se todos os campos foram preenchidos corretamente!'

		}

		document.getElementById('altura').value = ''
		document.getElementById('peso').value = ''

	}

	function sexo(){

		let radios = document.getElementsByName("theradio")

		for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            return radios[i].value

        }
    }

	}