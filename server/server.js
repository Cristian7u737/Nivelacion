const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


const db = require("./app/models");
const AlumnoController = require("../server/app/controllers/alumno.controller");
const Equipo_computoController = require("../server/app/controllers/equipo_computo.controller");

const run = async() => {};
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");

    const alumno1 = AlumnoController.create({
        nombre: "Cristian",
        apellido_p: "Nochebuena",
        apellido_m: "Chavarría",
        matricula: "190220",
        carrera: "IDGSW"
    });

    const equipo1 = Equipo_computoController.create({
        estado: "Disponible",
        hora_inicio: "05:00:00",
        hora_fin: "05:30:00"
    });
    Equipo_computoController.addRegistro(equipo1.equipo_computo_id, alumno1.alumno_id)
    run();
});