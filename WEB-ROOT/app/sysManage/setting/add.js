ManageObj.doAdd = function() {
	ManageObj.addWindow = new Ext.Window({
				// maximized : true,
				collapsible : true,
				autoScroll:true,
				modal : true,
				frame : true,
				border : true,
				title : '������֯',
				labelAlign : 'center',
				buttonAlign : 'center',
				width : document.body.clientWidth * 0.6,
				closable : true,
				closeAction : 'close',
				resizable : false,
				layout : 'fit',
				buttons : [{
							text : '�ύ',
							handler : function() {
								ManageObj.doAddSubmit();
							}
						}, {
							text : '���',
							handler : function() {
								ManageObj.operationFormPan.getForm().reset();
							}
						}, {
							text : '����',
							handler : function() {
								ManageObj.addWindow.close();
							}
						}],
				items : ManageObj.getOperationFormPan()
			});
	ManageObj.addWindow.show();
}

ManageObj.doAddSubmit = function() {
	
	var fid = Ext.getCmp("fID").hiddenValue;
	var fName = Ext.getCmp("fID").getValue();
	
	/* Ext����֤ */
	if (!ManageObj.operationFormPan.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	/* form���ύ */
	ManageObj.operationFormPan.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : GLOBAL_APP_NAME+ '/WEB-ROOT/app/sysManage/orgManage.do?flag=doAddSubmit' + 
		      '&fID=' + fid + 
		      '&fName=' + fName + 
		      '&orgManager=' + document.all.orgManagerHiddenName.value,
		success : function(form, action) {
			Ext.MessageBox.show({
						title : WARRING_WIN_TITLE,
						msg : action.result.msg,
						buttons : Ext.MessageBox.OK,
						fn : function(){
							ManageObj.addWindow.close();
							ManageObj.dataStore.reload();
						},
						icon : Ext.MessageBox.INFO
					});
		},
		failure : function(form, action) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, action.result.msg);
		}
	});
}