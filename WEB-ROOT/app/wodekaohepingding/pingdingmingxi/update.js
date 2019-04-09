/**
 * �༭
 * @param {} rowIndex: �༭�е��к�
 * @param {} flag��������ʶ��'update'Ϊ�༭��'view'Ϊ�����
 */
ManageObj.update = function(rowIndex,flag) {
	var titleInfo = ( flag != "" && flag == "update" ) ? "�༭" : "���" ;
	ManageObj.updateWindow = new Ext.Window({
		// maximized : true,
		collapsible : false,
		autoScroll:true,
		modal : true,
		frame : true,
		border : true,
		title : titleInfo + '����',
		labelAlign : 'center',
		buttonAlign : 'center',
		width : Math.floor( document.body.clientWidth * 0.65 ) ,
		//height : Math.floor( document.body.clientHeight * 0.95 ) ,
		closable : true,
		closeAction : 'close',
		resizable : false,
		layout : 'fit',
		items : ManageObj.getOperationFormPan(rowIndex,flag)
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
	
	var x = ManageObj.updateWindow.getPosition( false )[0] ;
	var y = Math.floor( ( RIGHT_SIDE_PAGE_HEIGHT - ManageObj.updateWindow.getHeight() ) / 2 ) ;
	ManageObj.updateWindow.setPosition( x , y );
}

ManageObj.doUpdateSubmit = function(rowIndex) {
	/* Ext����֤ */
	if (!ManageObj.operationFormPan.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	
	
	/* form���ύ */
	ManageObj.operationFormPan.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do?flag=doUpdateSubmit' + 
		      '&id=' + ManageObj.dataGridPan.getStore().getAt(rowIndex).get('id')  + "&erjiguanlianzd=" + erjiguanlianzd + '',
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

ManageObj.update4ej = function(url,flag) {
	var titleInfo = ( flag != "" && flag == "update" ) ? "�༭" : "���" ;
	ManageObj.updateWindow = new Ext.Window({
		// maximized : true,
		collapsible : true,
		autoScroll:true,
		modal : true,
		frame : true,
		border : true,
		title : titleInfo + 'ϵͳ��',
		labelAlign : 'center',
		buttonAlign : 'center',
		width : Math.floor( document.body.clientWidth * 0.85 ) ,
		height : Math.floor( document.body.clientHeight * 0.95 ) ,
		closable : true,
		closeAction : 'close',
		resizable : false,
		layout : 'fit',
		html : "<iframe scrolling=no src='"+url+"' frameborder='0' width='100%' height='100%' ></iframe>"
	});
	
	ManageObj.updateWindow.addButton("����",function(){
		ManageObj.updateWindow.close();
	});
	
	ManageObj.updateWindow.show();
	
	var x = ManageObj.updateWindow.getPosition( false )[0] ;
	var y = Math.floor( ( RIGHT_SIDE_PAGE_HEIGHT - ManageObj.updateWindow.getHeight() ) / 2 ) ;
	ManageObj.updateWindow.setPosition( x , y );
}

