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

const getDate = str => dayjs(str + ' -7:00', 'YYYY MM DD h:mm A Z').toDate()

/**
 * @type {Event[]}
 */
const val = [
    {
        id: 'terraria',
        color: "brown",
        start: getDate('2021 09 25 4:00 AM'),
        end: getDate('2021 09 25 6:00 PM'),
        name: "Multiplayer Terraria",
        timed: true,
        backgroundImage: "/assets/terraria.jpg",
        description: `
The objective of this Terraria stream is to get from 0 to as far as possible during its duration on the mastermode difficulty

We'll probably get murdered a whole lot, and chaos will probably be plentiful, but we'll persevere!

<a href="https://twitch.tv/garablacktail">@garablacktail on Twitch</a> is hosting this event and is open to all
        `.trim()
    },
    {
        id: 'minecraft-achievement-hunt',
        color: "green",
        start: getDate('2021 09 25 10:00 AM'),
        end: getDate('2021 09 25 12:30 PM'),
        name: "Minecraft Achievement Hunt",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
The objective of achievement hunt is what it sounds like: each 3-4 person team will race to get the most achievements possible. The first team to score an achievement receives an additional point.

<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting & this is open to all
        `.trim()
    },
    {
        id: 'code-golf',
        color: "blue",
        start: getDate('2021 09 25 1:00 PM'),
        end: getDate('2021 09 25 2:30 PM'),
        name: "Code Golf",
        timed: true,
        backgroundImage: "/assets/code.jpg",
        description: `
Code Golfing is the concept of solving a coding problem in any language in as few of characters as possible.

We'll be competing on the same problems and trying to see who can get the lowest score!

<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is hosting and is open to all
        `.trim()
    },
    {
        id: 'minecraft-cave-poker',
        color: "green",
        start: getDate('2021 09 26 10:00 AM'),
        end: getDate('2021 09 26 12:30 PM'),
        name: "Minecraft Cave Poker",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Cave Poker is a Minecraft poker game, without specific cards, where players can mine for resources and then bet on who has collected the most. It's also been described as similar to "liar's dice."

<a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> hosts & event is open to all
        `.trim()
    },
    {
        id: 'minecraft-mine-a-chunk',
        color: "green",
        start: getDate('2021 09 26 1:00 PM'),
        end: getDate('2021 09 26 4:30 PM'),
        name: "Minecraft Mine-a-Chunk",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Mine-a-Chunk is a group speedrun challenge event where we try to mine out a 16x16 "chunk" of blocks within Minecraft

<a href="https://twitch.tv/AkillezII">@AkillezII on Twitch</a> hosts this event & it is open to all
        `.trim()
    }
]

export default val;
