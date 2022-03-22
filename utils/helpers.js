var moment = require("moment");

module.exports = {
 
  format_date: (date) => {
    return moment(date).format("k:mm A M/D/YYYY");    
  },
  
};
