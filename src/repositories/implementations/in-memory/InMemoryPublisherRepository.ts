import { IPublisher } from "../../../dtos/Publisher";
import { IPublisherRepository } from "../../IPublisherRepository";
import { IResultPaginated } from "../../../dtos";
import { resultPaginated } from "../../../helpers/pagination";

export class InMemoryPublisherRepository implements IPublisherRepository {
  publishers: IPublisher[] = [];

  async findAll(page: number, perPage: number): Promise<IResultPaginated> {
    return await resultPaginated(this.publishers, page, perPage);
  }

  async findById(id: string): Promise<IPublisher | null> {
    const post = this.publishers.filter((obj) => obj.id === id)[0];
    return post ?? null;
  }
}
