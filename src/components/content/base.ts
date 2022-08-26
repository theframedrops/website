export interface Event {
	id: string;
	color: string;
	startRelative?: string;
	start: string;
	end: string;
	indent?: number;
	name: string;
	timed: boolean;
	backgroundImage?: string;
	description: string;
};
