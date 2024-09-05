const z = require("zod");

/**
 * Schema for inserting an event.
 * @typedef {Object} eventInsertSchema
 * @property {string} channel_id - The ID of the channel.
 * @property {string} category_id - The ID of the category.
 * @property {string} tag_id - The ID of the tag.
 * @property {string} name - The name of the event.
 * @property {string} description - The description of the event.
 * @property {string} image - The URL of the event image.
 * @property {string} location - The location of the event.
 * @property {boolean} is_paid - Indicates if the event is paid or not.
 * @property {number} price - The price of the event.
 * @property {string} status - The status of the event. Can be "PENDING", "ONGOING", or "DONE".
 * @property {string} link_group - The link group of the event.
 * @property {Date} event_date - The date of the event.
 */
const eventInsertSchema = z.object({
    channel_id: z.string(),
    category_id: z.string(),
    tag_id: z.string(),
    name: z.string(),
    description: z.string(),
    image: z.string().url(),
    location: z.string(),
    is_paid: z.boolean(),
    price: z.number().gt(-1),
    status: z.enum(["PENDING", "ONGOING", "DONE"]),
    link_group: z.string(),
    event_date: z.coerce.date(),
})

module.exports = eventInsertSchema;