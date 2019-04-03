const frisby = require('frisby');

// const { Joi } = frisby;
it('should return a 204 when successfully deleting a playlist', ()=>{
  return frisby
    .del('http://localhost:8000/api/playlist/6')
    .expect('status', 204);
});


it('should return a 404 when deleting a playlist that does not exist', ()=>{
  return frisby
    .del('http://localhost:8000/api/playlist/-1')
    .expect('status', 404);
});
