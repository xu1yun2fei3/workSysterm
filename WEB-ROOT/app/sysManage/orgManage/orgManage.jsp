<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String appName = "";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		${PubMata}
		${PubTitle}
		${PubJS}
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/tree/OrgTree.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/extendsEXT/OrganizeComboTree.js" charset="gb2312"></script>
		
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/orgManage/orgManage.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/orgManage/add.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/orgManage/update.js" charset="gb2312"></script>
		
		<style type="text/css">
	        .x-grid3-row-over .x-grid3-cell-inner {
	            font-weight: bold;
	        }
	    </style>
	    <style type="text/css">
	   		 *{font-family:微软雅黑 ;}
		</style>
		<script type="text/javascript">
			Ext.onReady(function() {
				new ManageObj();
			});
		</script>
	</head>
	<body>
		
	</body>
</html>
