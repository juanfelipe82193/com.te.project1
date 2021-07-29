/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.te.teProjects.controller.Tiles", {

        onInit: function () {
            var oTilesModel = new JSONModel("../model/tiles.json");
            this.getView().setModel(oTilesModel, "tiles");
        },

        onTilePress: function (oRoute) {
            if (oRoute.substring(0, 4) == "EXT-") {
                var oSelItem = JSON.parse(this.getView().getModel("tiles").getJSON()).find(item => {
                    if (item.route === oRoute) {
                        return item;
                    }
                });
                sap.m.URLHelper.redirect(oSelItem.url);
            } else {
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
        }

    });
});