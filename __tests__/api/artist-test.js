const frisby = require('frisby');

const { Joi } = frisby;

//POST TEST
it('should create an artist', ()=>{
  return frisby
    .post('http://localhost:8000/api/artists', {
      name: 'ITPTest'
    })
    .expect('status', 200)
    .expect('json', 'name', 'ITPTest')
    .expect('jsonTypes','id', Joi.number().required());
});

//also good to typically test validation
