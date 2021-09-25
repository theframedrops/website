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

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord channel/server</a>
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

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
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

<a href="https://discord.theframedrops.com">Participate in this event by joining our Discord server</a>
        `.trim()
    },
    {
        id: 'minecraft-uhc',
        color: "green",
        start: getDate('2021 09 25 3:00 PM'),
        end: getDate('2021 09 25 5:00 PM'),
        name: "Minecraft Ultra Hardcore (UHC)",
        timed: true,
        backgroundImage: "/assets/minecraft.jpg",
        description: `
Ultra Hardcore (UHC) is a custom game mode where players do not regenerate health or respawn. Players must use potions, suspicious stews, golden apples, or enchanted golden apples to regenerate health.

We may also enable modifiers that make the game even more lively or play in teams, depending on streamer interest.

<a href="https://twitch.tv/NekoOverflow">@NekoOverflow on Twitch</a> hosts this event & it is open to all
        `.trim()
    },
    {
        id: 'jackbox',
        color: "red",
        start: getDate('2021 09 25 5:30 PM'),
        end: getDate('2021 09 25 8:00 PM'),
        name: "Jackbox Games",
        timed: true,
        backgroundImage: "/assets/jackbox.jpg",
        description: `
Jackbox games are a series of various party minigames that encourage making jokes and community participation.

There are a total of 7 Jackbox games currently, each with multiple subgames. We have a wide range of games to choose from!

<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> hosts this event & it is open to all
        `.trim()
    },
    {
        id: 'darksouls3',
        color: "yellow",
        start: getDate('2021 09 25 8:30 PM'),
        end: getDate('2021 09 26 12:00 AM'),
        name: "Dark Souls 3",
        timed: true,
        backgroundImage: "/assets/ds3.jpg",
        description: `
<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is going to be playing Dark Souls 3 with one of his friends.

They've already gotten to Pontiff so watch as they struggle to get past him!
        `.trim()
    },
    {
        id: 'variety',
        color: "brown",
        start: getDate('2021 09 26 12:00 AM'),
        end: getDate('2021 09 26 7:30 AM'),
        name: "Variety Gaming",
        timed: true,
        backgroundImage: "/assets/variety_gaming.png",
        description: `
<a href="https://twitch.tv/akillezii">@AkillezII on Twitch</a> and <a href="https://twitch.tv/reikaze">@Reikaze on Twitch</a> are going to take turns streaming a variety of gaming content on their channels!

Not sure which one is live? You can check <a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> to see which one of them is currently streaming. crutch will be sleeping, but will be mirroring whomever is live
        `.trim()
    },
    {
        id: 'lifeslide',
        color: "orange",
        start: getDate('2021 09 26 8:00 AM'),
        end: getDate('2021 09 26 10:00 AM'),
        name: "Lifeslide Competition",
        timed: true,
        backgroundImage: "/assets/lifeslide.jpg",
        description: `
Lifeslide is an atmospheric paper plane flight simulator with arcade gameplay.

We'll be competing in Lifeslide's "challenge mode" to see who can fly the riskiest in order to gain the most points!

We're <a href="https://twitch.tv/dreamteckstudio">joined by the developers of Lifeslide streaming on Twitch</a> and in VC competing with us!

Anyone is welcome to join our competition
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
].sort((day1, day2) =>
    day1.start - day2.start
)

export default val;
