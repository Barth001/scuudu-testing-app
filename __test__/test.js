const request = require("supertest");
const app = require("../app");

// making a GET request to the app
describe("GET /", () => {
    it("App working correctly", (done) => {
        request(app).get("/api/v1/testing").expect("App is firing!", done);
    })
});