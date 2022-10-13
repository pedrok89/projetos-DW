<?php

class Conexao {

	private $host = 'localhost';
	private $dbname = 'id16530045_php_oo';
	private $user = 'id16530045_pedro_ivo';
	private $pass = 'R1!AIl/xMN5g&+WK';

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