// Dependencies
import angular from 'angular'
import uiBootstrap from 'angular-ui-bootstrap'

// Modules
import log from './log/log.module'
import account from './account/account.module'
import command from './command/command.module'
import menu from './menu/menu.module'

angular
  .module('pizzeriaApp', ['uiBootstrap', log.name, command.name, menu.name])