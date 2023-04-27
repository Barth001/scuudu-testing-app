const request = require("supertest");
const app = require("../app");

describe("POST /", () => {

    describe("When pass fullname, email and message", function(){

        it("should respond with 200 status code", function(done) {
            this.timeout(20000)

            const response = request(app).post("/api/v1/contact").send({
                fullName: "Barth",
                email: "barth11@gmail.com",
                message: "working.."
            });
            response.expect(200, done)
            
        })
    })
})

describe("POST /", () => {

    describe("When pass email address", function(){

        it("should respond with 200 status code", function(done) {
            this.timeout(20000)

            const response = request(app).post("/api/v1/subscrib").send({
                email_address: "barth11@gmail.com",
            });
            response.expect(200, done)
            
        })
    })
})