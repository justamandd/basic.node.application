require('../../db.connection');

module.exports = {
    async list(table){
        try {
            const usuarios = await runQuery(`SELECT * FROM ${table}`);

            return usuarios;
        } catch (error) {
            return error;
        }
    },

    async search(table, nome){
        try {
            const usuario = await runQuery(`SELECT * FROM ${table} WHERE nome = '${nome}'`);

            return usuario;
        } catch (error) {
            return error;
        }
    },

    async insert(table, { id, nome }){
        try {
            await runQuery(`INSERT INTO ${table} (id, nome) VALUES ('${id}', '${nome}')`);

            return await runQuery(`SELECT * FROM ${table} WHERE id = '${id}'`);
        } catch (error) {
            return error;
        }
    },

    async update(table, { id, nome }){
        try {
            await runQuery(`UPDATE ${table} set nome = '${nome}' where id = ${id}`);

            return await runQuery(`SELECT * FROM ${table} WHERE id = ${id}`);
        }catch (error) {
            return error;
        }
    },

    async delete(table, id){
        try {
            await runQuery(`DELETE FROM ${table} WHERE id = ${id}`);
        } catch (error) {
            return error;
        }
    }
}