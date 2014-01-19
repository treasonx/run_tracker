require([
	'app/summary',
	'app/activityRenderer',
	'dojo/_base/declare',
	'dojo/text!/data/profile_summary.json',
	'dojo/store/Memory',
	'dojo/store/Observable',
	'app/Activity',
	'dgrid/OnDemandList',
	'dgrid/Selection',
	'dgrid/extensions/DijitRegistry',
	'dijit/registry',
	'dojo/domReady!'
], function (
	Summary,
	activityRenderer,
	declare,
	jsonData,
	Store,
	observable,
	Activity,
	Grid,
	Selection,
	dijitRegistry,
	registry
	) {

	var data = JSON.parse(jsonData);
	var id = 0;

	data.summary.activities.forEach(function(a) {
		a.start_time = new Date (a.start_time);
		if(id === 0 ) {
			console.log(a);
		}
		a.id = id++;
	});

	var dataStore = new Store({
		data: data.summary.activities
	});

	var sum = new Summary({
		name: data.name,
		athlete_type: data.athlete_type,
		summary: data.summary,
		profile: data.profile,
		normal_picture: data.normal_picture
	}, 'summaryContainer');

	var list = new declare([Grid, dijitRegistry], {
		renderRow: function(data, options) {
			var a = registry.byId(data.id+"");
			if(!a) {
				a = new Activity(data);
				a.startup();
			}
			if(a.domNode == null) {
				debugger;
			}

			return a.domNode;
		}
	})({
		store: dataStore
	}, sum.activityListEle);


	sum.startup();
	list.startup();

});
