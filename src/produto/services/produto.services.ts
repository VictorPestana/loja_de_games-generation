import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { relative } from 'path';
import { DeleteResult, ILike, In, Repository } from 'typeorm';
import { Produto } from '../entity/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  async findById(id: number): Promise<Produto> {
    let produto = await this.produtoRepository.findOne({
      where: {
        id,
      },
      relations: {
        categoria: true,
      },
    });

    if (!produto) {
      throw new Error('Produto não encontrado');
      HttpStatus.NOT_FOUND;
    }

    return produto;
  }

  async findByDescricao(descricao: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        descricao: ILike(`%${descricao}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async findByCategoria(idCategoria: number): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        categoria: {
          id: idCategoria,
        },
      },
      relations: {
        categoria: true,
      },
    });
  }

  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nomeDoJogo: ILike(`%${nome}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async findByPlataforma(plataforma: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        plataforma: ILike(`%${plataforma}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  async findByNomeOrdemCrescente(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        nomeDoJogo: ILike(`%${nome}%`),
      },
      order: {
        nomeDoJogo: 'DESC',
      },
      relations: {
        categoria: true,
      },
    });
  }

  async findByPrecoDecrescente(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      order: {
        preco: 'DESC',
      },
      relations: {
        categoria: true,
      },
    });
  }

  async create(produto: Produto): Promise<Produto> {
    return await this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    let buscaProduto = await this.findById(produto.id);

    if (!buscaProduto || !produto.id) {
      throw new Error('Produto não encontrado');
      HttpStatus.NOT_FOUND;
    }

    return await this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscaProduto = await this.findById(id);

    if (!buscaProduto) throw new Error('Produto não encontrado');
    HttpStatus.NOT_FOUND;

    return await this.produtoRepository.delete(id);
  }
}
