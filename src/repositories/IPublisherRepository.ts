import { IPublisher, IResultPaginated } from "../dtos";

export interface IPublisherRepository {
  findAll(page: number, perPage: number): Promise<IResultPaginated>;
  findById(id: string): Promise<IPublisher | null>;
}
