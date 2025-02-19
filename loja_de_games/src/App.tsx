import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Home from './pages/home/Home';
import ListaJogos from './components/temas/listaTemas/listaJogos';
import FormCategoria from './components/temas/formcategoria/FormCategoria';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/jogos' element={<ListaJogos />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/editartema/:id" element={<FormCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
