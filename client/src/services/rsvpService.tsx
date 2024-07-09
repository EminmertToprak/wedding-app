import RsvpModel from './models/rsvpModel';

export async function GetRsvps(
	take: number,
	skip: number
): Promise<RsvpModel[]> {
	const response = await fetch(
		`${process.env.REACT_APP_SERVER_URI}/rsvp/get?take=${take}&skip=${skip}`
	);
	const result: RsvpModel[] = await response.json();
	return result;
}
