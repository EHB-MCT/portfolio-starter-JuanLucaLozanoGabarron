const supertest = require("supertest");
const knexfile = require("../../db/knexfile");
const knex = require("knex")(knexfile.development);
const app = require("../../app");
const request = supertest(app);

describe("PUT /shoes/:name", () => {
  beforeAll(async () => {
    await knex("shoes").insert({
      brand: "test",
      model: "test",
      img: "test",
    });
  });

  afterAll(async () => {
    await knex("shoes").where("model", "test2").del();
  });

  test("Update a shoe model", async () => {
    const updatedShoeData = {
      model: "test2",
    };
    const response = await request
      .put("/shoes/test")
      .send(updatedShoeData)
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Shoe model updated successfully");
  });

  test("Return error 404 when not found", async () => {
    const updatedShoeData = {
      model: "shoetest",
    };
    const response = await request
      .put("/shoes/test")
      .send(updatedShoeData)
      .set("Accept", "application/json");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Shoe not found");
  });
});
