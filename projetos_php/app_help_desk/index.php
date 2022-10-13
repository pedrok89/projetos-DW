
<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="css.css">

    <link rel="shortcut icon" type="image/png" href="meu_logo.png">

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5968126729205451"
     crossorigin="anonymous"></script>

    <style>
      .card-login {
        padding: 30px 0 0 0;
        width: 350px;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        App Help Desk
      </a>
    </nav>

    <div class="text-left cores">
      <h6>E-mail: pedro@teste.com</h6>
      <h6>Senha: 1234</h6>
    </div>

    <div class="container">    
      <div class="row">

        <div class="card-login">
          <div class="card">
            <div class="card-header">
              Login
            </div>
            <div class="card-body">
              <form action="processar.php" method="POST">
                <div class="form-group">
                  <input name="email" type="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                  <input name="senha" type="password" class="form-control" placeholder="Senha">
                </div>

                <?php

                  if (isset($_GET['login']) && $_GET['login'] == 'erro') { ?>

                    <div class="text-danger">
                      
                      Usuário ou senha inválido(s)

                    </div>

                <?php

                  }

                ?>

                <?php

                  if (isset($_GET['login']) && $_GET['login'] == 'erro2') { ?>

                    <div class="text-danger">
                      
                      Página protegida, logue novamente!

                    </div>

                <?php
                
                  }

                ?>

                <button class="btn btn-lg btn-info btn-block" type="submit">Entrar</button>
              </form>
            </div>
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