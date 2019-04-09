var ManageObj = function() {
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

	/* �˵���Ȩ���� */
	ManageObj.uMenuWin = null;

	/* �Ҽ��¼� */
	ManageObj.rightClick = null;

	/* �Ҽ�ѡ���к� */
	ManageObj.rightMenuClickRow = null;

	/* δ�޸�֮ǰ�ĸ���·�� */
	ManageObj.oldAttach = null;

	/* ��ѯ--�Ա�store */
	ManageObj.userSexSearchStore = new Ext.data.SimpleStore({
		fields : [ 'userSexId', 'userSexText' ],
		data : [ [ '', 'ȫ��' ], [ '��', '��' ], [ 'Ů', 'Ů' ] ]
	});

	/* �����༭--�Ա�store */
	ManageObj.userSexStore = new Ext.data.SimpleStore({
		fields : [ 'userSexId', 'userSexText' ],
		data : [ [ '��', '��' ], [ 'Ů', 'Ů' ], [ '', '����' ] ]
	});
	
	/* �����༭--�û�����store */
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
	
	/* ��֤��������������Ƿ�һ�� */
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

/* ��ʼ���û����� */
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
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : false,
		labelWidth : 60,
		items : [ {
			// xtype : 'fieldset',
			// title : '��ѯ����',
			anchor : '100%',
			layout : 'column', //  
			labelSeparator : '��',
			labelAlign : 'right',
			items : [ {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '�û�����',
					name : 'userNameSearch',
					id : 'userNameSearch',
					anchor : '95%'
				}, {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "ע��ʱ��",
					name : 'registerTimeBeginSearch',
					id : 'registerTimeBeginSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '�û��ʺ�',
					name : 'userAcctSearch',
					id : 'userAcctSearch',
					anchor : '95%'
				}, {
					xtype : 'datefield',
					format : 'Y-m-d',
					fieldLabel : "��",
					name : 'registerTimeEndSearch',
					id : 'registerTimeEndSearch',
					invalidText : "���ڸ�ʽ����ȷ��ӦΪyyyy-mm-dd",
					anchor : '95%'
				} ]
			}, {
				columnWidth : .2, // ����ռ�õĿ�ȣ���ʶΪ50��
				layout : 'form',
				border : false,
				items : [ new Ext.form.NumberField({
					fieldLabel : '����',
					name : 'userAgeSearch',
					id : 'userAgeSearch',
					anchor : '95%',
					// grow:true,�Զ�����
					allowDecimals : false, // ����С��
					allowNegative : false, // ������
					maxValue : 200,
					minValue : 1
				}), {
					xtype : 'textfield',
					fieldLabel : '�绰',
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
					fieldLabel : '�Ա�',
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
					fieldLabel : '���֤',
					name : 'idcardSearch',
					id : 'idcardSearch',
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
			header : "<font color='blue'>���</font>",
			width : 40,
			align : 'center',
			sortable : true,
			dataIndex : 'id'
		}, {
			header : "<font color='blue'>�ʺ�</font>",
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'userAcct'
		}, {
			header : "<font color='blue'>����</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'userName'
		}, {
			header : "<font color='blue'>�Ա�</font>",
			width : 50,
			align : 'center',
			sortable : true,
			dataIndex : 'userSex',
			renderer : ManageObj.userSexRenderer
		}, {
			header : "<font color='blue'>����</font>",
			width : 50,
			align : 'center',
			sortable : true,
			dataIndex : 'userAge'
		}, {
			header : "<font color='blue'>�绰</font>",
			width : 60,
			align : 'center',
			sortable : true,
			dataIndex : 'userPhone'
		},  {
			header : "<font color='blue'>���֤</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'idcard',
		        hidden:true
		}, {
			header : "<font color='blue'>ע��ʱ��</font>",
			width : 80,
			align : 'center',
			sortable : true,
			dataIndex : 'registerTime',
		        hidden:true
		}, {
			header : "<font color='blue'>����״̬</font>",
			width : 60,
			align : 'center',
			sortable : true,
			renderer : ManageObj.statusRenderer,
			dataIndex : 'status'
		}, {
			header : "<font color='blue'>����</font>",
			width : 200,
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
			xtype : ( from == "self" )?"hidden":'splitbutton',
			text : '&nbsp;�û�����',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '�����û�',
				handler : function() {
					ManageObj.doAdd();
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : 'ɾ���û�',
				handler : function() {
					ManageObj.doDeleOrUnDele(null, 1);
				},
				icon : LOCK_OPERATION_ICON_PATH

			} ]
		}, '-', {
			text : '��ʾȫ��',
			handler : function() {
				ManageObj.searchForm.getForm().reset();
				ManageObj.doSearch();
			},
			icon : DISPLAY_ALL_ICON_PATH
		}, '-', {
			text : '������ͨ�û�Ĭ�ϲ˵�',
			xtype : ( from == "self" )?"hidden":'button',
			handler : function() {
				ManageObj.setUserMenu( -1 );
			},
			icon : VIEW_OPERATION_ICON_PATH
		} ]
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
			text : '�����û�',
			icon : RIGHT_CLICK_ADD_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.doAdd();
			}
		}, {
			id : 'rMenu1',
			text : '����û�',
			icon : VIEW_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "view");
			}
		}, {
			id : 'rMenu2',
			text : '�༭�û�',
			icon : EDIT_OPERATION_ICON_PATH,
			handler : function() {
				ManageObj.update(ManageObj.rightMenuClickRow, "update");
			}
		} ]
	});

	/* ��ǰѡ����״̬ */
	var nowSelectedRowStutas = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('deleteFlag');
	var nowSelectedRowId = ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id');
	var nowStutasStr = "ɾ���û�";
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

/* �������� */
ManageObj.loadData = function() {
	ManageObj.dataStore.load({
		params : {
			start : 0,
			limit : GLOBAL_MAX_PAGE_SIZE
		}
	});
};

/* ������Renderer */
ManageObj.operatorRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'view');\">���</a>";
	if (record.data['deleteFlag'] == '0') {
		returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.update(" + rowIndex + ",'update');\">�༭</a>";
		if( from != "self" ){
			returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.doDeleOrUnDele('" + record.data['id'] + "','1');\">ɾ��</a>";
			if (record.data['status'] == '0' && record.data['userType'] != '1' ) {
				returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.updateStatus(" + record.data['id'] + ",'1');\">ͨ������</a>";
			}else if (record.data['status'] == '1' && record.data['userType'] != '1'  ) {
				returnStr += "&nbsp;|&nbsp;<a href=\"#\" onclick=\"ManageObj.updateStatus(" + record.data['id'] + ",'0');\">��������</a>";
			}
			returnStr += "&nbsp;|&nbsp;<a href=\"#\" title=\"�˵���Ȩ\" onclick=\"ManageObj.setUserMenu(" + record.data['id'] + ");\">�˵���Ȩ</a>";
		}
	}
	return returnStr;
};

ManageObj.statusRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	var returnStr = "<font color='red'>δ����</font>";
	if (record.data['status'] == '1') {
		 returnStr = "<font color='green'>������</font>";
	}
	return returnStr;
};

/* �Ա���Renderer */
ManageObj.userSexRenderer = function(id, cellmeta, record, rowIndex, columnIndex, store) {
	returnStr = record.data['userSex'];
	if (returnStr == '') {
		returnStr = '����';
	}
	return returnStr;
};

/* ��ѯ */
ManageObj.doSearch = function() {
	var registerTimeBeginSearch = document.all.registerTimeBeginSearch.value;
	var registerTimeEndSearch = document.all.registerTimeEndSearch.value;
	if (registerTimeBeginSearch != "" && registerTimeEndSearch != "") {
		if (registerTimeBeginSearch > registerTimeEndSearch) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, "��ѯ�����У�ע�Ὺʼʱ����ڽ���ʱ�䣡");
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

/* �õ���ӻ�༭��FormPanel */
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
		fileUpload : true, /* �����ļ��򣬱������ô�����Ϊtrue */
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
					xtype : 'textfield',
					fieldLabel : '<font color="red">*</font>&nbsp;�û��ʺ�',
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
					fieldLabel : '<font color="red">*</font>&nbsp;�û�����',
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
					fieldLabel : '<font color="red">*</font>&nbsp;����',
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
					fieldLabel : '<font color="red">*</font>&nbsp;ȷ������',
					name : 'confirmUserPass',
					id : 'confirmUserPass',
					anchor : '97%',
					vtype : 'passwordConfirm',
					initialPassField : 'userPass',
					invalidText : '������������벻һ��',
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
					fieldLabel : '<font color="red">*</font>&nbsp;�û�����',
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
					fieldLabel : '����',
					name : 'userAge',
					id : 'userAge',
					anchor : '97%',
					// grow:true,�Զ�����
					allowDecimals : false, // ����С��
					allowNegative : false, // ������
					maxValue : 200,
					minValue : 1
				}) ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'combo',
					fieldLabel : '�Ա�',
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
					value : '��'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textfield',
					fieldLabel : '&nbsp;�绰',
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
					fieldLabel : '���֤',
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
					fieldLabel : (flag == 'view') ? '' : '����',
					buttonText : '���',
					anchor : '97%'
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'textarea',
					fieldLabel : '��ע',
					name : 'userDetail',
					id : 'userDetail',
					anchor : '97%'
				} ]
			} ]
		} ]
	});

	/* ������༭ʱ�е�ǰѡ���кŲ������õ���ǰ�м�¼����Ϣ����ʼ�������� */
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

/*  deleteFlag (1:ɾ�� �� 0:�ⶳ)  */
ManageObj.doDeleOrUnDele = function(id, deleteFlag) {
	if (!id) {
		ManageObj.doCheck(deleteFlag);
	} else {
		var infoTmp = (deleteFlag == "0") ? "" : "ɾ��";
		Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫ' + infoTmp + '��ѡ��¼��', function(info) {
			if (info == "yes") {
				Ext.Ajax.request({
					waitMsg : '�����ύ��......',
					url : '/WEB-ROOT/app/sysManage/systemUserManage.do',
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

/*  deleOrUnDele ��1��ɾ�� �� 0���ⶳ��  �ύɾ����ⶳʱ���ݺϷ�����֤ */
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
	if (!simpleForm.form.isValid()) {
		Ext.MessageBox.alert("��ܰ���ѣ�", "����������!���޸ĺ�ɫ����ʾ����");
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

	var url = '/servlet/ExportExeclServlet?flag=organizeUpdate' + '&orgNameSearch=' + orgNameSearch + '&startTimeBeginSearch=' + startTimeBeginSearch + '&startTimeEndSearch=' + startTimeEndSearch + '&endTimeBeginSearch=' + endTimeBeginSearch + '&endTimeEndSearch='
			+ endTimeEndSearch + '&authorizeNumSearch=' + authorizeNumSearch + '&stateValueSearch=' + stateValueSearch + '&fIDSearch=' + fIDSearch + '&orgManagerSearch=' + orgManagerSearch;

	window.location = url;
};

/* �˵���Ȩ */
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
		title : '�û��˵���Ȩ����',
		html : "<iframe id='userMenuFrame' name='userMenuFrame' src='" + GLOBAL_APP_NAME + "/WEB-ROOT/app/sysManage/userMenuManage.do?from=userManage&userID=" + id + "' frameborder='0' width='100%' style='height:100%'></iframe>",
		doUpdateUserMenu : function() {
			var userMenuAl = window.frames['userMenuFrame'].getUserAllMenu();
			var userId = window.frames['userMenuFrame'].document.all.userID.value;
			if (userMenuAl.split(",") == null || userMenuAl.split(",").length == 1) {
				Ext.MessageBox.show({
					title : '��ܰ���ѣ�',
					msg : '��ǰû�и��û����ò˵������β���������û����в˵�Ȩ�ޣ�',
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
			this.addButton('�ύ', this.doUpdateUserMenu, this);
			this.addButton('����', function() {
				ManageObj.uMenuWin.close();
			}, this);
		}
	});
	ManageObj.uMenuWin = new userMenuWindow();
	ManageObj.uMenuWin.setVisible(true);
};

/* ��Ȩ�˵��ύ */
ManageObj.setUserMenuSubmit = function(userMenuAl, userId) {
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
			flag : "doUpdate",
			userMenuAl : userMenuAl,
			userID : userId
		}
	});
};

ManageObj.updateStatus = function(id, status) {
	Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫ�޸�״̬��', function(info) {
		if (info == "yes") {
			Ext.Ajax.request({
				waitMsg : '�����ύ��......',
				url : '/WEB-ROOT/app/sysManage/systemUserManage.do',
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
					flag : "doUpdateStatus",
					id : id,
					status : status
				}
			});
		}
	});
};