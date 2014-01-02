define([
  'intern!bdd',
  'intern/chai!expect',
  'app/Activity',
  'dojo/dom-construct'
], function(
  b,
  expect,
  Activity,
  domConstruct
) {
  'use strict';

  b.describe('activity', function() {

    var data = {
      start_time: 'expected time',
      duration: 234455,
      total_distance: 345985.34
    };

    var ele = null;
    var activity = null;

    b.beforeEach(function() {
      if(activity) {
        activity.destroy();
      }
      if(ele) {
        domConstruct.destroy(ele);
      }
      ele = document.createElement('div');
      domConstruct.place(ele, document.body);
    });


    b.it('should be sane', function() {
      expect(Activity).to.be.ok;
    });

    b.describe('static rendering', function() {
      b.beforeEach(function() {
        activity = new Activity(data, ele);
        activity.startup();
      });

      b.it('should render start time', function() {
        expect(activity.domNode.innerText).to.have.string(data.start_time);
      });

      b.it('should render duration', function() {
        expect(activity.domNode.innerText).to.have.string(data.duration);
      });

      b.it('should render total distance', function() {
        expect(activity.domNode.innerText).to.have.string(data.total_distance);
      });

    });

  });

});
