import './FaixaLateral.scss';
import { useNavigate } from 'react-router-dom';

import logo from '../Assets/images/logo.png';
import home from '../Assets/images/casa.png';
import cliente from '../Assets/images/grupo-de-usuarios.png';
import carro from '../Assets/images/carro-esporte.png';
import chave from '../Assets/images/chave-do-carro.png';


export default function Faixa(props){
    const navigate = useNavigate(); // Correto uso de useNavigate

    const Redcliente = () => {
      navigate('/Cliente'); // Navegação para a rota /Cliente
    };
    
    return(
        <div className='comp-faixa'>

            <div className='inicio'>
               <img id='logo' src={logo}/>
               <h1>Rent<span>Car</span></h1>
            </div>
           

            <div className='infos'>
                <img src={home}/>
                <h1>Home</h1>
            </div>

            <div className='infos' onClick={Redcliente}>
                <img src={cliente}/>
                <h1>Clientes</h1>
            </div>

            <div className='infos' >
                <img src={carro}/>
                <h1>Veículos</h1>
            </div>

            <div className='infos'>
                <img src={chave}/>
                <h1>Locação</h1>
            </div>
        </div>
    )

};