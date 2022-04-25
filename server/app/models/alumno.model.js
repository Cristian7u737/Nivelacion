module.exports = (sequelize, Sequelize) => {
    const Alumno = sequelize.define("alumno", {
        nombre: {
            type: Sequelize.STRING
        },
        apellido_p: {
            type: Sequelize.STRING
        },
        apellido_m: {
            type: Sequelize.STRING
        },
        matricula: {
            type: Sequelize.INTEGER
        },
        carrera: {
            type: Sequelize.STRING
        }
    });
    return Alumno;
};