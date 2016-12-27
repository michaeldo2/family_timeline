var axios = require("axios");

function getTimelineEvents() {
	return axios.get('api/events')
	.then(function (response) {
		return response;
	})
	.catch(function (error) {
		console.log(error);
		return null;
	})
}

function createEvent(name, description, year) {
	return axios.post('api/family_event/', {
		name: name,
		event_description: description,
		year: year
	}, {
		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	});


}


module.exports = {
	getTimelineEvents: getTimelineEvents,
	createEvent: createEvent
}