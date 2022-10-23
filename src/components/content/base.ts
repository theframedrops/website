import type { Dayjs } from "dayjs";

export interface Event {
	date: Dayjs;
	start: string | Dayjs;
	end: string | Dayjs;

	name: string;
	backgroundImage?: string;
	description: string;

	top?: number;
	height?: number;
	leftPercentage?: number;
	widthPercentage?: number;
};

export function slugify(s: string) {
	return s.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^a-z0-9\-]/g, "")
		.replace(/\-+$/g, "");
}
