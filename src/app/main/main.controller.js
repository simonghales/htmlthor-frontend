(function() {
  'use strict';

  angular
    .module('htmlthorFrontend')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.models = {
      direct: ''
    };

    vm.states = {
      tabs: {
        active: 'upload'
      }
    };

    vm.changeTab = changeTab;

    activate();

    function activate() {
    }

    function changeTab(tab) {
      vm.states.tabs.active = tab;
    }

  }
})();
