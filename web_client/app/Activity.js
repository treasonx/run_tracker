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

  return declare([
    WidgetBase,
    TemplatedMixin
  ], {
    templateString: template,
    startup: function() {
      this.inherited(arguments);
    }
  });
});
