<?php

class Conexao {

	private $host = 'sql307.epizy.com';
	private $dbname = 'epiz_32135987_web2';
	private $user = 'epiz_32135987';
	private $pass = '';

	public function conectar() {
		try {

			$conexao = new PDO(
				"mysql:host=$this->host;dbname=$this->dbname",
				"$this->user",
				"$this->pass"				
			);

			return $conexao;


		} catch (PDOException $e) {
			echo '<p>'.$e->getMessege().'</p>';
		}
	}
}

?>