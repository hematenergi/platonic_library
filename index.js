const express = require("express")

const app = express()

app.get("route", (req, res) => {})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server Running On Port PORT`))
