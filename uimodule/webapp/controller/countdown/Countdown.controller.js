/* eslint-disable no-trailing-spaces */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.teProjects.controller.countdown.Countdown", {

        onInit: function () {
            this.oTimer = {
                "nDays": 0,
                "nHours": 0,
                "nMinutes": 0,
                "nSeconds": 0
            };

            var oTimerModel = new JSONModel(this.oTimer);
            this.getView().setModel(oTimerModel, "timer");
            setInterval(this.calculateTime.bind(this), 1000);
            // this.calculateTime();
        },

        calculateTime: function () {
            var sTechedDate = new Date("Dec 8 2021");
            var sCurrentDate = new Date();
            var sDiff = sTechedDate.getTime() - sCurrentDate.getTime();
            this.oTimer.nDays = Math.floor(sDiff / (1000*60*60*24));
            this.oTimer.nHours = Math.floor((sDiff % (1000*60*60*24))/(1000*60*60));
            this.oTimer.nMinutes = Math.floor((sDiff % (1000*60*60))/(1000*60));
            this.oTimer.nSeconds = Math.floor((sDiff % (1000*60))/(1000));
            this.getView().getModel("timer").setData(this.oTimer);
        }

    });
});