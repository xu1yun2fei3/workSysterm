$(function(){

	//ҳ���л���ʼ��
	$(".number2").click(function(){
		$(".mainForm1").show();
		$(".mainForm2").hide();
		$(".error").hide();
		$(".normalInput").removeClass("errorC");
		$(".normalInput").removeClass("checkedN");
		$(".mainForm input").val("");
	});
	$(".number1").click(function(){
		$(".mainForm2").show();
		$(".mainForm1").hide();
		$(".error").hide();
		$(".normalInput").removeClass("errorC");
		$(".normalInput").removeClass("checkedN");
		$(".mainForm input").val("");
	});
	//�ı���ʧȥ����
	$(".mainForm input").blur(function(){
		$("#mz_Float").css("top","");
	});

	//Э������
	$(".checkboxPic").click(function(){
		if($(this).attr("isshow")=="false")
		{
			$(this).parent().css("margin-bottom","10px");
			$(".checkboxPic i").css({"background-position":" -0px -127px"});
			$(".otherError").css("display","block");
			$(this).attr("isshow","true");
		}
		else
		{
			$(this).parent().css("margin-bottom","");
			$(".checkboxPic i").css({"background-position":"-31px -127px"});
			$(".otherError").hide();
			$(this).attr("isshow","false");
		}
		
	}); 


	//mainform1
	//�����Ƿ�ɼ�(mainform1)
	$(".pwdBtnShow").click(function(){
		if($(".pwdBtnShow").attr("isshow")=="false")
		{
			$(".pwdBtnShow i").css("background-position","-60px -93px");
			$(".password").hide();
			$(".password1").val($(".password").val());
			$(".password1").show();
			$(".pwdBtnShow").attr("isshow","true");
		}
		else
		{
			$(".pwdBtnShow i").css("background-position","-30px -93px");
			$(".password1").hide();
			$(".password").val($(".password1").val());
			$(".password").show();
			$(".pwdBtnShow").attr("isshow","false");
		}
		
	});
	
	//�ֻ�����ʧȥ����
	$(".phone").blur(function(){
		reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//��֤�ֻ�����(����ǰ7λ��11λ)

		if( $(".phone").val()=="")
		{ 
			$(".phone").parent().addClass("errorC");
			$(".error1").html("�������û���");
			$(".error1").css("display","block");
		}
		else if($(".phone").val().length<11)
        {   
        	$(".phone").parent().addClass("errorC");
            $(".error1").html("�ֻ��ų�������");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".phone").val()))
        {   
        	$(".phone").parent().addClass("errorC");
            $(".error1").html("�����ذɣ���ȷ����������ֻ���!!");
            $(".error1").css("display","block");
        }
        else
        {
        	$(".phone").parent().addClass("checkedN");
        }
	});

	//��֤����ʧȥ����
	$(".kapkey").blur(function(){
		reg=/^.*[\u4e00-\u9fa5]+.*$/;
		if( $(".kapkey").val()=="")
		{
			$(".kapkey").parent().addClass("errorC");
			$(".error2").html("����д��֤��");
			$(".error2").css("display","block");
		}
        else if($(".kapkey").val().length<6)
        {   
        	$(".kapkey").parent().addClass("errorC");
            $(".error2").html("��֤�볤������");
            $(".error2").css("display","block");
        }
        else if(reg.test($(".kapkey").val()))
        {
        	$(".kapkey").parent().addClass("errorC");
            $(".error2").html("��֤���������ģ�");
            $(".error2").css("display","block");
        }
        else 
        {
        	$(".kapkey").parent().addClass("checkedN");
        }
	});

	//������ʧȥ����(mainform1)
	$(".password,.password1").blur(function(){
		reg1=/^.*[\d]+.*$/;
		reg2=/^.*[A-Za-z]+.*$/;
		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//��֤����
		if($(".pwdBtnShow").attr("isshow")=="false")
		{
			var Pval = $(".password").val();
		}
		else
		{
			var Pval = $(".password1").val();
		}
		
		if( Pval =="")
		{
			$(".password").parent().addClass("errorC");
			$(".error3").html("����д����");
			$(".error3").css("display","block");
		}
        else if(Pval.length>16 || Pval.length<1)
        {   
        	$(".password").parent().addClass("errorC");
            $(".error3").html("����ӦΪ1-16���ַ������ִ�Сд");
            $(".error3").css("display","block");
        }
        
        else
        {
        	$(".password").parent().addClass("checkedN");
        }
	});

	//�ֻ�������ý���
	$(".phone").focus(function(){
		$(".phone").parent().removeClass("errorC");
		$(".phone").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("����11λ�ֻ����룬�����ڵ�¼���һ�����");
	});
	//��֤������ý���
	$(".kapkey").focus(function(){
		$(".kapkey").parent().removeClass("errorC");
		$(".kapkey").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		
		$("#mz_Float").find(".bRadius2").html("�������ֻ��յ�����֤��");
	});
	//��������ý���(mainform1)
	$(".password,.password1").focus(function(){
		$(".password").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block" && $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error2").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		
		
	});


	//mainform1end



	//mainForm2
	//�����Ƿ�ɼ�(mainform2)
	$(".pwdBtnShowN").click(function(){
		if($(".pwdBtnShowN").attr("isshow")=="false")
		{
			$(".pwdBtnShowN i").css("background-position","-60px -93px");
			$(".passwordN").hide();
			$(".password1N").val($(".passwordN").val());
			$(".password1N").show();
			$(".pwdBtnShowN").attr("isshow","true");
		}
		else
		{
			$(".pwdBtnShowN i").css("background-position","-30px -93px");
			$(".password1N").hide();
			$(".passwordN").val($(".password1N").val());
			$(".passwordN").show();
			$(".pwdBtnShowN").attr("isshow","false");
		}
		
	});


	//�˻�������ý���
	$(".username").focus(function(){
		$(".username").parent().removeClass("errorC");
		$(".username").parent().removeClass("checkedN");
		$(".error1").hide();
		$("#mz_Float").css("top","232px");
		$("#mz_Float").find(".bRadius2").html("����Ϊ1-18���ַ�֧�����֡���ĸ���»��ߣ���ĸ��ͷ����ĸ�����ֽ�β");
	});
	//��������ý���
	$(".email").focus(function(){
		$(".email").parent().removeClass("errorC");
		$(".email").parent().removeClass("checkedN");
		$(".error2").hide();
		if($(".error1").css("display")=="block" && $(".error3").css("display")=="block")
		{
			$("#mz_Float").css("top","436px");
		}
		else if($(".error1").css("display")=="block" || $(".error3").css("display")=="block")
		{
			$("#mz_Float").css("top","406px");
		}
		else
		{
			$("#mz_Float").css("top","376px");
		}
		
		$("#mz_Float").find(".bRadius2").html("�����һ����룬����˻���ȫ�ȼ�");
	});
	//��������ý���(mainform2)
	$(".passwordN,.password1N").focus(function(){
		$(".passwordN").parent().removeClass("errorC");
		$(this).parent().removeClass("checkedN");
		$(".error3").hide();
		if($(".error1").css("display")=="block")
		{
			$("#mz_Float").css("top","334px");
		}
		else
		{
			$("#mz_Float").css("top","304px");
		}
		
		$("#mz_Float").find(".bRadius2").html("����Ϊ1-16���ַ�");
	});

	//�˻�����ʧȥ����
	$(".username").blur(function(){
		reg=/^[a-zA-Z][0-9a-zA-Z_]{2,30}[0-9a-zA-Z]$/;

		if( $(".username").val()=="")
		{ 
			$(".username").parent().addClass("errorC");
			$(".error1").html("�������˻���");
			$(".error1").css("display","block");
		}
		else if($(".username").val().length>32 || $(".username").val().length<4)
        {   
        	$(".username").parent().addClass("errorC");
            $(".error1").html("�˻�����������");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".username").val()))
        {   
        	$(".username").parent().addClass("errorC");
            $(".error1").html("�˻�����ʽ����!!");
            $(".error1").css("display","block");
        }
        else
        {
        	$(".username").parent().addClass("checkedN");
        }
	});
	//������ʧȥ����(mainform2)
	$(".passwordN,.password1N").blur(function(){
		reg1=/^.*[\d]+.*$/;
		reg2=/^.*[A-Za-z]+.*$/;
		reg3=/^.*[_@#%&^+-/*\/\\]+.*$/;//��֤����
		var Pval = $(".passwordN").val();
		if( Pval =="")
		{
			$(".passwordN").parent().addClass("errorC");
			$(".error3").html("����д����");
			$(".error3").css("display","block");
		}
        else if(Pval.length>16 || Pval.length<1)
        {   
        	$(".passwordN").parent().addClass("errorC");
            $(".error3").html("����ӦΪ1-16���ַ������ִ�Сд");
            $(".error3").css("display","block");
        }
        else
        {
        	$(".passwordN").parent().addClass("checkedN");
        }
	});
	

	//���������̲���
	$(".email").keyup(function(){//���̼���keyup,keydown,keypress
		var emailVal = $(".email").val();
		emailValN = emailVal.replace(/\s/g,'');//ȥ��
		emailValN = emailValN.replace(/[\u4e00-\u9fa5]/g,'');//��������
		if(emailValN!=emailVal)
		{
			$(".email").val(emailValN);
		}
		
		var mailVal = emailValN.split("@");
		var mailHtml=mailVal[0];
		if(mailHtml.length>15)
		{
			mailHtml=mailHtml.slice(0,15)+"...";//��������ʡ��
		}
		
		for(var i=1;i<6;i++)
		{
			var M = $(".item"+i).attr("data-mail");
			$(".item"+i).html(mailHtml+M);
		}
	});

	//������ʾ
	$(".item").click(function(){
		var a= $(".email").val();
		var b= $(this).attr("data-mail");
		$(".email").val(a+b);
		$(".email").trigger("focus");//setTimeout($(".email").("focus") );Ч��ͬ��ʱ�����������ν
	});


	$(".email").click(function(){
		if($(".error1").css("display")=="block" && $(".error3").css("display")=="block")
		{
			$(".mail").css("top","489px");
		}
		else if($(".error1").css("display")=="block" || $(".error3").css("display")=="block")
		{
			$(".mail").css("top","459px");
		}
		else
		{
			$(".mail").css("top","429px");
		}
		$(".mail").show(); 
		return false;
	});
	$(document).click(function(){
		$(".mail").hide();
	});

	//������ʧȥ����
	$(".email").blur(function(){
		reg=/^\w+[@]\w+((.com)|(.net)|(.cn)|(.org)|(.gmail))$$/;
		if( $(".email").val()=="")
		{
			$(".email").parent().addClass("errorC");
			$(".error2").html("���䲻��Ϊ��!");
			$(".error2").css("display","block");
		}
        else if(!reg.test($(".email").val()))
        {
        	$(".email").parent().addClass("errorC");
            $(".error2").html("�����ʽ����");
            $(".error2").css("display","block");
        }
        else 
        {
        	$(".email").parent().addClass("checkedN");
        }
	});

});

