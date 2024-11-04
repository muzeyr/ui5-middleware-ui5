sap.ui.define(
	["./BaseController", "sap/m/MessageBox"],
	function (BaseController, MessageBox) {
		"use strict";

		return BaseController.extend("uzi.app.controller.Main", {
			goAppMM: function () {
				this.getRouter().navTo("mm");
			},
			goAppSD: function () {
				this.getRouter().navTo("sd");
			},
		});
	}
);
