<%@ page language="java" import="java.util.*" pageEncoding="GB2312"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		${PubMata}
		${PubTitle}
		${PubJS}
		<link rel="stylesheet" type="text/css" href="/WEB-ROOT/skin/css/file-upload.css" />
		
		<script type="text/javascript">
				var from = "${ResultMap.from}";
		</script>
		
		<script type="text/javascript" src="/WEB-ROOT/skin/js/ext3.0.0/ux/FileUploadField.js"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/systemUserManage/systemUserManage.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/systemUserManage/add.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/systemUserManage/update.js" charset="gb2312"></script>
		
		<style type="text/css">
	        .x-grid3-row-over .x-grid3-cell-inner {
	            font-weight: bold;
	        }
	        
	    </style>
	    
	    <style type="text/css">
	   		 *{font-family:Î¢ÈíÑÅºÚ ;}
	   		 body{overflow-x:hidden;}
	   		 html { overflow-x: hidden; overflow-y: auto; }
		</style>
	    
		<script type="text/javascript">
			Ext.onReady(function(){
				new ManageObj();
			});
		</script>
	</head>
	<body>
		
	</body>
</html>
