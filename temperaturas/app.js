
	function calcular(){

		let temperatura1 = document.getElementById('campoTemperatura').value

		let escala1 = document.getElementById('campoEscala1').value

		let escala2 = document.getElementById('campoEscala2').value

		let resultado = document.getElementById('resultado')

		temperatura1 = parseFloat(temperatura1)
				
		let temperatura2 = 0

		temperatura2 = parseFloat(temperatura2)

		if(escala1 == "C"){
			if(escala2 =="K"){
				temperatura2 = temperatura1 + 273;
			}else{
				temperatura2 = (temperatura1 * 1.8) + 32;
			}
		}

		if(escala1 == "K"){
			if(escala2 == "C"){
				temperatura2 = temperatura1 - 273;
			}else{
				temperatura2 = (temperatura1 - 273) * 1.8 + 32;
			}
		}

		if(escala1 == "F"){
			if(escala2 == "C"){
				temperatura2 = (temperatura1 - 32)/1.8;
			}else{
				temperatura2 = (temperatura1 - 32) * 5 / 9 + 273;
			}				
		}

		temperatura2 = Math.round(temperatura2)

		resultado.innerHTML = temperatura1 + ' ° ' + escala1 + ' equivalem a ' + temperatura2 + ' ° ' + escala2

		if (escala1 === escala2) {


			resultado.innerHTML = 'Escalas iguais. Tente novamente!'

		}
		
	}
