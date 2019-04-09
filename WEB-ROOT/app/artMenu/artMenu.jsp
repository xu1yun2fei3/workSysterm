<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=gb2312"/>
	${PubTitle}
	${PubJS}
    
    <script type="text/javascript" charset="gb2312" src="/WEB-ROOT/skin/js/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="gb2312" src="/WEB-ROOT/skin/js/ueditor/ueditor.all.min.js"> </script>
    <script type="text/javascript" charset="gb2312" src="/WEB-ROOT/skin/js/ueditor/lang/zh-cn/zh-cn.js"></script>

    <style type="text/css">
        div{
            width:100%;
        }
    </style>
    
    <script type="text/javascript">
    	var artId = "${ResultMap.artId}";
    	var artContent = '${ResultMap.artContent}';
    	
    	function doSubmit(){
    		
    		Ext.Ajax.request({
				waitMsg : 'wait......',
				url : '/WEB-ROOT/app/artMenu.do',
				method : 'POST',
				success : function(response, options) {
					var responseArray = Ext.util.JSON.decode(response.responseText);
					Ext.MessageBox.alert("tips",responseArray.msg);
				},
				failure : function(response, options) {
					Ext.MessageBox.alert('tips', responseArray.msg);
				},
				params : {
					flag : "updateArtSubmit",
					artId : artId,
					content : ue.getContent()
				}
			});
    		
    	}
    	
    </script>
    
</head>
<body>
<div>
	<br>
    <center>
    	<form action="">
		    <script id="editor" type="text/plain" style="width:900px;height:400px;"></script>
		    <br>
		    <input type="button" value="save" onclick="doSubmit()">
	    </form>
    </center>
</div>


<script type="text/javascript">

    var ue = UE.getEditor('editor');
    ue.ready(function() {
    	ue.setContent(artContent);
    });
</script>
</body>
</html>