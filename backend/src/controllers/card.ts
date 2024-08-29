import { cardService } from "../services/card";
import { cardType } from "../types/type";

export class cardController {
  cardservice = new cardService();
  async createCard(cardData: cardType) {
    try {
      return await this.cardservice.createCard(cardData);
    } catch (error) {
      return new Error("error while creating card.");
    }
  }
  async getAllCards() {
    try {
      return await this.cardservice.getAllCards();
    } catch (error) {
      return new Error("error while getting all cards");
    }
  }
  async getCardDetails(title: string) {
    try {
      return await this.cardservice.getTitleCard(title);
    } catch (error) {
      return new Error("error while getting a card ");
    }
  }
}
