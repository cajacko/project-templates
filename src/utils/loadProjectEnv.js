const path = require("path");
const getProjectDir = require("./getProjectDir");

const projectDir = getProjectDir();
const envPath = path.join(projectDir, ".env");

require("dotenv").config({ path: envPath });
