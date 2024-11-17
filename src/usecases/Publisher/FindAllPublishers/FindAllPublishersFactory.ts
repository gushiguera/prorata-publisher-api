import { PrismaPostRepository } from "../../../repositories/implementations/prisma";
import { FindAllPublishersController } from "./FindAllPublishersController";
import { FindAllPublishersUseCase } from "./FindAllPublishersUseCase";

export const FindAllPublishersFactory = () => {
  const prismaPublisherRepository = new PrismaPostRepository();
  const findAllPublishersUseCase = new FindAllPublishersUseCase(
    prismaPublisherRepository
  );
  const findAllPublishersController = new FindAllPublishersController(
    findAllPublishersUseCase
  );

  return findAllPublishersController;
};
