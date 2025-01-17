import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { ProdutoModule } from "src/produto/produto.module";
import { CategoriaService } from "./services/categoria.services";
import { ProdutoService } from "src/produto/services/produto.services";

@Module({
	imports: [TypeOrmModule.forFeature([Categoria]), ProdutoModule],
	providers: [CategoriaService, ProdutoService],
	controllers: [CategoriaController],
	exports: [TypeOrmModule, CategoriaService],
})

export class CategoriaModule {}
