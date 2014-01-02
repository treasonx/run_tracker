define([
  'app/Activity',
  'dojo/dom-construct',
  'dojo/dom-class'
], function(
  Activity,
  domConstruct,
  domClass
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


    describe('color coded activity type', function() {
      var colorMap = {
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

      var type;

      for(type in colorMap) {
        it('should be '+colorMap[type]+' for '+type, function() {
          data.type = type;
          activity = new Activity(data, ele);
          activity.startup();
          expect(domClass.contains(activity.domNode, colorMap[type])).toBeTruthy();
        });
      }

      it('should render unknown color as other', function() {
        data.type = 'blahpoothingers';
        activity = new Activity(data, ele);
        activity.startup();
        expect(domClass.contains(activity.domNode, colorMap.Other)).toBeTruthy();

      });

    });

  });
});
