ManageObj = function() {
	/* ������� */
	ManageObj.searchForm = null;

	/* viewport */
	ManageObj.viewport = null;

	/* ��¼ҳ�淽�� */
	ManageObj.loginPageStyleStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'loginPageStyleId', 'loginPageStyleText' ],
		data : [ [ '1', '����һ' ], [ '2', '������' ], [ '3', '������' ], [ '4', '������' ] , [ '5', '������' ],
		         [ '6', '������' ], [ '7', '������' ], [ '8', '������' ], [ '9', '������' ] , [ '10', '����ʮ' ],
		         [ '11', '����ʮһ' ], [ '12', '����ʮ��' ], [ '13', '����ʮ��' ], [ '14', '����ʮ��' ] , [ '15', '����ʮ��' ], 
		         [ '16', '����ʮ��' ], [ '17', '����ʮ��' ], [ '18', '����ʮ��' ], [ '19', '����ʮ��' ] , [ '20', '������ʮ' ],
		         [ '21', '������ʮһ' ]]
	});

	/* ���ⷽ�� */
	ManageObj.systemSkinStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'systemSkinId', 'systemSkinText' ],
		data : [ [ '', 'Ĭ�����⣨ǳ��ɫ��' ], [ 'xtheme-gray-extend.css', '����һ��ǳ��ɫ��' ], [ 'xtheme-green.css', '�����������ɫ��' ], [ 'xtheme-olive.css', '����������ɫ��' ], [ 'xtheme-slickness2.css', '�����ģ���ɫ��' ], [ 'xtheme-purple.css', '�����壨��ɫ��' ],[ 'xtheme-slate.css', '������������ɫ��' ]]
	});
	
	/* ��̨���� */
	ManageObj.houTaiStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'houTaiId', 'houTaiText' ],
		data : [ [ '1/index.html', '����һ' ], [ '2/index.html', '������' ], [ '3/index.html', '������' ], [ '4/index.html', '������' ], [ '5/index.vm', '������' ],
		         [ '6/index.vm', '������' ],[ '7/index.html', '������' ],[ '8/index.html', '������' ],[ '9/index.html', '������' ],[ '10/index.html', '����ʮ' ],
		         [ '11/index.html', '����ʮһ' ],[ '12/index.html', '����ʮ��' ],[ '13/index.html', '����ʮ��' ],[ '14/index.html', '����ʮ��' ],[ '15/index.html', '����ʮ��' ],
		         [ '16/index.html', '����ʮ��' ],[ '17/index.html', '����ʮ��' ],[ '18/index.html', '����ʮ��' ],[ '19/index.html', '����ʮ��' ],[ '20/index.html', '������ʮ' ],
		         [ '21/index.html', '������ʮһ' ],[ '22/index.html', '������ʮ��' ],[ '23/index.html', '������ʮ��' ],[ '24/index.html', '������ʮ��' ],[ '25/index.html', '������ʮ��' ],
		         [ '26/index.html', '������ʮ��' ],[ '27/index.html', '������ʮ��' ],[ '28/index.html', '������ʮ��' ],[ '29/index.html', '������ʮ��' ],[ '40/index.html', '������ʮ' ]
		]
	});
	
	/* ǰ̨���� */
	ManageObj.qianTaiStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'qianTaiId', 'qianTaiText' ],
		data : [ [ '1/index.jsp', '����һ' ], [ '2/index.html', '2-ͨ��' ], [ '3/index.html', '3-ͨ��' ], [ '4/index.html', '4-ͨ��' ], [ '5/index.html', '5-ͨ��' ], 
		         [ '6/index.html', '6-����' ] , [ '7/index.html', '7-ͨ��' ] ,  [ '8/index.html', '8-ͨ��' ] , [ '9/index.html', '9-ͨ��' ] , [ '10/index.html', '10-ͨ��' ],
		         [ '11/index.html', '11-ͨ��' ] , [ '12/index.html', '12-ͨ�á�ʳƷ������' ] ,  [ '13/index.html', '13-ͨ��' ] , [ '14/index.html', '14-��ͯ' ] , [ '15/index.html', '15-ͨ��' ],
		         [ '16/index.html', '16-ͨ��' ] , [ '17/index.html', '17-ʳƷ������' ] , [ '18/index.html', '18-�������ز�' ], [ '19/index.html', '19-��װ������' ] , [ '20/index.html', '20-����' ] ,
		         [ '21/index.html', '21-��Ӱ�����Σ�����' ],[ '22/index.html', '22-ͨ��' ],[ '23/index.html', '23-ͨ��' ],[ '24/index.html', '24-��Ӱ����Ӱ������' ],[ '25/index.html', '25-ʳƷ�����͡��Ƶꡢ�͹�' ],
		         [ '26/index.html', '26-��Ϸ' ],[ '27/index.html', '27-��װ������' ],[ '28/index.html', '28-��Ƶ��ͼ�顢����'],[ '29/index.html', '29-��ѧ����ѵ'],[ '30/index.html', '30-��ѧ����ѵ����ͯ'] ,
		         [ '31/index.html', '31-��ѧ����ѵ��У԰��ѧУ'],[ '32/index.html', '32-���̣�����']
		       ]
	});
	
	/* ע������ */
	ManageObj.zhuCeStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'zhuCeId', 'zhuCeText' ],
		data : [ [ '1/index.jsp', '����һ' ] ,[ '2/index.html', '������' ],[ '3/index.html', '������' ],[ '4/index.html', '������' ],[ '5/index.html', '������' ],[ '6/index.html', '������' ],[ '7/index.html', '������' ] ]
	});
	
	/* �ϲ�����Ƿ���ʾ */
	ManageObj.topPanDisplayStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'topPanDisplayId', 'topPanDisplayText' ],
		data : [ [ '1', '��ʾ' ], [ '0', '����' ]]
	});
	
	/* �²�����Ƿ���ʾ */
	ManageObj.southPanDisplayStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'southPanDisplayId', 'southPanDisplayText' ],
		data : [ [ '1', '��ʾ' ], [ '0', '����' ]]
	});
	
	/* �˵���ʾ��λ */
	ManageObj.menuRegionStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuRegionId', 'menuRegionText' ],
		data : [ [ '1', '���' ], [ '2', '�ұ�' ]]
	});
	
	/* �˵��۵� */
	ManageObj.menuCollapseStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuCollapseId', 'menuCollapseText' ],
		data : [ [ '1', '���۵�' ], [ '0', '�����۵�' ]]
	});
	
	/* �˵���̬Ч�� */
	ManageObj.menuAnimateStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuAnimateId', 'menuAnimateText' ],
		data : [ [ '1', 'ʹ��' ], [ '0', '��ʹ��' ]]
	});
	
	/* �˵�����ɫ */
	ManageObj.menuBackgroundStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'menuBackgroundId', 'menuBackgroundText' ],
		data : [ [ '1', 'ʹ��' ], [ '0', '��ʹ��' ]]
	});
	
	/* ע�����û����� */
	ManageObj.isApproveStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'isApproveId', 'isApproveText' ],
		data : [ [ '0', '����Ҫ' ], [ '1', '��Ҫ' ]]
	});
	
	/* ������ɾ����ť����λ�� */
	ManageObj.buttonPlaceStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'buttonPlaceId', 'buttonPlaceText' ],
		//data : [ [ '0', '��ѯ�����' ], [ '1', 'gird��tbar��' ]]
		data : [ [ '1', 'gird��tbar��' ]]
	});
	
	/* ��ѯ������λ�� */
	ManageObj.searchPlaceStore = new Ext.data.SimpleStore({
		id : 0,
		fields : [ 'searchPlaceId', 'searchPlaceText' ],
		data : [ [ '0', '����' ], [ '1', '�ϱ�' ]]
	});
	
	ManageObj.loginViewTip = null;
	
	ManageObj.appViewTip = null;
	
	ManageObj.frontViewTip = null;
	
	ManageObj.registerViewTip = null;
	
	ManageObj.init();
};

/* ��ʼ����֯���� */
ManageObj.init = function() {
	/* ����Ҫ������һ�䣬����û�б�����ʾ��Ϣ */
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

/* ��ʼ�������� */
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
			labelSeparator : '��',
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
					fieldLabel : 'ϵͳ����',
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
					fieldLabel : 'ҳ��',
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
					fieldLabel : '��½����',
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
					fieldLabel : 'EXT����',
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
					fieldLabel : '��̨����',
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
					fieldLabel : 'ǰ̨����',
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
					fieldLabel : 'ע������',
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
					fieldLabel : '��վ�ϲ����',
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
					fieldLabel : '��վ�²����',
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
					fieldLabel : '�˵���λ',
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
					fieldLabel : '�˵��۵�',
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
					fieldLabel : '�˵���̬',
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
					fieldLabel : '�˵�����',
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
					fieldLabel : 'ע�������',
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
					fieldLabel : '������ɾ����ťλ��',
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
					fieldLabel : '��ѯ���λ��',
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
			text : '����',
			handler : function() {
				ManageObj.doSave();
			}
		}, {
			text : '����',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
			}
		} , {
			text : '����ǰ̨��ʾ�˵�',
			handler : function() {
				ManageObj.doFontDisplayMenu();
			}
		}]
	});
};

/* ��ʼ��viewport */
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

/* ��ʼ������ */
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
	/* Ext����֤ */
	if (!ManageObj.searchForm.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	/* form���ύ */
	ManageObj.searchForm.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : GLOBAL_APP_NAME+ '/WEB-ROOT/app/sysManage/setting.do?flag=doUpdateSubmit' + 
			 '&id=' +document.all.id.value + "&systemSkinName=" + document.all.systemSkin.value,
		success : function(form, action) {
			Ext.MessageBox.show({
						title : WARRING_WIN_TITLE,
						msg : "ϵͳ���óɹ��������µ�¼��",
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
		title : 'ǰ̨��ʾ�˵�����',
		html : "<iframe id='userMenuFrame' name='userMenuFrame' src='" + GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do?from=setting&userID=" + id + "' frameborder='0' width='100%' style='height:100%'></iframe>",
		doUpdateUserMenu : function() {
			var userMenuAl = window.frames['userMenuFrame'].getUserAllMenu1();
			ManageObj.setUserMenuSubmit(userMenuAl);
		},
		initComponent : function() {
			userMenuWindow.superclass.initComponent.call(this);
			this.addButton('�ύ', this.doUpdateUserMenu, this);
			this.addButton('����', function() {
				ManageObj.uMenuWin.close();
			}, this);
		}
	});
	ManageObj.uMenuWin = new userMenuWindow();
	ManageObj.uMenuWin.setVisible(true);
};

/* ǰ̨��ʾ�˵������ύ */
ManageObj.setUserMenuSubmit = function(userMenuAl) {
	Ext.Ajax.request({
		waitMsg : '�����ύ��......',
		url : GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do",
		method : 'POST',
		success : function(response, options) {
			var responseArray = Ext.util.JSON.decode(response.responseText);
			Ext.MessageBox.show({
				title : '��ܰ���ѣ�',
				msg : responseArray.msg,
				buttons : Ext.MessageBox.OK,
				fn : function() {
					ManageObj.uMenuWin.close();
				},
				icon : Ext.MessageBox.INFO
			});
		},
		failure : function(response, options) {
			Ext.MessageBox.alert('��ܰ���ѣ�', "����ʧ�ܣ�");
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


