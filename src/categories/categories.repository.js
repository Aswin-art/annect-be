const prisma = require('../db');
const cuid = require('cuid')

const findall = async () => {
    const cg = await prisma.categories.findMany()
    return cg;
}

const insert = async (categoriesdata) => {
    const cg = await prisma.categories.create({
        data:{
            id: cuid(),
            name: categoriesdata.name,
        }
    })
    return cg;
}

const edit =async (id, categoriesdata) => {
    const cg = await prisma.categories.update({
        where:{
            id: id
        },
        data:{
            name: categoriesdata.name,
        }
    })
    return cg;
}

module.exports = {
    findall,
    insert,
    edit,
}