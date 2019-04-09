<%@ page language="java" import="app.pub.global.Global" pageEncoding="UTF-8"%>
<%
	String appName = Global.AppName;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>操作错误！</title>
		<script type="text/javascript">
		function doLogout()
		{
			document.forms[0].action ="/<%=appName%>";
			document.forms[0].target = "_top";
			document.forms[0].submit();
		}
		</script>
	</head>
	<body leftmargin="0" rightmargin="0" topmargin="0">
		<form action="" method="post">
			<%
				String info = "系统异常，请尝试重新登录。" ;
				if( request.getAttribute("info") != null ){
					info = request.getAttribute("info").toString();
				}
			%>
			<span><%=info%></span>
			<a href="#" onClick="doLogout();">进入登陆页面</a>
		</form>
	</body>
</html>