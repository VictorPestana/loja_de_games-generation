import { Link } from 'react-router-dom';
import controle from '../../assets/controle.png';
import account from '../../assets/manage_accounts.svg'

function Navbar () {
	return (
		<nav className="bg-blue-600">
  <div className="container mx-auto px-6 py-4 md:flex md:justify-between md:items-center">
    <div className="flex justify-between items-center">
      <div>
        <a className="text-white text-xl font-bold md:text-3xl hover:text-gray-700" href="#"><Link to='/home' className="text-2xl font-bold">Loja de Games</Link></a>
      </div>
		<img src={controle} alt="Controle" className="h-15 w-15" />

      <div className="flex md:hidden">
        <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
          </svg>
        </button>
      </div>
    </div>

	
<form className="min-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-150 p-4 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 border-black dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
    </div>
</form>


    <div className="md:flex items-center">
      <div className="flex flex-col md:flex-row md:mx-6">
        <a className="my-1 text-sm text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#"><Link to='/jogos' className='hover:underline'>Jogos</Link></a>
        <a className="my-1 text-sm text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">Categorias</a>
        <a className="my-1 text-sm text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#"><Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link></a>
		<a className="my-1 text-sm text-white font-medium hover:text-indigo-500 md:mx-4 md:my-0" href="#">
			<svg xmlns="" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" fill="white">
				<g>
					<path d="M0,0h24v24H0V0z" fill="none"/>
				</g>
				<g>
					<g>
						<circle cx="10" cy="8" r="4"/>
						<path d="M10.67,13.02C10.45,13.01,10.23,13,10,13c-2.42,0-4.68,0.67-6.61,1.82C2.51,15.34,2,16.32,2,17.35V20h9.26 C10.47,18.87,10,17.49,10,16C10,14.93,10.25,13.93,10.67,13.02z"/>
						<path d="M20.75,16c0-0.22-0.03-0.42-0.06-0.63l1.14-1.01l-1-1.73l-1.45,0.49c-0.32-0.27-0.68-0.48-1.08-0.63L18,11h-2l-0.3,1.49 c-0.4,0.15-0.76,0.36-1.08,0.63l-1.45-0.49l-1,1.73l1.14,1.01c-0.03,0.21-0.06,0.41-0.06,0.63s0.03,0.42,0.06,0.63l-1.14,1.01 l1,1.73l1.45-0.49c0.32,0.27,0.68,0.48,1.08,0.63L16,21h2l0.3-1.49c0.4-0.15,0.76-0.36,1.08-0.63l1.45,0.49l1-1.73l-1.14-1.01 C20.72,16.42,20.75,16.22,20.75,16z M17,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S18.1,18,17,18z"/>
					</g>
				</g>
			</svg>
		</a>

      </div>

      <div className="flex justify-center md:block">
        <a className="relative text-white text-white" href="#">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="">
            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</nav>


	)
}

export default Navbar;
