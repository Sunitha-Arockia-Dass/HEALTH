// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config()

// ℹ️ Connects to the database
require("./db")

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express")

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs")

const app = express()
const authMiddleware=require("./middleware/route-guard").isAuthenticated

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app)

const capitalize = require("./utils/capitalize")
const projectName = "Book-My-Life"

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`

app.use(authMiddleware)
// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes")
app.use("/", indexRoutes)

const authRoutes = require("./routes/auth.routes")
app.use("/auth", authRoutes)

const profileRoutes = require("./routes/profile.routes")
app.use("/profile", profileRoutes)

const healthRoutes = require("./routes/health.routes")
app.use("/health", healthRoutes)

const agendaRoutes = require("./routes/agenda.routes")
app.use("/agenda", agendaRoutes)


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app)

module.exports = app
