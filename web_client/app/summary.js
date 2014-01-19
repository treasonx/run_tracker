define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'app/Activity',
	'dojo/dom-attr',
	'dojo/number',
	'dojo/dom-construct',
	'dojo/text!./summary.html'
], function (
  declare,
  WidgetBase,
  TemplatedMixin,
  Activity,
  domAttr,
  dojoNum,
  domConstruct,
  template) {

	return declare([
		WidgetBase,
		TemplatedMixin
	], {
		constructor: function() {
			this.inherited(arguments);
		},
		templateString: template,
		_format: function(val) {
			return dojoNum.format(val, {
				round: 0,
				places: 0
			});
		},
		getMiles: function() {
			return this._format(this.summary.distance * 0.00062137);
		},
		getCalories: function() {
			return this._format(this.summary.calories);
		},
		getDuration: function() {
			var seconds = this.summary.duration;
			var days = seconds / 86400;
			var daysLabel = days > 1 ? ' days ' : ' day ';
			var hours = seconds / 3600;
			var hoursLabel = hours > 1 ? ' hrs ' : ' hr ';
			var out = '';
			if(days) {
				out += dojoNum.format(days, {places:2}) + daysLabel;
			} else {
				out += dojoNum.format(hours, {places:2}) + hoursLabel;
			}

			return out;

		},
		startup: function() {
			this.inherited(arguments);
			this.calorieEle.innerHTML = this.getCalories();
			this.distanceEle.innerHTML = this.getMiles();
			this.durationEle.innerHTML = this.getDuration();
		}

	});

});
