import {Sequelize} from "sequelize";

const db = new Sequelize('catatan', 'root', '',{
    host: '35.222.88.80',
    dialect: 'mysql'
});

export default db;