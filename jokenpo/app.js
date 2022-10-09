
	 let pedra = document.getElementById('1')
	 let papel = document.getElementById('2')
	 let tesoura = document.getElementById('3')

	 function estruturaRandomica(){

	 	let numero =  Math.floor(Math.random() * 3)

	 	let opcoes = ['pedra', 'papel', 'tesoura']

	 	opcaoApp = opcoes[numero]

	 	return opcaoApp
	 	
	 }

	 pedra.addEventListener('click', (e) => {

	 	let num = estruturaRandomica()

	 	if (num === 'pedra') {

	 		document.getElementById('padrao').src = 'pedra.png'

	 		document.getElementById('resultado').innerHTML = 'Empatou!'

	 	} else if (num === 'papel') {

	 		document.getElementById('padrao').src = 'papel.png'

	 		document.getElementById('resultado').innerHTML = 'Você perdeu!'

	 	} else if (num === 'tesoura') {

	 		document.getElementById('padrao').src = 'tesoura.png'

	 		document.getElementById('resultado').innerHTML = 'Você ganhou!'

	 	}

	 	document.getElementById('1').classList.add('borda')
	 	document.getElementById('2').classList.remove('borda')
	 	document.getElementById('3').classList.remove('borda')

	 })

	 papel.addEventListener('click', (e) => {

	 	let num = estruturaRandomica()

	 	if (num === 'pedra') {

	 		document.getElementById('padrao').src = 'pedra.png'

	 		document.getElementById('resultado').innerHTML = 'Você ganhou!'

	 	} else if (num === 'papel') {

	 		document.getElementById('padrao').src = 'papel.png'

	 		document.getElementById('resultado').innerHTML = 'Empatou!'

	 	} else if (num === 'tesoura') {

	 		document.getElementById('padrao').src = 'tesoura.png'

	 		document.getElementById('resultado').innerHTML = 'Você perdeu!'

	 	}

	 	document.getElementById('1').classList.remove('borda')
	 	document.getElementById('2').classList.add('borda')
	 	document.getElementById('3').classList.remove('borda')

	 })

	 tesoura.addEventListener('click', (e) => {

	 	let num = estruturaRandomica()

	 	if (num === 'pedra') {

	 		document.getElementById('padrao').src = 'pedra.png'

	 		document.getElementById('resultado').innerHTML = 'Você perdeu!'

	 	} else if (num === 'papel') {

	 		document.getElementById('padrao').src = 'papel.png'

	 		document.getElementById('resultado').innerHTML = 'Você ganhou!'

	 	} else if (num === 'tesoura') {

	 		document.getElementById('padrao').src = 'tesoura.png'

	 		document.getElementById('resultado').innerHTML = 'Empatou!'

	 	}

	 	document.getElementById('1').classList.remove('borda')
	 	document.getElementById('2').classList.remove('borda')
	 	document.getElementById('3').classList.add('borda')

	 })

