const supertest = require("supertest");
const expect = require('chai').expect;
const should = require('should');

// This agent refers to PORT where program is running.

const server = supertest.agent("https://whispering-castle-34361.herokuapp.com/");

// UNIT test begin

describe("SAMPLE unit test",function(){
  it("when a=5 and b=5, equal 10",function(done){
    //calling ADD api
    server
    .get('/add')
    .query({
      'a': 5,
      'b': 5
    })
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
    .query({
      'a': -5,
      'b': 5
    })
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
    .query({
      'a': 5,
      'b': -5
    })
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
    .query({
      'a': 0,
      'b': 0
    })
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
    .query({
      'a': '5',
      'b': '5'
    })
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
    .query({
      'a': '5',
      'b': 'a'
    })
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
    .query({
      'a': 'a',
      'b': 'b'
    })
    .expect(200)
    .end(function(err,res){
      // expect(res.status).to.equal(200);
      console.log(res.body);
      expect(res.body.total).to.equal(0);
      done();
    });
  });
});
