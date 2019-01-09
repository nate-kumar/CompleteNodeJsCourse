const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  })
})

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncSquare(3, (res) => {
    expect(res).toBe(9).toBeA('number');
    done();
  })
})

it('should expect some values', () => {
  // expect(12).toNotBe(12)
  // expect({name: 'Nathan'}).toBe({name: 'Nathan'})
  // expect([1,2,3]).toEqual([1,2,3])
  // expect([2,3,4]).toInclude(2);
  // expect([2,3,4]).toExclude(1);
  expect({
    name: 'Nathan',
    age: 29,
    location: 'Philadelphia'
  }).toInclude({
    age: 29
  })
})

it('should check for first and last name', () => {
  var user = {
    age: 29,
    location: 'Philadelphia'
  };
  var res = utils.setName(user, 'Nathan Kumar');
  
  expect(res).toInclude({firstName: 'Nathan', lastName: 'Kumar'});
})