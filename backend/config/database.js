import {Sequelize} from "sequelize";

const db = new Sequelize('catatan', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;