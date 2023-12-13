const supertest = require("supertest");
const knexfile = require("../../db/knexfile");
const knex = require("knex")(knexfile.development);
const app = require("../../app");
const request = supertest(app);

describe("POST /shoes", () => {
  afterAll(async () => {
    await knex("shoes").where("model", "test").del();
  });
  test("Returns success message after shoe is added", async () => {
    const shoe = {
      brand: "test",
      model: "test",
      img: "test",
    };
    const response = await request.post("/shoes").send(shoe);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Shoes posted successfully");
  });

  test("Should return error for existent shoe", async () => {
    const shoe = {
      brand: "test",
      model: "test",
      img: "test",
    };
    const response = await request.post("/shoes").send(shoe);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Shoe already exists");
  });
});
