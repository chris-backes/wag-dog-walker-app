const { Calendar } = require('../models');
const { faker } = require('@faker-js/faker');

const day = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const calendarData = [
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: faker.datatype.number({ min: 1, max: 40 }),
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
  {
    day: day[faker.datatype.number({ min: 0, max: 6 })],
    time: `${faker.datatype.number({ min: 6, max: 20 })}:00`,
    walker_id: faker.datatype.number({ min: 1, max: 35 }),
    dog_id: null,
  },
];

const seedCalendars = () => Calendar.bulkCreate(calendarData);

module.exports = seedCalendars;
