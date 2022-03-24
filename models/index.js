const User = require('./user');
const Dog = require('./dog');
const Activity = require('./activity');
const Booking = require('./booking')

//Links Dog to User Via User Id
Dog.belongsTo(User, {
  foreignKey: 'user_id',
  
});

//Tells Sequelize that User can have many Dogs
User.hasMany(Dog, {
  foreignKey: 'user_id',
 
});

//Links dog to booking via the Activity Model//
Dog.belongsToMany(Booking, { through: Activity, foreignKey: "dog_id" });

//Links booking to dog via the Activity Model//
Booking.belongsToMany(Dog, { through: Activity, foreignKey: "booking_id" });

module.exports = { User, Dog, Activity, Booking };

