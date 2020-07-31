const app = require("../server");
const request = require("supertest")(app);
const pool = require('../modules/pool');

// Start with posting a new location
describe("POST /api/location", () => {
  it("responds with json", async (done) => {
    const res = await request
      .post("/api/location")
      .send({
        id: 1,
        description: "test location",
      })
      //.expect("Content-Type", /json/)
      .expect(201);
    expect(res.body).toEqual({
      id: 1,
      description: "test location",
    });
    done();
  });
});

describe("GET /api/location/", () => {
  it("responds with json", async (done) => {
    const res = await request
      .get("/api/location")
      .set("Accept", "application/json")
      // .expect("Content-Type", /json/)
			.expect(200);
		expect(typeof res.body).toBe('array');
		expect(res.body[0]).toEqual({
			id: 1,
			description: "test location",
		});
		done();
  });
});
