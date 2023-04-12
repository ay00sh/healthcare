const hospital = require("../models/model")
const getpage = (req, res) => {
    res.render("index");
};

const getregister= (req, res) => {
   res.render("register");
};

const getlogin= (req, res) => {
   res.render("login");
};
const postdata = (req, res) => {
    res.send(req.body)
    const {name,email,password} = req.body;
    const result = hospital.create({
        name,email,password
   } )
};

module.exports = {getpage,getregister,getlogin,postdata};