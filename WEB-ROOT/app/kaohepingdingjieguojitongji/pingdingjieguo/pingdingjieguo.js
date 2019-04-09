var ManageObj = function() {
	/* ������� */
	ManageObj.searchForm = null;

	/* ������༭������� */
	ManageObj.operationFormPan = null;
    
    /* �ϴ�����form */
	ManageObj.uploadForm = null ;
	
	/* �����б� */
	ManageObj.dataGridPan = null;

	/* DataStore */
	ManageObj.dataStore = null;
	
	/* Pic Store */
	ManageObj.picStore = null ;
	
	/* viewport */
	ManageObj.viewport = null;

	/* �������� */
	ManageObj.addWindow = null;

	/* �༭���� */
	ManageObj.updateWindow = null;
	
	/* ͼƬ���� */
	ManageObj.picWindow = null ;
 
    /* �ϴ����� */
	ManageObj.uploadWindow = null;

	/* �Ҽ��¼� */
	ManageObj.rightClick = null;

	/* �Ҽ�ѡ���к� */
	ManageObj.rightMenuClickRow = null;
	
	/* δ�޸�֮ǰ�ĸ���·�� */
	ManageObj.oldAttach = null;

	
ManageObj.kaopingxiangmuGuanLianStore = new Ext.data.JsonStore({
url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
baseParams : {
flag : 'doGuanLian',
guanLianBiao : 'kaohepingdingfabu',
guanLianZiDuan : 'kaopingmingchen'
},
root : 'root',
totalProperty : 'totalProperty',
fields : ['kaopingmingchen']
});

ManageObj.beikaopingrenGuanLianStore = new Ext.data.JsonStore({
url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
baseParams : {
flag : 'doGuanLian',
guanLianBiao : 'woyaopingding',
guanLianZiDuan : 'kaopingduixiang'
},
root : 'root',
totalProperty : 'totalProperty',
fields : ['kaopingduixiang']
});

ManageObj.pingdingdengjiGuanLianStore = new Ext.data.JsonStore({
url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
baseParams : {
flag : 'doGuanLian',
guanLianBiao : 'pingdingdengji',
guanLianZiDuan : 'pingdingdengji'
},
root : 'root',
totalProperty : 'totalProperty',
fields : ['pingdingdengji']
});



	
	ManageObj.init();
}

/* ��ʼ���û����� */
ManageObj.init = function() {
	/* ����Ҫ������һ�䣬����û�б�����ʾ��Ϣ */
	Ext.QuickTips.init();
	ManageObj.initSearchForm();
	ManageObj.initDataGridPan();
	ManageObj.loadData();
	ManageObj.initViewport();
}

/* ��ʼ���������� */
ManageObj.initSearchForm = function() {
	/* ��ʼ���������� */
	ManageObj.searchForm = new Ext.FormPanel( {
		id : 'mySearchForm',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : false,
		labelWidth : 95,
		items : [ {
			// xtype : 'fieldset',
			// title : '��ѯ����',
			anchor : '100%',
			layout : 'column',   
			labelSeparator : '��',
			labelAlign : 'right',
			items : [  {
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'datefield',
format : 'Y-m-d',
fieldLabel : '����ʱ��',
name : 'itimeStartSearch',
id : 'itimeStartSearch',
invalidText : '���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'datefield',
format : 'Y-m-d',
fieldLabel : '��',
name : 'itimeEndSearch',
id : 'itimeEndSearch',
invalidText : '���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '������Ŀ',
name : 'kaopingxiangmuSearch',
id : 'kaopingxiangmuSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '��������',
name : 'beikaopingrenSearch',
id : 'beikaopingrenSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '��������',
name : 'kaopingfenshuSearch',
id : 'kaopingfenshuSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '�����ȼ�',
name : 'pingdingdengjiSearch',
id : 'pingdingdengjiSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '��ϸ˵��',
name : 'xiangxishuomingSearch',
id : 'xiangxishuomingSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
 ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
 ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
 ]}
  ]
		} ],
		buttons : [ 
		
		{
			text : '����',
			hidden : ( ( R=="y" )? true:   (   ( BUTTON_PLACE == "0" )?  false : true )   )  ,
			handler : function() {
				ManageObj.doAdd();
			}
		},
		
		
		{
			text : 'ɾ��',
			hidden : ( ( R=="y" )? true:   (   ( BUTTON_PLACE == "0" )?  false : true )   )  ,
			handler : function() {
				ManageObj.doDeleOrUnDele(null, 1);
			}
		},
		
		{
			text : '��ѯ',
			handler : function() {
				ManageObj.doSearch();
			}
		}, {
			text : '���',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
			}
		} , {
			text : '����Excel',
			hidden : ( ( R=="y" )? true:   (   ( BUTTON_PLACE == "0" )?  false : true )   )  ,
			xtype : 'button',
			handler : function() {
				ManageObj.doExportExcel();
			}
		}]
	});
}

/* ��ʼ�������б� */
ManageObj.initDataGridPan = function() {
	var sm = new Ext.grid.CheckboxSelectionModel();

	ManageObj.dataStore = new Ext.data.JsonStore( {
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'kaopingxiangmu','beikaopingren','kaopingfenshu','pingdingdengji','xiangxishuoming','id','itime','detail','deleteFlag','erjiguanlianzd','attr1','attr2','attr3','attr4','attr5','fuJian' ],
		proxy : new Ext.data.HttpProxy( {
			url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore',
			deleteFlagSearch : 0,
			r:R,
			erjiguanlianzd:erjiguanlianzd,
			sp:SP
		},
		listeners : {
			load :  function loadCallBack(store, records, options) {
				ManageObj.doTongJi();
			}
		}
	});
   
    /*
	pagingBar = new Ext.ux.MyPagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.dataStore,
		displayMsg : '��ǰ��{0}��{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��{2}����¼',
		emptyMsg : "û���ҵ��κμ�¼��",
		displayInfo : false
	});
	*/
	pagingBar = new Ext.PagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.dataStore,
		displayMsg : '��ǰ��{0}��{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��{2}����¼',
		emptyMsg : "û���ҵ��κμ�¼��",
		displayInfo : false
	});

	ManageObj.dataGridPan = new Ext.grid.GridPanel( {
		id : 'getTask',
		//title : '<font id="tongJiFont"></font>',
		store : ManageObj.dataStore,
		loadMask : true,
		bbar : pagingBar,
		columns : [ 
		  /*
		  sm,
		  */
		  /*
		  {
			header : "<font color='blue'>���</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}
		*/
		{
header : '<font color="blue">������Ŀ</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'kaopingxiangmu'
}, 
{
header : '<font color="blue">��������</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'beikaopingren'
}, 
{
header : '<font color="blue">��������</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'kaopingfenshu'
}, 
{
header : '<font color="blue">�����ȼ�</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'pingdingdengji'
}, 
{
header : '<font color="blue">��ϸ˵��</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'xiangxishuoming'
}, 

	    {
			header : "<font color='blue'>����</font>",
			width : 110,
			align : 'center',
			sortable : false,
			renderer : ManageObj.operatorRenderer,
			dataIndex : 'oper'
		} ],
		sm : sm,
		viewConfig : {
			forceFit : true,
			columnsText : '��ʾ��',
			sortAscText : '����',
			sortDescText : '����'
		},
		stripeRows : true,
		enableColumnHide:false,
		enableColumnMove : false ,
		columnLines:true,
		enableHdMenu:false,
		tbar : [ 
		
		{
			text : '��������',
			hidden:  ( ( R=="y" )? true:    (   ( BUTTON_PLACE == "1" )? false  : true  )  ),
			handler : function() {
				ManageObj.doAdd();
			},
			icon : ADD_OPERATION_ICON_PATH
		},
		 
		
		{
			text : 'ɾ������',
			hidden:  ( ( R=="y" )? true:    (   ( BUTTON_PLACE == "1" )? false  : true  )  ),
			handler : function() {
				ManageObj.doDeleOrUnDele(null, 1);
			},
			icon : DELETE_OPERATION_ICON_PATH
		},
		
		{
			text : '����Excel',
			hidden:  ( ( R=="y" )? true:    (   ( BUTTON_PLACE == "1" )? false  : true  )  ),
			xtype : 'button',
			handler : function() {
				ManageObj.doExportExcel();
			},
			icon : EXPORT_EXCEL_ICON_PATH
		},'->','<font id="tongJiFont"></font>'
		/*
		 {
			text : '��ʾȫ��',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		},
		*/
		]

	});

	/* �Ҽ������˵� */
	//ManageObj.dataGridPan.addListener('rowcontextmenu', ManageObj.rightClickFn);
}

/* �Ҽ���Ӧ�¼� */
ManageObj.rightClickFn = function(grid, rowIndex, e) {
	e.preventDefault();
	ManageObj.rightMenuClickRow = rowIndex;

	/* ������в˵��� */
	if (ManageObj.rightClick != null) {
		ManageObj.rightClick.removeAll();
	}
	/* �����˵� */
	ManageObj.rightClick = new Ext.menu.Menu( {
		id : 'rightClickCont',
		items : [ {
			id : 'rMenu3',
			text : '��������',
			icon : RIGHT_CLICK_ADD_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			id : 'rMenu1',
			text : '�������',
			icon : VIEW_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "view");
			}
		}, {
			id : 'rMenu2',
			text : '�༭����',
			icon : EDIT_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "update");
			}
		} ]
	});

	/* ��ǰѡ����״̬ */
	var nowSelectedRowStutas = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('deleteFlag');
	var nowSelectedRowId = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id');
	var nowStutasStr = "ɾ������";
	var nowIcon = LOCK_OPERATION_ICON_PATH;
	var nowOption = 1;
	/* ���ݵ�ǰѡ���е�״̬����̬����ɾ����ⶳ�˵��� */
	var menuItem = new Ext.menu.Item( {
		text : nowStutasStr,
		icon : nowIcon,
		handler : function() {
			ManageObj.doDeleOrUnDele(nowSelectedRowId, nowOption);
		}
	});
	ManageObj.rightClick.add(menuItem);
	ManageObj.rightClick.showAt(e.getXY());
}

/* ��ʼ��viewport */
ManageObj.initViewport = function() {
	ManageObj.viewport = new Ext.Viewport( {
		id : 'viewport',
		layout : 'border',
		border : false,
		frame : false,
		items : [ {
			id : 'west-panel',
			layout : 'fit',
			split : false,
			collapsible : true,
			collapsed : false,
			title : ' ',
			autoScroll : false,
			border : false,
			region : ( ( SEARCH_PLACE == "0" )?'north':'south' ),
			height : 170,
			items : [ ManageObj.searchForm ]
		}, {
			id : 'gridViewItem',
			layout : 'fit',
			split : false,
			border : false,
			autoScroll : false,
			region : 'center',
			items : [ ManageObj.dataGridPan ]
		} ]
	});
}

/* �������� */
ManageObj.loadData = function() {
	ManageObj.dataStore.load( {
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
}

/* ������Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex,columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">���</a>";
	if( R == "n" ){
		
	    returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">�༭</a>";
	    
	    
	    
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">ɾ��</a>";
		
		
	    /*
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('update','"+record.data['id'] +"');\">ͼƬ</a>";
		*/
		
	    
		
		
	}else{
	    
	    
		/*
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('view','"+record.data['id'] +"');\">ͼƬ</a>";
		*/
		
	}
	
	if( SP == "y" ){
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','����ͨ��');\">����ͨ��</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','��������');\">��������</a>";
	}
	return returnStr;
}

ManageObj.doShenPi = function( id , shenpi ) {
	Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫ�ύ��¼��',
		 function(info) {
			if (info == "yes") {
				Ext.Ajax.request( {
					waitMsg : '�����ύ��......',
					url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show( {
							title : '��ܰ���ѣ�',
							msg : responseArray.msg,
							buttons : Ext.MessageBox.OK,
							fn : function() {
								ManageObj.dataStore.reload();
							},
							icon : Ext.MessageBox.INFO
						});
					},
					failure : function(response, options) {
						Ext.MessageBox.alert('��ܰ���ѣ�', responseArray.msg);
					},
					params : {
						flag : "doShenPi",
						id : id,
						shenpi : shenpi
					}
				});
			}
		});
}

/* ��ѯ */
ManageObj.doSearch = function() {
	//������Ϸ��Ե��ж�
	var itimeStartSearch = document.all.itimeStartSearch.value;
	var itimeEndSearch = document.all.itimeEndSearch.value;
	
	if( itimeStartSearch != "" && itimeEndSearch != "" ){
		if( itimeStartSearch > itimeEndSearch ){
			Ext.MessageBox.alert( WARRING_WIN_TITLE , "������ʼʱ�䲻�ܴ��ڲ�������ʱ�䣡");
			return;
		}
	}
	
	ManageObj.dataStore.baseParams.kaopingxiangmuSearch = document.all.kaopingxiangmuSearch.value; 
ManageObj.dataStore.baseParams.beikaopingrenSearch = document.all.beikaopingrenSearch.value; 
ManageObj.dataStore.baseParams.kaopingfenshuSearch = document.all.kaopingfenshuSearch.value; 
ManageObj.dataStore.baseParams.pingdingdengjiSearch = document.all.pingdingdengjiSearch.value; 
ManageObj.dataStore.baseParams.xiangxishuomingSearch = document.all.xiangxishuomingSearch.value; 

	ManageObj.dataStore.baseParams.itimeStartSearch = itimeStartSearch;
	ManageObj.dataStore.baseParams.itimeEndSearch = itimeEndSearch;


	ManageObj.dataStore.load( {
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
	
}

/* �õ����ӻ�༭��FormPanel */
ManageObj.getOperationFormPan = function(rowIndex, flag) {
	ManageObj.operationFormPan = new Ext.FormPanel( {
		id : 'operationFormPan',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : true,
		labelWidth : 110,
		autoWidth : true,
		autoHeight : true,
		fileUpload : true, 
		items : [ {
			anchor : '100%',
			layout : 'column',
			labelSeparator : '��',
			labelAlign : 'right',
			items : [ {
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'combo',
fieldLabel : '<font color="red">*</font>&nbsp;������Ŀ',
store : ManageObj.kaopingxiangmuGuanLianStore,
valueField : 'kaopingmingchen',
displayField : 'kaopingmingchen',
mode : 'remote',
forceSelection : false,
hiddenName : 'kaopingxiangmuHidd',
triggerAction : 'all',
editable : true,
name : 'kaopingxiangmu',
id : 'kaopingxiangmu',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'combo',
fieldLabel : '<font color="red">*</font>&nbsp;��������',
store : ManageObj.beikaopingrenGuanLianStore,
valueField : 'kaopingduixiang',
displayField : 'kaopingduixiang',
mode : 'remote',
forceSelection : false,
hiddenName : 'beikaopingrenHidd',
triggerAction : 'all',
editable : true,
name : 'beikaopingren',
id : 'beikaopingren',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textfield',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;��������',
name : 'kaopingfenshu',
id : 'kaopingfenshu',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'combo',
fieldLabel : '<font color="red">*</font>&nbsp;�����ȼ�',
store : ManageObj.pingdingdengjiGuanLianStore,
valueField : 'pingdingdengji',
displayField : 'pingdingdengji',
mode : 'remote',
forceSelection : false,
hiddenName : 'pingdingdengjiHidd',
triggerAction : 'all',
editable : true,
name : 'pingdingdengji',
id : 'pingdingdengji',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textarea',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;��ϸ˵��',
name : 'xiangxishuoming',
id : 'xiangxishuoming',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : (flag == 'view') ? 'label' : 'fileuploadfield',
style : (flag == 'view') ? 'margin-left:0px;padding-top:3px;padding-bottom:3px;' : 'margin-left:0px;',
fieldLabel : (flag == 'view') ? '' : '����',
name : 'fuJian',
id : 'fuJian',
anchor : '95%',
buttonText : '���'
}]} 
,{
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textarea',
					fieldLabel : '��ע',
					name : 'detail',
					id : 'detail',
					anchor : '95%'
				} ]
			} ]
		} ]
	});

	/* ������༭ʱ�е�ǰѡ���кŲ������õ���ǰ�м�¼����Ϣ����ʼ�������� */
	if (rowIndex != null) {
		ManageObj.operationFormPan.findById('kaopingxiangmu').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('kaopingxiangmu');
ManageObj.operationFormPan.findById('beikaopingren').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('beikaopingren');
ManageObj.operationFormPan.findById('kaopingfenshu').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('kaopingfenshu');
ManageObj.operationFormPan.findById('pingdingdengji').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('pingdingdengji');
ManageObj.operationFormPan.findById('xiangxishuoming').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('xiangxishuoming');
var attachVal = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fuJian');
if (flag == 'view') {
var fileName = attachVal.substring(attachVal.lastIndexOf("/") + 1);
ManageObj.operationFormPan.findById('fuJian').html = "<a style='padding-left:0px;margin-left:4px;' href=" + attachVal + ">" + fileName + "</a>";
} else {
ManageObj.operationFormPan.findById('fuJian').value = attachVal;
}
ManageObj.oldAttach = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fuJian');
		Ext.getCmp('detail').setValue( ManageObj.dataGridPan.getStore().getAt(rowIndex).get( 'detail'));
	}

	return ManageObj.operationFormPan;
}

/**
 * @param {}  Id
 * @param {} deleteFlag (1:ɾ�� �� 0:�ⶳ)
 * @function ɾ����ⶳ
 */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "" : "ɾ��";
		Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫ' + infoTmp + '��ѡ��¼��',
		 function(info) {
			if (info == "yes") {
				Ext.Ajax.request( {
					waitMsg : '�����ύ��......',
					url : '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show( {
							title : '��ܰ���ѣ�',
							msg : responseArray.msg,
							buttons : Ext.MessageBox.OK,
							fn : function() {
								ManageObj.dataStore.reload();
							},
							icon : Ext.MessageBox.INFO
						});
					},
					failure : function(response, options) {
						Ext.MessageBox.alert('��ܰ���ѣ�', responseArray.msg);
					},
					params : {
						flag : "doDeleOrUnDele",
						id : id,
						deleteFlag : deleteFlag
					}
				});
			}
		});
	}
}

/**
 * @param {} deleOrUnDele ��1��ɾ�� �� 0���ⶳ��
 * @function �ύɾ����ⶳʱ���ݺϷ�����֤
 */
ManageObj.doCheck = function(deleOrUnDele) {
	var sm = ManageObj.dataGridPan.getSelectionModel();
	var sel = sm.getSelections();
	var selCount = sm.getCount();
	if (selCount == 0) {
		Ext.Msg.show( {
			title : '��ܰ��ʾ��',
			buttons : Ext.MessageBox.OK,
			msg : 'û�п����ύ�����ݣ���ѡ��',
			icon : Ext.MessageBox.ERROR
		});
		return;
	}

	/* ѡ���ҿ����ύ�ļ�¼ */
	var selectedRowId = "";
	/* ѡ�е���Ϊ��ɾ��״̬�ļ�¼ */
	var hasDeletedRowId = "";
	/* ѡ�е���Ϊ�ѽⶳ״̬�ļ�¼ */
	var hasUnDeletedRowId = "";
	for ( var i = 0; i < selCount; i++) {
		var deleteFlag = sel[i].data["deleteFlag"];
		if (deleOrUnDele == "1") {
			if (deleteFlag == "1") {
				hasDeletedRowId += (hasDeletedRowId == "") ? (i + 1 + "") : ","+ (i + 1);
			} else {
				selectedRowId += (selectedRowId == "") ? (sel[i].data["id"]) : "," + (sel[i].data["id"]);
			}
		} else if (deleOrUnDele == "0") {
			if (deleteFlag == "0") {
				hasUnDeletedRowId += (hasUnDeletedRowId == "") ? (i + 1 + "") : "," + (i + 1);
			} else {
				selectedRowId += (selectedRowId == "") ? (sel[i].data["id"] + "") : "," + (sel[i].data["id"]);
			}
		}
	}

	if (hasUnDeletedRowId != "") {
		Ext.Msg.show( {
			title : '��ܰ��ʾ��',
			buttons : Ext.MessageBox.OK,
			msg : '��ѡ��ĵ�' + hasUnDeletedRowId + "�е������Ѿ�Ϊ����״̬��������ѡ��",
			icon : Ext.MessageBox.ERROR
		});
		return;
	} else if (hasDeletedRowId != "") {
		Ext.Msg.show( {
			title : '��ܰ��ʾ��',
			buttons : Ext.MessageBox.OK,
			msg : '��ѡ��ĵ�' + hasDeletedRowId + "�е������Ѿ���ɾ����������ѡ��",
			icon : Ext.MessageBox.ERROR
		});
		return;
	}

	ManageObj.doDeleOrUnDele(selectedRowId, deleOrUnDele);
};

/* ����Excel */
ManageObj.doExportExcel = function() {
	var url = "/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do?flag=doExportExcel";
	window.open(  url );
};

/* �ֶ�ͳ�� */
ManageObj.doTongJi = function(){
	Ext.Ajax.request({
         url :'/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do' ,
         method:'POST',
         success : function(response, options) {
        	   var responseArray = Ext.util.JSON.decode(response.responseText);
        	   document.all.tongJiFont.innerHTML = responseArray.msg ;
        },
        params : {
              flag : "doTongJi",
              m : M,
              r:R,
              erjiguanlianzd:erjiguanlianzd
        }
    }); 
}; 

