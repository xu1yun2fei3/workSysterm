/**
 * @param {} dataURL:TreeLoader��dataUrl
 * @param {} renderLoction:����Ⱦ��λ�ã�����id��
 * @param {} pObj: combo����
 * @return   ��֯��
 */
var parentObj ; 
function OrgTree(dataURL,renderLoction,pObj,rootNodeName){
	this.dataURL = dataURL ;
	this.renderLoction = renderLoction ;
	parentObj = pObj ;
	this.rootNode ;
	return this.init(rootNodeName);
};

OrgTree.prototype.init = function(nodeName){
	var Tree = Ext.tree;
	var tree = new Tree.TreePanel({
		el : this.el,
		autoScroll : true,
		border: false ,
		animate : true,
		enableDD : true,
		containerScroll : true,
		loader : new Tree.TreeLoader({
			dataUrl : this.dataURL
		})
	});

	var root = new Tree.AsyncTreeNode({
		text : nodeName,
		draggable : false,
		id : '0',
		leaf : false
	});
	this.rootNode = root ;
	tree.setRootNode(root);
	tree.on('click', function(node, event) {
		parentObj.setValue(node.text) ;
		parentObj.hiddenValue=node.id ;
	});
	
	return tree;
};