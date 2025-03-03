import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const notes = db.define('note', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT, 
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
},{
    freezeTableName:true
});

export default notes;

(async() => {
   await db.sync(); 
})();
