angular.module('systemic', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './view/home.html',
        controller: 'homeCtrl'
      })

      .state('academy', {
        url: '/academy',
        templateUrl: './view/academy.html'
      })

      .state('socialEvent', {
        url: '/socialEvent',
        templateUrl: './view/socialEvent.html'
      })

      .state('corporateEvent', {
        url: '/corporateEvent',
        templateUrl: './view/corporateEvent.html'
      })

      .state('team', {
        url: '/team',
        templateUrl: './view/team.html'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: './view/blog.html'
      })

      $urlRouterProvider
          .otherwise('/');

      });
