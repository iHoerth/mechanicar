const axios = require("axios")

const getAllUsersIdAppointments = async (req, res)=>{
    try {
        const results = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const posts = results.data
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = getAllUsersIdAppointments