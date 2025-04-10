import {Sequelize} from "sequelize";

const db = new Sequelize('catatan', 'root', '',{
    host: '	34.172.29.55',
    dialect: 'mysql'
});

export default db;
