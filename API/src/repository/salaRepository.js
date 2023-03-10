import { con } from "./connection.js";



export async function criarSala (info){
    const comando = `
        insert into tb_sala (nm_sala , id_usuario)
		        	values ( ? , ? )
    `
    const [linhas] = await con.query (comando ,[info.nome , info.id]);
    return linhas 
}


export async function acharSala (info){
    const comando = `
    select * 
         from tb_sala
    where nm_sala = ?           
    `
    const [linhas] = await con.query (comando , [info.nome])
    return linhas[0]
}

export async function entrarSala (info){
    const comando = `
    insert into  tb_participante(id_usuario , id_sala)
                           value(? , ?)
    `
    const [linhas] = await con.query (comando , [info.idusuario , info.idsala])
    return linhas[0]
    
}

export async function carregarMsg (info){
    const comando = `
            select *
            from  
                tb_menssagem
            inner join
                tb_usuario on tb_menssagem.id_usuario = tb_usuario.id_usuario
            where id_sala = ?
    `
    const [linhas] = await con.query (comando , [info.idsala])
    return linhas
    
}



export async function enviarMsg (info){
    const comando = `
        insert into tb_menssagem (id_sala, id_usuario ,ds_menssagem ,dt_menssagem )    
                           value (? , ? , ? ,? )
    `
    const [linhas] = await con.query (comando , [info.sala , info.id , info.msg , info.data])
    return info
}


