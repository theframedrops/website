import dayjs from "dayjs";
import dayjsFormatPlugin from "dayjs/plugin/advancedFormat";
import dayjsUtcPlugin from "dayjs/plugin/utc";
import dayjsTimezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(dayjsFormatPlugin);
dayjs.extend(dayjsUtcPlugin);
dayjs.extend(dayjsTimezonePlugin);

// Event times are listed in UTC
export default [
	{
		start: '2022 11 04 8:00 PM',
		end: '2022 11 04 9:00 PM',
		name: "Minecraft Minigolf",
		backgroundImage: "/assets/mc-minigolf.png",
		description: `
		Minecraft Minigolf features an 18-hole minigolf course built on fennifith's survival server. We'll play through the course and track scores - and possibly explore some other minigames in the area!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 04 9:00 PM',
		end: '2022 11 04 10:30 PM',
		name: "Minecraft Advancement Hunt",
		backgroundImage: "/assets/minecraft.jpg",
		description: `
		Minecraft Advancement Hunt is a team competition to score the most custom advancements as possible before the other team! The list of advancements will be released shortly before the event.
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 6:00 PM',
		end: '2022 11 05 8:00 PM',
		name: "Trifox First Playthrough w/ Dev Commentary",
		backgroundImage: "/assets/trifox.jpg",
		description: `
		Trifox is a twin-stick action-adventure game inspired by classic platformers that came out on October 14th 2022.
		<br><a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> is a huge fan of platformers, and will be playing the game for the first time with developer commentary!
		`.trim()
	},
	{
		start: '2022 11 05 8:00 PM',
		end: '2022 11 05 9:30 PM',
		name: "Minecraft Mega Bedwars",
		backgroundImage: "/assets/mc-bedwars.png",
		description: `
		Mega Bedwars is a team bedwars competition set in a custom dimension - based on the outer end island terrain!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 9:30 PM',
		end: '2022 11 05 10:30 PM',
		name: "Minecraft Endless Parkour",
		backgroundImage: "/assets/mc-endless-parkour.png",
		description: `
		Endless Parkour is an infinite, endless parkour map featuring unique biomes, structures, and redstone features. The objective is to complete as much parkour as possible without falling off, losing health, or getting smacked by a zombie!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 10:00 PM',
		end: '2022 11 06 1:00 AM',
		name: "Trifox Speedrunning Attempts",
		backgroundImage: "/assets/trifox.jpg",
		description: `
		Trifox is a A twin-stick action-adventure game inspired by classic platformers that came out on October 14th 2022 - it's a new game, but that won't deter <a href="https://twitch.tv/selcouthmind">@selcouthmind on Twitch</a> from speedrunning it.
		`.trim()
	},
	{
		start: '2022 11 05 10:30 PM',
		end: '2022 11 06 12:00 AM',
		name: "Tetris Effect: Connected",
		backgroundImage: "/assets/tetris_effect.jpg",
		description: `
		Tetris Effect: Connected is the latest Tetris game with dazzling graphics, challenging game modes, and more.
		<br>Join <a href="https://twitch.tv/techygrrrl">@techygrrrl on Twitch</a> to see her incredible capabilities in the game.
		`.trim()
	},
	{
		start: '2022 11 04 6:30 PM',
		end: '2022 11 04 8:00 PM',
		name: "Minecraft Chaotic Caving",
		backgroundImage: "/assets/mc-chaotic-caving.png",
		description: `
		Chaotic Caving is a timed spelunking adventure where teams compete to cave for special ores, find unique boss fights, loot boxes, and custom equipment scattered about the world!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 06 9:00 PM',
		end: '2022 11 06 10:30 PM',
		name: "Minecraft Chaotic Caving #2",
		backgroundImage: "/assets/mc-chaotic-caving.png",
		description: `
		Chaotic Caving is a timed spelunking adventure where teams compete to cave for special ores, find unique boss fights, loot boxes, and custom equipment scattered about the world!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 06 6:00 PM',
		end: '2022 11 06 9:00 PM',
		name: "Xonotic DM/CA/CTF",
		backgroundImage: "/assets/xonotic.png",
		description: `
		<a href="https://xonotic.org">Xonotic</a> is an arena-style first person shooter that combines interesting and unique features with well-balanced physics and gameplay.
		We'll be running a few rounds of DM, Clan Arena, and Capture the Flag modes!
		<br><a href="https://twitch.tv/fennifith">@fennifith on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 10:00 AM',
		end: '2022 11 05 11:30 AM',
		name: "Computer Science Sketchful",
		backgroundImage: "/assets/code.jpg",
		description: `
		<a href="https://sketchful.io">Sketchful</a> is a multiplayer pictionary game that we'll be playing with a set of generated Computer Science and Data Structures topics!
		<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 11:30 AM',
		end: '2022 11 05 1:00 PM',
		name: "CodinGame Escape Rooms",
		backgroundImage: "/assets/code.jpg",
		description: `
		<a href="https://escape.codingame.com/">Coding Escape</a> is a set of multiplayer escape room puzzles that combines combines programming, creativity and non-coding exercises.
		<br><a href="https://twitch.tv/qarnax_">@Qarnax_ on Twitch</a> is hosting this event and it is open to all.
		`.trim()
	},
	{
		start: '2022 11 05 3:00 AM',
		end: '2022 11 05 8:00 AM',
		name: "Programming with OdatNurd #1",
		backgroundImage: "/assets/code.jpg",
		description: `
		<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
		`.trim()
	},
	{
		start: '2022 11 05 8:00 AM',
		end: '2022 11 05 10:00 AM',
		name: "Lifeslide Speedrun w/ Dev Commentary",
		backgroundImage: "/assets/lifeslide.jpg",
		description: `
		Lifeslide is an atmospheric paper plane flight simulator with arcade gameplay.

		<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> will be attempting to do speedrun attempts throughout the two-hour block.

		We'll be <a href="https://dreamteck.io">joined by the developers of Lifeslide</a> who will be in VC hanging out and chatting with us!
		`.trim()
	},
	{
		start: '2022 11 06 3:00 AM',
		end: '2022 11 06 7:00 AM',
		name: "Programming with OdatNurd #2",
		backgroundImage: "/assets/code.jpg",
		description: `
		<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
		`.trim()
	},
	{
		start: '2022 11 07 3:00 AM',
		end: '2022 11 07 7:00 AM',
		name: "Programming with OdatNurd #3",
		backgroundImage: "/assets/code.jpg",
		description: `
		<a href="https://twitch.tv/OdatNurd">@OdatNurd on Twitch</a> is an amazing developer with a super friendly community. You won't want to miss the insights he provides while he develops neat stuff on stream!
		`.trim()
	},
	{
		start: '2022 11 06 10:00 AM',
		end: '2022 11 06 4:00 PM',
		name: "Gaming with CleaverEchsD",
		backgroundImage: "/assets/variety_gaming.png",
		description: `
		<a href="https://twitch.tv/cleaverechsd">@cleaverechsd on Twitch</a> will be playing various video games for charity!
		`.trim()
	},
	{
		start: '2022 11 06 4:00 PM',
		end: '2022 11 06 6:00 PM',
		name: "Gaming with GlitchButSmol",
		backgroundImage: "/assets/variety_gaming.png",
		description: `
		<a href="https://twitch.tv/glitchbutsmol">@GlitchButSmol on Twitch</a> will be playing various video games for charity!
		`.trim()
	},
	{
		start: '2022 11 06 12:00 AM',
		end: '2022 11 06 10:00 AM',
		name: "Dark Souls Cursed Speedrun",
		backgroundImage: "/assets/dark_souls.png",
		description: `
		Dark Souls is the notoriously difficult action RPG from FromSoft.
		<a href="https://twitch.tv/crutchcorn">@crutchcorn on Twitch</a> will be attempting to complete the game in one sitting with a friend, while chat is able to make donations in order to add things to the screen or otherwise make the game more challenging. It'll be a blast torturing this poor undead.
		`.trim()
	}
].map(({ start, end, ...rest }) => ({
	// convert start/end times from UTC to local timezone
	start: dayjs(start).utc(true).local().format("YYYY MM DD h:mm A"),
	end: dayjs(end).utc(true).local().format("YYYY MM DD h:mm A"),
	...rest,
	// Fixes tab ordering
})).sort((dayA, dayB) => {
	const dayAStart = dayjs(dayA.start).utc(true);
	const dayBStart = dayjs(dayB.start).utc(true);
	return dayAStart.isAfter(dayBStart) ? 1 : -1;
});
