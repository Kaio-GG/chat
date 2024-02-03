import { con } from './connection.js';



export async function cadastro (info){
    const comando = `
    insert into tb_usuario ( nm_usuario , ds_email , ds_senha)
                    value  ( ? , ? , ?)
    `

    const [linhas] = await con.query(comando , [info.nome , info.email , info.senha])
    info.id = linhas.insertId;
    return info
}


export async function login(info){
    const comando = 
    `
    select *
    from   tb_usuario
    where  ds_email = ?
    and    ds_senha = ? `

    const [linhas] =await con.query(comando, [info.email, info.senha])
    return linhas[0];
}


export async function alterarConta (info, id){
    const comando = `        
        update tb_usuario
        set
        nm_usuario = ?,
        ds_email = ?,
        ds_senha = ? 
        where id_usuario = ?
    `
    const [linha] = await con.query(comando, [info.nome, info.email, info.senha , info.id] )
    return linha.affectedRows;

}


