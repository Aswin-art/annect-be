const prisma = require('../db');
// const { findbyid } = require('../channels/channel.repository')

// const findall = async (user_id) => {
//     const follow = await prisma.follows.findMany({
//         where:{
//             user_id:{
//                 contains: user_id
//             }
            
//         },
//         skip: user_id,
//     })
//     return follow;
// }

const findallusersfollowbyid = async (user_id) => {
    const follow = await prisma.follows.findMany({
        where:{
            user_id: user_id,
        },
        include:{
            channels:true
        }
    })
    return follow;
}
const findallchannelfollowersbyid = async (channel_id) => {
    const follow = await prisma.follows.findMany({
        where:{
            channel_id: channel_id,
        },
        include:{
            users: true
        }
    })
    return follow;
}

const insert = async (followdata) => {
    
    const fl = await prisma.follows.create({
        data:{
            user_id: followdata.user_id,
            channel_id: followdata.channel_id,
        }
    })
    return fl;
}

const deleteid = async (id) => {
     await prisma.follows.delete({
        where:{
            id: id,
        },
    })
}

module.exports = {
    findallusersfollowbyid,
    findallchannelfollowersbyid,
    insert,
    deleteid,
    // findall,
}

// const channel = await prisma.channels.findUnique({
    //     where: {
    //         id: followdata.channel_id
    //     }
    // });

    // if (!channel) {
    //     throw new Error('Channel not found');
    // }

    // if (channel.user_id === followdata.user_id) {
    //     throw new Error('You cannot follow your own channel');
    // }