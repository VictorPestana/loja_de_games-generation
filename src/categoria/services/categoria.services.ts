import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";
import { ProdutoService } from "src/produto/services/produto.services";

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
    private produtoService: ProdutoService
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async findById(id: number): Promise<Categoria> {
    let categoria = await this.categoriaRepository.findOne({
      where: {
        id: id
      }
    });

    if (!categoria) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return categoria;
  }

  async findByNome(nome: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      }
    });
  }

  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
  }

  async update(categoria: Categoria): Promise<Categoria> {
    let buscaCategoria: Categoria = await this.findById(categoria.id);

    if (!buscaCategoria) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return await this.categoriaRepository.save(categoria);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscaCategoria = await this.findById(id);

    if (!buscaCategoria) {
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
    }

    return await this.categoriaRepository.delete(id);
  }

  async deleteCategoria(id: number): Promise<DeleteResult> {
    const categoria = await this.findById(id);

    const produtos = await this.produtoService.findByCategoria(id);

    if (produtos.length > 0) {
      throw new Error("Não é possivel excluir porque a categoria possui produtos cadastrados");
    }

    return await this.categoriaRepository.delete(id);
  }
}
