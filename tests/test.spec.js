const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../app");

chai.use(chaiHttp);
const appServer = chai.request(server).keepOpen();

describe("API Tests", () => {
  after(() => {
    appServer.close();
  });
  it("Health Check", (done) => {
    appServer.get("/api/health").end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.message).to.eql("API Is Running");
      done();
    });
  });
  it("Get Number of Employees", (done) => {
    appServer.get("/api/employees").end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(10);
      done();
    });
  });
  it("Get Peter Griffins Job", (done) => {
    appServer.get("/api/employees?lastName=Griffin").end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(1);
      expect(res.body[0].firstName).to.eql("Peter");
      expect(res.body[0].lastName).to.eql("Griffin");
      expect(res.body[0].email).to.eql("peter@gmail.com");
      expect(res.body[0].job).to.eql("Developer");
      expect(res.body[0].id).to.eql("9");
      done();
    });
  });
  it("Get Number of Employees Who Are In QA", (done) => {
    appServer.get("/api/employees?job=QA").end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(2);
      done();
    });
  });
  it("Get Employee 8 Information", (done) => {
    appServer.get("/api/employees/8").end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body.firstName).to.eql("Kimberly");
      expect(res.body.lastName).to.eql("Burgess");
      expect(res.body.email).to.eql("kim@gmail.com");
      expect(res.body.job).to.eql("Business Analyst");
      expect(res.body.id).to.eql("8");
      done();
    });
  });
});
