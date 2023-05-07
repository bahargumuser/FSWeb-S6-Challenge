/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("posts", (tbl) => {
      tbl.increments("post_id");
    })
    .createTable("characters", (tbl) => {
      tbl.increments("character_id");
    })
    .createTable("films", (tbl) => {
      tbl.increments("film_id");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("films")
    .dropTableIfExists("characters")
    .dropTableIfExists("posts");
};
