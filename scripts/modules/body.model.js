define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		defaults: {
			heading: 'Mockjax Example',
			date: new Date()
		}
	});
});