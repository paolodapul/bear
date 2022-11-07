import request from "supertest";
import { app } from "../app";
import { validateParams } from "./user-handlers";

describe("user handler tests", () => {
  it("Should return the query params as JSON", async () => {
    const res = await request(app).get("/test?name=Bear");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe(JSON.stringify({ name: "Bear" }));
  });

  it("Should return a 400 error if query params are incorrect", async () => {
    const req = request(app);
    const res = await req.get("/test?id=Bear");
    expect(() => validateParams({ id: "Bear" })).toThrow();
    expect(res.statusCode).toBe(400);
    expect(res.text).toBe(
      JSON.stringify({
        error: "Bad request",
        message: "You may have passed incorrect values on your query string.",
      })
    );
  });
});
