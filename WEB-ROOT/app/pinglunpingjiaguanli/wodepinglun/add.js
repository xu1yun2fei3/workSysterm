ManageObj.doAdd = function() {
	ManageObj.addWindow = new Ext.Window({
				// maximized : true,
				collapsible : false,
				autoScroll:true,
				modal : true,
				frame : true,
				border : true,
				title : '��������',
				labelAlign : 'center',
				buttonAlign : 'center',
				width : Math.floor( document.body.clientWidth * 0.65 ) ,
				//height : Math.floor( document.body.clientHeight * 0.95 ) ,
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
	/* Ext����֤ */
	if (!ManageObj.operationFormPan.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	/* form���ύ */
	ManageObj.operationFormPan.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : '/WEB-ROOT/app/pinglunpingjiaguanli/wodepinglun.do?flag=doAddSubmit&erjiguanlianzd=' + erjiguanlianzd,
		/*
		params : {
			ajax : 'true',
			flag : 'doAddSubmit'
		},
		*/
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
