const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "test",
  },
});

async function main() {
  try {
    const exists = await knex.schema.hasTable("shoes");
    if (!exists) {
      await knex.schema.createTable("shoes", (table) => {
        table.increments("id").primary();
        table.string("brand");
        table.string("model");
      });
      await knex("shoes").insert([
        {
          brand: "Adidas",
          model: "Campus 00",
        },
      ]);
    }
  } catch (error) {
    console.log(error);
  }
}

main();
module.exports = knex;
