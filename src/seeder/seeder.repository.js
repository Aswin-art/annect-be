const prisma = require("../db");
const categories = require("../../prisma/categories.json");
const user = require("../../prisma/users.json");
const follows = require("../../prisma/follows.json");
const tags = require("../../prisma/tags.json");
const events = require("../../prisma/events.json");
const channels = require("../../prisma/channels.json");
const favorites = require("../../prisma/favorites.json");
const user_events = require("../../prisma/user_events.json");

const seedRepo = async () => {
  console.log("Truncating all tables...");

  await prisma.user_events.deleteMany();
  console.log("Truncated table user_events...");

  await prisma.favorites.deleteMany();
  console.log("Truncated table favorites...");

  await prisma.follows.deleteMany();
  console.log("Truncated table follows...");

  await prisma.chats.deleteMany();
  console.log("Truncated table chats...");

  await prisma.events.deleteMany();
  console.log("Truncated table events...");

  await prisma.channels.deleteMany();
  console.log("Truncated table channels...");

  await prisma.categories.deleteMany();
  console.log("Truncated table categories...");

  await prisma.tags.deleteMany();
  console.log("Truncated table tags...");

  await prisma.users.deleteMany();
  console.log("Truncated table users...");

  console.log("Truncated all tables.");

  console.log("Seeding all tables");

  await prisma.users.createMany({
    data: user,
  });

  await prisma.tags.createMany({
    data: tags,
  });

  await prisma.categories.createMany({
    data: categories,
  });

  await prisma.channels.createMany({
    data: channels,
  });

  await prisma.events.createMany({
    data: events,
  });

  await prisma.follows.createMany({
    data: follows,
  });

  await prisma.favorites.createMany({
    data: favorites,
  });

  await prisma.user_events.createMany({
    data: user_events,
  });

  console.log("Seeded all tables!");
};

module.exports = {
  seedRepo,
};
