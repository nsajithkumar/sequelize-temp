const users = require("../controllers/users.controller");

module.exports = (app) => {

    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    app.get("/users/readAll", users.readAll);

    app.post("/users/read", users.read);

    app.put("/users/create", users.create);

    app.patch("/users/update", users.update);

    app.delete("/users/delete", users.delete);

};