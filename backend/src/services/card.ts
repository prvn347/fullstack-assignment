import { cardType } from "../types/type";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class cardService {
  async createCard(cardData: cardType) {
    try {
      const card = await prisma.card.create({
        data: {
          title: cardData.title,
          description: cardData.description,
          link: cardData.link,
        },
      });

      return card;
    } catch (error) {
      console.error("Error while creating card:", error);
      throw new Error("error while creating card");
    }
  }
  async getAllCards() {
    try {
      const cards = await prisma.card.findMany();
      return cards;
    } catch (error) {
      console.error("Error while getting cards:", error);
      throw new Error("error while getting cards");
    }
  }
  async getTitleCard(title: string) {
    try {
      const card = await prisma.card.findFirst({
        where: {
          title: title,
        },
        select: { id: true, title: true, description: true, link: true },
      });

      if (!card) {
        return "Card not found";
      }
      return card;
    } catch (error) {
      console.error("Error while getting a card:", error);
      throw new Error("error while getting a card");
    }
  }
}
