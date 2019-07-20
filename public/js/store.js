/*jshint unused:false */

(function (exports) {

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: async function () {
			return fetch('/api/todos').then(function(response) {
				return response.json();
			}).then(function(jsonData) {
				console.log(jsonData);
				return jsonData;
			});
			// return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		},
		save: function (todos) {
			// localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
			fetch('/api/todos', {
			    method: 'PUT',
				headers: {
			      'Accept': 'application/json',
			      'Content-Type': 'application/json'
			    },
			    body: JSON.stringify(todos)
			}).then(function(response) {
				return response.json();
			}).then(function(jsonData) {
				console.log(jsonData);
			});
		}
	};

})(window);