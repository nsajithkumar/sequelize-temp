const User = require("../models/users.model");

exports.create = async (req, res) => {
    let user_id = req.body.user_id;
    let name = req.body.name;
    let email = req.body.email;
    let mobile_number = req.body.mobile_number;
    let createdOn = req.body.createdOn;
    let updatedOn = req.body.updatedOn;

    await User.create({
        user_id: user_id,
        name: name,
        email: email,
        mobile_number: mobile_number,
        createdOn: createdOn,
        updatedOn: updatedOn
    }).then((result) => {
        res.send({
            "status": 200,
            "message": "Inserted Succesfully",
            "userId": result.user_id
        });
    }).catch((err) => {
        res.send({
            "status": 500,
            "message": "Internal Error",
            "error": err
        });
    });
}

exports.readAll = async (req, res) => {
    await User.findAll({

    }).then((result) => {
        let users = [];
        result.forEach((res) => {
            users.push(res.dataValues);
        });
        res.send({
            "status": 200,
            "message": "Fetched Succesfully",
            "users": users
        });
    }).catch((err) => {
        res.send({
            "status": 500,
            "message": "Internal Error",
            "error": err
        });
    })
}

exports.read = async (req, res) => {
    let user_id = req.body.user_id;

    await User.findAll({
        where: {
            user_id: user_id
        }
    }).then((result) => {
        let users = [];
        result.forEach((data) => {
            users.push(data.dataValues);
        });
        res.send({
            "status": 200,
            "message": "Fetched Succesfully",
            "users": users
        });
    }).catch((err) => {
        res.send({
            "status": 500,
            "message": "Internal Error",
            "error": err
        });
    });
}

exports.update = async (req, res) => {
    let user_id = req.body.user_id;
    let name = req.body.name;
    let email = req.body.email;
    let mobile_number = req.body.mobile_number;

    await User.update({
        name: name,
        email: email,
        mobile_number: mobile_number
    }, {
        where: {
            user_id: user_id
        }
    }).then((result) => {
        res.send({
            "status": 200,
            "message": "Updated Succesfully",
        });
    }).catch((err) => {
        res.send({
            "status": 500,
            "message": "Internal Error",
            "error": err
        });
    })
}

exports.delete = async (req, res) => {
    let user_id = req.body.user_id;

    await User.destroy({
        where: {
            user_id: user_id
        }
    }).then((result) => {
        res.send({
            "status": 200,
            "message": "Deleted Succesfully",
        });
    }).catch((err) => {
        res.send({
            "status": 500,
            "message": "Internal Error",
            "error": err
        });
    })
}