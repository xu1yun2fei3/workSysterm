var ManageObj = function() {
	/* 搜索面板 */
	ManageObj.searchForm = null;

	/* 新增或编辑操作面板 */
	ManageObj.operationFormPan = null;
    
    /* 上传附件form */
	ManageObj.uploadForm = null ;
	
	/* 数据列表 */
	ManageObj.dataGridPan = null;

	/* DataStore */
	ManageObj.dataStore = null;
	
	/* Pic Store */
	ManageObj.picStore = null ;
	
	/* viewport */
	ManageObj.viewport = null;

	/* 新增窗口 */
	ManageObj.addWindow = null;

	/* 编辑窗口 */
	ManageObj.updateWindow = null;
	
	/* 图片窗口 */
	ManageObj.picWindow = null ;
 
    /* 上传窗口 */
	ManageObj.uploadWindow = null;

	/* 右键事件 */
	ManageObj.rightClick = null;

	/* 右键选中行号 */
	ManageObj.rightMenuClickRow = null;
	
	/* 未修改之前的附件路径 */
	ManageObj.oldAttach = null;

	
ManageObj.suoshulanmuGuanLianStore = new Ext.data.JsonStore({
url : '/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do',
baseParams : {
flag : 'doGuanLian',
guanLianBiao : 'lanmuguanli',
guanLianZiDuan : 'lanmumingcheng'
},
root : 'root',
totalProperty : 'totalProperty',
fields : ['lanmumingcheng']
});



	
	ManageObj.init();
}

/* 初始化用户界面 */
ManageObj.init = function() {
	/* 必须要加上这一句，否则没有报错提示信息 */
	Ext.QuickTips.init();
	ManageObj.initSearchForm();
	ManageObj.initDataGridPan();
	ManageObj.loadData();
	ManageObj.initViewport();
}

/* 初始化搜索表单 */
ManageObj.initSearchForm = function() {
	/* 初始化搜索表单 */
	ManageObj.searchForm = new Ext.FormPanel( {
		id : 'mySearchForm',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : false,
		labelWidth : 75,
		items : [ {
			// xtype : 'fieldset',
			// title : '查询条件',
			anchor : '100%',
			layout : 'column',   
			labelSeparator : '：',
			labelAlign : 'right',
			items : [  {
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'datefield',
format : 'Y-m-d',
fieldLabel : '操作时间',
name : 'itimeStartSearch',
id : 'itimeStartSearch',
invalidText : '日期格式不正确，应为yyyy-mm-dd',
anchor : '100%'
},{xtype : 'textfield',
fieldLabel : '文章标题',
name : 'wenzhangbiaotiSearch',
id : 'wenzhangbiaotiSearch',
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
fieldLabel : '至',
name : 'itimeEndSearch',
id : 'itimeEndSearch',
invalidText : '日期格式不正确，应为yyyy-mm-dd',
anchor : '100%'
},{xtype : 'textfield',
fieldLabel : '副标题',
name : 'fubiaotiSearch',
id : 'fubiaotiSearch',
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
{xtype : 'textfield',
fieldLabel : '落款',
name : 'luokuanSearch',
id : 'luokuanSearch',
anchor : '100%'
} ]}
,
{
columnWidth : .2,
layout : 'form',
border : false,
items : [ 
{xtype : 'textfield',
fieldLabel : '所属栏目',
name : 'suoshulanmuSearch',
id : 'suoshulanmuSearch',
anchor : '100%'
} ]}
  ]
		} ],
		buttons : [ {
			text : '查询',
			handler : function() {
				ManageObj.doSearch();
			}
		}, {
			text : '清空',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
			}
		} ]
	});
}

/* 初始化数据列表 */
ManageObj.initDataGridPan = function() {
	var sm = new Ext.grid.CheckboxSelectionModel();

	ManageObj.dataStore = new Ext.data.JsonStore( {
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'wenzhangbiaoti','fubiaoti','zhengwen','luokuan','suoshulanmu','id','itime','detail','deleteFlag' ],
		proxy : new Ext.data.HttpProxy( {
			url : '/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore',
			deleteFlagSearch : 0,
			r:R
		},
		listeners : {
			load :  function loadCallBack(store, records, options) {
				ManageObj.doTongJi();
			}
		}
	});

	pagingBar = new Ext.ux.MyPagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.dataStore,
		displayMsg : '当前第{0}到{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共{2}条记录',
		emptyMsg : "没有找到任何记录！",
		displayInfo : true
	});

	ManageObj.dataGridPan = new Ext.grid.GridPanel( {
		id : 'getTask',
		store : ManageObj.dataStore,
		loadMask : true,
		bbar : pagingBar,
		columns : [ sm,{
			header : "<font color='blue'>序号</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
header : '<font color="blue">文章标题</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'wenzhangbiaoti'
} 
, {
header : '<font color="blue">副标题</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'fubiaoti'
} 
, {
header : '<font color="blue">正文</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'zhengwen'
} 
, {
header : '<font color="blue">落款</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'luokuan'
} 
, {
header : '<font color="blue">所属栏目</font>',
width : 60,
align : 'center',
sortable : true,
dataIndex : 'suoshulanmu'
} 
, {
			header : "<font color='blue'>操作</font>",
			width : 100,
			align : 'center',
			sortable : false,
			renderer : ManageObj.operatorRenderer,
			dataIndex : 'oper'
		} ],
		sm : sm,
		viewConfig : {
			forceFit : true,
			columnsText : '显示列',
			sortAscText : '升序',
			sortDescText : '降序'
		},
		stripeRows : true,
		tbar : [ '-', {
			xtype : (R=="y")?'hidden':'splitbutton',
			text : '&nbsp;表单管理',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '新增表单',
				handler : function() {
					ManageObj.doAdd();
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : '删除表单',
				handler : function() {
					ManageObj.doDeleOrUnDele(null, 1)
				},
				icon : LOCK_OPERATION_ICON_PATH
			} ]
		},'-', {
			text : '显示全部',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		}, '-', {
			text : '导出Excel',
			xtype : 'hidden',
			handler : function() {
				ManageObj.doExportExcel();
			},
			icon : EXPORT_EXCEL_ICON_PATH
		}, '->', {
			xtype : 'label',
			html : '<font id="tongJiFont"></font>'
		} ]

	});

	/* 右键弹出菜单 */
	//ManageObj.dataGridPan.addListener('rowcontextmenu', ManageObj.rightClickFn);
}

/* 右键响应事件 */
ManageObj.rightClickFn = function(grid, rowIndex, e) {
	e.preventDefault();
	ManageObj.rightMenuClickRow = rowIndex;

	/* 清空所有菜单项 */
	if (ManageObj.rightClick != null) {
		ManageObj.rightClick.removeAll();
	}
	/* 创建菜单 */
	ManageObj.rightClick = new Ext.menu.Menu( {
		id : 'rightClickCont',
		items : [ {
			id : 'rMenu3',
			text : '新增表单',
			icon : RIGHT_CLICK_ADD_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			id : 'rMenu1',
			text : '浏览表单',
			icon : VIEW_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "view");
			}
		}, {
			id : 'rMenu2',
			text : '编辑表单',
			icon : EDIT_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "update");
			}
		} ]
	});

	/* 当前选中行状态 */
	var nowSelectedRowStutas = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('deleteFlag');
	var nowSelectedRowId = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id');
	var nowStutasStr = "删除表单";
	var nowIcon = LOCK_OPERATION_ICON_PATH;
	var nowOption = 1;
	/* 根据当前选中行的状态，动态新增删除或解冻菜单项 */
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

/* 初始化viewport */
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
			region : 'north',
			height : 145,
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

/* 加载数据 */
ManageObj.loadData = function() {
	ManageObj.dataStore.load( {
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
}

/* 操作列Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex,columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">浏览</a>";
	if( R == "n" ){
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">编辑</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">删除</a>";
		/*
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('update','"+record.data['id'] +"');\">图片</a>";
		*/
	}else{
		/*
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('view','"+record.data['id'] +"');\">图片</a>";
		*/
	}
	
	if( SP == "y" ){
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','审批通过');\">审批通过</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','审批驳回');\">审批驳回</a>";
	}
	return returnStr;
}

ManageObj.doShenPi = function( id , zhuangtai ) {
	Ext.MessageBox.confirm('温馨提醒！', '确认需要提交记录吗？',
		 function(info) {
			if (info == "yes") {
				Ext.Ajax.request( {
					waitMsg : '数据提交中......',
					url : '/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show( {
							title : '温馨提醒！',
							msg : responseArray.msg,
							buttons : Ext.MessageBox.OK,
							fn : function() {
								ManageObj.dataStore.reload();
							},
							icon : Ext.MessageBox.INFO
						});
					},
					failure : function(response, options) {
						Ext.MessageBox.alert('温馨提醒！', responseArray.msg);
					},
					params : {
						flag : "doShenPi",
						id : id,
						zhuangtai : zhuangtai
					}
				});
			}
		});
}

/* 查询 */
ManageObj.doSearch = function() {
	//输入项合法性的判断
	var itimeStartSearch = document.all.itimeStartSearch.value;
	var itimeEndSearch = document.all.itimeEndSearch.value;
	
	if( itimeStartSearch != "" && itimeEndSearch != "" ){
		if( itimeStartSearch > itimeEndSearch ){
			Ext.MessageBox.alert( WARRING_WIN_TITLE , "操作开始时间不能大于操作结束时间！");
			return;
		}
	}
	
	ManageObj.dataStore.baseParams.wenzhangbiaotiSearch = document.all.wenzhangbiaotiSearch.value; 
ManageObj.dataStore.baseParams.fubiaotiSearch = document.all.fubiaotiSearch.value; 
ManageObj.dataStore.baseParams.zhengwenSearch = document.all.zhengwenSearch.value; 
ManageObj.dataStore.baseParams.luokuanSearch = document.all.luokuanSearch.value; 
ManageObj.dataStore.baseParams.suoshulanmuSearch = document.all.suoshulanmuSearch.value; 

	ManageObj.dataStore.baseParams.itimeStartSearch = itimeStartSearch;
	ManageObj.dataStore.baseParams.itimeEndSearch = itimeEndSearch;


	ManageObj.dataStore.load( {
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
	
}

/* 得到添加或编辑的FormPanel */
ManageObj.getOperationFormPan = function(rowIndex, flag) {
	ManageObj.operationFormPan = new Ext.FormPanel( {
		id : 'operationFormPan',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : true,
		labelWidth : 90,
		autoWidth : true,
		autoHeight : true,
		
		items : [ {
			anchor : '100%',
			layout : 'column',
			labelSeparator : '：',
			labelAlign : 'right',
			items : [ {
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textfield',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;文章标题',
name : 'wenzhangbiaoti',
id : 'wenzhangbiaoti',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textfield',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;副标题',
name : 'fubiaoti',
id : 'fubiaoti',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textarea',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;正文',
name : 'zhengwen',
id : 'zhengwen',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'textfield',
fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;落款',
name : 'luokuan',
id : 'luokuan',
anchor : '95%',
allowBlank : false
}]} 
,{
columnWidth : 1,
layout : 'form',
border : false,
items : [ {
xtype : 'combo',
fieldLabel : '<font color="red">*</font>&nbsp;所属栏目',
store : ManageObj.suoshulanmuGuanLianStore,
valueField : 'lanmumingcheng',
displayField : 'lanmumingcheng',
mode : 'remote',
forceSelection : false,
hiddenName : 'suoshulanmuHidd',
triggerAction : 'all',
editable : true,
name : 'suoshulanmu',
id : 'suoshulanmu',
anchor : '95%',
allowBlank : false
}]} 
,{
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textarea',
					fieldLabel : '备注',
					name : 'detail',
					id : 'detail',
					anchor : '95%'
				} ]
			} ]
		} ]
	});

	/* 浏览、编辑时有当前选中行号参数，得到当前行记录的信息，初始化输入项 */
	if (rowIndex != null) {
		ManageObj.operationFormPan.findById('wenzhangbiaoti').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('wenzhangbiaoti');
ManageObj.operationFormPan.findById('fubiaoti').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fubiaoti');
ManageObj.operationFormPan.findById('zhengwen').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('zhengwen');
ManageObj.operationFormPan.findById('luokuan').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('luokuan');
ManageObj.operationFormPan.findById('suoshulanmu').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('suoshulanmu');

		Ext.getCmp('detail').setValue( ManageObj.dataGridPan.getStore().getAt(rowIndex).get( 'detail'));
	}

	return ManageObj.operationFormPan;
}

/**
 * @param {}  Id
 * @param {} deleteFlag (1:删除 ； 0:解冻)
 * @function 删除或解冻
 */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "" : "删除";
		Ext.MessageBox.confirm('温馨提醒！', '确认需要' + infoTmp + '所选记录吗？',
		 function(info) {
			if (info == "yes") {
				Ext.Ajax.request( {
					waitMsg : '数据提交中......',
					url : '/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show( {
							title : '温馨提醒！',
							msg : responseArray.msg,
							buttons : Ext.MessageBox.OK,
							fn : function() {
								ManageObj.dataStore.reload();
							},
							icon : Ext.MessageBox.INFO
						});
					},
					failure : function(response, options) {
						Ext.MessageBox.alert('温馨提醒！', responseArray.msg);
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
 * @param {} deleOrUnDele （1：删除 ； 0：解冻）
 * @function 提交删除或解冻时数据合法性验证
 */
ManageObj.doCheck = function(deleOrUnDele) {
	var sm = ManageObj.dataGridPan.getSelectionModel();
	var sel = sm.getSelections();
	var selCount = sm.getCount();
	if (selCount == 0) {
		Ext.Msg.show( {
			title : '温馨提示！',
			buttons : Ext.MessageBox.OK,
			msg : '没有可以提交的数据，请选择！',
			icon : Ext.MessageBox.ERROR
		});
		return;
	}

	/* 选中且可以提交的记录 */
	var selectedRowId = "";
	/* 选中的且为已删除状态的记录 */
	var hasDeletedRowId = "";
	/* 选中的且为已解冻状态的记录 */
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
			title : '温馨提示！',
			buttons : Ext.MessageBox.OK,
			msg : '您选择的第' + hasUnDeletedRowId + "行的数据已经为正常状态，请重新选择！",
			icon : Ext.MessageBox.ERROR
		});
		return;
	} else if (hasDeletedRowId != "") {
		Ext.Msg.show( {
			title : '温馨提示！',
			buttons : Ext.MessageBox.OK,
			msg : '您选择的第' + hasDeletedRowId + "行的数据已经被删除，请重新选择！",
			icon : Ext.MessageBox.ERROR
		});
		return;
	}

	ManageObj.doDeleOrUnDele(selectedRowId, deleOrUnDele);
};

/* 导出Excel */
ManageObj.doExportExcel = function() {
	var url = "/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do?flag=doExportExcel";
	window.open(  url );
};

/* 字段统计 */
ManageObj.doTongJi = function(){
	Ext.Ajax.request({
         url :'/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do' ,
         method:'POST',
         success : function(response, options) {
        	   var responseArray = Ext.util.JSON.decode(response.responseText);
        	   document.all.tongJiFont.innerHTML = responseArray.msg ;
        },
        params : {
              flag : "doTongJi",
              m : M,
              r:R
        }
    }); 
}; 


