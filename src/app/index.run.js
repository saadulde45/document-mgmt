(function() {
  'use strict';

  angular
    .module('documentMgmt')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
