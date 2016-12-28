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

function requestLogin(username, password) {
	return axios.post('/login_action/', {
		username: username,
		password: password
	}, {
		headers: {'Content-Type': 'application/x-www-form-urlencoded'}
	});
}


function getCSRFToken() {
	var name = 'csrftoken';
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(
                  cookie.substring(name.length + 1)
                  );
                break;
            }
        }
    }
    return cookieValue;
}


module.exports = {
	getTimelineEvents: getTimelineEvents,
	createEvent: createEvent,
	getCSRFToken: getCSRFToken,
	requestLogin: requestLogin
}