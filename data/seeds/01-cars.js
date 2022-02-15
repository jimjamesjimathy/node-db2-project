// STRETCH
const cars = [
    {
        vin: '1234567891013',
        make: 'honda',
        model: 'civic',
        milage: 55000,
        title: 'clean',
        transmission: 'manual',
    }, 
    {
        vin: '1234567891015',
        make: 'toyota',
        model: '4runner',
        milage: 55000,
        title: 'salvage',
        transmission: 'manual',
    },
    {
        vin: '1234567891017',
        make: 'toyota',
        model: '4runner',
        milage: 56000,
        title: 'salvage',
        transmission: 'manual',
    }, 
    {
        vin: '1234567891011',
        make: 'ford',
        model: 'pinto',
        milage: 55000,
        transmission: 'automatic',
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}