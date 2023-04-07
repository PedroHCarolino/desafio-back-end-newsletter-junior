const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const readForm = async (req, res) => {
  try {
    const createdAt = new Date(req.query.createdAt)
    const result = await prisma.formsAnswers.findMany({
      where: {
        createdAt: {
          lte: createdAt,
          gte: createdAt
        }
      }
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const readDate = async (req, res) => {
  try {
    const dataInicio = new Date(req.query.dataInicio)
    const dataFim = new Date(req.query.dataFim)
    const result = await prisma.formsAnswers.findMany({
      where: {
        createdAt: {
          lte: dataInicio,
          gte: dataFim
        }
      }
    });
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

const createForm = async (req, res) => {
  try {
    const data = req.body; 
    // const result = await prisma.formsAnswers.findUnique({ where: data.email });
    // console.log(result)
    // if (!result)
    const formsAnswers = await prisma.formsAnswers.create({data})
    res.send(formsAnswers)
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  readForm,
  createForm,
  readDate
};
