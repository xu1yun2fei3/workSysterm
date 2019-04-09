<%@ page contentType="text/html;charset=GBK"%>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jstl/fmt" prefix="fmt"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>注册新用户成功</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <c:out value="${login.userName}"></c:out> 成功!!!<br>
    <c:out value="${flag}"></c:out> 成功!!!<br>

	<table border="1">
		<tr>
			<td>姓名</td>
		</tr>
		<c:forEach var="strList" items="${strList}">
			<tr>
				<td>
					<c:if test="${strList=='2'}"><c:out value="${strList}"/></c:if>
				</td>
			</tr>
	    </c:forEach>
	</table>
  </body>
</html>
