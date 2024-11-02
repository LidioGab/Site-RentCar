import {Router} from 'express';
import { adicionarCliente } from '../repository/clienteRepository.js';


const endpoint = Router();

endpoint.post('/cadastro', async (req, resp) =>{
   try{
        const cadastro = req.body;

        const resposta = await adicionarCliente(cadastro);

        if(!cadastro.nome)
            throw new Error('Campo "Nome" obrigatório.')

        if (!cadastro.cpf)
            throw new Error('Campo "Email" obrigatório.')

        if (!cadastro.telefone)
            throw new Error('Campo "Telefone" obrigatório.')

        if (!cadastro.email)
            throw new Error('Campo "Email" obrigatório.')

        if (!cadastro.cnh)
            throw new Error('Campo "CNH" obrigatório.')

        resp.status(201).send(resposta);
   }
   catch(err){
    resp.status(400).send({
        erro: err.message
    })
   }

});


export default endpoint;