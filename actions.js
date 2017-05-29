 import ReduxThunk from 'redux-thunk';
 
	

export const GOT_FLIGHT_DATA = "GOT_FLIGHT_DATA";
export const gotFlightData = (flightData) => {
	console.log("GOT THE FLIGHT DATA", flightData);
	return {
		
		type:GOT_FLIGHT_DATA,
		flightData:flightData,

		
	}

};



export function getFlightData(location) {
	return function(dispatch) {
	const url = new URL ('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8819842,-87.636888&radius=16000&keyword=airport&key=AIzaSyCKXaj1k3CcaIdVJl2QHtHlfAc3aFICb-chttps://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.8819842,-87.636888&radius=16000&keyword=airport&key=AIzaSyCKXaj1k3CcaIdVJl2QHtHlfAc3aFICb-c');

	return fetch(url, {}).then(response => {
			
			return response.json();
		}).then(flightData => {
			return dispatch(gotFlightData(flightData));
			 
		})
	}
}