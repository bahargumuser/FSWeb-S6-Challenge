/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("films").truncate();
  await knex("characters").truncate();
  await knex("posts").insert([{}]);
};
