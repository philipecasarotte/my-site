describe("Home", function() {	
	beforeEach(function () {
	    jasmine.getFixtures().fixturesPath = "../../";  // path to your templates
	    jasmine.getFixtures().load('index.php');   // load a template
	});
	
	describe('when click on Full Bio button', function() {
		it('should add selected class in .breadcrumb a', function() {
			$("a[href$='#bio']").trigger("click");
			expect($(".breadcrumb > a[href$='#bio']").hasClass('selected')).toBe(true);
		});
	});
});
