<%@ page language="java" import="java.util.*,java.io.PrintWriter"
	pageEncoding="utf-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
		<title>新用户注册</title>
		<link rel="stylesheet" type="text/css" href="/WEB-ROOT/skin/css/register.css" />
		<link rel="stylesheet" type="text/css" href="/WEB-ROOT/skin/css/ext-all.css" />
		<script type="text/javascript" src="/WEB-ROOT/skin/js/ext3.0.0/ext-base.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/ext3.0.0/ext-all.js" charset="gb2312"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/ext3.0.0/ext-lang-zh_CN.js" charset="gb2312"></script>
		
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/register/jquery.js"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/register/common.js"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/register/vconf.js"></script>
		<script type="text/javascript" src="/WEB-ROOT/skin/js/pub/register/validator.js"></script>
		<script type="text/javascript">
			function doSubmit(){
			    var userAcct = document.getElementById("userAcct").value ; 
			    var userName = document.getElementById("userName").value ; 
				var userPass = document.getElementById("userPass").value ; 
				var userPass2 = document.getElementById("userPass2").value;
				if( userAcct == "" ){
					alert( "登录帐号为空，请填写！" );
					return ;
				}
				if( userPass == "" ){
					alert( "登录密码为空，请填写！" );
					return ;
				}
				if( userPass2 == "" ){
					alert( "确认登录密码为空，请填写！" );
					return ;
				}
				if( userPass != userPass2 ){
					alert( "密码不一致，请修改！" );
					return ;
				}
				if( userName == "" ){
					alert( "用户名为空，请填写！" );
					return ;
				}
				
				Ext.Ajax.request({
					waitMsg : '数据提交中......',
					url : '/login.do',
					method : 'POST',
					success : function(response, options) {
						var responseArray = Ext.util.JSON.decode(response.responseText);
						if(responseArray.success){
							Ext.MessageBox.alert( "系统提示","注册成功！" , function(){ window.location.href = "/" ; });
						}else{
							Ext.MessageBox.alert( responseArray.msg );
						}
					},
					params : {
						flag : "doRegister",
						userAcct : userAcct ,
						userPass : userPass , 
						userName : userName
					}
				});
				
			}
			
		</script>
	</head>

	<body>
		<div id="wrap">
			<div class="head">
				<div class="logo"></div>
				<div class="logotxt"></div>
				<div class="headlink">
				</div>
				<div class="clearit"></div>
			</div>
	
			<div class="main">
				<form method="post" id="vForm" name="vForm">
					<input type="hidden" id="act" name="act" value=1> <input
						type="hidden" id="entry" name="entry" value="sso"> <input
							type="hidden" id="r" name="reference" value="" />
							<div class="logoicon"></div>
							<div class="main_top">
								<p class="notice link" style="width:470px;">
									<font size="4" face="微软雅黑">新用户注册</font>
								</p>
								<p class="title_note red"></p>
							</div>
							<div class="main_cen">
								<p class="title">基本信息</p>
								<ul class="maintable">
									<li>
										<div class="mt_l">
											<span class="red">*</span>您的登录帐号：
										</div>
										<div class="mt_r">
											<div class="inputbox">
												<span class="input"><cite><input id="userAcct"
														name="userAcct" type="text" maxlength="18"
														alt="邮箱地址:无内容/有全角/有空格/有大写/有中文/邮箱地址/非新浪邮箱/排重/focusFn{unameTip}/errArea{usernametip}"
														value="" />
												</cite>
												</span>
											</div>
											<span class="inputacc link">
											</span> <span id="usernametip"></span>
											<div class="inputtxt zi_9"></div>
										</div></li>
									<li>
										<div class="mt_l">
											<span class="red">*</span>您的登录密码：
										</div>
										<div class="mt_r">
											<div class="inputbox">
												<span class="input"><cite><input id="userPass"
														name="userPass" type="password"  maxlength="18"
														alt="密码:无内容/有全角/有空格/怪字符pwd/长度{6-16}/有中文/判断强度/重复字符/连续字符/keyFn{判断强度}/focusFn{passwordTip}/errArea{passwordtip}"
														value="" />
												</cite>
												</span>
											</div>
											<span class="inputfloat" id="passW">
												<div class="passW" id="passW1">
													
												</div>
												<div class="passW" id="passW2">
													
												</div>
												<div class="passW" id="passW3">
													
												</div> </span> <span id="passwordtip"></span>
											<div class="inputtxt zi_9">
												1-16位字符（字母、数字、符号），区分大小写
											</div>
										</div></li>
									<li>
										<div class="mt_l">
											<span class="red">*</span>再次输入密码：
										</div>
										<div class="mt_r">
											<div class="inputbox">
												<span class="input"><cite><input id="userPass2"
														name="userPass2" type="password"  maxlength="18"
														alt="确认密码:无内容/有全角/有空格/怪字符pwd/长度{6-16}/相同{password}/errArea{password2tip}"
														value="" />
												</cite>
												</span>
											</div>
											<span id="password2tip"></span>
										</div></li>
									<!--add info 添加用户注册信息 -->
									<!--add end-->
								</ul>
								<p class="title">扩展信息</p>
								<ul class="maintable">
									<li>
										<div class="mt_l">
											<span class="red">*</span>您的用户名：
										</div>
										<div class="mt_r">
											<div class="inputbox">
												<span class="input"><cite><input id="userName"
														name="userName" type="text" maxlength="20"
														alt="昵称:无内容/全数字/有全角/长度{4-20}/有大写/数字字母中文/errArea{nicktip}"
														value="" />
												</cite>
												</span>
											</div>
											<span id="nicktip"></span>
											<div class="inputtxt zi_9">1-20位小写字母、数字或汉字（汉字算两位）组成</div>
										</div></li>
								</ul>
								
								<ul class="maintable">
									<li>
										<div class="mt_l"></div>
										<div class="mt_r">
											<input type="button" class="btn_submit" value="提交"  onclick="doSubmit();" />
										</div></li>
								</ul>
	
							</div>
							<div class="main_bottom"></div>
				</form>
			</div>
	
			
		</div>
	
		<script type="text/javascript">
			function con_code() {
				var qq = Math.round((Math.random()) * 100000000);
				$("check_img").src = '/cgi/pin.php?r=' + qq;
			}
			onReady(function() {
				var conf = (typeof $vconf == 'undefined') ? {} : $vconf;
				var v = new Validator(conf);
				v.init('vForm');
			});
		</script>
	</body>
</html>
