const seedUsers = require('./user-seeds');
const seedFonts = require('./font-seeds');
const seedDrafts = require('./draft-seeds');
const seedSent = require('./sent-seeds');
const sequelize = require('../config/connection');

async function seedDatabase() {
    await sequelize.sync({force: true});
    await seedUsers();
    console.log('\n--- SEEDED USERS ---\n');
    await seedFonts();
    console.log('\n--- SEEDED FONTS ---\n');
    await seedDrafts();
    console.log('\n--- SEEDED DRAFTS ---\n');
    await seedSent();
    console.log('\n--- SEEDED SENT ---\n');
    console.log('\n---SEEDED DATABASE VALUES---\n');
    process.exit();
}

seedDatabase();