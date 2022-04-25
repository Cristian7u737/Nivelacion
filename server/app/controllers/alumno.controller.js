const db = require("../models");
const Alumno = db.alumno;
const Equipo_computo = db.equipo_computo;

exports.create = (alumno) => {
    return Alumno.create({
            nombre: alumno.nombre,
            apellido_p: alumno.apellido_p,
            apellido_m: alumno.apellido_m,
            matricula: alumno.matricula,
            carrera: alumno.carrera
        })
        .then((alumno) => {
            console.log(">> Created student: " + JSON.stringify(alumno, null, 4));
            return alumno;
        })
        .catch((err) => {
            console.log(">> Error while creating student: ", err);
        });
};

exports.findAll = () => {
    return Alumno.findAll({
            include: [{
                model: Equipo_computo,
                as: "equipo_computo",
                attributes: ["equipo_computo_id", "estado", "hora_inicio", "hora_fin"],
                through: {
                    attributes: ["equipo_computo_id ", "alumno_id"],
                },
                // through: {
                //   attributes: ["tag_id", "tutorial_id"],
                // },
            }, ],
        })
        .then((alumnos) => {
            return alumnos;
        })
        .catch((err) => {
            console.log(">> Error while retrieving students: ", err);
        });
};
exports.findById = (alumno_id) => {
    return Alumno.findByPk(alumno_id, {
            include: [{
                model: Equipo_computo,
                as: "equipo_computo",
                attributes: ["equipo_computo_id", "estado", "hora_inicio", "hora_fin"],
                through: {
                    attributes: ["equipo_computo_id ", "alumno_id"],
                },
                // through: {
                //   attributes: ["tag_id", "tutorial_id"],
                // },
            }, ],
        })
        .then((alumno) => {
            return alumno;
        })
        .catch((err) => {
            console.log(">> Error while finding Student: ", err);
        });
};