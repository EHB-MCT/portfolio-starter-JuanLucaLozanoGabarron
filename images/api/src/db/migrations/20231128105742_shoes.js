/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("shoes", function (table) {
    table.increments("id");
    table.string("brand").notNullable();
    table.string("model").notNullable();
    table.string("img").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("shoes");
};
