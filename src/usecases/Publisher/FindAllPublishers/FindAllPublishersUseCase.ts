import { IPublisherRepository } from "../../../repositories";
import { IResultPaginated } from "./FindAllPublishersDTO";

export class FindAllPublishersUseCase {
  constructor(private postRepository: IPublisherRepository) {}

  async execute(page: number, perPage: number): Promise<IResultPaginated> {
    const result = await this.postRepository.findAll(page, perPage);
    return result;
  }
}
