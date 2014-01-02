define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'app/Activity',
  'dojo/dom-attr',
  'dojo/number',
  'dojo/dom-construct',
  'dojo/text!./summary.html',
], function(
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
      this.activityWidgets = [];
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
    populateActivities: function() {
      var ele = this.activityListEle;
      var children = document.createDocumentFragment();
      var items = this.store.query({});
      var me = this;
      this.activityWidgets.forEach(function(w){w.destroy();});
      this.activityWidgets = [];
      domConstruct.empty(ele);

      items.forEach(function(item) {
        var div = document.createElement('div');
        children.appendChild(div);
        var w = new Activity(item, div);
        me.activityWidgets.push(w);
        w.startup();
      });

      ele.appendChild(children);
    },
    startup: function() {
      this.inherited(arguments);
      this.calorieEle.innerHTML = this.getCalories();
      this.distanceEle.innerHTML = this.getMiles();
      this.durationEle.innerHTML = this.getDuration();
      this.populateActivities();
    }

  });

});
