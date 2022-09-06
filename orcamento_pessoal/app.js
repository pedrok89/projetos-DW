	class Despesa{

		constructor(ano, mes, dia, tipo, descricao, valor){

			this.ano = ano
			this.mes = mes
			this.dia = dia
			this.tipo = tipo
			this.descricao = descricao
			this.valor = valor

		}

		validarDados(){

			for(let i in this){

				if (this[i] === '' || this[i] === null || this[i] === undefined ) {

					return false

				}

			}

			return true

		}

	}

	class Bd{

			constructor(){

				let id = localStorage.getItem('id')

				if (id == null) {

					localStorage.setItem('id', 0)

				}

			}

		getProximoId(){

			let proximoId = localStorage.getItem('id')

			return parseInt(proximoId) + 1

		}

		gravar(d){

			let id = this.getProximoId()

			localStorage.setItem('id', id)

			localStorage.setItem(id, JSON.stringify(d))

		}

		recuperarTodosRegistros(){

			let despesas = Array()

			let id = localStorage.getItem('id')

			for(let i = 1; i <= id; i++){

				let despesa = JSON.parse(localStorage.getItem(i))

				if (despesa === null) {

					continue

				}

				despesa.id = i

				despesas.push(despesa)

			}

			return despesas

		}

		pesquisar(despesa){

			let despesasFiltradas = Array()

			despesasFiltradas = this.recuperarTodosRegistros()


			if (despesa.ano != '') {
				console.log('filtro ano')
				despesasFiltradas = despesasFiltradas.filter( d => d.ano == despesa.ano)
			}

			if (despesa.mes != '') {
				console.log('filtro mes')
				despesasFiltradas = despesasFiltradas.filter( d => d.mes == despesa.mes)
			}

			if (despesa.dia != '') {
				console.log('filtro dia')
				despesasFiltradas = despesasFiltradas.filter( d => d.dia == despesa.dia)
			}

			if (despesa.tipo != '') {
				console.log('filtro tipo')
				despesasFiltradas = despesasFiltradas.filter( d => d.tipo == despesa.tipo)
			}

			if (despesa.descricao != '') {
				console.log('filtro descricao')
				despesasFiltradas = despesasFiltradas.filter( d => d.descricao == despesa.descricao)
			}

			if (despesa.valor != '') {
				console.log('filtro valor')
				despesasFiltradas = despesasFiltradas.filter( d => d.valor == despesa.valor)
			}

			return despesasFiltradas

		}

		remover(id){

			localStorage.removeItem(id)

		}

	}

	let bd = new Bd()

	function cadastrarDespesa(){

		let ano = document.getElementById('ano')
		let mes = document.getElementById('mes')
		let dia = document.getElementById('dia')
		let tipo = document.getElementById('tipo')
		let descricao = document.getElementById('descricao')
		let valor = document.getElementById('valor')

		let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)

		if (despesa.validarDados()) {

		bd.gravar(despesa)

		document.getElementById('exampleModalLabel').innerHTML = 'Gravação bem sucedida'
		document.getElementById('cor_modal').className = 'modal-header text-success'
		document.getElementById('modal_titulo').innerHTML = 'Gravação realizada com sucesso'
		document.getElementById('botao_modal').innerHTML = 'Voltar'
		document.getElementById('botao_modal').className = 'btn btn-success'

		$('#gravacao_modal').modal('show')

		ano.value = ''
		mes.value = ''
		dia.value = ''
		tipo.value = ''
		descricao.value = ''
		valor.value = ''

		} else {

		document.getElementById('exampleModalLabel').innerHTML = 'Erro na gravação'
		document.getElementById('cor_modal').className = 'modal-header text-danger'
		document.getElementById('modal_titulo').innerHTML = 'Erro na gravação, verifique se todos os campos foram preenchidos corretamente!'
		document.getElementById('botao_modal').innerHTML = 'Voltar e corrigir'
		document.getElementById('botao_modal').className = 'btn btn-danger'

		$('#gravacao_modal').modal('show')

		}

	}

	function carregaListaDespesas(despesas = Array(), filtro = false){

		if (despesas.length == 0 && filtro == false) {
			despesas = bd.recuperarTodosRegistros()
		}

		let listaDespesas = document.getElementById('listaDespesas')
		listaDespesas.innerHTML = ''

		despesas.forEach(function(d){

			let linha = listaDespesas.insertRow()

			linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

			if (d.tipo == '1') {

				d.tipo = 'Alimentação'

			} else if (d.tipo == '2') {

				d.tipo = 'Educação'

			} else if (d.tipo == '3') {

				d.tipo = 'Lazer'

			} else if (d.tipo == '4') {

				d.tipo = 'Saúde'

			} else if (d.tipo == '5') {

				d.tipo = 'Transporte'
			}

			linha.insertCell(1).innerHTML = d.tipo
			linha.insertCell(2).innerHTML = d.descricao
			linha.insertCell(3).innerHTML = d.valor

			let btn = document.createElement('button')
			btn.className = 'btn btn-danger'
			btn.innerHTML = '<i class="fas fa-times"> </ii>'
			btn.id = `id_despesa_${d.id}`
			btn.onclick = function(){

				let id = this.id.replace('id_despesa_', '')

				bd.remover(id)

				window.location.reload()

			}

			linha.insertCell(4).append(btn)

		})

	}

	function pesquisarDespesa(){

		let ano = document.getElementById('ano').value
		let mes = document.getElementById('mes').value
		let dia = document.getElementById('dia').value
		let tipo = document.getElementById('tipo').value
		let descricao = document.getElementById('descricao').value
		let valor = document.getElementById('valor').value

		let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

		let despesas = bd.pesquisar(despesa)

		this.carregaListaDespesas(despesas, true)

	}