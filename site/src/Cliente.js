import Faixa from "./Components/FaixaLateral";
import Header from "./Components/header";
import './cliente.scss'

export default function Cliente(){

    return(
        <div className="pag-Cliente">
            <Faixa/>
            <div className="header">
                <Header/>
                <div className="content">
                    <div className="introducao">
                        <h6>ÁREA ADMINISTRATIVA</h6>
                        <h1>Controle de Clientes</h1>
                    </div>

                    <div className="cadastro">
                        <h1>Novo Cliente</h1>
                        <div className="inputs">
                            <h6>Nome</h6>
                            <input type="text" ></input>
                        </div>

                        <div className="inputs">
                            <h6>E-mail</h6>
                            <input type="text" ></input>
                        </div>

                        <div className="inputs">
                            <h6>Telefone</h6>
                            <input type="text" ></input>
                        </div >
                        
                        <div className="inputs">
                            <h6>CPF</h6>
                            <input type="text" ></input>
                        </div >

                        <div className="inputs">
                            <h6>CNH</h6>
                            <input type="text" ></input>
                        </div>

                        <button> SALVAR</button>
                    </div>
                    
                    <div className="lista">
                        
                    </div>
               </div>
            </div>
        </div>
    );
}