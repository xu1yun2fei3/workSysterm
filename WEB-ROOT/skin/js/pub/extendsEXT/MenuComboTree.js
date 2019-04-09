MenuComboTree = Ext.extend(Ext.form.ComboBox, {
			dateURL : '',
			/* �Ƿ������Ҷ�ӽ��ĵ����¼� */
			allowUnLeafClick : true,
			treeHeight : 180,
			/* ��ֹ��д�����빦�� */
			editable : false, 
			mode : 'local',
			triggerAction : 'all',
			maxHeight : 500,
			selectedClass : '',
			onSelect : Ext.emptyFn,
			hiddenValue:'',
			store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
			initComponent : function() {
				this.tplId = Ext.id();
				this.tree = new OrgTree( GLOBAL_APP_NAME + '/WEB-ROOT/app/menuTree.do',this.tplId,this,MENU_TREE_ROOT_NODE_NAME);
				MenuComboTree.superclass.initComponent.call(this);
				this.tree.autoScroll = true;
				this.tree.height = this.treeHeight;
				this.tree.containerScroll = false;
				this.tpl = '<div style="height:' + this.height + ';" id="'+ this.tplId + '"></div>',

				/*���treeselected�¼���ѡ�����ڵ�ἤ������¼�*/
				this.addEvents('treeselected');
			},
			listeners : {
				'expand' : {
					fn : function() {
						if (!this.tree.rendered && this.tplId) {
							this.tree.render(this.tplId);
						}
						this.tree.show();
					},
					single : true
				},
				'render' : {
					fn : function() {
						/*
						if (this.passName) {
							this.hiddenField = this.getEl().insertSibling({
										tag : 'input',
										type : 'hidden',
										name : this.passName,
										id : this.passId || Ext.id()
									}, 'before', true)
						}
						*/
					}
				},
				'beforedestroy' : {
					fn : function(cmp) {
						this.purgeListeners();
						this.tree.purgeListeners();
					}
				},
				'change' :{
					fn : function() {
						if( this.getValue() == MENU_TREE_ROOT_NODE_NAME ){
							Ext.getCmp('viewMenu').setRawValue("��");
							Ext.getCmp('viewMenu').setValue("0");
						}else{
							Ext.getCmp('viewMenu').setRawValue("��");
							Ext.getCmp('viewMenu').setValue("1");
						}
					}
				}
			}
});
		
Ext.reg('MenuComboTree', MenuComboTree);		