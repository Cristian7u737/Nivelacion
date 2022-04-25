module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Da011215",
    DB: "app",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
/*
module.exports = {
    HOST: "mysql-76968-0.cloudclusters.net",
    USER: "admin",
    PASSWORD: "yDnkeU47",
    DB: "aplicacion",
    PORT: "16919",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};*/
