import type { Dayjs } from "dayjs";

export interface Event {
	startRelative?: string;
	start: string;
	end: string;
	overlappingDays: Event[];
	name: string;
	timed: boolean;
	backgroundImage?: string;
	description: string;
	height: number;
	top: number;
	leftPercentage: number;
	widthPercentage: number;
	relative: Dayjs;
};

export function slugify(s: string) {
	return s.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^a-z0-9\-]/g, "")
		.replace(/\-+$/g, "");
}
