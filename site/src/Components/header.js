import conta from '../Assets/images/do-utilizador.png';
import './header.scss';

export default function Header(){
    return(
        <div className="pag-header">
            <h1>Olá, que bom que você voltou!</h1>
            <img src={conta}/>
        </div>
    )
}