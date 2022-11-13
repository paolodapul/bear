import request from "supertest";
import { server } from "../app";
import { validateParams } from "./user-handlers";

describe("User handler tests", () => {
  describe("When /users URL is called", () => {
    it("If query string parameters are correct, it should return the query params as JSON", async () => {
      const res = await request(server).get("/users?name=Tomas");
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe(
        JSON.stringify([
          {
            id: 1,
            email: "Kellen_Thompson44@yahoo.com",
            name: "Tomas Wisozk I",
          },
        ])
      );
    });

    it("If query params are incorrect, it should return a 400 status error", async () => {
      const req = request(server);
      const res = await req.get("/users?id=Bear");
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
