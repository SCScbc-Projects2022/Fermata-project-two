const User = require('./User');
const Font = require('./Font');
const Draft = require('./Draft');
const Sent = require('./Sent');

User.hasMany(Draft, {
    foreignKey: 'user_id'
});

Draft.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Sent, {
    foreignKey: 'user_id'
});

Sent.belongsTo(User, {
    foreignKey: 'user_id'
});

Font.hasMany(Draft, {
    foreignKey: 'font_id'
});

Draft.belongsTo(Font, {
    foreignKey: 'font_id'
});

Font.hasMany(Sent, {
    foreignKey: 'font_id'
});

Sent.belongsTo(Font, {
    foreignKey: 'font_id'
});