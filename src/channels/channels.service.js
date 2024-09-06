const {
  findall,
  findbyid,
  insert,
  edit,
  findchannelbyiduser,
} = require("./channel.repository");

const getall = async (name = "", user_id) => {
  const ch = await findall(name, user_id);
  return ch;
};

const getchannnelbyiduser = async (user_id) => {
  const channel = await findchannelbyiduser(user_id);
  return channel;
};

const getbyid = async (id, user_id) => {
  const ch = await findbyid(id, user_id);
  if(!ch){
      throw new Error("channel id not found");
      
  }
  return ch;
}

const create = async (channelsdata) => {
  const ch = await insert(channelsdata);
  return ch;
};

const update = async (id, channelsdata) => {
  await getbyid(id);
  const ch = await edit(id, channelsdata);
  return ch;
};

module.exports = {
  getall,
  getbyid,
  create,
  update,
  getchannnelbyiduser,
};
