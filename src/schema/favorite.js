const z = require("zod");

/**
 * favoriteInsertSchema represents the schema for inserting a favorite.
 * @typedef {Object} favoriteInsertSchema
 * @property {string} user_id - The ID of the user. Required.
 * @property {string} event_id - The ID of the event. Required.
 */
const favoriteInsertSchema = z.object({
    user_id: z.string({
        required_error: "user_id is required!"
    }).min(1, "user_id must not be empty!"),
    event_id: z.string({
        required_error: "event_id is required!"
    }).min(1, "event_id must not be empty!"),
});

module.exports = favoriteInsertSchema;