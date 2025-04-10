import {Sequelize} from "sequelize";

const db = new Sequelize('catatan', 'root', '',{
    host: '34.55.218.205',
    dialect: 'mysql'
});

export default db;
