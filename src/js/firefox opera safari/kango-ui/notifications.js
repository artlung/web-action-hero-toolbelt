kango.ui.Notification=function(a,b,c,d){this.superclass.apply(this,arguments);this.id=a;this.title=b;this.text=c;this.icon=d;this.tabId=-1};kango.ui.Notification.prototype=kango.oop.extend(kango.ui.NotificationBase,{id:"",title:"",text:"",icon:null,tabId:-1,show:function(){},close:function(){}});
kango.ui.Notifications=function(){this.superclass.apply(this,arguments);this._notifications={};this._notificationCounter=0;kango.addMessageListener("KangoNotification_show",kango.lang.bind(this._onNotificationShow,this));kango.addMessageListener("KangoNotification_close",kango.lang.bind(this._onNotificationClose,this));kango.addMessageListener("KangoNotification_click",kango.lang.bind(this._onNotificationClick,this));kango.browser.addEventListener(kango.browser.event.TAB_REMOVED,kango.lang.bind(this._onTabRemoved,
this));kango.browser.addEventListener(kango.browser.event.DOCUMENT_COMPLETE,kango.lang.bind(this._onDocumentComplete,this));kango.browser.addEventListener(kango.browser.event.BEFORE_NAVIGATE,kango.lang.bind(this._onBeforeNavigate,this))};
kango.ui.Notifications.prototype=kango.oop.extend(kango.ui.NotificationsBase,{_notifications:{},_notificationCounter:0,_onNotificationShow:function(a){this._fireNotificationEvent(a.data,kango.ui.Notification.prototype.event.Show)},_onNotificationClose:function(a){var b=a.data;this._fireNotificationEvent(b,kango.ui.Notification.prototype.event.Close);this._removeNotification(b);a.source.dispatchMessage("KangoNotifications_rearrange")},_onNotificationClick:function(a){this._fireNotificationEvent(a.data,
kango.ui.Notification.prototype.event.Click)},_onTabRemoved:function(a){this._removeNotificationForTab(a.tabId)},_onDocumentComplete:function(a){this._removeNotificationForTab(a.target.getId())},_onBeforeNavigate:function(a){this._removeNotificationForTab(a.target.getId())},_getTabById:function(a,b){kango.browser.tabs.getAll(function(c){for(var d=0;d<c.length;d++)if(c[d].getId()==a){b(c[d]);return}b(null)})},_removeNotificationForTab:function(a){for(var b=kango.object.getKeys(this._notifications),
c=0;c<b.length;c++){var d=b[c];if("undefined"!=typeof this._notifications[d]){var e=this._notifications[d];e.tabId==a&&(e.fireEvent(e.event.Close),this._removeNotification(d))}}},_fireNotificationEvent:function(a,b){var c=this._getNotificationById(a);null!=c&&c.fireEvent(b)},_generateId:function(){return(Math.random()+this._notificationCounter++).toString()},_getNotificationById:function(a){return this._notifications[a]||null},_registerNotification:function(a,b){this._notifications[b]=a},_removeNotification:function(a){delete this._notifications[a]},
_closeNotification:function(a){var b=this._getNotificationById(a);null!=b&&this._getTabById(b.tabId,function(b){null!=b&&b.dispatchMessage("KangoNotifications_close",a)})},_showNotification:function(a){var b=this._getNotificationById(a);null!=b&&kango.browser.tabs.getCurrent(function(c){b.tabId=c.getId();var d={id:a,caption:kango.getExtensionInfo().name,title:b.title,text:b.text,icon:b.icon};c.dispatchMessage("KangoNotifications_show",d)})},createNotification:function(a,b,c){var d=this,e=this._generateId(),
a=new kango.ui.Notification(e,a,b,c);a.show=function(){d._showNotification(e)};a.close=function(){d._closeNotification(e)};this._registerNotification(a,e);return a}});kango.NotificationsModule=function(){};kango.NotificationsModule.prototype.init=function(){kango.ui.notifications=new kango.ui.Notifications};"undefined"!=typeof kango&&"undefined"!=typeof kango.registerModule&&kango.registerModule(kango.NotificationsModule);
