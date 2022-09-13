<?php

	require "./bibliotecas/PHPMailer/PHPMailer.php";
	require "./bibliotecas/PHPMailer/Exception.php";
	require "./bibliotecas/PHPMailer/OAuth.php";
	require "./bibliotecas/PHPMailer/POP3.php";
	require "./bibliotecas/PHPMailer/SMTP.php";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	class Mensagem{

		private $para = null;
		private $assunto = null;
		private $mensagem = null;
		public $status = array('codigo_status' => null, 'descricao_status' => '');

	public function __get($atributo){

		return $this->$atributo;

	}

	public function __set($atributo, $valor){

		$this->$atributo = $valor;

	}

	public function validaMensagem(){

		if (empty($this->para) || empty($this->assunto) || empty($this->mensagem)) {

			return false;
		}

		return true;
	}

	}

	$mensagem = new Mensagem();

	$mensagem->__set('para', $_POST['para']);
	$mensagem->__set('assunto', $_POST['assunto']);
	$mensagem->__set('mensagem', $_POST['mensagem']);

	if (!$mensagem->validaMensagem()) {

		header('Location: index.php');
		die();

	}

	$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->SMTPDebug = false;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'testedesitephpemail2022@gmail.com';                 // SMTP username
    $mail->Password = 'ftbsyqpgsysqlbpr';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('testedesitephpemail2022@gmail.com', 'teste');
    $mail->addAddress($mensagem->__get('para'));     // Add a recipient
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $mensagem->__get('assunto');
    $mail->Body    = $mensagem->__get('mensagem');
    $mail->AltBody = 'email';

    $mail->send();

    $mensagem->status['codigo_status'] = 1;
    $mensagem->status['descricao_status'] = '<p class="cores">E-mail enviado com sucesso</p>';

    echo '<p class="cores">Mensagem enviada com sucesso!!</p>';


} catch (Exception $e) {
    echo '<p class="cores">Mensagem não enviada.</p>';
    $mensagem->status['codigo_status'] = 2;
    $mensagem->status['descricao_status'] = '<p class="cores">Não foi possivel enviar este e-mail! Por favor tente novamente mais tarde. Detales do erro: </p>' . $mail->ErrorInfo;
}


?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>App Mail Send</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="css.css">

	<link rel="shortcut icon" type="image/png" href="meu_logo.png">

</head>
<body>

	<div class="container">
		
		<div class="py-3 text-center">
				<img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
				<h2 class="cores">Envie E-mail</h2>
				<p class="lead cores">Seu app de envio de e-mails particular!</p>
			</div>

			<div class="row">
				<div class="col-md-12">
					
					<?php

					if ($mensagem->status['codigo_status'] == 1) { ?>

						<div class="container">
							<h1 class="display-4 text-success">Sucesso</h1>
							<p><?= $mensagem->status['descricao_status'] ?></p>
							<a href="index.php" class="btn btn-success btn-lg mt-5 text-white">Voltar</a>
						</div>

					<?php

					}

					?>

					<?php

					if ($mensagem->status['codigo_status'] == 2) { ?>

						<div class="container">
							<h1 class="display-4 text-success">Ops!</h1>
							<p><?= $mensagem->status['descricao_status'] ?></p>
							<a href="index.php" class="btn btn-success btn-lg mt-5 text-white">Voltar</a>
						</div>
						
					<?php

					}

					?>

				</div>
				
			</div>

	</div>

	<footer class="fixed-bottom">
    <div class="container-fluid text-light">
    <div class="row d-flex justify-content-center">
		<h6>Desenvolvido por &copy; Pedro Ivo </h6>	
		<a href="https://www.linkedin.com/in/pedro-ivo-da-silva-746263235/" target="_blank">
		<img src="../../imagens/icons8-linkedin-circundado-48.png" alt="facebook" width="40" height="35">
		</a>
		<a href="https://github.com/pedrok89" target="_blank">
		<img src="../../imagens/icons8-github-50.png" alt="facebook" width="40" height="35">
		</a>
		<a href="https://www.facebook.com/pedro.ivo.501151/" target="_blank">
		<img src="../../imagens/icons8-facebook-novo-48.png" alt="facebook" width="40" height="35">
		</a>
    </div>
    </div>
    </div>
  </footer>

</body>
</html>