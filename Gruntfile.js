module.exports=function(grunt){
	var fileList = [ "App/app.js", "App/Controller/homeController.js", "App/Controller/indexController.js","App/Directives/divDirective.js"];
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		 uglify: {
	         my_target: {
			    files: [{
			      src:fileList,
			      dest:"dest/app.min.js"
			    }]
			}
	   }
	});
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask("default",['uglify']);
};