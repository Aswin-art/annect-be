const { findallusers, finduserbyid } = require('./users.repeository');

const getall = async () => {
    const user = await findallusers();
    return user;
}

const getbyid = async (id) => {
    const user = await finduserbyid(id);
    if(!user){
        throw new Error("id users not found");
        
    }
    return user;
}

module.exports = {
    getall,
    getbyid,
}