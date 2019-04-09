OrganizeComboTree = Ext.extend(Ext.form.ComboBox, {
			dateURL : '',
			/* 是否允许非叶子结点的单击事件 */
			allowUnLeafClick : true,
			treeHeight : 180,
			/* 禁止手写及联想功能 */
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
				this.tree = new OrgTree( GLOBAL_APP_NAME + '/WEB-ROOT/app/util/ext/orgComboTree.do',this.tplId,this,ORG_TREE_ROOT_NODE_NAME);
				OrganizeComboTree.superclass.initComponent.call(this);
				this.tree.autoScroll = true;
				this.tree.height = this.treeHeight;
				this.tree.containerScroll = false;
				this.tpl = '<div style="height:' + this.height + ';" id="'+ this.tplId + '"></div>',

				/*添加treeselected事件，选中树节点会激发这个事件*/
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
				}
			}
});
		
Ext.reg('OrganizeComboTree', OrganizeComboTree);		