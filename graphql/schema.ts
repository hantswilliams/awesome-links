// graphql/schema.ts

import { builder } from "./builder";
import "./types/Link"
import "./types/User"
import "./types/Image"

export const schema = builder.toSchema()
