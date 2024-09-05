const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: "mysql://root:Bima1203@localhost:3306/annect",
    },
  },
});

module.exports = prisma;
