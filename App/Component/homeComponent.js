app.component('homeComponent', {
	 template: '<h2>Home</h2> <br/> {{message}}<ng-outlet></ng-outlet>',
	 controller:'homeController'
});