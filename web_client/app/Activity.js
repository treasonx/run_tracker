define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./activity.html',
], function(
  declare,
  WidgetBase,
  TemplatedMixin,
  template
) {

  var COLOR_MAP = {
    'Running': 'blue',
    'Cycling': 'green',
    'Mountain Biking': 'purple',
    'Walking': 'terques',
    'Hiking': 'blue',
    'Downhill Skiing': 'green',
    'Cross-Country Skiing': 'purple',
    'Snowboarding': 'terques',
    'Skating': 'blue',
    'Swimming': 'green',
    'Wheelchair': 'purple',
    'Rowing': 'terques',
    'Elliptical': 'blue',
    'Other': 'green'
  };

  return declare([
    WidgetBase,
    TemplatedMixin
  ], {
    templateString: template,
    postMixInProperties: function() {
      this.type_color = COLOR_MAP[this.type] || COLOR_MAP['Other'];
      this.inherited(arguments);
    }
  });
});
