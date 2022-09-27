
	function cor(){

	let aleatoriedade = Math.floor(Math.random() * 3)

	if (aleatoriedade == 0) {

		return 'cor1'

	} else if (aleatoriedade == 1) {

		return 'cor2'

	} else if (aleatoriedade == 2) {

		return 'cor3'

	}

	}

	setInterval(function (){

		let elemento = document.getElementById('mudanca')

		let elemento2 = document.getElementById('project')

			cor()

		elemento.className = "row d-flex justify-content-center" + ' ' + cor()

		elemento2.className = cor()

		}, 4000)
