const User = require('./User');
const Font = require('./Font');
const Letter = require('./Letter');

// user and letter have a one to many relationship
User.hasMany(Letter, {
    foreignKey: 'user_id'
});

Letter.belongsTo(User, {
    foreignKey: 'user_id'
});

// font and letter have a one to many relationship
Font.hasMany(Letter, {
    foreignKey: 'font_id'
});

Letter.belongsTo(Font, {
    foreignKey: 'font_id'
});

module.exports = {
    User,
    Font,
    Letter
}
