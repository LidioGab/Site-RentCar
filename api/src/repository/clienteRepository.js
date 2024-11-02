import { conexao } from "./connection.js";

export async function adicionarCliente(cadastro){
    const comando = `
        insert into tb_cliente(nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
		                values(?, ?, ? ,?, ?)
    `;
    try {
        const [resultado] = await conexao.query(comando, [
          cadastro.nome,
          cadastro.cpf,
          cadastro.telefone,
          cadastro.email,
          cadastro.cnh
        ]);
        return resultado.insertId; 
      } catch (error) {
        throw new Error('Erro ao adicionar cliente: ' + error.message);
      }
}


export async function verificarEmail(email){
    const comando = `
      select * from tb_cliente where ds_email like "% ? %"
    `

    const [result] = await conexao.query(comando, [email]);

    console.log(result);

    return result.insertId;
}