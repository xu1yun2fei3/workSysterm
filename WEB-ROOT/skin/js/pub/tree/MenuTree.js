/**
 * @description : 菜单树
 * @param {} el : 菜单树渲染的元素
 * @param {} dataUrl : 菜单树数据请求URL
 */
function MenuTree(el,dataUrl){
	this.el = el ;
	this.dataUrl = dataUrl ;
	this.init();
}

MenuTree.prototype.init = function(){
	var Tree = Ext.tree;
	var tree = new Tree.TreePanel({
		el : this.el,
		useArrows: true,
		autoScroll : true,
		border: false ,
		frame: ( menuBackground == "1" ? true :false ),
		animate : ( animate == "1" ? true :false ),
		enableDD : true,
		containerScroll : true,
		rootVisible : false,
		loader : new Tree.TreeLoader({
			dataUrl : this.dataUrl
		})
	});

	var root = new Tree.AsyncTreeNode({
		text : TREE_ROOT_NODE_NAME,
		draggable : true,
		id : '0',
		leaf : false,
		menu_todo : ''
	});

	tree.setRootNode(root);
	tree.on('click', function(node, event) {
		if(node != tree.getRootNode() && node.leaf == true){
			doAddTab(node, event);
		}
	});

	tree.render();
	root.expand(true);

	return tree;
};