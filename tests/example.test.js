const request = require("supertest");
const app = require("../index");

describe("Example Endpoints", () => {
  beforeAll(async (done) => {
    //prepare tests

    done();
  });
  it("Example call", async () => {
    let res = await request(app).get("/Example").send();
    expect(res.statusCode).toEqual(200);
  });
});
