<%@ page language="java" import="java.util.*" pageEncoding="gbk"%>
<%
	String appName = "";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		${PubMata}
		${PubTitle}
		${PubJS}
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/extendsEXT/toolbar.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/tree/OrgTree.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/extendsEXT/OrganizeComboTree.js" charset="gb2312"></script>
		
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/setting/setting.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/setting/add.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/app/sysManage/setting/update.js" charset="gb2312"></script>
		
		<style type="text/css">
	        .x-grid3-row-over .x-grid3-cell-inner {
	            font-weight: bold;
	        }
	    </style>
	    <style type="text/css">
	   		 *{font-family:΢���ź� ;}
		</style>
		<script type="text/javascript">
			Ext.onReady(function() {
				new ManageObj();
			});
		</script>
	</head>
	<body>
	
		<!-- ��¼���� -->
		<div style="display:none;">
            <div id="loginViewTipContent" style="overflow:hidden">
                <div class="x-clear"></div>
                <img id="loginViewTipImg" src="/WEB-ROOT/skin/images/themePic/login/login1.jpg" width="800" height="500"/>
            </div>
        </div>
        
        <!-- ��̨���� -->
		<div style="display:none;">
            <div id="appViewTipContent" style="overflow:hidden">
                <div class="x-clear"></div>
                <img id="appViewTipImg" src="/WEB-ROOT/skin/images/themePic/app/app1.jpg" width="800" height="500"/>
            </div>
        </div>
        
        <!-- ǰ̨���� -->
		<div style="display:none;">
            <div id="frontViewTipContent" style="overflow:hidden">
                <div class="x-clear"></div>
                <img id="frontViewTipImg" src="/WEB-ROOT/skin/images/themePic/login/login1.jpg" width="800" height="500"/>
            </div>
        </div>
        
        <!-- ע������ -->
		<div style="display:none;">
            <div id="registerViewTipContent" style="overflow:hidden">
                <div class="x-clear"></div>
                <img id="registerViewTipImg" src="/WEB-ROOT/skin/images/themePic/register/register1.jpg" width="800" height="500"/>
            </div>
        </div>
        
	</body>
</html>
