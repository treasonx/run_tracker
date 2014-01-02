define([
  'app/Activity',
  'dojo/dom-construct'
], function(
  Activity,
  domConstruct
) {
  'use strict';


  describe('activity', function() {

    var data = {
      start_time: 'expected time',
      duration: 234455,
      total_distance: 345985.34
    };

    var ele = null;
    var activity = null;

    beforeEach(function() {
      if(activity) {
        activity.destroy();
      }
      if(ele) {
        domConstruct.destroy(ele);
      }
      ele = document.createElement('div');
      domConstruct.place(ele, document.body);
    });

    it('should be sane', function() {
      expect(Activity).toBeTruthy();
    });

    describe('static rendering', function() {
      beforeEach(function() {
        activity = new Activity(data, ele);
        activity.startup();
      });

      it('should render start time', function() {
        expect(activity.domNode.innerText).toContain(data.start_time);
      });

      it('should render duration', function() {
        expect(activity.domNode.innerText).toContain(data.duration);
      });

      it('should render total distance', function() {
        expect(activity.domNode.innerText).toContain(data.total_distance);
      });



    });





  });
});
