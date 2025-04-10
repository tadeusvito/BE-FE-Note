import {Sequelize} from "sequelize";

const db = new Sequelize('public-notes', 'root', 'sitanggang',{
    host: '34.71.128.239',
    dialect: 'mysql'
});

export default db;
