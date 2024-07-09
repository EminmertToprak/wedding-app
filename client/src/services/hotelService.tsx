import HotelModel from './models/hotelModel';

export async function GetHotels(
	take: number,
	skip: number
): Promise<HotelModel[]> {
	const response = await fetch(
		`${process.env.REACT_APP_SERVER_URI}/hotel/get?take=${take}&skip=${skip}`
	);
	const result: HotelModel[] = await response.json();
	return result;
}
