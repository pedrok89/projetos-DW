		
		var altura = 0
		var largura = 0
		var vidas = 1
		tempo = 15

		var tempoMosquito = 1500

		var nivel = window.location.search

		nivel = nivel.replace('?', '')

		if (nivel === 'normal') {

			tempoMosquito = 1500

		} else if (nivel === 'dificil') {

			tempoMosquito = 1000
			
		} else if (nivel === 'checkynorrys') {

			tempoMosquito = 700
			
		}

	function palcoDoJogo(){

		altura = window.innerHeight
		largura = window.innerWidth

		console.log(altura, largura)

	}

	palcoDoJogo()

	var cronometro = setInterval(function(){

		tempo--

		if (tempo < 0) {

			clearInterval(cronometro)
			clearInterval(criarMosca)

			window.location.href = 'vitoria.html'

		} else {

		document.getElementById('cronometro').innerHTML = tempo

		}


		}, 1000)

	function estruturaRandomica(){

		positionX = Math.floor(Math.random() * largura) - 90
		positionY = Math.floor(Math.random() * altura) - 90

		if (document.getElementById('mosquito')) {

			document.getElementById('mosquito').remove()

				if (vidas > 3) {

					window.location.href = 'fim_de_jogo.html'

				} else {

				document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

				vidas++

				}

			}

		positionX = positionX < 0 ? 0 : positionX
		positionY = positionY < 0 ? 0 : positionY

		console.log(positionX, positionY)

		var mosquito = document.createElement('img')

		mosquito.src = 'imagens/mosca.png'
		mosquito.className = tamanhoMosca() + ' ' + lado()
		mosquito.style.left = positionX + 'px'
		mosquito.style.top = positionY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		mosquito.onclick = function(){

			this.remove()

		}

		document.body.appendChild(mosquito)

	}

	function tamanhoMosca(){

		var classe = Math.floor(Math.random() * 3)

		if (classe === 0) {

			return 'mosquito1'

		} else if (classe === 1) {

			return 'mosquito2'

		} else if (classe === 2) {

			return 'mosquito3'

		}

	}

	function lado(){

		var classe = Math.floor(Math.random() * 2)

		if (classe === 0) {

			return 'ladoA'

		} else if (classe === 1) {

			return 'ladoB'

		}

	}


