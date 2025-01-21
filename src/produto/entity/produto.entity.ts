// produto.entity.ts
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { NumericTransformer } from "src/util/numerictransformer";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produto {
	
	@PrimaryGeneratedColumn()
	id: number

	@IsNotEmpty()
	@Column({length: 255, nullable: false})
	nomeDoJogo: string

	@IsNotEmpty()
	@Column({length: 2555, nullable: false})
	imagem: string

	@IsNotEmpty()
	@Column({length: 255, nullable: false})
	descricao: string

	@IsNumber({ maxDecimalPlaces: 2 })
    @IsNotEmpty()
    @IsPositive()
    @Column({ type: "decimal", precision: 10, scale: 2, transformer: new NumericTransformer() })
    preco: number

	@IsNotEmpty()
	@Column({length: 255, nullable: false})
	plataforma: string

	@ManyToOne(() => Categoria, categoria => categoria.id)
	@JoinColumn({ name: 'categoriaId' })
	categoria: Categoria;

	@ManyToOne(() => Usuario, (usuario) => usuario.produtos, {
        onDelete: "CASCADE"
    })
    usuario: Usuario 
}

