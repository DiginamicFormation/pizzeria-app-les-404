// Dependencies
import angular from 'angular'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import uiBootstrap from 'angular-ui-bootstrap'
import '../public/assets/css/styles.css'

// Modules
import log from './log/log.module'
import account from './account/account.module'
import command from './command/command.module'
import menu from './menu/menu.module'
import header from './header/header.component'

angular
    .module('pizzeriaApp', [uiBootstrap, log.name, menu.name])
    .component('headerComponent', header)
    .config(($routeProvider) => {
        $routeProvider.otherwise({
            redirectTo : '/'
        });
    });
