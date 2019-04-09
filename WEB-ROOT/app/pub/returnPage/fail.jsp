<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>

<html>
  <head>
    <title>注册新用户失败</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" language="javascript">
	function doReturn(action_url)
	{
		 document.forms[0].action = action_url ;
	     document.forms[0].submit();
	}
	</script>
  </head>
  
  <body>
		<form action="" method="post">
			<font>注册新用户失败！</font>
	     	<c:out value="${register.userName}"></c:out><br>
			<input type="button" value="返回" onclick="doReturn('<c:out value="${backUrl}"></c:out>');">
		</form>
  </body>
</html>
