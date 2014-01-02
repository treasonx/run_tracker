define([
  'intern!bdd',
  'intern/chai!expect',
  'app/Activity'
], function(
  b,
  expect,
  Activity
) {
  'use strict';

  b.describe('Activity', function() {
    b.it('should be sane', function() {
      expect(Activity).to.be.true();
    });
  });



});
