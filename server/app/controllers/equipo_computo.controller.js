const db = require("../models");
const Alumno = db.alumno;
const Equipo_computo = db.equipo_computo;

exports.create = (equipo_computo) => {
    return Equipo_computo.create({
            estado: equipo_computo.estado,
            hora_inicio: equipo_computo.hora_inicio,
            hora_fin: equipo_computo.hora_fin
        })
        .then((equipo_computo) => {
            console.log(">> Created Equip of Compute: " + JSON.stringify(equipo_computo, null, 2));
            return equipo_computo;
        })
        .catch((err) => {
            console.log(">> Error while creating Equip of Compute: ", err);
        });
};

exports.findAll = () => {
    return Equipo_computo.findAll({
        include: [{
            model: Alumno,
            as: "alumno",
            attributes: ["alumno_id", "nombre", "apellido_p", "apellido_m", "matricula", "carrera"],
            through: {
                attributes: [],
            }
        }, ],
    })

    .catch((err) => {
        console.log(">> Error while retrieving Equip of Compute: ", err);
    });
};

exports.findById = (equipo_computo_id) => {
    return Equipo_computo.findByPk(equipo_computo_id, {
            include: [{
                model: Alumno,
                as: "alumno",
                attributes: ["alumno_id", "nombre", "apellido_p", "apellido_m", "matricula", "carrera"],
                through: {
                    attributes: [],
                }
            }, ],
        })
        .then((equipo_computo) => {
            return equipo_computo;
        })
        .catch((err) => {
            console.log(">> Error while finding Equip of Compute: ", err);
        });
};

exports.addRegistro = (equipo_computo_id, alumno_id) => {
    return Equipo_computo.findByPk(equipo_computo_id)
        .then((equipo_computo) => {
            if (!equipo_computo) {
                console.log("Equip od Compute not found!");
                return null;
            }
            return Alumno.findByPk(alumno_id).then((alumno) => {
                if (!alumno) {
                    console.log("Student not found!");
                    return null;
                }
                equipo_computo.addRegistro(alumno);
                console.log(`>> added Student id=${alumno.alumno_id} to Equip of Compute id=${equipo_computo.equipo_computo_id}`);
                return equipo_computo;
            });
        })
        .catch((err) => {
            console.log(">> Error while adding Student to Equip of Compute: ", err);
        });
};