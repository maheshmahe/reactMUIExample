import { memo } from 'react';
import { faker } from '@faker-js/faker';
function createRandomUser(){
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }
  const data = faker.helpers.multiple(createRandomUser, {
    count: 5000,
  });
export default data;
