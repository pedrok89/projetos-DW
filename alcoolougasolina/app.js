

	function calcularImc(){

		let alcool = document.getElementById('alcool').value
		let gasolina = document.getElementById('gasolina').value

		let resultado = document.getElementById('resultado')

			if (calculo() == 0){

				alcool.replace(',', '.')
				gasolina.replace(',', '.')

				let calculo = alcool / gasolina

				if (calculo >= 0.7) {

					resultado.innerHTML = 'melhor utilizar gasolina'

				} else {

					resultado.innerHTML = 'melhor utilizar alcool'

				}

			}

			if (calculo() == 1 || calculo() == 2) {

					resultado.innerHTML = 'preencha os campos do alcool e gasolina corretamente!'

				}

			document.getElementById('alcool').value = ''
			document.getElementById('gasolina').value = ''

	}

	function calculo(){

		let alcool = document.getElementById('alcool').value
		let gasolina = document.getElementById('gasolina').value

		let campo = 0

		if (alcool === '' || alcool === null) {

			campo = 1
	
		} else if (gasolina === '' || gasolina === null) {

			campo = 2
		}

		return campo

	}