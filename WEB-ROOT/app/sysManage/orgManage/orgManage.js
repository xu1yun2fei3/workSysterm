ManageObj = function() {
	/* 搜索面板 */
	ManageObj.searchForm = null;

	/* 新增或编辑操作面板 */
	ManageObj.operationFormPan = null;

	/* 数据列表 */
	ManageObj.dataGridPan = null;

	/* DataStore */
	ManageObj.dataStore = null;

	/* viewport */
	ManageObj.viewport = null;

	/* 新增窗口 */
	ManageObj.addWindow = null;

	/* 编辑窗口 */
	ManageObj.updateWindow = null;

	/* 右键事件 */
	ManageObj.rightClick = null;

	/* 右键选中行号 */
	ManageObj.rightMenuClickRow = null;

	/* 部门负责人 */
	ManageObj.orgManagerSearchStore = new Ext.data.JsonStore({
		url : GLOBAL_APP_NAME + '/WEB-ROOT/app/util/ext/userCombo.do',
		baseParams : {
			flag : 'getAllUserList'
		},
		remoteSort : true,
		root : 'root',
		totalProperty : 'totalProperty',
		fields : [ 'id', 'userName' ]
	});

	ManageObj.init();
};

/* 初始化部门界面 */
ManageObj.init = function() {
	/* 必须要加上这一句，否则没有报错提示信息 */
	Ext.QuickTips.init();
	ManageObj.initSearchForm();
	ManageObj.initDataGridPan();
	ManageObj.initViewport();
	ManageObj.loadData();
};

/* 初始化搜索表单 */
ManageObj.initSearchForm = function() {
	/* 初始化搜索表单 */
	ManageObj.searchForm = new Ext.FormPanel({
		id : 'mySearchForm',
		labelAlign : 'left',
		title : '',
		buttonAlign : 'center',
		bodyStyle : 'padding:1px;',
		// autoHeight: true,
		frame : true,
		border : true,
		labelWidth : 67,
		items : [ {
			anchor : '100%',
			layout : 'column',
			labelSeparator : '：',
			labelAlign : 'right',
			items : [ {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '部门名称',
					name : 'orgNameSearch',
					id : 'orgNameSearch',
					anchor : '95%'
				}, {
					xtype : 'combo',
					fieldLabel : '部门负责人',
					store : ManageObj.orgManagerSearchStore,
					valueField : "id",
					displayField : "userName",
					mode : 'remote',
					forceSelection : true,
					minChars : 3,
					hiddenName : 'orgManagerHiddSearch',
					editable : true,
					triggerAction : 'all',
					name : 'orgManagerSearch',
					id : 'orgManagerSearch',
					emptyText : '请选择...',
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "生效时间",
					name : 'startTimeBeginSearch',
					id : 'startTimeBeginSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				}, new Ext.form.NumberField({
					fieldLabel : '编制',
					name : 'authorizeNumSearch',
					id : 'authorizeNumSearch',
					anchor : '95%',
					allowDecimals : false, // 允许小数
					allowNegative : true
				// 允许负数
				})]
			}, {
				columnWidth : .2, // 该列占用的宽度，标识为50％
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "至",
					name : 'startTimeEndSearch',
					id : 'startTimeEndSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				}, {
					xtype : 'OrganizeComboTree',
					fieldLabel : '上级部门',
					name : 'fIDSearch',
					id : 'fIDSearch',
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // 该列占用的宽度，标识为50％
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "失效时间",
					name : 'endTimeBeginSearch',
					id : 'endTimeBeginSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // 该列占用的宽度，标识为50％
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "至",
					name : 'endTimeEndSearch',
					id : 'endTimeEndSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				} ]
			} ]
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
				Ext.getCmp("fIDSearch").hiddenValue = "";
			}
		} ]
	});
};

/* 初始化数据列表 */
ManageObj.initDataGridPan = function() {
	var sm = new Ext.grid.CheckboxSelectionModel();

	ManageObj.dataStore = new Ext.data.JsonStore({
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'id', 'orgName', 'fID', 'fName', 'authorizeNum', 'startTime', 'orgManager', 'endTime', 'orgManagerName', 'detail', 'deleteFlag', 'fOrgName' ],
		proxy : new Ext.data.HttpProxy({
			url : GLOBAL_APP_NAME + '/WEB-ROOT/app/sysManage/orgManage.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore'
		}
	});

	pagingBar = new Ext.ux.MyPagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.dataStore,
		displayMsg : '当前第{0}到{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共{2}条记录',
		emptyMsg : "没有找到任何记录！",
		displayInfo : true
	});

	ManageObj.dataGridPan = new Ext.grid.GridPanel({
		id : 'getTask',
		store : ManageObj.dataStore,
		loadMask : true,
		bbar : pagingBar,
		columns : [ sm, {
			header : "<font color='blue'>部门ID</font>",
			width : 45,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
			header : "<font color='blue'>部门名称</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'orgName'
		}, {
			header : "<font color='blue'>部门负责人</font>",
			width : 55,
			align : 'center',
			sortable : true,
			dataIndex : 'orgManagerName'
		}, {
			header : "<font color='blue'>编制</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'authorizeNum',
			renderer : ManageObj.authorizeNumRenderer
		}, {
			header : "<font color='blue'>上级部门</font>",
			width : 120,
			align : 'center',
			sortable : true,
			dataIndex : 'fName',
			renderer : ManageObj.fNameRenderer
		}, {
			header : "<font color='blue'>生效时间</font>",
			width : 85,
			align : 'center',
			sortable : true,
			dataIndex : 'startTime'
		}, {
			header : "<font color='blue'>失效时间</font>",
			width : 85,
			align : 'center',
			sortable : true,
			dataIndex : 'endTime'
		}, {
			header : "<font color='blue'>操作</font>",
			width : 80,
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
			xtype : 'splitbutton',
			text : '&nbsp;部门管理',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '新增部门',
				handler : function() {
					ManageObj.doAdd();
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : '删除部门',
				handler : function() {
					ManageObj.doDeleOrUnDele(null, 1);
				},
				icon : LOCK_OPERATION_ICON_PATH
			} ]
		}, '-', {
			text : '显示全部',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				Ext.getCmp("fIDSearch").hiddenValue = "";
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		}, '-', {
			text : '搜索',
			handler : function() {
				Ext.getCmp('west-panel').expand();
			},
			icon : VIEW_OPERATION_ICON_PATH
		}, '-' ]
	});

	/* 右键弹出菜单 */
	ManageObj.dataGridPan.addListener('rowcontextmenu', ManageObj.rightClickFn);
};

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
			text : '新增部门',
			icon : RIGHT_CLICK_ADD_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			id : 'rMenu1',
			text : '浏览部门',
			icon : VIEW_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "view");
			}
		}, {
			id : 'rMenu2',
			text : '编辑部门',
			icon : EDIT_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "update");
			}
		} ]
	});

	/* 当前选中行状态 */
	var nowSelectedRowStutas = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('deleteFlag');
	var nowSelectedRowId = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id');
	var nowStutasStr = "删除部门";
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
			collapsible : true,
			title : '	',
			border : false,
			region : 'north',
			height : 130,
			items : [ ManageObj.searchForm ]
		}, {
			id : 'gridViewItem',
			layout : 'fit',
			split : false,
			autoScroll : false,
			border : false,
			region : 'center',
			items : [ ManageObj.dataGridPan ]
		} ]
	});
};

/* 加载数据 */
ManageObj.loadData = function() {
	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
};

ManageObj.authorizeNumRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = record.data['authorizeNum'];
	if (record.data['authorizeNum'] == '-1') {
		returnStr = "无限制";
	}
	return returnStr;
};

ManageObj.fNameRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var fName = record.data['fName'];
	if (fName == ORG_TREE_ROOT_NODE_NAME) {
		fName = "根节点";
	}
	return fName;
};

/* 操作列Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">浏览</a>";
	if (record.data['deleteFlag'] == '0') {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">编辑</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">删除</a>";
	} else {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','0');\">解冻</a>";
	}

	return returnStr;
};

/* 查询 */
ManageObj.doSearch = function() {
	if (!ManageObj.searchForm.form.isValid()) {
		Ext.MessageBox.alert("温馨提醒！", "输入项有误!请修改红色线提示处！");
		return;
	}
	var orgNameSearch = document.all.orgNameSearch.value;
	var startTimeBeginSearch = document.all.startTimeBeginSearch.value;
	var startTimeEndSearch = document.all.startTimeEndSearch.value;
	var endTimeBeginSearch = document.all.endTimeBeginSearch.value;
	var endTimeEndSearch = document.all.endTimeEndSearch.value;
	var authorizeNumSearch = document.all.authorizeNumSearch.value;
	var fIDSearch = Ext.getCmp("fIDSearch").hiddenValue;
	var orgManagerSearch = Ext.getCmp("orgManagerSearch").getValue();

	if (startTimeBeginSearch != "") {
		if (startTimeEndSearch != "") {
			if (startTimeBeginSearch > startTimeEndSearch) {
				Ext.MessageBox.alert("错误提示", "生效时间开始大于结束，请重新选择!");
				return;
			}
		}
	}
	if (endTimeBeginSearch != "") {
		if (endTimeEndSearch != "") {
			if (endTimeBeginSearch > endTimeEndSearch) {
				Ext.MessageBox.alert("错误提示", "失效时间开始大于结束，请重新选择!");
				return;
			}
		}
	}

	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE,
			orgNameSearch : document.all.orgNameSearch.value,
			startTimeBeginSearch : document.all.startTimeBeginSearch.value,
			startTimeEndSearch : document.all.startTimeEndSearch.value,
			endTimeBeginSearch : document.all.endTimeBeginSearch.value,
			endTimeEndSearch : document.all.endTimeEndSearch.value,
			authorizeNumSearch : document.all.authorizeNumSearch.value,
			stateValueSearch : 0,
			fIDSearch : Ext.getCmp("fIDSearch").hiddenValue,
			orgManagerSearch : Ext.getCmp("orgManagerSearch").getValue()
		}
	});
};

/* 得到添加或编辑的FormPanel */
ManageObj.getOperationFormPan = function(rowIndex) {
	ManageObj.operationFormPan = new Ext.FormPanel({
		id : 'operationFormPan',
		collapsible : true,
		frame : true,
		modal : true,
		autoWidth : true,
		autoHeight : true,
		autoScroll : true,
		defaults : {
			border : true
		},
		buttonAlign : 'center',
		labelAlign : 'right',
		labelWidth : 80,
		closable : true,
		resizable : false,
		layout : 'fit',
		plain : true,
		items : [ {
			items : [ {
				layout : 'column',
				border : false,
				items : [ {
					columnWidth : 1,
					layout : 'form',
					border : false,
					items : [ {
						xtype : 'textfield',
						fieldLabel : '<font color="red">*</font>&nbsp;部门名称',
						name : 'orgName',
						id : 'orgName',
						allowBlank : false,
						anchor : '95%'
					}, {
						xtype : 'combo',
						fieldLabel : '<font color="red">*</font>&nbsp;部门负责人',
						cls : 'key',
						store : ManageObj.orgManagerSearchStore,
						valueField : "id",
						displayField : "userName",
						mode : 'remote',
						minChars : 3,
						hiddenName : 'orgManagerHiddenName',
						editable : true,
						triggerAction : 'all',
						name : 'orgManager',
						id : 'orgManager',
						allowBlank : false,
						anchor : '95%'
					}, new Ext.form.NumberField({
						fieldLabel : '<font color="red">*</font>&nbsp;编制',
						name : 'authorizeNum',
						id : 'authorizeNum',
						anchor : '95%',
						allowDecimals : false, // 允许小数
						allowNegative : true, // 允许负数
						emptyText : '请输入该部门的编制人数，-1为无限制。',
						allowBlank : false
					}), {
						xtype : 'OrganizeComboTree',
						fieldLabel : '<font color="red">*</font>&nbsp;上级部门',
						name : 'fID',
						id : 'fID',
						allowBlank : false,
						anchor : '95%'
					}, {
						xtype : 'datefield',
						format : 'Y-m-d',
						fieldLabel : '失效时间',
						name : 'endTime',
						id : 'endTime',
						invalidText : "日期格式不正确，应为yyyy-mm-dd hh:mi:ss",
						allowBlank : true,
						anchor : '95%'
					}, {
						xtype : 'textarea',
						fieldLabel : '备注',
						name : 'detail',
						id : 'detail',
						width : 100,
						anchor : '95%'
					} ]
				} ]
			} ]
		} ]
	});

	/* 浏览、编辑时有当前选中行号参数，得到当前行记录的信息，初始化输入项 */
	if (rowIndex != null) {
		ManageObj.operationFormPan.findById('orgName').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('orgName');
		ManageObj.operationFormPan.findById('orgManager').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('orgManagerName');
		Ext.getCmp("orgManager").hiddenValue = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('orgManager');
		ManageObj.operationFormPan.findById('authorizeNum').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('authorizeNum');
		ManageObj.operationFormPan.findById('fID').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fName');
		ManageObj.operationFormPan.findById('fID').hiddenValue = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('fID');

		ManageObj.operationFormPan.findById('endTime').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('endTime');

		Ext.getCmp('detail').setValue(ManageObj.dataGridPan.getStore().getAt(rowIndex).get('detail'));
	}

	return ManageObj.operationFormPan;
};

/*deleteFlag (1:删除 ； 0:解冻) 删除或解冻  */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "解冻" : "删除";
		Ext.MessageBox.confirm('温馨提醒！', '确认需要' + infoTmp + '所选记录吗？', function(info) {
			if (info == "yes") {
				Ext.Ajax.request({
					waitMsg : '数据提交中......',
					url : GLOBAL_APP_NAME + '/WEB-ROOT/app/sysManage/orgManage.do',
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
};

/* deleOrUnDele （1：删除 ； 0：解冻）  提交删除或解冻时数据合法性验证 */
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
	for ( var i = 0; i < selCount; i++) {
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
	if (!ManageObj.searchForm.form.isValid()) {
		Ext.MessageBox.alert("温馨提醒！", "输入项有误!请修改红色线提示处！");
		return;
	}
	var orgNameSearch = document.all.orgNameSearch.value;
	var startTimeBeginSearch = document.all.startTimeBeginSearch.value;
	var startTimeEndSearch = document.all.startTimeEndSearch.value;
	var endTimeBeginSearch = document.all.endTimeBeginSearch.value;
	var endTimeEndSearch = document.all.endTimeEndSearch.value;
	var authorizeNumSearch = document.all.authorizeNumSearch.value;
	var stateValueSearch = 0;
	var fIDSearch = Ext.getCmp("fIDSearch").hiddenValue;
	var orgManagerSearch = Ext.getCmp("orgManagerSearch").getValue();

	if (startTimeBeginSearch != "") {
		if (startTimeEndSearch != "") {
			if (startTimeBeginSearch > startTimeEndSearch) {
				Ext.MessageBox.alert("错误提示", "生效时间开始大于结束，请重新选择!");
				return;
			}
		}
	}
	if (endTimeBeginSearch != "") {
		if (endTimeEndSearch != "") {
			if (endTimeBeginSearch > endTimeEndSearch) {
				Ext.MessageBox.alert("错误提示", "失效时间开始大于结束，请重新选择!");
				return;
			}
		}
	}

	var url = GLOBAL_APP_NAME + '/servlet/ExportExeclServlet?flag=orgManage' + '&orgNameSearch=' + orgNameSearch + '&startTimeBeginSearch=' + startTimeBeginSearch + '&startTimeEndSearch=' + startTimeEndSearch + '&endTimeBeginSearch=' + endTimeBeginSearch
			+ '&endTimeEndSearch=' + endTimeEndSearch + '&authorizeNumSearch=' + authorizeNumSearch + '&stateValueSearch=' + stateValueSearch + '&fIDSearch=' + fIDSearch + '&orgManagerSearch=' + orgManagerSearch;

	window.location.href = url;
};
