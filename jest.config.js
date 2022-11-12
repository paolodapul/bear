module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "dist"],
  verbose: true,
};
