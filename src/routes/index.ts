import { Router } from "express";

import { PREFIX_ROUTE } from "../core/url"; // Prefix Global route
//* Routes *//
import { publisherRoutes } from "./publishers.routes";

const routes = Router();

routes.use(`${PREFIX_ROUTE}/publishers`, publisherRoutes);

export { routes };
