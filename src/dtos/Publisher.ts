import { IBase } from "./Base";

export interface IPublisher extends IBase, IPublisherRequest {}

export interface IPublisherRequest {
  email: string | null;
  name: string | null;
}
