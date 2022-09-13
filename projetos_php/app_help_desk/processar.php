<?php

	session_start();

	$usuario_autenticado = false;

	$usuario_app = array(

		array('email' => 'pedro@teste.com', 'senha' => '1234'),
		array('email' => 'pedro123@gmail.com', 'senha' => '1234'),

	);

	foreach ($usuario_app as $user) {

		if ($_POST['email'] == $user['email'] && $_POST['senha'] == $user['senha']) {

			$usuario_autenticado = true;

		}

	}

	if ($usuario_autenticado) {

		echo "Usuário Autenticado";

		$_SESSION['autenticado'] = 'SIM';

		header('Location: home.php');


	} else {

		header('Location: index.php?login=erro');

		$_SESSION['autenticado'] = 'NAO';

	}

?>