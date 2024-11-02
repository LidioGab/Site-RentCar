import Faixa from "./Components/FaixaLateral";
import Header from "./Components/header";
import axios from 'axios';
import './cliente.scss';
import { useState } from "react";



export default function Cliente(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnh, setCnh] = useState('');
    const [campoobrigatorio, setCampoobrigatorio] = useState('')

    async function enviar(){

        try{
            let cadastro = {
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                email: email,
                cnh: cnh
            };

            const url = "http://localhost:5000/cadastro";
            let resp = await axios.post(url, cadastro);

            console.log(resp.data)

        }
        catch(err){
            setCampoobrigatorio(err.response.data.erro);
        }
    }

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
                            <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Lidio Gabriel"></input>
                        </div>

                        <div className="inputs">
                            <h6>E-mail</h6>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Ex: Lidio@gmail.com"></input>
                        </div>

                        <div className="inputs">
                            <h6>Telefone</h6>
                            <input type="text"  value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Ex: (11) 94002-8922"></input>
                        </div >
                        
                        <div className="inputs">
                            <h6>CPF</h6>
                            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Ex: 333.333.333-33"></input>
                        </div >

                        <div className="inputs">
                            <h6>CNH</h6>
                            <input type="text" value={cnh} onChange={e => setCnh(e.target.value)} placeholder="Ex: 123456789"></input>
                        </div>
                        
                        <button onClick={enviar}> SALVAR</button>
                        <p>{campoobrigatorio}</p>
                    </div>
                    
                    <div className="lista" >
                        <h1>Lista de Clientes</h1>

                        <div className="input-pesquisa">
                            <h6>Nome</h6>
                            <div>
                              <input></input>
                              <image></image>
                            </div>
                        </div>

                            
                    </div>
               </div>
            </div>
        </div>
    );
}