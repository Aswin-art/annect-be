const z = require("zod");

/**
 * userEventsInsertSchema
 *
 * @typedef {Object} userEventsInsertSchema
 * @property {string} user_id - The user ID. Required and must not be empty.
 * @property {string} event_id - The event ID. Required and must not be empty.
 * @property {string} tf_image - The tf_image. Required and must not be empty.
 * @property {boolean} status - The status of the user events. Required.
 */
const userEventsInsertSchema = z.object({
  user_id: z
    .string({ required_error: "user_id is required!" })
    .min(1, { message: "user_id must not be empty!" }),
  event_id: z
    .string({ required_error: "event_id is required!" })
    .min(1, { message: "event_id must not be empty!" }),
});

module.exports = userEventsInsertSchema;
