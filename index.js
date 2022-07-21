const app = require("./app")

app.get("route", (req, res) => {})

const PORT = process.env.PORT || 8888

app.listen(PORT, () => console.log(`Server Running On Port PORT ${PORT}`))
