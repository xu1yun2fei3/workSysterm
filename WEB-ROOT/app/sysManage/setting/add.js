ManageObj.doAdd = function() {
	ManageObj.addWindow = new Ext.Window({
				// maximized : true,
				collapsible : true,
				autoScroll:true,
				modal : true,
				frame : true,
				border : true,
				title : '新增组织',
				labelAlign : 'center',
				buttonAlign : 'center',
				width : document.body.clientWidth * 0.6,
				closable : true,
				closeAction : 'close',
				resizable : false,
				layout : 'fit',
				buttons : [{
							text : '提交',
							handler : function() {
								ManageObj.doAddSubmit();
							}
						}, {
							text : '清空',
							handler : function() {
								ManageObj.operationFormPan.getForm().reset();
							}
						}, {
							text : '返回',
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
	
	/* Ext表单验证 */
	if (!ManageObj.operationFormPan.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "输入项有误！请修改红色线提示处！");
		return;
	}
	
	/* form表单提交 */
	ManageObj.operationFormPan.getForm().submit({
		waitMsg : '数据提交中......',
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