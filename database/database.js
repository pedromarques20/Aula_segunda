const Sequelize = require("sequelize");
const connection = new Sequelize("ninho", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = database