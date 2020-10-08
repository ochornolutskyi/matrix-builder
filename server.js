const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) =>
   res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

app.listen(PORT, () => {
   console.log(`Server has been started on ${PORT} port`);
});