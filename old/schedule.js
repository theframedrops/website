/**
 * @typedef Event
 * @prop {String} id - A unique ID used to share the schedule
 * @prop {String} color - The background color of event
 * @prop {Date} start - Time event ends
 * @prop {Date} end - Time event ends
 * @prop {String} name - Name of event
 * @prop {true} timed. Required, just set "true"
 * @prop {String} description - More information about description
 * @prop {String} backgroundImage - Image to show in details header. Required.
 */

const getDate = str => dayjs(str + ' -8:00', 'YYYY MM DD h:mm A Z').toDate()

/**
 * @type {Event[]}
 */
const val = [
    {
        id: 'minecraft-caving',
        color: "green",
        start: getDate('2022 01 01 1:00 PM'),
        end: getDate('2022 01 01 2:30 PM'),
        name: "Minecraft Caving / Ore Hunt",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Minecraft Caving / Ore Hunt is a game where players can mine for resources within a set amount of time and compete to mine the most! Points are tracked on a scoreboard in realtime.

<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> hosts & event is open to all

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    },
    {
        id: 'minecraft-maze-runs',
        color: "green",
        start: getDate('2022 01 01 2:30 PM'),
        end: getDate('2022 01 01 4:00 PM'),
        name: "Minecraft Maze Runs",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Minecraft Maze Runs features a large spooky maze with several parkour, puzzle, and endurance challenges hidden throughout! Participants can take turns going through the maze or watch other participants in spectator.

<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> hosts & event is open to all

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    },
    {
        id: 'lifeslide',
        color: "orange",
        start: getDate('2022 01 01 4:00 PM'),
        end: getDate('2022 01 01 6:00 PM'),
        name: "Lifeslide Competition",
        timed: true,
        backgroundImage: "/assets/lifeslide.jpg",
        description: `
Lifeslide is an atmospheric paper plane flight simulator with arcade gameplay.

We'll be competing in Lifeslide's "challenge mode" to see who can fly the riskiest in order to gain the most points!

<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> hosts & event is open to all

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    }
].sort((day1, day2) =>
    day1.start - day2.start
)

export default val;
