exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments()
    tbl.string('vin', 13).notNullable().unique()
    tbl.string('make', 35).notNullable()
    tbl.string('model', 35).notNullable()
    tbl.integer('milage').unsigned().notNullable()
    tbl.string('title').defaultTo('unknown')
    tbl.string('transmission').defaultTo('unknown')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
 