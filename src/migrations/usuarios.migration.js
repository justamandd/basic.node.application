require('../../db.connection');

runQuery(`
CREATE TABLE usuario (
    id int PRIMARY KEY,
    nome varchar2(50)
)
`)