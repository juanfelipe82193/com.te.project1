/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
	Controller,
	JSONModel
) {
	"use strict";

	return Controller.extend("com.te.teProjects.controller.vacc.Vacc", {

        onInit: function() {
            var oVaccModel = new JSONModel("../model/vacc.json");
            this.getView().setModel(oVaccModel, "vacc");

            var oViewconfig = {
                "table": true,
                "calendar": false
            };

            var oViewModel = new JSONModel(oViewconfig);
            this.getView().setModel(oViewModel, "view");
        },

        formatDate: function (oDate) {
            return new Date(oDate);
        },

        formatState: function (oDate) {
            var oCurrentDate = new Date();
            var oInputDate = new Date(oDate);
            if (oInputDate < oCurrentDate) {
                return 'Success';
            } else if (oInputDate > oCurrentDate) {
                return 'Warning';
            } else {
                return 'Error';
            }
        }

	});
});