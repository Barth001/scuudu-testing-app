const request = require("supertest");
const app = require("../app");

describe("POST /", () => {

    describe("When pass fullname, email and message", () =>{

        it("should respond with 200 status code", (done) =>{

            const response = request(app).post("/api/v1/contact").send({
                fullName: "exmple",
                email: "example@gmail.com",
                message: "working.."
            });
            response.expect(200)
            done()
            
        })
    })
})

describe("POST /", () => {

    describe("When pass email address", () =>{

        it("should respond with 200 status code", (done) =>{

            const response = request(app).post("/api/v1/subscrib").send({
                email_address: "example@gmail.com",
            });
            response.expect(200)
            done()
            
        })
    })
})

