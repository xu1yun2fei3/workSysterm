var ManageObj = function() {
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

	/* 菜单授权窗口 */
	ManageObj.uMenuWin = null;

	/* 右键事件 */
	ManageObj.rightClick = null;

	/* 右键选中行号 */
	ManageObj.rightMenuClickRow = null;

	/* 未修改之前的附件路径 */
	ManageObj.oldAttach = null;

	/* 查询--性别store */
	ManageObj.userSexSearchStore = new Ext.data.SimpleStore({
		fields : [ 'userSexId', 'userSexText' ],
		data : [ [ '', '全部' ], [ '男', '男' ], [ '女', '女' ] ]
	});

	/* 新增编辑--性别store */
	ManageObj.userSexStore = new Ext.data.SimpleStore({
		fields : [ 'userSexId', 'userSexText' ],
		data : [ [ '男', '男' ], [ '女', '女' ], [ '', '保密' ] ]
	});
	
	/* 新增编辑--用户类型store */
	ManageObj.userTypeStore = new Ext.data.JsonStore({
		url : '/WEB-ROOT/app/sysManage/systemRoleManage.do',
		baseParams : {
			flag : 'getJsonStore',
			deleteFlagSearch : 0
		},
		root : 'root',
		totalProperty : 'totalProperty',
		fields : [ 'jiaosemingchen', 'id' ]
	});
	
	/* 验证两次输入的密码是否一致 */
	Ext.apply(Ext.form.VTypes, {
		passwordConfirm : function(val, field) {
			if (field.initialPassField) {
				var pwd = Ext.getCmp(field.initialPassField);
				return (val == pwd.getValue());
			}
			return true;
		}
	});

	ManageObj.init();
};

/* 初始化用户界面 */
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
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : false,
		labelWidth : 60,
		items : [ {
			// xtype : 'fieldset',
			// title : '查询条件',
			anchor : '100%',
			layout : 'column', //  
			labelSeparator : '：',
			labelAlign : 'right',
			items : [ {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '用户名称',
					name : 'userNameSearch',
					id : 'userNameSearch',
					anchor : '95%'
				}, {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "注册时间",
					name : 'registerTimeBeginSearch',
					id : 'registerTimeBeginSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '用户帐号',
					name : 'userAcctSearch',
					id : 'userAcctSearch',
					anchor : '95%'
				}, {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "至",
					name : 'registerTimeEndSearch',
					id : 'registerTimeEndSearch',
					invalidText : "日期格式不正确，应为yyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // 该列占用的宽度，标识为50％
				layout : 'form',
				border : false,
				items : [ new Ext.form.NumberField({
					fieldLabel : '年龄',
					name : 'userAgeSearch',
					id : 'userAgeSearch',
					anchor : '95%',
					// grow:true,自动伸缩
					allowDecimals : false, // 允许小数
					allowNegative : false, // 允许负数
					maxValue : 200,
					minValue : 1
				}), {
					xtype : 'textfield',
					fieldLabel : '电话',
					name : 'userPhoneSearch',
					id : 'userPhoneSearch',
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '性别',
					store : ManageObj.userSexSearchStore,
					valueField : "userSexId",
					displayField : "userSexText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'userSexSearchHidden',
					editable : false,
					triggerAction : 'all',
					name : 'userSexSearch',
					id : 'userSexSearch',
					anchor : '95%',
					value : ''
				}, {
					xtype : 'textfield',
					fieldLabel : '身份证',
					name : 'idcardSearch',
					id : 'idcardSearch',
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
		fields : [ 'id', 'userAcct', 'userName', 'userSex', 'userType', 'userTypeName','userAge', 'userPass', 'userDoc', 'userDetail', 'userPhone', 'registerTime', 'deleteFlag', 'danwei', 'bumen', 'zhiwei', 'idcard','status' ],
		proxy : new Ext.data.HttpProxy({
			url : '/WEB-ROOT/app/sysManage/systemUserManage.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getJsonStore',
			from : from
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
			header : "<font color='blue'>序号</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
			header : "<font color='blue'>帐号</font>",
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'userAcct'
		}, {
			header : "<font color='blue'>名称</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'userName'
		}, {
			header : "<font color='blue'>性别</font>",
			width : 50,
			align : 'center',
			sortable : true,
			dataIndex : 'userSex',
			renderer : ManageObj.userSexRenderer
		}, {
			header : "<font color='blue'>年龄</font>",
			width : 50,
			align : 'center',
			sortable : true,
			dataIndex : 'userAge'
		}, {
			header : "<font color='blue'>电话</font>",
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'userPhone'
		},  {
			header : "<font color='blue'>身份证</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'idcard',
		        hidden:true
		}, {
			header : "<font color='blue'>注册时间</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'registerTime',
		        hidden:true
		}, {
			header : "<font color='blue'>审批状态</font>",
			width : 60,
			align : 'center',
			sortable : true,
			renderer : ManageObj.statusRenderer,
			dataIndex : 'status'
		}, {
			header : "<font color='blue'>操作</font>",
			width : 200,
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
			xtype : ( from == "self" )?"hidden":'splitbutton',
			text : '&nbsp;用户管理',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '新增用户',
				handler : function() {
					ManageObj.doAdd();
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : '删除用户',
				handler : function() {
					ManageObj.doDeleOrUnDele(null, 1);
				},
				icon : LOCK_OPERATION_ICON_PATH

			} ]
		}, '-', {
			text : '显示全部',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		}, '-', {
			text : '设置普通用户默认菜单',
			xtype : ( from == "self" )?"hidden":'button',
			handler : function() {
				ManageObj.setUserMenu( -1 );
			},
			icon : VIEW_OPERATION_ICON_PATH
		} ]
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
			text : '新增用户',
			icon : RIGHT_CLICK_ADD_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			id : 'rMenu1',
			text : '浏览用户',
			icon : VIEW_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "view");
			}
		}, {
			id : 'rMenu2',
			text : '编辑用户',
			icon : EDIT_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "update");
			}
		} ]
	});

	/* 当前选中行状态 */
	var nowSelectedRowStutas = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('deleteFlag');
	var nowSelectedRowId = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id');
	var nowStutasStr = "删除用户";
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
			collapsible : true,
			title : ' ',
			autoScroll : false,
			border : false,
			region : 'north',
			height : 130,
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

/* 操作列Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">浏览</a>";
	if (record.data['deleteFlag'] == '0') {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">编辑</a>";
		if( from != "self" ){
			returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">删除</a>";
			if (record.data['status'] == '0' && record.data['userType'] != '1' ) {
				returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.updateStatus(" + record.data['id'] + ",'1');\">通过审批</a>";
			}else if (record.data['status'] == '1' && record.data['userType'] != '1'  ) {
				returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.updateStatus(" + record.data['id'] + ",'0');\">驳回审批</a>";
			}
			returnStr += "&nbsp;|&nbsp;<a href=\"#\" title=\"菜单授权\" onclick=\"ManageObj.setUserMenu(" + record.data['id'] + ");\">菜单授权</a>";
		}
	}
	return returnStr;
};

ManageObj.statusRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<font color='red'>未审批</font>";
	if (record.data['status'] == '1') {
		 returnStr = "<font color='green'>已审批</font>";
	}
	return returnStr;
};

/* 性别列Renderer */
ManageObj.userSexRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	returnStr = record.data['userSex'];
	if (returnStr == '') {
		returnStr = '保密';
	}
	return returnStr;
};

/* 查询 */
ManageObj.doSearch = function() {
	var registerTimeBeginSearch = document.all.registerTimeBeginSearch.value;
	var registerTimeEndSearch = document.all.registerTimeEndSearch.value;
	if (registerTimeBeginSearch != "" && registerTimeEndSearch != "") {
		if (registerTimeBeginSearch > registerTimeEndSearch) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, "查询条件中，注册开始时间大于结束时间！");
			return;
		}
	}

	ManageObj.dataStore.baseParams.userNameSearch = document.all.userNameSearch.value;
	ManageObj.dataStore.baseParams.registerTimeBeginSearch = registerTimeBeginSearch;
	ManageObj.dataStore.baseParams.userSexSearchHidden = document.all.userSexSearchHidden.value;
	ManageObj.dataStore.baseParams.userAcctSearch = document.all.userAcctSearch.value;
	ManageObj.dataStore.baseParams.registerTimeEndSearch = registerTimeEndSearch;
	ManageObj.dataStore.baseParams.userAgeSearch = Ext.getCmp("userAgeSearch").getValue();
	ManageObj.dataStore.baseParams.userPhoneSearch = document.all.userPhoneSearch.value;
	ManageObj.dataStore.baseParams.idcardSearch = document.all.idcardSearch.value;

	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
};

/* 得到添加或编辑的FormPanel */
ManageObj.getOperationFormPan = function(rowIndex, flag) {
	ManageObj.operationFormPan = new Ext.FormPanel({
		id : 'operationFormPan',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:5px;',
		frame : true,
		border : true,
		labelWidth : 90,
		autoWidth : true,
		autoHeight : true,
		fileUpload : true, /* 表单有文件域，必须设置此属性为true */
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
					fieldLabel : '<font color="red">*</font>&nbsp;用户帐号',
					name : 'userAcct',
					id : 'userAcct',
					anchor : '97%',
					allowBlank : false,
					readOnly : ((rowIndex != null) ? true : false)
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '<font color="red">*</font>&nbsp;用户名称',
					name : 'userName',
					id : 'userName',
					anchor : '97%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					inputType : 'password',
					fieldLabel : '<font color="red">*</font>&nbsp;密码',
					allowBlank : false,
					name : 'userPass',
					id : 'userPass',
					anchor : '97%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					inputType : 'password',
					fieldLabel : '<font color="red">*</font>&nbsp;确认密码',
					name : 'confirmUserPass',
					id : 'confirmUserPass',
					anchor : '97%',
					vtype : 'passwordConfirm',
					initialPassField : 'userPass',
					invalidText : '两次输入的密码不一致',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					hidden:( (from=="self")?true:false  ),
					hideLabel :( (from=="self")?true:false  ),
					fieldLabel : '<font color="red">*</font>&nbsp;用户类型',
					store : ManageObj.userTypeStore,
					valueField : "id",
					displayField : "jiaosemingchen",
					mode : 'remote',
					forceSelection : true,
					hiddenName : 'userTypeHidden',
					editable : false,
					triggerAction : 'all',
					name : 'userType',
					id : 'userType',
					anchor : '97%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ new Ext.form.NumberField({
					fieldLabel : '年龄',
					name : 'userAge',
					id : 'userAge',
					anchor : '97%',
					// grow:true,自动伸缩
					allowDecimals : false, // 允许小数
					allowNegative : false, // 允许负数
					maxValue : 200,
					minValue : 1
				}) ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '性别',
					store : ManageObj.userSexStore,
					valueField : "userSexId",
					displayField : "userSexText",
					mode : 'local',
					forceSelection : true,
					hiddenName : 'userSexHidden',
					editable : false,
					triggerAction : 'all',
					name : 'userSex',
					id : 'userSex',
					anchor : '97%',
					value : '男'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '&nbsp;电话',
					name : 'userPhone',
					id : 'userPhone',
					allowBlank : true,
					anchor : '97%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '身份证',
					name : 'idcard',
					id : 'idcard',
					allowBlank : true,
					anchor : '97%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : (flag == 'view') ? 'label' : 'fileuploadfield',
					style : (flag == 'view') ? 'margin-left:0px;padding-top:3px;padding-bottom:3px;' : 'margin-left:0px;',
					id : 'userDoc',
					name : 'userDoc',
					fieldLabel : (flag == 'view') ? '' : '附件',
					buttonText : '浏览',
					anchor : '97%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textarea',
					fieldLabel : '备注',
					name : 'userDetail',
					id : 'userDetail',
					anchor : '97%'
				} ]
			} ]
		} ]
	});

	/* 浏览、编辑时有当前选中行号参数，得到当前行记录的信息，初始化输入项 */
	if (rowIndex != null) {
		ManageObj.operationFormPan.findById('userAcct').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userAcct');

		ManageObj.operationFormPan.findById('userName').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userName');
		ManageObj.operationFormPan.findById('userAge').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userAge');
		ManageObj.operationFormPan.findById('userSex').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userSex');
		Ext.getCmp("userSex").hiddenValue = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userSex');
		ManageObj.operationFormPan.findById('userPhone').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userPhone');

		ManageObj.operationFormPan.findById('userDoc').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userDoc');
		Ext.getCmp('userDetail').setValue(ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userDetail'));
		ManageObj.operationFormPan.findById('idcard').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('idcard');

		ManageObj.operationFormPan.findById('userType').value = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userTypeName');
		Ext.getCmp("userType").hiddenValue = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userType');
		
		var attachVal = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userDoc');

		if (flag == 'view') {
			var fileName = attachVal.substring(attachVal.lastIndexOf("/") + 1);
			ManageObj.operationFormPan.findById('userDoc').html = "<a style='padding-left:0px;margin-left:4px;' href=" + attachVal + ">" + fileName + "</a>";
		} else {
			ManageObj.operationFormPan.findById('userDoc').value = attachVal;
		}

		ManageObj.oldAttach = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('userDoc');

	}

	return ManageObj.operationFormPan;
};

/*  deleteFlag (1:删除 ； 0:解冻)  */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "" : "删除";
		Ext.MessageBox.confirm('温馨提醒！', '确认需要' + infoTmp + '所选记录吗？', function(info) {
			if (info == "yes") {
				Ext.Ajax.request({
					waitMsg : '数据提交中......',
					url : '/WEB-ROOT/app/sysManage/systemUserManage.do',
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

/*  deleOrUnDele （1：删除 ； 0：解冻）  提交删除或解冻时数据合法性验证 */
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
	if (!simpleForm.form.isValid()) {
		Ext.MessageBox.alert("温馨提醒！", "输入项有误!请修改红色线提示处！");
		return;
	}
	var orgNameSearch = document.all.orgNameSearch.value;
	var startTimeBeginSearch = document.all.startTimeBeginSearch.value;
	var startTimeEndSearch = document.all.startTimeEndSearch.value;
	var endTimeBeginSearch = document.all.endTimeBeginSearch.value;
	var endTimeEndSearch = document.all.endTimeEndSearch.value;
	var authorizeNumSearch = document.all.authorizeNumSearch.value;
	var stateValueSearch = Ext.getCmp('stateValueSearch').getValue();
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

	var url = '/servlet/ExportExeclServlet?flag=organizeUpdate' + '&orgNameSearch=' + orgNameSearch + '&startTimeBeginSearch=' + startTimeBeginSearch + '&startTimeEndSearch=' + startTimeEndSearch + '&endTimeBeginSearch=' + endTimeBeginSearch + '&endTimeEndSearch='
			+ endTimeEndSearch + '&authorizeNumSearch=' + authorizeNumSearch + '&stateValueSearch=' + stateValueSearch + '&fIDSearch=' + fIDSearch + '&orgManagerSearch=' + orgManagerSearch;

	window.location = url;
};

/* 菜单授权 */
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
		title : '用户菜单授权管理',
		html : "<iframe id='userMenuFrame' name='userMenuFrame' src='" + GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do?from=userManage&userID=" + id + "' frameborder='0' width='100%' style='height:100%'></iframe>",
		doUpdateUserMenu : function() {
			var userMenuAl = window.frames['userMenuFrame'].getUserAllMenu();
			var userId = window.frames['userMenuFrame'].document.all.userID.value;
			if (userMenuAl.split(",") == null || userMenuAl.split(",").length == 1) {
				Ext.MessageBox.show({
					title : '温馨提醒！',
					msg : '当前没有给用户设置菜单，本次操作将清空用户所有菜单权限！',
					buttons : Ext.MessageBox.OK,
					fn : function() {
						ManageObj.setUserMenuSubmit(userMenuAl, userId);
					},
					icon : Ext.MessageBox.WARNING
				});
			} else {
				ManageObj.setUserMenuSubmit(userMenuAl, userId);
			}
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

/* 授权菜单提交 */
ManageObj.setUserMenuSubmit = function(userMenuAl, userId) {
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
			flag : "doUpdate",
			userMenuAl : userMenuAl,
			userID : userId
		}
	});
};

ManageObj.updateStatus = function(id, status) {
	Ext.MessageBox.confirm('温馨提醒！', '确认需要修改状态吗？', function(info) {
		if (info == "yes") {
			Ext.Ajax.request({
				waitMsg : '数据提交中......',
				url : '/WEB-ROOT/app/sysManage/systemUserManage.do',
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
					flag : "doUpdateStatus",
					id : id,
					status : status
				}
			});
		}
	});
};