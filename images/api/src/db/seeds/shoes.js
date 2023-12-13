/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  const checkShoes = await knex("shoes").select();
  if (checkShoes.length == 0) {
    await knex("shoes").insert([
      {
        brand: "Adidas",
        model: "Campus 00",
        img: "https://i8.amplience.net/i/jpl/jd_H03474_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
      {
        brand: "Nike",
        model: "Dunk Remastered",
        img: "https://i8.amplience.net/i/jpl/jd_392856_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
      {
        brand: "Nike",
        model: "React Vision",
        img: "https://i8.amplience.net/i/jpl/jd_356016_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
      {
        brand: "New Balance",
        model: "550",
        img: "https://i8.amplience.net/i/jpl/jd_547786_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
      {
        brand: "Nike",
        model: "Air Force 1",
        img: "https://i8.amplience.net/i/jpl/jd_026402_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
      {
        brand: "Adidas",
        model: "YZY 700 MNVN",
        img: "https://i8.amplience.net/i/jpl/jd_596066_b?qlt=92&w=750&h=531&v=1&fmt=auto"
      },
    ]);
  }
};
