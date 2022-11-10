import request from "supertest";
import { app } from "../app";
import { validateParams } from "./user-handlers";

describe("User handler tests", () => {
  describe("When /test URL is called", () => {
    it("If query string parameters are correct, it should return the query params as JSON", async () => {
      const res = await request(app).get("/test?name=Bear");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(JSON.stringify({ name: "Bear" }));
    });

    it("If query params are incorrect, it should return a 400 status error", async () => {
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
});
