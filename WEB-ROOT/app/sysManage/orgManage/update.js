
/**
 * �༭
 * @param {} rowIndex: �༭�е��к�
 * @param {} flag��������ʶ��'update'Ϊ�༭��'view'Ϊ�����
 */
ManageObj.update = function(rowIndex,flag) {
	var titleInfo = ( flag != "" && flag == "update" ) ? "�༭" : "���" ;
	ManageObj.updateWindow = new Ext.Window({
		// maximized : true,
		autoScroll:true,
		collapsible : true,
		modal : true,
		frame : true,
		border : true,
		title : titleInfo + '����',
		labelAlign : 'center',
		buttonAlign : 'center',
		width : Math.floor( document.body.clientWidth * 0.6 ),
		closable : true,
		closeAction : 'close',
		resizable : false,
		layout : 'fit',
		items : ManageObj.getOperationFormPan(rowIndex)
	});
	
	if( flag != null && flag == "update" ){
		ManageObj.updateWindow.addButton("����",function(){
			ManageObj.doUpdateSubmit(rowIndex);
		});
	}
	
	ManageObj.updateWindow.addButton("����",function(){
		ManageObj.updateWindow.close();
	});
	
	ManageObj.updateWindow.show();
};

ManageObj.doUpdateSubmit = function(rowIndex) {
	/* Ext����֤ */
	if (!ManageObj.operationFormPan.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	var fID = Ext.getCmp("fID").hiddenValue;
	var fName = Ext.getCmp("fID").getValue();
	
	/* form���ύ */
	ManageObj.operationFormPan.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : GLOBAL_APP_NAME+ '/WEB-ROOT/app/sysManage/orgManage.do?' +
			  'flag=doUpdateSubmit' + 
			  '&fID=' + fID + 
			  '&fName=' + fName + 
		      '&id=' + ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id') ,
		success : function(form, action) {
			Ext.MessageBox.show({
						title : WARRING_WIN_TITLE,
						msg : action.result.msg,
						buttons : Ext.MessageBox.OK,
						fn : function(){
							ManageObj.updateWindow.close();
							ManageObj.dataStore.reload();
						},
						icon : Ext.MessageBox.INFO
					});
		},
		failure : function(form, action) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, action.result.msg);
		}
	});
};