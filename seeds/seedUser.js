const { User } = require('../models/user');

const userData = [
  {
    first_name: 'John',
    last_name: 'Smith',
    phone_number: '0491-570-006',
    address: '67 Glen William Road, Jaggan',
    email: 'john@msn.com',
    password: '$10$7D0ebLWLtsaBcmZnAzFQs.ImQ5flFicKCwGSoszG2sCP4ixnFwLXq',
  },
  {
    first_name: 'James',
    last_name: 'Smith',
    phone_number: '0456-789-045',
    address: '8 Begley Street, Boogan',
    email: 'Jmes@live.com',
    password: 'eHekPc3UTIBgWc5',
  },
  {
    first_name: 'Robert',
    last_name: 'Williams',
    phone_number: '0491-570-156',
    address: '645 Isaac Road, Welshpool',
    email: 'kddailey@msn.com',
    password: 'jwNyQDGRS4OeMMP',
  },
  {
    first_name: 'Momoko',
    last_name: 'Brown',
    phone_number: '0491-570-157',
    address: '36 Frouds Road, Tarin Rock',
    email: 'Mom@icloud.com',
    password: '37cdaiZCVRxaTjq',
  },
  {
    first_name: 'Juan',
    last_name: 'Garcia',
    phone_number: '0491-570-158',
    address: '917 Balonne Street, Orton Park',
    email: 'mbsn@gmail.com',
    password: 'b2dadaByZhP4BFz',
  },
  {
    first_name: 'Jennifer',
    last_name: 'Jones',
    phone_number: '0491-570-160',
    address: '43 Garden Place Road, Buckrabanyule',
    email: 'Jenni@optonline.net',
    password: 'gMtDxbBJxAgVhce',
  },
  {
    first_name: 'George',
    last_name: 'Miller',
    phone_number: '0491-570-161',
    address: '764 Roseda Road, Splinter Creek',
    email: 'George@live.com',
    password: 'vuoLfpFrHcwDUIm',
  },
  {
    first_name: 'Michael ',
    last_name: 'Davis',
    phone_number: '0491-570-162',
    address: '92 Noalimba Avenue, Rollingstone',
    email: 'Michael@yahoo.ca',
    password: 'RDmnaFblxhXyH7M',
  },
  {
    first_name: 'Kishan ',
    last_name: 'Rodriguez',
    phone_number: '0491-570-163',
    address: '14 Ocean Parade, Warwick Dc',
    email: 'Kishan@comcast.net',
    password: 'j3bQv1csgp1oApK',
  },
  {
    first_name: 'Mayra',
    last_name: 'Walters',
    phone_number: '0491-570-164',
    address: '26 Hodgson St, Bendemeer',
    email: 'Mayra@live.com',
    password: 'YXLFFDPS41usZ1S',
  },
  {
    first_name: 'Luca',
    last_name: 'Wilson',
    phone_number: '0491-570-165',
    address: '95 Norton Street, Kadina',
    email: 'luca@msn.com',
    password: 'm0goiNUwtVLs5dr',
  },
  {
    first_name: 'Luca',
    last_name: 'Wilson',
    phone_number: '0491-570-165',
    address: '95 Norton Street, Kadina',
    email: 'luca@msn.com',
    password: 'm0goiNUwtVLs5dr',
  },
  {
    first_name: 'Oliver',
    last_name: 'Moore',
    phone_number: '0491-570-166',
    address: '82 Farnell Street, Gosnells',
    email: 'Oli@icloud.com',
    password: 'uQ9lU6nSUNG6Wsu',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
