/**
 * @typedef Event
 * @prop {String} color
 * @prop {Date} end
 * @prop {Date} start
 * @prop {String} name
 * @prop {Boolean} timed
 * @prop {String} description
 * @prop {String} url
 */

/**
 * @type {Event[]}
 */
const val = [
    {
        color: "orange",
        end: new Date('2021-09-25T19:24:00'),
        name: "Birthday",
        start: new Date('2021-09-25T13:24:00'),
        timed: true,
        backgroundImage: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        description: `
This is a test of what should be shown
        `.trim()
    }
]

export default val;
