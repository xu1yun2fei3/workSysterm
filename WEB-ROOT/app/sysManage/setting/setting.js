ManageObj = function() {
	/* 搜索面板 */
	ManageObj.searchForm = null;

	/* viewport */
	ManageObj.viewport = null;

	/* 登录页面方案 */
	ManageObj.loginPageStyleStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'loginPageStyleId', 'loginPageStyleText' ],
		data : [ [ '1', '方案一' ], [ '2', '方案二' ], [ '3', '方案三' ], [ '4', '方案四' ] , [ '5', '方案五' ],
		         [ '6', '方案六' ], [ '7', '方案七' ], [ '8', '方案八' ], [ '9', '方案九' ] , [ '10', '方案十' ],
		         [ '11', '方案十一' ], [ '12', '方案十二' ], [ '13', '方案十三' ], [ '14', '方案十四' ] , [ '15', '方案十五' ], 
		         [ '16', '方案十六' ], [ '17', '方案十七' ], [ '18', '方案十八' ], [ '19', '方案十九' ] , [ '20', '方案二十' ],
		         [ '21', '方案二十一' ]]
	});

	/* 主题方案 */
	ManageObj.systemSkinStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'systemSkinId', 'systemSkinText' ],
		data : [ [ '', '默认主题（浅蓝色）' ], [ 'xtheme-gray-extend.css', '主题一（浅灰色）' ], [ 'xtheme-green.css', '主题二（蓝绿色）' ], [ 'xtheme-olive.css', '主题三（绿色）' ], [ 'xtheme-slickness2.css', '主题四（黑色）' ], [ 'xtheme-purple.css', '主题五（紫色）' ],[ 'xtheme-slate.css', '主题六（灰蓝色）' ]]
	});
	
	/* 后台主题 */
	ManageObj.houTaiStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'houTaiId', 'houTaiText' ],
		data : [ [ '1/index.html', '方案一' ], [ '2/index.html', '方案二' ], [ '3/index.html', '方案三' ], [ '4/index.html', '方案四' ], [ '5/index.vm', '方案五' ],
		         [ '6/index.vm', '方案六' ],[ '7/index.html', '方案七' ],[ '8/index.html', '方案八' ],[ '9/index.html', '方案九' ],[ '10/index.html', '方案十' ],
		         [ '11/index.html', '方案十一' ],[ '12/index.html', '方案十二' ],[ '13/index.html', '方案十三' ],[ '14/index.html', '方案十四' ],[ '15/index.html', '方案十五' ],
		         [ '16/index.html', '方案十六' ],[ '17/index.html', '方案十七' ],[ '18/index.html', '方案十八' ],[ '19/index.html', '方案十九' ],[ '20/index.html', '方案二十' ],
		         [ '21/index.html', '方案二十一' ],[ '22/index.html', '方案二十二' ],[ '23/index.html', '方案二十三' ],[ '24/index.html', '方案二十四' ],[ '25/index.html', '方案二十五' ],
		         [ '26/index.html', '方案二十六' ],[ '27/index.html', '方案二十七' ],[ '28/index.html', '方案二十八' ],[ '29/index.html', '方案二十九' ],[ '40/index.html', '方案四十' ]
		]
	});
	
	/* 前台主题 */
	ManageObj.qianTaiStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'qianTaiId', 'qianTaiText' ],
		data : [ [ '1/index.jsp', '方案一' ], [ '2/index.html', '2-通用' ], [ '3/index.html', '3-通用' ], [ '4/index.html', '4-通用' ], [ '5/index.html', '5-通用' ], 
		         [ '6/index.html', '6-婚庆' ] , [ '7/index.html', '7-通用' ] ,  [ '8/index.html', '8-通用' ] , [ '9/index.html', '9-通用' ] , [ '10/index.html', '10-通用' ],
		         [ '11/index.html', '11-通用' ] , [ '12/index.html', '12-通用、食品、订餐' ] ,  [ '13/index.html', '13-通用' ] , [ '14/index.html', '14-儿童' ] , [ '15/index.html', '15-通用' ],
		         [ '16/index.html', '16-通用' ] , [ '17/index.html', '17-食品、订餐' ] , [ '18/index.html', '18-房产、地产' ], [ '19/index.html', '19-服装、网购' ] , [ '20/index.html', '20-音乐' ] ,
		         [ '21/index.html', '21-摄影，旅游，户外' ],[ '22/index.html', '22-通用' ],[ '23/index.html', '23-通用' ],[ '24/index.html', '24-电影、摄影、艺术' ],[ '25/index.html', '25-食品、订餐、酒店、餐馆' ],
		         [ '26/index.html', '26-游戏' ],[ '27/index.html', '27-服装、购物' ],[ '28/index.html', '28-视频、图书、漫画'],[ '29/index.html', '29-教学、培训'],[ '30/index.html', '30-教学、培训、儿童'] ,
		         [ '31/index.html', '31-教学、培训、校园、学校'],[ '32/index.html', '32-电商，交易']
		       ]
	});
	
	/* 注册主题 */
	ManageObj.zhuCeStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'zhuCeId', 'zhuCeText' ],
		data : [ [ '1/index.jsp', '方案一' ] ,[ '2/index.html', '方案二' ],[ '3/index.html', '方案三' ],[ '4/index.html', '方案四' ],[ '5/index.html', '方案五' ],[ '6/index.html', '方案六' ],[ '7/index.html', '方案七' ] ]
	});
	
	/* 上部面板是否显示 */
	ManageObj.topPanDisplayStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'topPanDisplayId', 'topPanDisplayText' ],
		data : [ [ '1', '显示' ], [ '0', '隐藏' ]]
	});
	
	/* 下部面板是否显示 */
	ManageObj.southPanDisplayStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'southPanDisplayId', 'southPanDisplayText' ],
		data : [ [ '1', '显示' ], [ '0', '隐藏' ]]
	});
	
	/* 菜单显示方位 */
	ManageObj.menuRegionStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuRegionId', 'menuRegionText' ],
		data : [ [ '1', '左边' ], [ '2', '右边' ]]
	});
	
	/* 菜单折叠 */
	ManageObj.menuCollapseStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuCollapseId', 'menuCollapseText' ],
		data : [ [ '1', '可折叠' ], [ '0', '不可折叠' ]]
	});
	
	/* 菜单动态效果 */
	ManageObj.menuAnimateStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuAnimateId', 'menuAnimateText' ],
		data : [ [ '1', '使用' ], [ '0', '不使用' ]]
	});
	
	/* 菜单背景色 */
	ManageObj.menuBackgroundStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuBackgroundId', 'menuBackgroundText' ],
		data : [ [ '1', '使用' ], [ '0', '不使用' ]]
	});
	
	/* 注册新用户审批 */
	ManageObj.isApproveStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'isApproveId', 'isApproveText' ],
		data : [ [ '0', '不需要' ], [ '1', '需要' ]]
	});
	
	/* 新增，删除按钮放置位置 */
	ManageObj.buttonPlaceStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'buttonPlaceId', 'buttonPlaceText' ],
		//data : [ [ '0', '查询面板中' ], [ '1', 'gird的tbar中' ]]
		data : [ [ '1', 'gird的tbar中' ]]
	});
	
	/* 查询面板放置位置 */
	ManageObj.searchPlaceStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'searchPlaceId', 'searchPlaceText' ],
		data : [ [ '0', '北边' ], [ '1', '南边' ]]
	});
	
	ManageObj.loginViewTip = null;
	
	ManageObj.appViewTip = null;
	
	ManageObj.frontViewTip = null;
	
	ManageObj.registerViewTip = null;
	
	ManageObj.init();
};

/* 初始化组织界面 */
ManageObj.init = function() {
	/* 必须要加上这一句，否则没有报错提示信息 */
	Ext.QuickTips.init();
	ManageObj.loadData();
	ManageObj.newLoginViewTip();
	ManageObj.newAppViewTip();
	ManageObj.newFrontViewTip();
	ManageObj.newRegisterViewTip();
};

ManageObj.newLoginViewTip = function(){
	ManageObj.loginViewTip = new  Ext.ToolTip({
        id: 'loginViewTip',
        target: 'loginViewBu',
        anchor: 'left',
        html: null,
        width: 800,
        height: 500,
        autoHide: false,
        frame:true,
        border:true,
        closable: true,
        contentEl: 'loginViewTipContent'
    });
	
};

ManageObj.newAppViewTip = function(){
	ManageObj.appViewTip = new  Ext.ToolTip({
        id: 'appViewTip',
        target: 'appViewBu',
        anchor: 'left',
        html: null,
        width: 800,
        height: 500,
        autoHide: false,
        frame:true,
        border:true,
        closable: true,
        contentEl: 'appViewTipContent'
    });
	
};

ManageObj.newFrontViewTip = function(){
	ManageObj.frontViewTip = new  Ext.ToolTip({
        id: 'frontViewTip',
        target: 'frontViewBu',
        anchor: 'left',
        html: null,
        width: 800,
        height: 500,
        autoHide: false,
        frame:true,
        border:true,
        closable: true,
        contentEl: 'frontViewTipContent'
    });
	
};

ManageObj.newRegisterViewTip = function(){
	ManageObj.registerViewTip = new  Ext.ToolTip({
        id: 'registerViewTip',
        target: 'registerViewBu',
        anchor: 'left',
        html: null,
        width: 800,
        height: 500,
        autoHide: false,
        frame:true,
        border:true,
        closable: true,
        contentEl: 'registerViewTipContent'
    });
	
};

/* 初始化搜索表单 */
ManageObj.initSearchForm = function() {
	ManageObj.searchForm = new Ext.FormPanel({
		id : 'mySearchForm',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:1px;',
		frame : true,
		border : false,
		labelWidth : 120,
		autoScroll:true,
		items : [ {
			anchor : '97%',
			layout : 'column',
			labelSeparator : '：',
			labelAlign : 'right',
			items : [ {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'hidden',
					name : 'id',
					id : 'id',
					anchor : '98%'
				} ]
			},{
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '系统名称',
					name : 'systemName',
					id : 'systemName',
					anchor : '98%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '页脚',
					name : 'systemDesigner',
					id : 'systemDesigner',
					anchor : '98%'
				} ]
			}, {
				columnWidth : 0.9,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '登陆主题',
					store : ManageObj.loginPageStyleStore,
					valueField : "loginPageStyleId",
					displayField : "loginPageStyleText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'loginPageStyleHidden',
					editable : false,
					triggerAction : 'all',
					name : 'loginPageStyle',
					id : 'loginPageStyle',
					anchor : '98%',
					value : '',
					listeners: {
			            'select': function(){
			            	ManageObj.loginPageStyleChange();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'button',
					id : 'loginViewBu',
					anchor : '82%',
					text : 'preview',
					listeners: {
			            'click': function(){
			            	ManageObj.loginViewTip.show();
			            }
			        }
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : 'EXT主题',
					store : ManageObj.systemSkinStore,
					valueField : "systemSkinId",
					displayField : "systemSkinText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'systemSkinHidden',
					editable : false,
					triggerAction : 'all',
					name : 'systemSkin',
					id : 'systemSkin',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 0.9,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '后台主题',
					store : ManageObj.houTaiStore,
					valueField : "houTaiId",
					displayField : "houTaiText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'houTaiHidden',
					editable : false,
					triggerAction : 'all',
					name : 'houTai',
					id : 'houTai',
					anchor : '98%',
					value : '',
					listeners: {
			            'select': function(){
			            	ManageObj.appPageStyleChange();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'button',
					id : 'appViewBu',
					anchor : '82%',
					text : 'preview',
					listeners: {
			            'click': function(){
			            	ManageObj.appViewTip.show();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.9,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '前台主题',
					store : ManageObj.qianTaiStore,
					valueField : "qianTaiId",
					displayField : "qianTaiText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'qianTaiHidden',
					editable : false,
					triggerAction : 'all',
					name : 'qianTai',
					id : 'qianTai',
					anchor : '98%',
					value : '',
					listeners: {
			            'select': function(){
			            	ManageObj.frontPageStyleChange();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'button',
					id : 'frontViewBu',
					anchor : '82%',
					text : 'preview',
					listeners: {
			            'click': function(){
			            	ManageObj.frontViewTip.show();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.9,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '注册主题',
					store : ManageObj.zhuCeStore,
					valueField : "zhuCeId",
					displayField : "zhuCeText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'zhuCeHidden',
					editable : false,
					triggerAction : 'all',
					name : 'zhuCe',
					id : 'zhuCe',
					anchor : '98%',
					value : '',
					listeners: {
			            'select': function(){
			            	ManageObj.registerPageStyleChange();
			            }
			        }
				} ]
			}, {
				columnWidth : 0.1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'button',
					id : 'registerViewBu',
					anchor : '82%',
					text : 'preview',
					listeners: {
			            'click': function(){
			            	ManageObj.registerViewTip.show();
			            }
			        }
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '网站上部面板',
					store : ManageObj.topPanDisplayStore,
					valueField : "topPanDisplayId",
					displayField : "topPanDisplayText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'topPanDisplayHidden',
					editable : false,
					triggerAction : 'all',
					name : 'topPanDisplay',
					id : 'topPanDisplay',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '网站下部面板',
					store : ManageObj.southPanDisplayStore,
					valueField : "southPanDisplayId",
					displayField : "southPanDisplayText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'southPanDisplayHidden',
					editable : false,
					triggerAction : 'all',
					name : 'southPanDisplay',
					id : 'southPanDisplay',
					anchor : '98%',
					value : ''
				} ]
			} , {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '菜单方位',
					store : ManageObj.menuRegionStore,
					valueField : "menuRegionId",
					displayField : "menuRegionText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'menuRegionHidden',
					editable : false,
					triggerAction : 'all',
					name : 'menuRegion',
					id : 'menuRegion',
					anchor : '98%',
					value : ''
				} ]
			} , {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '菜单折叠',
					store : ManageObj.menuCollapseStore,
					valueField : "menuCollapseId",
					displayField : "menuCollapseText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'menuCollapseHidden',
					editable : false,
					triggerAction : 'all',
					name : 'menuCollapse',
					id : 'menuCollapse',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '菜单动态',
					store : ManageObj.menuAnimateStore,
					valueField : "menuAnimateId",
					displayField : "menuAnimateText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'menuAnimateHidden',
					editable : false,
					triggerAction : 'all',
					name : 'menuAnimate',
					id : 'menuAnimate',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '菜单背景',
					store : ManageObj.menuBackgroundStore,
					valueField : "menuBackgroundId",
					displayField : "menuBackgroundText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'menuBackgroundHidden',
					editable : false,
					triggerAction : 'all',
					name : 'menuBackground',
					id : 'menuBackground',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '注册后审批',
					store : ManageObj.isApproveStore,
					valueField : "isApproveId",
					displayField : "isApproveText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'isApproveHidden',
					editable : false,
					triggerAction : 'all',
					name : 'isApprove',
					id : 'isApprove',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '新增和删除按钮位置',
					store : ManageObj.buttonPlaceStore,
					valueField : "buttonPlaceId",
					displayField : "buttonPlaceText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'buttonPlaceHidden',
					editable : false,
					triggerAction : 'all',
					name : 'buttonPlace',
					id : 'buttonPlace',
					anchor : '98%',
					value : ''
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '查询面板位置',
					store : ManageObj.searchPlaceStore,
					valueField : "searchPlaceId",
					displayField : "searchPlaceText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'searchPlaceHidden',
					editable : false,
					triggerAction : 'all',
					name : 'searchPlace',
					id : 'searchPlace',
					anchor : '98%',
					value : ''
				} ]
			}
			]  
		} ],    
		buttons : [ {
			text : '保存',
			handler : function() {
				ManageObj.doSave();
			}
		}, {
			text : '重置',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
			}
		} , {
			text : '设置前台显示菜单',
			handler : function() {
				ManageObj.doFontDisplayMenu();
			}
		}]
	});
};

/* 初始化viewport */
ManageObj.initViewport = function() {
	ManageObj.viewport = new Ext.Viewport({
		id : 'viewport',
		layout : 'border',
		border : false,
		frame : false,
		items : [ {
			id : 'west-panel',
			layout : 'fit',
			split : false,
			autoScroll : false,
			border : false,
			region : 'center',
			items : [ ManageObj.searchForm ]
		} ]
	});
};

/* 初始化数据 */
ManageObj.loadData = function() {
	var nowStore = new Ext.data.JsonStore({
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'id', 'systemName', 'systemDesigner', 'loginPageStyle', 'systemSkin','systemSkinName' ,'topPanDisplay' , 'southPanDisplay',
		             'menuRegion' , 'menuCollapse' , 'menuAnimate','menuBackground','isApprove','qianTaiZhuTi','houTaiZhuTi','zhuCeZhuTi','buttonPlace','searchPlace'],
		proxy : new Ext.data.HttpProxy({
			url :  GLOBAL_APP_NAME + '/WEB-ROOT/app/sysManage/setting.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore',
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		},
		listeners : {
			load : function loadCallBack(store, records, options) {
				ManageObj.initSearchForm();
				ManageObj.initViewport();
				store.each(function(record) {
					document.all.id.value = record.get('id');
					document.all.systemName.value = record.get('systemName');
					document.all.systemDesigner.value = record.get('systemDesigner');
					
					document.all.loginPageStyle.value = ManageObj.loginPageStyleStore.getById( Number(record.get('loginPageStyle')) ).get('loginPageStyleText') ; 
					document.all.loginPageStyleHidden.value =  record.get('loginPageStyle');
					
					var loginPageStyleId = ManageObj.loginPageStyleStore.getById( Number(record.get('loginPageStyle')) ).get('loginPageStyleId');
					if( loginPageStyleId ){
						ManageObj.searchForm.findById('loginPageStyle').setValue( loginPageStyleId );
					}
					
					document.all.systemSkin.value =  record.get('systemSkinName');
					document.all.systemSkinHidden.value =  record.get('systemSkin');
					document.all.topPanDisplay.value = ManageObj.topPanDisplayStore.getById( Number(record.get('topPanDisplay')) ).get('topPanDisplayText') ;
					document.all.topPanDisplayHidden.value =  record.get('topPanDisplay');
					document.all.southPanDisplay.value = ManageObj.southPanDisplayStore.getById( Number(record.get('southPanDisplay')) ).get('southPanDisplayText') ;
					document.all.southPanDisplayHidden.value =  record.get('southPanDisplay');
					document.all.menuRegion.value = ManageObj.menuRegionStore.getById( Number(record.get('menuRegion')) ).get('menuRegionText') ;
					document.all.menuRegionHidden.value =  record.get('menuRegion');
					document.all.menuCollapse.value = ManageObj.menuCollapseStore.getById( Number(record.get('menuCollapse')) ).get('menuCollapseText') ;
					document.all.menuCollapseHidden.value =  record.get('menuCollapse');
					document.all.menuAnimate.value = ManageObj.menuAnimateStore.getById( Number(record.get('menuAnimate')) ).get('menuAnimateText') ;
					document.all.menuAnimateHidden.value =  record.get('menuAnimate');
					document.all.menuBackground.value = ManageObj.menuBackgroundStore.getById( Number(record.get('menuBackground')) ).get('menuBackgroundText') ;
					document.all.menuBackgroundHidden.value =  record.get('menuBackground');
					
					document.all.isApprove.value = ManageObj.isApproveStore.getById( Number(record.get('isApprove')) ).get('isApproveText') ;
					document.all.isApproveHidden.value =  record.get('isApprove');
					
					
					document.all.houTai.value = ManageObj.houTaiStore.getById( record.get('houTaiZhuTi') ).get('houTaiText') ;
					document.all.houTaiHidden.value =  record.get('houTaiZhuTi');
					
					
					var houTaiId = ManageObj.houTaiStore.getById( record.get('houTaiZhuTi') ).get('houTaiId');
					if( houTaiId ){
						ManageObj.searchForm.findById('houTai').setValue( houTaiId );
					}
					
					document.all.qianTai.value = ManageObj.qianTaiStore.getById( record.get('qianTaiZhuTi') ).get('qianTaiText') ;
					document.all.qianTaiHidden.value =  record.get('qianTaiZhuTi');
					
					var qianTaiId = ManageObj.qianTaiStore.getById( record.get('qianTaiZhuTi') ).get('qianTaiId');
					if( qianTaiId ){
						ManageObj.searchForm.findById('qianTai').setValue( qianTaiId );
					}
					
					document.all.zhuCe.value = ManageObj.zhuCeStore.getById( record.get('zhuCeZhuTi') ).get('zhuCeText') ;
					document.all.zhuCeHidden.value =  record.get('zhuCeZhuTi');
					
					var zhuCeId = ManageObj.zhuCeStore.getById( record.get('zhuCeZhuTi') ).get('zhuCeId');
					if( zhuCeId ){
						ManageObj.searchForm.findById('zhuCe').setValue( zhuCeId );
					}
					
					document.all.buttonPlace.value = ManageObj.buttonPlaceStore.getById( record.get('buttonPlace') ).get('buttonPlaceText') ;
					document.all.buttonPlaceHidden.value =  record.get('buttonPlace');
					
					document.all.searchPlace.value = ManageObj.searchPlaceStore.getById( record.get('searchPlace') ).get('searchPlaceText') ;
					document.all.searchPlaceHidden.value =  record.get('searchPlace');
					
					ManageObj.loginPageStyleChange();
					ManageObj.appPageStyleChange();
					ManageObj.frontPageStyleChange();
					ManageObj.registerPageStyleChange();
				});
			}
		},
		autoLoad : true
	});
};

ManageObj.doSave = function() {
	/* Ext表单验证 */
	if (!ManageObj.searchForm.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "输入项有误！请修改红色线提示处！");
		return;
	}
	
	/* form表单提交 */
	ManageObj.searchForm.getForm().submit({
		waitMsg : '数据提交中......',
		method : 'post',
		url : GLOBAL_APP_NAME+ '/WEB-ROOT/app/sysManage/setting.do?flag=doUpdateSubmit' + 
			 '&id=' +document.all.id.value + "&systemSkinName=" + document.all.systemSkin.value,
		success : function(form, action) {
			Ext.MessageBox.show({
						title : WARRING_WIN_TITLE,
						msg : "系统设置成功，请重新登录！",
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.INFO
					});
		},
		failure : function(form, action) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, action.result.msg);
		}
	});
}

ManageObj.doFontDisplayMenu = function(){
	ManageObj.setUserMenu( -1 );
}


ManageObj.setUserMenu = function(id) {
	var userMenuWindow = Ext.extend(Ext.Window, {
		collapsible : true,
		modal : true,
		width : 600,
		height : 430,
		autoScroll : true,
		defaults : {
			border : true
		},
		buttonAlign : 'center',
		closable : true,
		resizable : false,
		title : '前台显示菜单设置',
		html : "<iframe id='userMenuFrame' name='userMenuFrame' src='" + GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do?from=setting&userID=" + id + "' frameborder='0' width='100%' style='height:100%'></iframe>",
		doUpdateUserMenu : function() {
			var userMenuAl = window.frames['userMenuFrame'].getUserAllMenu1();
			ManageObj.setUserMenuSubmit(userMenuAl);
		},
		initComponent : function() {
			userMenuWindow.superclass.initComponent.call(this);
			this.addButton('提交', this.doUpdateUserMenu, this);
			this.addButton('返回', function() {
				ManageObj.uMenuWin.close();
			}, this);
		}
	});
	ManageObj.uMenuWin = new userMenuWindow();
	ManageObj.uMenuWin.setVisible(true);
};

/* 前台显示菜单设置提交 */
ManageObj.setUserMenuSubmit = function(userMenuAl) {
	Ext.Ajax.request({
		waitMsg : '数据提交中......',
		url : GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do",
		method : 'POST',
		success : function(response, options) {
			var responseArray = Ext.util.JSON.decode(response.responseText);
			Ext.MessageBox.show({
				title : '温馨提醒！',
				msg : responseArray.msg,
				buttons : Ext.MessageBox.OK,
				fn : function() {
					ManageObj.uMenuWin.close();
				},
				icon : Ext.MessageBox.INFO
			});
		},
		failure : function(response, options) {
			Ext.MessageBox.alert('温馨提醒！', "操作失败！");
		},
		headers : {
			'my-header' : 'foo'
		},
		params : {
			flag : "doUpdateFontDisplayMenu",
			userMenuAl : userMenuAl
		}
	});
};

ManageObj.loginPageStyleChange = function(){
     var picIndex = ManageObj.searchForm.findById('loginPageStyle').value ;
	 document.getElementById('loginViewTipImg').src = "/WEB-ROOT/skin/images/themePic/login/login"+picIndex+".jpg" ;
};

ManageObj.appPageStyleChange = function(){
    var picIndex = ManageObj.searchForm.findById('houTai').value ;
    picIndex = picIndex.substr(0, picIndex.indexOf('/'));
	document.getElementById('appViewTipImg').src = "/WEB-ROOT/skin/images/themePic/app/app"+picIndex+".jpg" ;
};

ManageObj.frontPageStyleChange = function(){
    var picIndex = ManageObj.searchForm.findById('qianTai').value ;
    picIndex = picIndex.substr(0, picIndex.indexOf('/'));
	document.getElementById('frontViewTipImg').src = "/WEB-ROOT/skin/images/themePic/front/front"+picIndex+".jpg" ;
};

ManageObj.registerPageStyleChange = function(){
    var picIndex = ManageObj.searchForm.findById('zhuCe').value ;
    picIndex = picIndex.substr(0, picIndex.indexOf('/'));
	document.getElementById('registerViewTipImg').src = "/WEB-ROOT/skin/images/themePic/register/register"+picIndex+".jpg" ;
};


