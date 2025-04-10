import {Sequelize} from "sequelize";

const db = new Sequelize('catatan', 'root', 'sitanggang',{
    host: '34.57.76.216',
    dialect: 'mysql'
});

export default db;
