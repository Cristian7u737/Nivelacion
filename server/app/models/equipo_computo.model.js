module.exports = (sequelize, Sequelize) => {
    const Equipo_computo = sequelize.define("equipo_computo", {
        estado: {
            type: Sequelize.ENUM("Disponible", "Ocupado")
        },
        hora_inicio: {
            type: Sequelize.TIME
        },
        hora_fin: {
            type: Sequelize.TIME
        }
    });

    return Equipo_computo;
};