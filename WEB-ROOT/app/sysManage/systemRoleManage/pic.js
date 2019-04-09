ManageObj.doPic = function( flag , id ) {
	var leftPan = new Ext.Panel({
		frame : true,
		border : true,
		width : Math.floor( document.body.clientWidth * 0.7 * 0.6 ) ,
		height : Math.floor( document.body.clientHeight * 0.9 ) ,
		resizable : false,
		layout : 'fit',
		region : 'center',
		html:'<img id="showPic" style="margin-left:10px" src="" width="'+Math.floor( document.body.clientWidth * 0.7 * 0.6 - 50) +'" height="'+Math.floor( document.body.clientHeight * 0.9 - 60 )+'">'
	});
	
	var sm = new Ext.grid.CheckboxSelectionModel();
    sm.singleSelect = true ;
    
	ManageObj.picStore = new Ext.data.JsonStore({
		root : 'root',
		totalProperty : 'totalProperty',
		remoteSort : true,
		fields : [ 'id', 'picName', 'picPath' ],
		proxy : new Ext.data.HttpProxy({
			url : '/WEB-ROOT/app/sysManage/systemRoleManage.do',
			method : 'POST'
		}),
		baseParams : {
			flag : 'getPicJsonStore',
			id : id
		},
		autoLoad: true,
		listeners:{
			"load":function( store,records,o ){
				if( records != null && records.length > 0 ){
					var record=records[0];
					var picPath = record.get('picPath');
					picPath = picPath.substring( picPath.indexOf('/UploadFile') );
					document.all.showPic.src = picPath ;
				}
			}
		}
	});

	var pagingBar = new Ext.ux.MyPagingToolbar({
		pageSize : GLOBAL_MAX_PAGE_SIZE,
		store : ManageObj.picStore,
		displayMsg : '��ǰ��{0}��{1}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;��{2}����¼',
		emptyMsg : "û���ҵ��κμ�¼��",
		displayInfo : true
	});

	var picGridPan = new Ext.grid.GridPanel({
		store : ManageObj.picStore,
		loadMask : true,
		bbar : pagingBar,
		border:true,
		frame:true,
		width:Math.floor( document.body.clientWidth * 0.7 * 0.4 ) - 15,
		height : Math.floor( document.body.clientHeight * 0.9 ) -95,
		columns : [ sm, {
			header : '<font color="blue">ͼƬ����</font>',
			align : 'center',
			dataIndex : 'picName'
		}],
		sm : sm,
		viewConfig : {
			forceFit : true,
			columnsText : '��ʾ��',
			sortAscText : '����',
			sortDescText : '����'
		},
		stripeRows : true,
		tbar : [ '-', {
			xtype : ( flag == "update" )?'splitbutton':'hidden',
			text : '&nbsp;ͼƬ����',
			icon : MANAGE_ICON_PATH,
			menu : [ {
				text : '����ͼƬ',
				handler : function() {
					ManageObj.doAddPic( id );
				},
				icon : ADD_OPERATION_ICON_PATH
			}, {
				text : 'ɾ��ͼƬ',
				handler : function() {
					ManageObj.doDelePic( picGridPan );
				},
				icon : LOCK_OPERATION_ICON_PATH
			} ]
		}],listeners:{
			"rowclick":function( grid, rowIndex, columnIndex, e ){
				var record=grid.getSelectionModel().getSelected();
				var picPath = record.get('picPath');
				picPath = picPath.substring( picPath.indexOf('/UploadFile') );
				document.all.showPic.src = picPath ;
			}
		}
	});
	
	var rightPan = new Ext.Panel({
		frame : true,
		border : true,
		width : Math.floor( document.body.clientWidth * 0.7 * 0.4 ) ,
		height : Math.floor( document.body.clientHeight * 0.9 ) ,
		resizable : false,
		layout : 'fit',
		region : 'east',
		items : [{
			anchor : '100%',
			layout : 'column',
			items : [ {
				columnWidth : 1,
				layout : 'form',
				border : false,
				labelWidth : 75,
				items : [ picGridPan ]
			}]
		}]
	});
	
	ManageObj.picWindow = new Ext.Window({
		// maximized : true,
		collapsible : true,
		autoScroll:true,
		modal : true,
		frame : true,
		border : true,
		title : 'ͼƬ����',
		labelAlign : 'center',
		buttonAlign : 'center',
		width : Math.floor( document.body.clientWidth * 0.7 ) ,
		height : Math.floor( document.body.clientHeight * 0.9 ) ,
		closable : true,
		closeAction : 'close',
		resizable : false,
		layout : 'border',
		items : [leftPan,rightPan]
	});
			
	ManageObj.picWindow.addButton("����",function(){
		ManageObj.picWindow.close();
	});
	
	ManageObj.picWindow.show();
};

ManageObj.doAddPic = function( id ){
	ManageObj.uploadForm = new Ext.FormPanel({
		fileUpload : true,
		id : 'uploadForm',
		labelAlign : 'left',
		buttonAlign : 'center',
		bodyStyle : 'padding:0px;',
		frame : true,
		border : false,
		labelWidth : 75,
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
					fieldLabel : 'ͼƬ����',
					name : 'uploadPicName',
					id : 'uploadPicName',
					anchor : '95%',
					allowBlank : false
				} ]
			}, {
				columnWidth : 1,
				layout : 'form',
				border : false,
				items : [ {
					xtype : 'fileuploadfield',
					fieldLabel : 'ͼƬ·��',
					name : 'uploadPicPath',
					id : 'uploadPicPath',
					anchor : '95%',
					buttonText : '���',
					allowBlank : false
				} ]
			}]
		} ]
	});
	
	ManageObj.uploadWindow = new Ext.Window({
		autoScroll:true,
		modal : true,
		frame : true,
		border : true,
		title : '�ϴ�����',
		labelAlign : 'center',
		buttonAlign : 'center',
		width : 400,
		height : 160 ,
		closable : true,
		closeAction : 'close',
		resizable : false,
		layout : 'fit',
		items:[ManageObj.uploadForm]
	});
	
	ManageObj.uploadWindow.addButton("�ύ",function(){
		ManageObj.doAddPicSubmit( id );
	});
	
	ManageObj.uploadWindow.addButton("����",function(){
		ManageObj.uploadWindow.close();
	});
	
	ManageObj.uploadWindow.show();
};

ManageObj.doDelePic = function( picGridPan ){
	var sm = picGridPan.getSelectionModel();
	var sel = sm.getSelections();
	var selCount = sm.getCount();
	if (selCount == 0) {
		Ext.Msg.show({
			title : '��ܰ��ʾ��',
			buttons : Ext.MessageBox.OK,
			msg : 'û�п���ɾ����ͼƬ����ѡ��',
			icon : Ext.MessageBox.ERROR
		});
		return;
	}
	
	var id = sel[0].data["id"];
	var picPath = sel[0].data["picPath"];
	
	Ext.MessageBox.confirm('��ܰ���ѣ�', 'ȷ����Ҫɾ����ѡͼƬ��', function(info) {
		if (info == "yes") {
			Ext.Ajax.request({
				waitMsg : '�����ύ��......',
				url : '/WEB-ROOT/app/sysManage/systemRoleManage.do',
				method : 'POST',
				success : function(response, options) {
					var responseArray = Ext.util.JSON.decode(response.responseText);
					Ext.MessageBox.show({
						title : '��ܰ���ѣ�',
						msg : responseArray.msg,
						buttons : Ext.MessageBox.OK,
						fn : function() {
							ManageObj.picStore.reload();
						},
						icon : Ext.MessageBox.INFO
					});
				},
				failure : function(response, options) {
					Ext.MessageBox.alert('��ܰ���ѣ�', responseArray.msg);
				},
				params : {
					flag : "doDelePic",
					id : id,
					picPath : picPath
				}
			});
		}
	});
	
};


ManageObj.doAddPicSubmit = function( id ) {
	/* Ext����֤ */
	if (!ManageObj.uploadForm.getForm().isValid()) {
		Ext.MessageBox.alert(WARRING_WIN_TITLE, "�������������޸ĺ�ɫ����ʾ����");
		return;
	}
	
	/* form���ύ */
	ManageObj.uploadForm.getForm().submit({
		waitMsg : '�����ύ��......',
		method : 'post',
		url : '/WEB-ROOT/app/sysManage/systemRoleManage.do?flag=doAddPicSubmit&id=' + id,
		success : function(form, action) {
			Ext.MessageBox.show({
				title : WARRING_WIN_TITLE,
				msg : action.result.msg,
				buttons : Ext.MessageBox.OK,
				fn : function(){
					ManageObj.uploadWindow.close();
					ManageObj.picStore.reload();
				},
				icon : Ext.MessageBox.INFO
			});
		},
		failure : function(form, action) {
			Ext.MessageBox.alert(WARRING_WIN_TITLE, action.result.msg);
		}
	});
};




