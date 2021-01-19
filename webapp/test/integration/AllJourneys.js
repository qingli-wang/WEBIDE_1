/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 BusinessPartnerSet in the list
// * All 3 BusinessPartnerSet have at least one ToContacts

sap.ui.require([
	"sap/ui/test/Opa5",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/App",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/Browser",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/Master",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/Detail",
	"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZWQL_TEST_03.ZWQL_TEST_03.view."
	});

	sap.ui.require([
		"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/MasterJourney",
		"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/NavigationJourney",
		"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/NotFoundJourney",
		"ZWQL_TEST_03/ZWQL_TEST_03/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});