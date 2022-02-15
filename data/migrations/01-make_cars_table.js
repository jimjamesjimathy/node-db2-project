exports.up = function (knex) {
  return knex.schema.createTable('cars', (tbl) => {
    tbl.increments()
    tbl.string('vin', 13).notNullable().unique()
    tbl.string('make', 35).notNullable()
    tbl.string('model', 35).notNullable()
    tbl.numeric('milage').unsigned().notNullable()
    tbl.string('title').defalutTo('unknown')
    tbl.string('transmission').defalutTo('unknown')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
 