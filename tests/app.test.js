const request = require("supertest");
const app = require("../src/app");

describe("API", () => {
  test("GET / returns application message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      message: "DevOps CI/CD Demo API",
    });
  });

  test("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      status: "healthy",
    });
  });

  test("GET /version returns application version", async () => {
    const response = await request(app).get("/version");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("version");
  });
});
