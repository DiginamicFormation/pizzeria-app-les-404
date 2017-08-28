// Dependencies
import angular from 'angular'

// Modules
import log from './log/log.module'
import account from './account/account.module'
import command from './command/command.module'
import menu from './menu/menu.module'

angular
  .module('pizzeriaApp', ['ui.bootstrap', log.name, command.name, menu.name])