const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Fucknut")
})

router.post('/register', (req, res) => {
    res.send({
        user: {
            email: req.body.email,
            password: req.body.password
        }
    })
})



module.exports = router;