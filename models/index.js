const User = require('./User');
const Dog = require('./Dog');
const Activity = require('./Activity');
const Booking = require('./Booking');
const Message = require('./Message');

User.hasMany(Dog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Dog.belongsTo(User, {
  foreignKey: 'user_id',
});

//Links dog to booking via the Activity Model//
Dog.belongsToMany(Booking, { through: Activity, foreignKey: 'dog_id' });

//Links booking to dog via the Activity Model//
Booking.belongsToMany(Dog, { through: Activity, foreignKey: 'booking_id' });

User.hasMany(Message, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

//Links message to user via User Model//
Message.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Dog, Activity, Booking };
