import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Produto } from "../entity/produto.entity";
import { ProdutoService } from "../services/produto.services";

@Controller("/produtos")
export class produtoController {
	constructor(private readonly produtoService: ProdutoService) {}

	@Get()
	@HttpCode(HttpStatus.OK)
	findAll(): Promise<Produto[]> {
		return this.produtoService.findAll();
	}

	@Get('/:id')
	@HttpCode(HttpStatus.OK)
	findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
		return this.produtoService.findById(id);
	}

	@Get('/nome/:nome')
	@HttpCode(HttpStatus.OK)
	findByNome(@Param('nome') nomeDoJogo: string): Promise<Produto[]> {
		return this.produtoService.findByNome(nomeDoJogo);
	}

	@Get('/descricao/:descricao')
	@HttpCode(HttpStatus.OK)
	findByDescricao(@Param('descricao') descricao: string): Promise<Produto[]> {
		return this.produtoService.findByDescricao(descricao);
	}

	@Get('/plataforma/:plataforma')
	@HttpCode(HttpStatus.OK)
	findByPlataforma(@Param('plataforma') plataforma: string): Promise<Produto[]> {
		return this.produtoService.findByPlataforma(plataforma);
	}


	@Get('/preco/decrescente')
	@HttpCode(HttpStatus.OK)
	findByPrecoDecrescente(): Promise<Produto[]> {
		return this.produtoService.findByPrecoDecrescente();
	}

	@Get('/nome/crescente')
	@HttpCode(HttpStatus.OK)
	findByNomeOrdemCrescente(@Param('nome') nome: string): Promise<Produto[]> {
		return this.produtoService.findByNomeOrdemCrescente(nome);
	}

	@Get('/categoria/:categoria')
	@HttpCode(HttpStatus.OK)
	findByCategoria(@Param('categoria', ParseIntPipe) categoria: number): Promise<Produto[]> {
	  return this.produtoService.findByCategoria(categoria);
	}


	@Post()
	@HttpCode(HttpStatus.CREATED)
	create(@Body() produto: Produto): Promise<Produto> {
		return this.produtoService.create(produto);
	}

	@Put('/:id')
	@HttpCode(HttpStatus.OK)
	update(@Param('id', ParseIntPipe) id: number, @Body() produto: Produto): Promise<Produto> {
		return this.produtoService.update(produto);
	}

	@Delete('/:id')
	@HttpCode(HttpStatus.NO_CONTENT)
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.produtoService.delete(id);
	}

}

