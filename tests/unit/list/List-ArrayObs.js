define([
	"intern!object",
	"deliteful/list/List",
	"./resources/ListBaseTestsArrayObs"
], function (registerSuite, List, ListBaseTestsArrayObs) {

	registerSuite(ListBaseTestsArrayObs.buildSuite("list/List-ArrayObs", List));

});
