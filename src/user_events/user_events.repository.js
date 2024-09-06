const prisma = require("../db/index");

const findall = async () => {
  const ue = await prisma.user_events.findMany({
    include:{
      events:true,
      users:true,
    },
    orderBy:{
      created_at: 'desc'
    }
  })
  return ue;
}

const getById = (user_id) =>
  prisma.user_events.findUnique({
    where: {
      user_id: user_id,
    },
    include: {
      events: true,
    },
  });

const updateStatus = (updated_user_event_status) =>
  prisma.user_events.update({
    where: {
      id: updated_user_event_status.user_id,
    },
    data: {
      ...updated_user_event_status,
    },
  });

const insert = (user_id, event_id) =>
  prisma.user_events.create({
    data: {
      user_id: user_id,
      event_id: event_id,
      status: false,
    },
  });

module.exports = {
  getById,
  insert,
  updateStatus,
  findall
};
