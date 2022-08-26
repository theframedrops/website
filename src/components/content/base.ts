export interface Event {
	startRelative?: string;
	start: string;
	end: string;
	indent?: number;
	name: string;
	timed: boolean;
	backgroundImage?: string;
	description: string;
};

export function slugify(s: string) {
	return s.toLowerCase()
		.replace(/\s/g, "-")
		.replace(/[^a-z\-]/, "");
}
