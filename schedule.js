/**
 * @typedef Event
 * @prop {String} id - A unique ID used to share the schedule
 * @prop {String} color - The background color of event
 * @prop {Date} start - Time event ends
 * @prop {Date} end - Time event ends
 * @prop {String} name - Name of event
 * @prop {yes} timed. Required, just set "true"
 * @prop {String} description - More information about description
 * @prop {String} backgroundImage - Image to show in details header. Required.
 */

/**
 * @type {Event[]}
 */
const val = [
    {
        id: 'day1',
        color: "orange",
        end: new Date('2021-09-25T19:24:00'),
        name: "Birthday",
        start: new Date('2021-09-25T13:24:00'),
        timed: true,
        backgroundImage: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        // TODO: Make HTML injectable
        description: `
This is a test of what should be shown
        `.trim()
    }
]

export default val;
