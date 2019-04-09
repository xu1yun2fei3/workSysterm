<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>
<%
	String appName = "";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		${PubMata}
		${PubTitle}
		${PubJS}
		<style type="text/css">
	   		 *{font-family:Î¢ÈíÑÅºÚ ;}
		</style>
		<script type="text/javascript" >
		    var tree ;
		    var root ;
			Ext.onReady(function(){
				var Tree = Ext.tree;
				tree = new Tree.TreePanel({
					el : 'userMenuDiv',
					autoScroll : true,
					draggable : false,
					border: false ,
					animate : true,
					enableDD : true,
					containerScroll : true,
					loader : new Tree.TreeLoader({
						method : 'POST' ,
					    dataUrl : '/WEB-ROOT/app/sysManage/roleMenuManage.do?flag=getRoleMenu',
					    baseParams : {
							flag : 'getUserMenu',
							roleID : '${ResultMap.roleID}'
						}
					})
				}); 
			
				root = new Tree.AsyncTreeNode({
					text : TREE_ROOT_NODE_NAME,
					draggable : false,
					id : '0',
					leaf : false,
					menu_todo : '',
					checked: false
				});
			
				tree.setRootNode(root);
				tree.on('click', function(node, event) {
					
				});
				
				tree.on('checkchange', function(node, checked) { 
					node.expand();      
			        node.attributes.checked = checked;      
			        node.eachChild(function(child) {
			            child.ui.toggleCheck(checked);      
			            child.attributes.checked = checked;      
			            child.fireEvent('checkchange', child, checked);      
		       		}); 
			    }, tree); 
			
				tree.render();
				root.expand(true);
			});
			
			function getUserAllMenu(){
				var menuIdAl= tree.getChecked();
				var menuIndex = 0 ;
				var chooseMenuAl = new Array();
				for(var i = 0 ; i < menuIdAl.length ; i++){
					if(menuIdAl[i].leaf){
						chooseMenuAl[menuIndex++] = menuIdAl[i].id ;
						var nowNode = menuIdAl[i].parentNode ;
						while( nowNode != root){
							if(chooseMenuAl.indexOf(nowNode.id) == -1){
								chooseMenuAl[menuIndex++] = nowNode.id ;
							}
							nowNode = nowNode.parentNode ;				
						}
					}
				}
				var menuId ="";
				for(var i = 0 ;i < chooseMenuAl.length ;i++ ){
					if(i < (chooseMenuAl.length-1)){
						menuId += chooseMenuAl[i] + ",";
					}else{
						menuId += chooseMenuAl[i];
					}
				}
				return menuId;
			}
		</script>
	</head>
	<body>
		<input type="hidden" id="userMenuAl" value="">
		<input type="hidden" name="roleID" id="roleID" value="${ResultMap.roleID}"> 
		<div id="userMenuDiv"></div> 
	</body>
</html>
