const { Sequelize, DataTypes, QueryTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://kodexdb_owner:npg_kPhb1cnGUBd2@ep-yellow-moon-a8fm9h7h-pooler.eastus2.azure.neon.tech/kodexdb?sslmode=require",
  {
    logging: console.log,
  }
);

(async function main() {
  const Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 4,
    },
  });

  //   const Student = sequelize.define("Student", {
  //     name: {
  //       type: DataTypes.STRING,
  //     },
  //     age: {
  //       type: DataTypes.INTEGER,
  //       defaultValue: 4,
  //     },
  //   });

  try {
    await sequelize.sync();
    console.log("Database synced!");
  } catch (error) {
    console.error("Database sync error:", error);
  }

  //   await Customer.create({
  //     name: "Noah",
  //     age: 30,
  //   });

  //   await Customer.create({
  //     name: "Stella",
  //     age: 60,
  //   });

  // const result = await Customer.findOne({
  //   where: {
  //     age: 60,
  //   },
  // });

  // const result1 = await Customer.destroy({
  //   where: {
  //     age: 60,
  //   },
  // });

})();

