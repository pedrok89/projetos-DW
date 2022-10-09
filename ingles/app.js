
	
	document.getElementById('area2').style.display = 'none'

	document.getElementById('numeros').addEventListener('click', () => {

		document.getElementById('area2').style.display = 'block'

		document.getElementById('area1').style.display = 'none'

	})

	document.getElementById('bixos').addEventListener('click', () => {

		document.getElementById('area1').style.display = 'block'

		document.getElementById('area2').style.display = 'none'

	})

	document.getElementById('cao').addEventListener('click', () => {

		var audio = new Audio('audios/dog.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('gato').addEventListener('click', () => {

		var audio = new Audio('audios/cat.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('leao').addEventListener('click', () => {

		var audio = new Audio('audios/lion.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('macaco').addEventListener('click', () => {

		var audio = new Audio('audios/monkey.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('ovelha').addEventListener('click', () => {

		var audio = new Audio('audios/sheep.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('vaca').addEventListener('click', () => {

		var audio = new Audio('audios/cow.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	//numeros

	document.getElementById('um').addEventListener('click', () => {

		var audio = new Audio('audios/one.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('dois').addEventListener('click', () => {

		var audio = new Audio('audios/two.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('tres').addEventListener('click', () => {

		var audio = new Audio('audios/three.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('quatro').addEventListener('click', () => {

		var audio = new Audio('audios/four.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('cinco').addEventListener('click', () => {

		var audio = new Audio('audios/five.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})

	document.getElementById('seis').addEventListener('click', () => {

		var audio = new Audio('audios/six.mp3');
		audio.addEventListener('canplaythrough', function() {
		  audio.play();
		});

	})



	


	