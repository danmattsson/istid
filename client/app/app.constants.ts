'use strict';
const angular = require('angular');

export default angular.module('istidApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
