const express = require('express')
const TodoRouter = express.Router()

TodoRouter.route('/').get( (req, res) => {
    res.send('all todo list')
})

TodoRouter.route('/:id').get( (req, res) => {
    res.send(`todo ${req.params.id}`)
})


TodoRouter.route('/').post( (req, res) => {
    res.send(`todo ${req.body.name} created`)
})


module.exports = TodoRouter