import { IPublisher, IResultPaginated } from "../../../dtos";
import { IPublisherRepository } from "../../IPublisherRepository";

import { prismaClient } from "../../../libs";
import { resultPaginated } from "../../../helpers";

export class PrismaPostRepository implements IPublisherRepository {
  private repository = prismaClient.publisher;

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    const publishers = await this.repository.findMany();
    console.log("test", publishers);
    const result = await resultPaginated(publishers, page, perPage);
    return result;
  }

  async findById(id: string): Promise<IPublisher | null> {
    const post = await this.repository.findFirst({
      where: { id },
    });
    return post ?? null;
  }
}
