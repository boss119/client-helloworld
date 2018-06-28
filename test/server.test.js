const supertest = require("supertest");
const expect = require('chai').expect;
const should = require('should');

// This agent refers to PORT where program is running.

const server = supertest.agent("http://localhost:7777");

// UNIT test begin

describe("SAMPLE unit test",function(){
  it("when a=5 and b=5, equal 10",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': 5,
      'b': 5
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(10);
      done();
    });
  });
  it("when a = -5, b = 5, equal 0",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': -5,
      'b': 5
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(0);
      done();
    });
  });
  it("when a = 5, b = -5, equal 0",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': 5,
      'b': -5
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(0);
      done();
    });
  });
  it("when a = 0, b = 0, equal 0",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': 0,
      'b': 0
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(0);
      done();
    });
  });
  it("when a = '5', b = '5', equal 10",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': '5',
      'b': '5'
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(10);
      done();
    });
  });
  it("when a = '5', b = 'a', equal 5",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': '5',
      'b': 'a'
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(5);
      done();
    });
  });
  it("when a = 'a', b = 'b, equal 0",function(done){
    //calling ADD api
    server
    .get('/add')
    .type('form')
    .send({
      'a': 'a',
      'b': 'b'
    })
    .set('Accept', 'application/json')
    .expect("Content-type",/json/)
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(0);
      done();
    });
  });
});
