const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const db = require("../models");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.alumno = require("../models/alumno.model")(sequelize, Sequelize);
db.equipo_computo = require("../models/equipo_computo.model")(sequelize, Sequelize);
db.equipo_computo.belongsToMany(db.alumno, {
    through: "registro",
    as: "alumnos",
    foreignKey: "equipo_computo_id",
});
db.alumno.belongsToMany(db.equipo_computo, {
    through: "registro",
    as: "equipo_computo",
    foreignKey: "alumno_id",
});
module.exports = db;