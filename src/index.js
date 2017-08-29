// Dependencies
import angular from 'angular'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import uiBootstrap from 'angular-ui-bootstrap'
import '../public/assets/css/styles.css'

// Modules
import log from './log/log.module'
import account from './account/account.module'
import commandModule from './command/command.module'
import menu from './menu/menu.module'

angular
  .module('pizzeriaApp', [uiBootstrap, log.name, commandModule.name])
  .config(($routeProvider) => {
      $routeProvider.otherwise({
          redirectTo : '/'
      });
});

