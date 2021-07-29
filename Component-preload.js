//@ui5-bundle com/te/teProjects/Component-preload.js
sap.ui.require.preload({
	"com/te/teProjects/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/te/teProjects/model/models"],function(e,t,i){"use strict";return e.extend("com.te.teProjects.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"com/te/teProjects/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","com/te/teProjects/model/formatter"],function(e,t,o,n){"use strict";return e.extend("com.te.teProjects.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){var e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"com/te/teProjects/controller/MainView.controller.js":function(){sap.ui.define(["com/te/teProjects/controller/BaseController"],function(e){"use strict";return e.extend("com.te.teProjects.controller.MainView",{})});
},
	"com/te/teProjects/controller/Tiles.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("com.te.teProjects.controller.Tiles",{onInit:function(){var e=new t("../model/tiles.json");this.getView().setModel(e,"tiles")},onTilePress:function(e){if(e.substring(0,4)=="EXT-"){var t=JSON.parse(this.getView().getModel("tiles").getJSON()).find(t=>{if(t.route===e){return t}});sap.m.URLHelper.redirect(t.url)}else{this.getOwnerComponent().getRouter().navTo(e)}}})});
},
	"com/te/teProjects/controller/countdown/Countdown.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("com.te.teProjects.controller.countdown.Countdown",{onInit:function(){this.oTimer={nDays:0,nHours:0,nMinutes:0,nSeconds:0};var e=new t(this.oTimer);this.getView().setModel(e,"timer");setInterval(this.calculateTime.bind(this),1e3)},calculateTime:function(){var e=new Date("Dec 8 2021");var t=new Date;var o=e.getTime()-t.getTime();this.oTimer.nDays=Math.floor(o/(1e3*60*60*24));this.oTimer.nHours=Math.floor(o%(1e3*60*60*24)/(1e3*60*60));this.oTimer.nMinutes=Math.floor(o%(1e3*60*60)/(1e3*60));this.oTimer.nSeconds=Math.floor(o%(1e3*60)/1e3);this.getView().getModel("timer").setData(this.oTimer)}})});
},
	"com/te/teProjects/controller/covid/Covid.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/viz/ui5/api/env/Format","sap/viz/ui5/format/ChartFormatter"],function(t,e,i,o){"use strict";return t.extend("com.te.teProjects.controller.covid.Covid",{dataPath:"https://api.rootnet.in/covid19-in/stats/history",oVizFrame:null,onInit:function(){i.numericFormatter(o.getInstance());var t=o.DefaultPattern;var r=this.oVizFrame=this.getView().byId("idVizFrame");r.setVizProperties({plotArea:{dataLabel:{formatString:t.SHORTFLOAT_MFD2,visible:true}},valueAxis:{label:{formatString:t.SHORTFLOAT},title:{visible:false}},categoryAxis:{title:{visible:false}},title:{visible:false,text:"Covid Cases History"}});var a=new e(this.dataPath);r.setModel(a);var s=this.getView().byId("idPopOver");s.connect(r.getVizUid());s.setFormatString(t.STANDARDFLOAT)},onPressList:function(){this.getOwnerComponent().getRouter().navTo("second-list")},onPressGraph:function(){this.getOwnerComponent().getRouter().navTo("second-pie")}})});
},
	"com/te/teProjects/controller/covid/List.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(t,e){"use strict";return t.extend("com.te.teProjects.controller.covid.List",{dataPath:"https://api.rootnet.in/covid19-in/stats/Latest",onInit:function(){var t=new e(this.dataPath);this.getView().setModel(t,"Latest")}})});
},
	"com/te/teProjects/controller/covid/Pie.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/viz/ui5/api/env/Format","sap/viz/ui5/format/ChartFormatter"],function(t,e,i,a){"use strict";return t.extend("com.te.teProjects.controller.covid.Pie",{dataPath:"https://api.rootnet.in/covid19-in/stats/latest",oVizFrame:null,onInit:function(){i.numericFormatter(a.getInstance());var t=a.DefaultPattern;var r=this.oVizFrame=this.getView().byId("idVizFramepie");r.setVizProperties({legend:{title:{visible:false}},title:{visible:false}});var o=new e(this.dataPath);r.setModel(o);var n=this.getView().byId("idPopOverpie");n.connect(r.getVizUid());n.setFormatString(t.STANDARDFLOAT)}})});
},
	"com/te/teProjects/controller/vacc/Vacc.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("com.te.teProjects.controller.vacc.Vacc",{onInit:function(){var e=new t("../model/vacc.json");this.getView().setModel(e,"vacc");var r={table:true,calendar:false};var n=new t(r);this.getView().setModel(n,"view")},formatDate:function(e){return new Date(e)},formatState:function(e){var t=new Date;var r=new Date(e);if(r<t){return"Success"}else if(r>t){return"Warning"}else{return"Error"}}})});
},
	"com/te/teProjects/i18n/i18n.properties":'title=com.te.teProjects1\nappTitle=com.te.teProjects\nappDescription=App Description\n',
	"com/te/teProjects/i18n/i18n_en.properties":'title=Our TE Projects\nappTitle=Our TE Projects\nappDescription=SAPUI5 Projects for Beginners\n',
	"com/te/teProjects/i18n/i18n_en_US.properties":'',
	"com/te/teProjects/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"com.te.teProjects","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"rootView":{"viewName":"com.te.teProjects.view.MainView","type":"XML","async":true,"id":"idAppControl"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.te.teProjects.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.te.teProjects.view","controlId":"idAppControl","controlAggregation":"pages","async":true},"routes":[{"name":"RouteMainView","pattern":"RouteMainView","target":["TargetMainView"]},{"name":"Tiles","pattern":"","target":["Tiles"]},{"name":"first","pattern":"first","target":["Countdown"]},{"name":"second","pattern":"second","target":["Covid"]},{"name":"second-list","pattern":"second-list","target":["Covid-List"]},{"name":"second-pie","pattern":"second-pie","target":["Covid-Pie"]},{"name":"third","pattern":"third","target":["Vacc"]}],"targets":{"TargetMainView":{"viewType":"XML","viewLevel":1,"viewId":"idAppControl","viewName":"MainView"},"Tiles":{"viewType":"XML","viewName":"Tiles","viewId":"Tiles","controlId":"idAppControl"},"Countdown":{"viewType":"XML","viewName":"countdown.Countdown","viewId":"countdown.Countdown","controlId":"idAppControl"},"Covid":{"viewType":"XML","viewName":"covid.Covid","viewId":"covid.Covid","controlId":"idAppControl"},"Covid-List":{"viewType":"XML","viewId":"covid.List","viewName":"covid.List","controlId":"idAppControl"},"Covid-Pie":{"viewType":"XML","viewId":"covid.Pie","viewName":"covid.Pie","controlId":"idAppControl"},"Vacc":{"viewType":"XML","viewId":"vacc.Vacc","viewName":"vacc.Vacc","controlId":"idAppControl"}}}}}',
	"com/te/teProjects/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{}});
},
	"com/te/teProjects/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/te/teProjects/view/MainView.view.xml":' <mvc:View controllerName="com.te.teProjects.controller.MainView"\n  displayBlock="true"\n  xmlns="sap.m"\n  xmlns:mvc="sap.ui.core.mvc"><Shell id="_IDGenShell1"><App id="idAppControl" ></App></Shell></mvc:View>',
	"com/te/teProjects/view/Tiles.view.xml":'<mvc:View \n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"\n    xmlns:layout="sap.ui.layout"\n    controllerName="com.te.teProjects.controller.Tiles"><Page id="tiles" showHeader="false"><layout:VerticalLayout id="_IDGenVerticalLayout1" ><layout:HorizontalLayout id="_IDGenHorizontalLayout1" allowWrapping="true" content="{tiles>/}"><layout:content><GenericTile \n                        id="_IDGenGenericTile1" \n                        class="sapUiSmallMarginBeginEnd sapUiSmallMarginTopBottom"\n                        header="{tiles>title}"\n                        subheader="{tiles>subheader}"\n                        press="onTilePress(${tiles>route})"><TileContent id="_IDGenTileContent1" ><ImageContent id="_IDGenImageContent1" src="{tiles>icon}"/></TileContent></GenericTile></layout:content></layout:HorizontalLayout></layout:VerticalLayout></Page></mvc:View>',
	"com/te/teProjects/view/countdown/Countdown.view.xml":'<mvc:View \n    xmlns:cssgrid="sap.ui.layout.cssgrid" \n    xmlns:mvc="sap.ui.core.mvc" \n    xmlns="sap.m"\n    controllerName="com.te.teProjects.controller.countdown.Countdown"><Page id="countdown" showHeader="false"><cssgrid:CSSGrid \n            id="grid1"\n            gridTemplateColumns="1fr"\n            gridGap="1rem"><Image id="_IDGenImage1" src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"/><cssgrid:CSSGrid id="_IDGenCSSGrid1" gridTemplateColumns="1fr 1fr 1fr 1fr"><GenericTile id="_IDGenGenericTile1" class="sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout" header="Days"><TileContent id="_IDGenTileContent1"><NumericContent id="_IDGenNumericContent1" value="{timer>/nDays}" withMargin="false" valueColor="Critical"/></TileContent></GenericTile><GenericTile id="_IDGenGenericTile2" class="sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout" header="Hours"><TileContent id="_IDGenTileContent2"><NumericContent id="_IDGenNumericContent2" value="{timer>/nHours}" withMargin="false" valueColor="Error"/></TileContent></GenericTile><GenericTile id="_IDGenGenericTile3" class="sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout" header="Minutes"><TileContent id="_IDGenTileContent3"><NumericContent id="_IDGenNumericContent3" value="{timer>/nMinutes}" withMargin="false" valueColor="Good"/></TileContent></GenericTile><GenericTile id="_IDGenGenericTile4" class="sapUiTinyMarginBegin sapUiTinyMarginTop tileLayout" header="Seconds"><TileContent id="_IDGenTileContent4"><NumericContent id="_IDGenNumericContent4" value="{timer>/nSeconds}" withMargin="false" /></TileContent></GenericTile></cssgrid:CSSGrid></cssgrid:CSSGrid></Page></mvc:View>',
	"com/te/teProjects/view/covid/Covid.view.xml":'<mvc:View \n\tcontrollerName="com.te.teProjects.controller.covid.Covid"\n\txmlns="sap.m"\n    xmlns:viz="sap.viz.ui5.controls" \n    xmlns:mvc="sap.ui.core.mvc" \n    xmlns:viz.feeds="sap.viz.ui5.controls.common.feeds"\n    xmlns:viz.data="sap.viz.ui5.data" \n    height="100%"\n    displayBlock="true"><Page id="covid" showHeader="false"><Panel \n            id="_IDGenPanel1" \n            class="panelStyle"\n            expanded="true"\n            headerText="Data"\n            width="auto"></Panel><content><Button id="_IDGenButton1" text="Latest Count in List" press="onPressList" class="sapUiSmallMarginBeginEnd"/><Button id="_IDGenButton2" text="Latest Count by Graph" type="Accept" press="onPressGraph"/><viz:Popover id="idPopOver"></viz:Popover><viz:VizFrame id="idVizFrame" uiConfig="{applicationSet:\'fiori\'}" height=\'80%\' width="100%" vizType=\'line\'><viz:dataset><viz.data:FlattenedDataset id="_IDGenFlattenedDataset1" data="{/data}"><viz.data:dimensions><viz.data:DimensionDefinition id="_IDGenDimensionDefinition1" name="day" value="{day}" /></viz.data:dimensions><viz.data:measures><viz.data:MeasureDefinition id="_IDGenMeasureDefinition1" name="total" value="{summary/total}" /></viz.data:measures></viz.data:FlattenedDataset></viz:dataset><viz:feeds><viz.feeds:FeedItem id=\'valueAxisFeed\' uid="valueAxis" type="Measure" values="total" /><viz.feeds:FeedItem id=\'categoryAxisFeed\' uid="categoryAxis" type="Dimension" values="day" /></viz:feeds></viz:VizFrame></content></Page></mvc:View>',
	"com/te/teProjects/view/covid/List.view.xml":'<mvc:View\n    controllerName="com.te.teProjects.controller.covid.List"\n    xmlns="sap.m"\n    xmlns:mvc="sap.ui.core.mvc" \n    height="100%"><Page id="list" showHeader="false"><List id="_IDGenList1" \n            headerText="Total Cases: {Latest>/data/summary/total}"\n            items="{Latest>/data/regional}"\n            footerText="Latest Covid Count"><items><StandardListItem id="_IDGenStandardListItem1" \n                    title="{Latest>loc}"\n                    description="Total Cases: {Latest>totalConfirmed}"\n                    info="Deaths: {Latest>deaths}"/></items></List></Page></mvc:View>',
	"com/te/teProjects/view/covid/Pie.view.xml":'<mvc:View\n\tcontrollerName="com.te.teProjects.controller.covid.Pie"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns="sap.m"\n\theight="100%"\n    xmlns:viz="sap.viz.ui5.controls"\n    xmlns:viz.feeds="sap.viz.ui5.controls.common.feeds"\n    xmlns:viz.data="sap.viz.ui5.data"\n    displayBlock="true"><Page id="pie" showHeader="false"><viz:Popover id="idPopOverpie"></viz:Popover><viz:VizFrame id="idVizFramepie" uiConfig="{applicationSet: \'fiori\'}" height="100%" width="100%" vizType="pie"><viz:dataset><viz.data:FlattenedDataset id="_IDGenFlattenedDataset1" data="{/data/regional}"><viz.data:dimensions><viz.data:DimensionDefinition id="_IDGenDimensionDefinition1" name="loc" value="{loc}"/></viz.data:dimensions><viz.data:measures><viz.data:MeasureDefinition id="_IDGenMeasureDefinition1" name="totalConfirmed" value="{totalConfirmed}"/></viz.data:measures></viz.data:FlattenedDataset></viz:dataset><viz:feeds><viz.feeds:FeedItem id=\'valueAxisFeed\' uid="size" type="Measure" values="totalConfirmed" /><viz.feeds:FeedItem id=\'categoryAxisFeed\' uid="color" type="Dimension" values="loc" /></viz:feeds></viz:VizFrame></Page></mvc:View>',
	"com/te/teProjects/view/vacc/Vacc.view.xml":'<mvc:View\n\tcontrollerName="com.te.teProjects.controller.vacc.Vacc"\n\txmlns:mvc="sap.ui.core.mvc"\n    xmlns:unified="sap.ui.unified"\n\txmlns="sap.m"\n\tdisplayBlock="true"\n\theight="100%"><Page id="vacc"><customHeader><Toolbar id="_IDGenToolbar1" ><ToolbarSpacer id="_IDGenToolbarSpacer1" /><Title id="_IDGenTitle1" text="Vaccination Tracker" level="H2"/><ToolbarSpacer id="_IDGenToolbarSpacer2" /></Toolbar></customHeader><subHeader><Toolbar id="_IDGenToolbar2"><ToolbarSpacer id="_IDGenToolbarSpacer3"/><RadioButton id="_IDGenRadioButton1" valueState="Success" text="Table" selected="{view>/table}"/><RadioButton id="_IDGenRadioButton2" valueState="Warning" text="Calendar" selected="{view>/calendar}"/><ToolbarSpacer id="_IDGenToolbarSpacer4" /></Toolbar></subHeader><content><Table id="vaccinationTable"\n                items="{vacc>/}"\n                visible="{view>/table}"><columns><Column id="_IDGenColumn1" width="12rem"><Text id="_IDGenText1" text="Vaccination Name"/></Column><Column id="_IDGenColumn2" minScreenWidth="Tablet" demandPopin="true"><Text id="_IDGenText2" text="Company"/></Column><Column id="_IDGenColumn3" minScreenWidth="Tablet" demandPopin="true" hAlign="End"><Text id="_IDGenText3" text="Date Given/To Be Given"/></Column><Column id="_IDGenColumn4" minScreenWidth="Tablet" demandPopin="true" hAlign="End"><Text id="_IDGenText4" text="Type of Vaccination"/></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1"><cells><Text id="_IDGenText5" text="{vacc>vacc}"/><Text id="_IDGenText6" text="{vacc>company}"/><ObjectNumber \n                                id="_IDGenObjectNumber1" \n                                number="{vacc>date}"\n                                state="{\n                                    path: \'vacc>date\',\n                                    formatter: \'.formatState\'\n                                }"/><ObjectNumber id="_IDGenObjectNumber2" \n                                number="{vacc>type}"/></cells></ColumnListItem></items></Table><VBox id="_IDGenVBox1" class="sapUiSmallMargin" visible="{view>/calendar}"><SinglePlanningCalendar \n                    id="SPC1"\n                    class="sapUiSmallMarginTop"\n                    title="My Calendar"\n                    appointments="{path: \'vacc>/\'}"><views><SinglePlanningCalendarDayView id="_IDGenSinglePlanningCalendarDayView1"\n                            key="DayView"\n                            title="Day"/><SinglePlanningCalendarWorkWeekView id="_IDGenSinglePlanningCalendarWorkWeekView1" \n                            key="WorkWeekView"\n                            title="Work Week"/><SinglePlanningCalendarWeekView id="_IDGenSinglePlanningCalendarWeekView1"\n                            key="WeekView"\n                            title="Week"/><SinglePlanningCalendarMonthView id="_IDGenSinglePlanningCalendarMonthView1"\n                            key="MonthView"\n                            title="Month"/></views><appointments><unified:CalendarAppointment id="_IDGenCalendarAppointment1" \n                            title="{vacc>vacc}"\n                            text="{vacc>company}"\n                            type="{vacc>ctype}"\n                            startDate="{\n                                path: \'vacc>date\',\n                                formatter: \'.formatDate\'\n                            }"\n                            endDate="{\n                                path: \'vacc>date\',\n                                formatter: \'.formatDate\'\n                            }"></unified:CalendarAppointment></appointments></SinglePlanningCalendar></VBox></content></Page></mvc:View>'
});
