const {
  findallusersfollowbyid,
  findallchannelfollowersbyid,
  insert,
  deleteid,
  findall,
} = require("./follows.repository");
const { getbyid } = require("../channels/channels.service");

// const getall = async () => {
//     const follow = await findall();
//     return follow;
// }

const findfollowbyuserid = async (id) => {
  const follow = await findallusersfollowbyid(id);
  return follow;
};
const findfollowbychannelid = async (id) => {
  const follow = await findallchannelfollowersbyid(id);
  return follow;
};

const create = async (followdata, id) => {
  if (id === followdata.user_id) {
    throw new Error("You can't follow your own channel");
  }

  const channel = await getbyid(id);

  if (!channel) {
    throw new Error("Channel not found");
  }

  const existingFollow = await findall(followdata.user_id, followdata.channel_id,);
  
  if (existingFollow) {
    await deleteid(id);
  }

  const follow = await insert(followdata);

  return follow;
};

const deletefollow = async (id) => {
  await deleteid(id);
};

module.exports = {
  findfollowbyuserid,
  findfollowbychannelid,
  create,
  deletefollow,
  // getall,
};
