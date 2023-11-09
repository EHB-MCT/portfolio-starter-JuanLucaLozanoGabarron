const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    port: 5432,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
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
