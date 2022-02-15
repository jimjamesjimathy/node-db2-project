// STRETCH
const cars = [
    {
        vin: 'JH4DC4440SS014645',
        make: 'honda',
        model: 'civic',
        milage: 55000,
        title: 'clean',
        transmission: 'manual',
    }, 
    {
        vin: 'JH4DB1642PS001515',
        make: 'toyota',
        model: '4runner',
        milage: 55000,
        title: 'salvage',
        transmission: 'manual',
    },
    {
        vin: '1FTEF14N5KNB30636',
        make: 'toyota',
        model: '4runner',
        milage: 56000,
        title: 'salvage',
        transmission: 'manual',
    }, 
    {
        vin: '5XYZUDLB7DG006717',
        make: 'ford',
        model: 'pinto',
        milage: 55000,
        transmission: 'automatic',
    }
];

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}