/* eslint-disable no-trailing-spaces */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.te.teProjects.controller.covid.List", {

        dataPath: "https://api.rootnet.in/covid19-in/stats/Latest", 

        onInit: function () {
            var oDataModel = new JSONModel(this.dataPath);
            this.getView().setModel(oDataModel, "Latest");
        }

	});
});