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


module.exports = {
	getTimelineEvents: getTimelineEvents
}