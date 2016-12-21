
var app=angular.module('myapp', ['ngComponentRouter'])

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
    '<nav>\n' +
    '  <a ng-link="[\'Home\']">Home</a>\n' +
    '  <a ng-link="[\'About\']">About</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    {path: '/home/', name: 'Home', component: 'homeComponent', useAsDefault: true},
    {path: '/About/', name: 'About', component: 'aboutComponent' }
  ]
});


