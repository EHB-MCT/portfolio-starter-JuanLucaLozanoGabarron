const supertest = require("supertest");
const knexfile = require("../../db/knexfile");
const knex = require("knex")(knexfile.development);
const app = require("../../app");

const request = supertest(app);

describe("GET /shoes", () => {
  beforeAll(async () => {
    await knex.raw("begin");
  });

  afterAll(async () => {
    await knex.destroy();
  });

  test("Get all the existing shoes in the database", async () => {
    const response = await request.get("/shoes");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
