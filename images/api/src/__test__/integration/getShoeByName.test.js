const supertest = require("supertest");
const knexfile = require("../../db/knexfile");
const knex = require("knex")(knexfile.development);
const app = require("../../app");
const request = supertest(app);

describe("GET /shoes/:name", () => {
  beforeAll(async () => {
    await knex("shoes").insert({
      brand: "test",
      model: "test",
      img: "test",
    });
  });

  afterAll(async () => {
    await knex("shoes").where("model", "test").del();
  });

  test("Find shoe by model", async () => {
    const response = await request.get("/shoes/test");
    expect(response.status).toBe(200);
    expect(response.body[0]).toBeInstanceOf(Object);
    expect(response.body[0].brand).toBe("test");
    expect(response.body[0].model).toBe("test");
  });

  test("Return error 404 when not found", async () => {
    const response = await request.get("/shoes/NonexistentShoe");
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("Shoe not found");
  });
});
