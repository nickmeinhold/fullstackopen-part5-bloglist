import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function globalSetup() {
  // Start backend
  const backendProcess = spawn("npm", ["run", "dev"], {
    cwd: join(__dirname, "../part4/blog"),
    stdio: "inherit",
  });

  // Start frontend
  const frontendProcess = spawn("npm", ["run", "dev"], {
    cwd: join(__dirname, "../part5"),
    stdio: "inherit",
  });

  // Give servers time to start
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Return cleanup function
  return async () => {
    backendProcess.kill();
    frontendProcess.kill();
  };
}
