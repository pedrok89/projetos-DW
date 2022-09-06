<html>
	<head>
		<meta charset="utf-8" />
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
  				
					<div class="card-body font-weight-bold">
						<form action="processa.php" method="post">
							<div class="form-group">
								<label for="para" class="cores">Para</label>
								<input name="para" type="text" class="form-control" id="para" placeholder="joao@dominio.com.br">
							</div>

							<div class="form-group">
								<label for="assunto" class="cores">Assunto</label>
								<input name="assunto" type="text" class="form-control" id="assunto" placeholder="Assunto do e-mail">
							</div>

							<div class="form-group">
								<label for="mensagem" class="cores">Mensagem</label>
								<textarea name="mensagem" class="form-control" id="mensagem"></textarea>
							</div>

							<button type="submit" class="btn btn-primary btn-lg">Enviar Mensagem</button>
						</form>
					</div>
				</div>
      		</div>
      	</div>

      	<footer class="fixed-bottom">
	    <div class="container-fluid text-light">
	    <div class="row d-flex justify-content-center">
			<h6>Desenvolvido por &copy; Pedro Ivo </h6>	
			<a href="https://www.facebook.com/pedro.ivo.501151/" target="_blank">
			<img src="icons8-facebook-novo-48.png" alt="facebook" width=40 height=35>
			</a>
	    </div>
	    </div>
	    </div>
	  	</footer>

	</body>
</html>