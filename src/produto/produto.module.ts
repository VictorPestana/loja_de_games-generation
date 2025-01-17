import { TypeOrmModule } from "@nestjs/typeorm";
import { produtoController } from "./controllers/produto.controller";
import { Produto } from "./entity/produto.entity";
import { Module } from "@nestjs/common";
import { ProdutoService } from "./services/produto.services";

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [produtoController],
  providers: [ProdutoService],
  exports: [TypeOrmModule, ProdutoService],
})
export class ProdutoModule {}
