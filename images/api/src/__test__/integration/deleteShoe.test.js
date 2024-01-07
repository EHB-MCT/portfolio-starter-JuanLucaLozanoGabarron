const supertest = require("supertest");
const knexfile = require("../../db/knexfile");
const knex = require("knex")(knexfile.development);
const app = require("../../app");
const request = supertest(app);

describe("DELETE /shoes/:model", () => {
  beforeAll(async () => {
    await knex("shoes").insert({
      brand: "test",
      model: "test",
      img: "test",
    });
  });

  test("Delete shoe by model", async () => {
    const response = await request.delete("/shoes/test");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Shoe has been deleted");
    const deletedShoe = await knex("shoes").where("model", "test").first();
    expect(deletedShoe).toBe(undefined);
  });

  test("should return 404 for non-existent shoe name", async () => {
    const response = await request.delete("/shoes/NonExistingShoe");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Shoe not found");
  });
});
