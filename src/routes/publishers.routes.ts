import { Router } from "express";

import { findAllPublishersFactory } from "../usecases/Publisher/FindAllPublishers/FindAllPublishersFactory";
// import { findByIdPostFactory } from "../usecases/Publishers/FindByIdPost/FindByIdPostFactory";

const publisherRoutes = Router();

publisherRoutes.route("/").get((request, response) => {
  return findAllPublishersFactory().handle(request, response);
});

// publisherRoutes.route("/:id").get((request, response) => {
//   return findByIdPostFactory().handle(request, response);
// });

export { publisherRoutes };
