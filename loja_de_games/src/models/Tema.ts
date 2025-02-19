import Jogos from "./Jogos";


export default interface Tema {
    id: number;
    descricao: string;
    postagem?: Jogos | null;
}
