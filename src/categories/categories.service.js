const { findall, insert, edit } = require('./categories.repository');

const getall = async () => {
    const cg = await findall()
    return cg;
}

const create = async (categoriesdata) => {
    const cg = await insert(categoriesdata)
    return cg;
}

const update = async (id, categoriesdata) => {
    const cg = await edit(id, categoriesdata)
    return cg;
}

module.exports = {
    getall,
    create,
    update,
}