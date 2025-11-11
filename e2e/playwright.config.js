export default {
  webServer: [
    {
      command: "npm run dev",
      url: "http://localhost:5173",
      reuseExistingServer: true,
      cwd: "../part5",
    },
  ],
  globalSetup: "./globalSetup.js",
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
};
