const request = require("supertest");
const app = require("../app.js");

// making a GET request to the app
describe("GET /", () => {
    it("App working correctly", (done) => {
        request(app).get("/").expect("App is firing!", done);
    })
});