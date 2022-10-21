require('../db.connection');

module.exports = {
    async list(table){
        try {
            const usuarios = await runQuery(`SELECT * FROM ${table}`);

            return usuarios;
        } catch (error) {
            return error;
        }
    },

    async search(table, name){
        try {
            const usuario = await runQuery(`SELECT * FROM ${table} WHERE name = '${name}'`);

            return usuario;
        } catch (error) {
            return error;
        }
    },

    async insert(table, { name, email, password }){
        try {
            await runQuery(`INSERT INTO ${table} (name, email, password) VALUES ('${name}', '${email}', '${password}')`);

            return await runQuery(`SELECT * FROM ${table} WHERE email = '${email}'`);
        } catch (error) {
            return error;
        }
    },

    async update(table, { id, name, email, password }){
        try {
            //tratar erro de undefined

            await runQuery(`UPDATE ${table} set name = '${name}', email = '${email}', password = '${password}' where id = ${id}`);

            return await runQuery(`SELECT * FROM ${table} WHERE id = ${id}`);
        }catch (error) {
            return error;
        }
    },

    async delete(table, { id }){
        try {
            await runQuery(`DELETE FROM ${table} WHERE id = ${id}`);
        } catch (error) {
            return error;
        }
    }
}