const axios = require("axios")

const getAllUsersAppointments = async (req, res)=>{
    const { userId } = req.params;
    try {
        const results = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        const user = results.data
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = getAllUsersAppointments