import type { Dayjs } from "dayjs";

export interface Event {
	startRelative?: string;
	start: string;
	end: string;
	overlappingCount?: number;
	overlappingIndex?: number;
	name: string;
	timed: boolean;
	backgroundImage?: string;
	description: string;
	height: number;
	top: number;
	left: string;
	width: string;
	relative: Dayjs;
};

export function slugify(s: string) {
	return s.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^a-z0-9\-]/g, "")
		.replace(/\-+$/g, "");
}
