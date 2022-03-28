var moment = require('moment');

module.exports = {
  format_date: (date) => {
    return moment(date).format('h:mm A M/D/YYYY');
  },
};
