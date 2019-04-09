ManageObj = function() {
	/* ������� */
	ManageObj.searchForm = null;

	/* ������༭������� */
	ManageObj.operationFormPan = null;

	/* �����б� */
	ManageObj.dataGridPan = null;

	/* DataStore */
	ManageObj.dataStore = null;

	/* viewport */
	ManageObj.viewport = null;

	/* �������� */
	ManageObj.addWindow = null;

	/* �༭���� */
	ManageObj.updateWindow = null;

	/* �Ҽ��¼� */
	ManageObj.rightClick = null;

	/* �Ҽ�ѡ���к� */
	ManageObj.rightMenuClickRow = null;

	/* ���Ÿ����� */
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

/* ��ʼ�����Ž��� */
ManageObj.init = function() {
	/* ����Ҫ������һ�䣬����û�б�����ʾ��Ϣ */
	Ext.QuickTips.init();
	ManageObj.initSearchForm();
	ManageObj.initDataGridPan();
	ManageObj.initViewport();
	ManageObj.loadData();
};

/* ��ʼ�������� */
ManageObj.initSearchForm = function() {
	/* ��ʼ�������� */
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
			labelSeparator : '��',
			labelAlign : 'right',
			items : [ {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '��������',
					name : 'orgNameSearch',
					id : 'orgNameSearch',
					anchor : '95%'
				}, {
					xtype : 'combo',
					fieldLabel : '���Ÿ�����',
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
					emptyText : '��ѡ��...',
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "��Чʱ��",
					name : 'startTimeBeginSearch',
					id : 'startTimeBeginSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				}, new Ext.form.NumberField({
					fieldLabel : '����',
					name : 'authorizeNumSearch',
					id : 'authorizeNumSearch',
					anchor : '95%',
					allowDecimals : false, // ����С��
					allowNegative : true
				// ������
				})]
			}, {
				columnWidth : .2, // ����ռ�õĿ�ȣ���ʶΪ50��
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "��",
					name : 'startTimeEndSearch',
					id : 'startTimeEndSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				}, {
					xtype : 'OrganizeComboTree',
					fieldLabel : '�ϼ�����',
					name : 'fIDSearch',
					id : 'fIDSearch',
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // ����ռ�õĿ�ȣ���ʶΪ50��
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "ʧЧʱ��",
					name : 'endTimeBeginSearch',
					id : 'endTimeBeginSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // ����ռ�õĿ�ȣ���ʶΪ50��
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "��",
					name : 'endTimeEndSearch',
					id : 'endTimeEndSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				} ]
			} ]
		} ],
		buttons : [ {
			text : '��ѯ',
			handler : function() {
				ManageObj.doSearch();
			}
		}, {
			text : '���',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				Ext.getCmp("fIDSearch").hiddenValue = "";
			}
		} ]
	});
};

/* ��ʼ�������б� */
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
		displayMsg : '��ǰ��{0}��{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��{2}����¼',
		emptyMsg : "û���ҵ��κμ�¼��",
		displayInfo : true
	});

	ManageObj.dataGridPan = new Ext.grid.GridPanel({
		id : 'getTask',
		store : ManageObj.dataStore,
		loadMask : true,
		bbar : pagingBar,
		columns : [ sm, {
			header : "<font color='blue'>����ID</font>",
			width : 45,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
			header : "<font color='blue'>��������</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'orgName'
		}, {
			header : "<font color='blue'>���Ÿ�����</font>",
			width : 55,
			align : 'center',
			sortable : true,
			dataIndex : 'orgManagerName'
		}, {
			header : "<font color='blue'>����</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'authorizeNum',
			renderer : ManageObj.authorizeNumRenderer
		}, {
			header : "<font color='blue'>�ϼ�����</font>",
			width : 120,
			align : 'center',
			sortable : true,
			dataIndex : 'fName',
			renderer : ManageObj.fNameRenderer
		}, {
			header : "<font color='blue'>��Чʱ��</font>",
			width : 85,
			align : 'center',
			sortable : true,
			dataIndex : 'startTime'
		}, {
			header : "<font color='blue'>ʧЧʱ��</font>",
			width : 85,
			align : 'center',
			sortable : true,
			dataIndex : 'endTime'
		}, {
			header : "<font color='blue'>����</font>",
			width : 80,
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
		tbar : [ '-', {
			xtype : 'splitbutton',
			text : '&nbsp;���Ź���',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '��������',
				handler : function() {
					ManageObj.doAdd();
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : 'ɾ������',
				handler : function() {
					ManageObj.doDeleOrUnDele(null, 1);
				},
				icon : LOCK_OPERATION_ICON_PATH
			} ]
		}, '-', {
			text : '��ʾȫ��',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				Ext.getCmp("fIDSearch").hiddenValue = "";
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		}, '-', {
			text : '����',
			handler : function() {
				Ext.getCmp('west-panel').expand();
			},
			icon : VIEW_OPERATION_ICON_PATH
		}, '-' ]
	});

	/* �Ҽ������˵� */
	ManageObj.dataGridPan.addListener('rowcontextmenu', ManageObj.rightClickFn);
};

/* �Ҽ���Ӧ�¼� */
ManageObj.rightClickFn = function(grid, rowIndex, e) {
	e.preventDefault();
	ManageObj.rightMenuClickRow = rowIndex;

	/* ������в˵��� */
	if (ManageObj.rightClick != null) {
		ManageObj.rightClick.removeAll();
	}
	/* �����˵� */
	ManageObj.rightClick = new Ext.menu.Menu({
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

/* �������� */
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
		returnStr = "������";
	}
	return returnStr;
};

ManageObj.fNameRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var fName = record.data['fName'];
	if (fName == ORG_TREE_ROOT_NODE_NAME) {
		fName = "���ڵ�";
	}
	return fName;
};

/* ������Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">���</a>";
	if (record.data['deleteFlag'] == '0') {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">�༭</a>";
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">ɾ��</a>";
	} else {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','0');\">�ⶳ</a>";
	}

	return returnStr;
};

/* ��ѯ */
ManageObj.doSearch = function() {
	if (!ManageObj.searchForm.form.isValid()) {
		Ext.MessageBox.alert("��ܰ���ѣ�", "����������!���޸ĺ�ɫ����ʾ����");
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
				Ext.MessageBox.alert("������ʾ", "��Чʱ�俪ʼ���ڽ�����������ѡ��!");
				return;
			}
		}
	}
	if (endTimeBeginSearch != "") {
		if (endTimeEndSearch != "") {
			if (endTimeBeginSearch > endTimeEndSearch) {
				Ext.MessageBox.alert("������ʾ", "ʧЧʱ�俪ʼ���ڽ�����������ѡ��!");
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

/* �õ���ӻ�༭��FormPanel */
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
						fieldLabel : '<font color="red">*</font>&nbsp;��������',
						name : 'orgName',
						id : 'orgName',
						allowBlank : false,
						anchor : '95%'
					}, {
						xtype : 'combo',
						fieldLabel : '<font color="red">*</font>&nbsp;���Ÿ�����',
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
						fieldLabel : '<font color="red">*</font>&nbsp;����',
						name : 'authorizeNum',
						id : 'authorizeNum',
						anchor : '95%',
						allowDecimals : false, // ����С��
						allowNegative : true, // ������
						emptyText : '������ò��ŵı���������-1Ϊ�����ơ�',
						allowBlank : false
					}), {
						xtype : 'OrganizeComboTree',
						fieldLabel : '<font color="red">*</font>&nbsp;�ϼ�����',
						name : 'fID',
						id : 'fID',
						allowBlank : false,
						anchor : '95%'
					}, {
						xtype : 'datefield',
						format : 'Y-m-d',
						fieldLabel : 'ʧЧʱ��',
						name : 'endTime',
						id : 'endTime',
						invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd hh:mi:ss",
						allowBlank : true,
						anchor : '95%'
					}, {
						xtype : 'textarea',
						fieldLabel : '��ע',
						name : 'detail',
						id : 'detail',
						width : 100,
						anchor : '95%'
					} ]
				} ]
			} ]
		} ]
	});

	/* ������༭ʱ�е�ǰѡ���кŲ������õ���ǰ�м�¼����Ϣ����ʼ�������� */
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

/*deleteFlag (1:ɾ�� �� 0:�ⶳ) ɾ����ⶳ  */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "�ⶳ" : "ɾ��";
		Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫ' + infoTmp + '��ѡ��¼��', function(info) {
			if (info == "yes") {
				Ext.Ajax.request({
					waitMsg : '�����ύ��......',
					url : GLOBAL_APP_NAME + '/WEB-ROOT/app/sysManage/orgManage.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						Ext.MessageBox.show({
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
};

/* deleOrUnDele ��1��ɾ�� �� 0���ⶳ��  �ύɾ����ⶳʱ���ݺϷ�����֤ */
ManageObj.doCheck = function(deleOrUnDele) {
	var sm = ManageObj.dataGridPan.getSelectionModel();
	var sel = sm.getSelections();
	var selCount = sm.getCount();
	if (selCount == 0) {
		Ext.Msg.show({
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
			title : '��ܰ��ʾ��',
			buttons : Ext.MessageBox.OK,
			msg : '��ѡ��ĵ�' + hasUnDeletedRowId + "�е������Ѿ�Ϊ����״̬��������ѡ��",
			icon : Ext.MessageBox.ERROR
		});
		return;
	} else if (hasDeletedRowId != "") {
		Ext.Msg.show({
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
	if (!ManageObj.searchForm.form.isValid()) {
		Ext.MessageBox.alert("��ܰ���ѣ�", "����������!���޸ĺ�ɫ����ʾ����");
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
				Ext.MessageBox.alert("������ʾ", "��Чʱ�俪ʼ���ڽ�����������ѡ��!");
				return;
			}
		}
	}
	if (endTimeBeginSearch != "") {
		if (endTimeEndSearch != "") {
			if (endTimeBeginSearch > endTimeEndSearch) {
				Ext.MessageBox.alert("������ʾ", "ʧЧʱ�俪ʼ���ڽ�����������ѡ��!");
				return;
			}
		}
	}

	var url = GLOBAL_APP_NAME + '/servlet/ExportExeclServlet?flag=orgManage' + '&orgNameSearch=' + orgNameSearch + '&startTimeBeginSearch=' + startTimeBeginSearch + '&startTimeEndSearch=' + startTimeEndSearch + '&endTimeBeginSearch=' + endTimeBeginSearch
			+ '&endTimeEndSearch=' + endTimeEndSearch + '&authorizeNumSearch=' + authorizeNumSearch + '&stateValueSearch=' + stateValueSearch + '&fIDSearch=' + fIDSearch + '&orgManagerSearch=' + orgManagerSearch;

	window.location.href = url;
};
