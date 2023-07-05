const express = require("express")
const axios = require("axios")
const appointmentsRouter = express.Router()

appointmentsRouter.get('/:userId', async (req, res)=>{
    const { userId } = req.params;
    try {
        const results = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        const user = results.data
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
})

appointmentsRouter.get('/', async (req, res)=>{
    try {
        const results = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const posts = results.data
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
})



module.exports = appointmentsRouter