require([
  'app/summary',
  'dojo/text!/data/profile_summary.json',
  'dojo/store/Memory',
  'dojo/domReady!'
], function(Summary, jsonData, Store) {

  var data = JSON.parse(jsonData);

  var dataStore = new Store({
    data: data.summary.activities
  });

  var sum = new Summary({
    name: data.name,
    athlete_type: data.athlete_type,
    summary: data.summary,
    profile: data.profile,
    normal_picture: data.normal_picture,
    store:  dataStore
  }, 'summaryContainer');

  sum.startup();

});
