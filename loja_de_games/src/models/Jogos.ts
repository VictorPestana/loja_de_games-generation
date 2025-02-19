import Tema from './Tema';

export default interface Jogos {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema: Tema | null;
}
