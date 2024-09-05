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

const create = async (followdata) => {
  const channel = await getbyid(followdata.channel_id);

  if (!channel) {
    throw new Error("Channel not found");
  }

  if (channel.user_id === followdata.user_id) {
    throw new Error("You can't follow your own channel");
  }

  const existingFollow = await exist(followdata.user_id, followdata.channel_id);

  if (existingFollow) {
    await deleteid(existingFollow.id);
    return;
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
