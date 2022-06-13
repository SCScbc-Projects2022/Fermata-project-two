const seedUsers = require('./user-seeds');
const seedFonts = require('./font-seeds');
const seedLetters = require('./letter-seeds');
const sequelize = require('../config/connection');

async function seedDatabase() {
    await sequelize.sync({force: true});
    await seedUsers();
    console.log('\n--- SEEDED USERS ---\n');
    await seedFonts();
    console.log('\n--- SEEDED FONTS ---\n');
    await seedLetters();
    console.log('\n--- SEEDED DRAFTS ---\n');
    console.log('\n---SEEDED DATABASE VALUES---\n');
    process.exit();
}

seedDatabase();