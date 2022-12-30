import { con } from "./connection.js";



export async function criarSala (info){
    const comando = `
        insert into tb_sala (nm_sala , id_usuario)
		        	values ( ? , ? )
    `
    const [linhas] = await con.query (comando ,[info.nome , info.id]);
    return linhas 
}
