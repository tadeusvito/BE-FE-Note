import {Sequelize} from "sequelize";

const db = new Sequelize('notes', 'root', '',{
    host: '34.55.218.205',
    dialect: 'mysql'
});

export default db;
