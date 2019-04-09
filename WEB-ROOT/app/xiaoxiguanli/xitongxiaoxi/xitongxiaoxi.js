var ManageObj = function() {
	/* 搜索面板 */
	ManageObj.searchForm = null;

	/* 新增或编辑操作面板 */
	ManageObj.operationFormPan = null;

	/* 上传附件form */
	ManageObj.uploadForm = null;

	/* 数据列表 */
	ManageObj.dataGridPan = null;

	/* DataStore */
	ManageObj.dataStore = null;

	/* Pic Store */
	ManageObj.picStore = null;

	/* viewport */
	ManageObj.viewport = null;

	/* 新增窗口 */
	ManageObj.addWindow = null;

	/* 编辑窗口 */
	ManageObj.updateWindow = null;

	/* 图片窗口 */
	ManageObj.picWindow = null;

	/* 上传窗口 */
	ManageObj.uploadWindow = null;

	/* 右键事件 */
	ManageObj.rightClick = null;

	/* 右键选中行号 */
	ManageObj.rightMenuClickRow = null;

	/* 未修改之前的附件路径 */
	ManageObj.oldAttach = null;

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
	ManageObj.searchForm = new Ext.FormPanel({
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
			items : [ {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : '操作时间',
					name : 'itimeStartSearch',
					id : 'itimeStartSearch',
					invalidText : '日期格式不正确，应为yyyy-mm-dd',
					anchor : '100%'
				}, {
					xtype : 'textfield',
					fieldLabel : '消息主题',
					name : 'xiaoxizhutiSearch',
					id : 'xiaoxizhutiSearch',
					anchor : '100%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : '至',
					name : 'itimeEndSearch',
					id : 'itimeEndSearch',
					invalidText : '日期格式不正确，应为yyyy-mm-dd',
					anchor : '100%'
				}, {
					xtype : 'textfield',
					fieldLabel : '消息名称',
					name : 'xiaoximingchenSearch',
					id : 'xiaoximingchenSearch',
					anchor : '100%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '消息内容',
					name : 'xiaoxinarongSearch',
					id : 'xiaoxinarongSearch',
					anchor : '100%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					fieldLabel : '发布时间',
					name : 'fabushijianSearch',
					id : 'fabushijianSearch',
					anchor : '100%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '发布人',
					name : 'faburenSearch',
					id : 'faburenSearch',
					anchor : '100%'
				} ]
			} ]
		} ],
		buttons : [ {
			text : '新增',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "0") ? false : true)),
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			text : '删除',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "0") ? false : true)),
			handler : function() {
				ManageObj.doDeleOrUnDele(null, 1);
			}
		}, {
			text : '查询',
			handler : function() {
				ManageObj.doSearch();
			}
		}, {
			text : '清空',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
			}
		}, {
			text : '导出Excel',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "0") ? false : true)),
			xtype : 'hidden',
			handler : function() {
				ManageObj.doExportExcel();
			}
		} ]
	});
}

/* 初始化数据列表 */
ManageObj.initDataGridPan = function() {
	var sm = new Ext.grid.CheckboxSelectionModel();

	ManageObj.dataStore = new Ext.data.JsonStore({
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'xiaoxizhuti', 'xiaoximingchen', 'xiaoxinarong', 'fabushijian', 'faburen', 'id', 'itime', 'detail', 'deleteFlag', 'erjiguanlianzd' ],
		proxy : new Ext.data.HttpProxy({
			url : '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore',
			deleteFlagSearch : 0,
			r : R,
			erjiguanlianzd : erjiguanlianzd,
			sp : SP
		},
		listeners : {
			load : function loadCallBack(store, records, options) {
				ManageObj.doTongJi();
			}
		}
	});

	/*
	 * pagingBar = new Ext.ux.MyPagingToolbar({ pageSize : GLOBAL_MAX_PAGE_SIZE, store : ManageObj.dataStore, displayMsg : '当前第{0}到{1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共{2}条记录', emptyMsg : "没有找到任何记录！", displayInfo : false });
	 */
	pagingBar = new Ext.PagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.dataStore,
		displayMsg : '当前第{0}到{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共{2}条记录',
		emptyMsg : "没有找到任何记录！",
		displayInfo : false
	});

	ManageObj.dataGridPan = new Ext.grid.GridPanel({
		id : 'getTask',
		store : ManageObj.dataStore,
		loadMask : true,
		bbar : pagingBar,
		columns : [
		/*
		 * sm,
		 */
		{
			header : "<font color='blue'>序号</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
			header : '<font color="blue">消息主题</font>',
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'xiaoxizhuti'
		}, {
			header : '<font color="blue">消息名称</font>',
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'xiaoximingchen'
		}, {
			header : '<font color="blue">消息内容</font>',
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'xiaoxinarong'
		}, {
			header : '<font color="blue">发布时间</font>',
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'fabushijian'
		}, {
			header : '<font color="blue">发布人</font>',
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'faburen'
		}, {
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
		enableColumnHide : false,
		enableColumnMove : false,
		columnLines : true,
		enableHdMenu : false,
		tbar : [ {
			text : '新增数据',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "1") ? false : true)),
			handler : function() {
				ManageObj.doAdd();
			},
			icon : ADD_OPERATION_ICON_PATH
		}, {
			text : '删除数据',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "1") ? false : true)),
			handler : function() {
				ManageObj.doDeleOrUnDele(null, 1);
			},
			icon : DELETE_OPERATION_ICON_PATH
		}, {
			text : '导出Excel',
			hidden : ((R == "y") ? true : ((BUTTON_PLACE == "1") ? false : true)),
			xtype : 'hidden',
			handler : function() {
				ManageObj.doExportExcel();
			},
			icon : EXPORT_EXCEL_ICON_PATH
		},
		/*
		 * { text : '显示全部', handler : function() { ManageObj.searchForm.getForm().reset(); ManageObj.doSearch(); }, icon : DISPLAY_ALL_ICON_PATH },
		 */
		'->', {
			xtype : 'label',
			height : 20,
			html : '<font id="tongJiFont"></font>'
		} ]

	});

	/* 右键弹出菜单 */
	// ManageObj.dataGridPan.addListener('rowcontextmenu', ManageObj.rightClickFn);
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
	ManageObj.rightClick = new Ext.menu.Menu({
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
	var menuItem = new Ext.menu.Item({
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
	ManageObj.viewport = new Ext.Viewport({
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
			region : ((SEARCH_PLACE == "0") ? 'north' : 'south'),
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
	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
}

/* 操作列Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">浏览</a>";
	if (R == "n") {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">编辑</a>";

		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">删除</a>";

		/*
		 * returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('update','"+record.data['id'] +"');\">图片</a>";
		 */

	} else {

		/*
		 * returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doPic('view','"+record.data['id'] +"');\">图片</a>";
		 */

	}

	if (SP == "y") {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','审批通过');\">审批通过</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doShenPi('" + record.data['id'] + "','审批驳回');\">审批驳回</a>";
	}
	return returnStr;
}

ManageObj.doShenPi = function(id, shenpi) {
	Ext.MessageBox.confirm('温馨提醒！', '确认需要提交记录吗？', function(info) {
		if (info == "yes") {
			Ext.Ajax.request({
				waitMsg : '数据提交中......',
				url : '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do',
				method : 'POST',
				success : function(response, options) {
					var responseArray = Ext.util.JSON.decode(response.responseText);
					Ext.MessageBox.show({
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
					shenpi : shenpi
				}
			});
		}
	});
}

/* 查询 */
ManageObj.doSearch = function() {
	// 输入项合法性的判断
	var itimeStartSearch = document.all.itimeStartSearch.value;
	var itimeEndSearch = document.all.itimeEndSearch.value;

	if (itimeStartSearch != "" && itimeEndSearch != "") {
		if (itimeStartSearch > itimeEndSearch) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, "操作开始时间不能大于操作结束时间！");
			return;
		}
	}

	ManageObj.dataStore.baseParams.xiaoxizhutiSearch = document.all.xiaoxizhutiSearch.value;
	ManageObj.dataStore.baseParams.xiaoximingchenSearch = document.all.xiaoximingchenSearch.value;
	ManageObj.dataStore.baseParams.xiaoxinarongSearch = document.all.xiaoxinarongSearch.value;
	ManageObj.dataStore.baseParams.fabushijianSearch = document.all.fabushijianSearch.value;
	ManageObj.dataStore.baseParams.faburenSearch = document.all.faburenSearch.value;

	ManageObj.dataStore.baseParams.itimeStartSearch = itimeStartSearch;
	ManageObj.dataStore.baseParams.itimeEndSearch = itimeEndSearch;

	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});

}

/* 得到添加或编辑的FormPanel */
ManageObj.getOperationFormPan = function(rowIndex, flag) {
	ManageObj.operationFormPan = new Ext.FormPanel({
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
					fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;消息主题',
					name : 'xiaoxizhuti',
					id : 'xiaoxizhuti',
					anchor : '95%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;消息名称',
					name : 'xiaoximingchen',
					id : 'xiaoximingchen',
					anchor : '95%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textarea',
					fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;消息内容',
					name : 'xiaoxinarong',
					id : 'xiaoxinarong',
					anchor : '95%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;发布时间',
					name : 'fabushijian',
					id : 'fabushijian',
					anchor : '95%',
					readOnly : true,
					value : GetNowDate(),
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '<font color="red">*</font>&nbsp;&nbsp;发布人',
					name : 'faburen',
					id : 'faburen',
					anchor : '95%',
					readOnly : true,
					value : LoginUserAcct,
					allowBlank : false
				} ]
			}, {
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
		ManageObj.operationFormPan.findById('xiaoxizhuti').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('xiaoxizhuti');
		ManageObj.operationFormPan.findById('xiaoximingchen').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('xiaoximingchen');
		ManageObj.operationFormPan.findById('xiaoxinarong').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('xiaoxinarong');
		ManageObj.operationFormPan.findById('fabushijian').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fabushijian');
		ManageObj.operationFormPan.findById('faburen').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('faburen');

		Ext.getCmp('detail').setValue(ManageObj.dataGridPan.getStore().getAt(rowIndex).get('detail'));
	}

	return ManageObj.operationFormPan;
}

/**
 * @param {}
 *            Id
 * @param {}
 *            deleteFlag (1:删除 ； 0:解冻)
 * @function 删除或解冻
 */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "" : "删除";
		Ext.MessageBox.confirm('温馨提醒！', '确认需要' + infoTmp + '所选记录吗？', function(info) {
			if (info == "yes") {
				Ext.Ajax.request({
					waitMsg : '数据提交中......',
					url : '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show({
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
 * @param {}
 *            deleOrUnDele （1：删除 ； 0：解冻）
 * @function 提交删除或解冻时数据合法性验证
 */
ManageObj.doCheck = function(deleOrUnDele) {
	var sm = ManageObj.dataGridPan.getSelectionModel();
	var sel = sm.getSelections();
	var selCount = sm.getCount();
	if (selCount == 0) {
		Ext.Msg.show({
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
	for (var i = 0; i < selCount; i++) {
		var deleteFlag = sel[i].data["deleteFlag"];
		if (deleOrUnDele == "1") {
			if (deleteFlag == "1") {
				hasDeletedRowId += (hasDeletedRowId == "") ? (i + 1 + "") : "," + (i + 1);
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
		Ext.Msg.show({
			title : '温馨提示！',
			buttons : Ext.MessageBox.OK,
			msg : '您选择的第' + hasUnDeletedRowId + "行的数据已经为正常状态，请重新选择！",
			icon : Ext.MessageBox.ERROR
		});
		return;
	} else if (hasDeletedRowId != "") {
		Ext.Msg.show({
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
	var url = "/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do?flag=doExportExcel";
	window.open(url);
};

/* 字段统计 */
ManageObj.doTongJi = function() {
	Ext.Ajax.request({
		url : '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do',
		method : 'POST',
		success : function(response, options) {
			var responseArray = Ext.util.JSON.decode(response.responseText);
			document.all.tongJiFont.innerHTML = responseArray.msg;
		},
		params : {
			flag : "doTongJi",
			m : M,
			r : R,
			erjiguanlianzd : erjiguanlianzd
		}
	});
};
