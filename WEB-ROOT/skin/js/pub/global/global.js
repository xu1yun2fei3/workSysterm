
/* Ӧ�õ����� */
//var GLOBAL_APP_NAME = '/pm' ;
var GLOBAL_APP_NAME = '' ;

/* �������ҳ�� */
var GLOBAL_MAX_PAGE_SIZE = 20 ;

/* �˵����ڵ����� */
var TREE_ROOT_NODE_NAME = '��������' ;

/* ����Excelͼ��·�� */
var EXPORT_EXCEL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/excel16.png';

/* ��ӡͼ��·�� */
var PRINTER_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/printer16.png';

/* �������ͼ��·�� */
var MANAGE_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/manage16.png';

/* ����ͼ�� */
var ADD_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/add.gif';

/* ����ͼ�� */
var LOCK_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/hmenu-lock.png';

/* �ⶳͼ�� */
var UNLOCK_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/hmenu-unlock.png';

/* ɾ��ͼ�� */
var DELETE_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/delete16.gif';

/* ���ͼ�� */
var VIEW_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/view16.gif';

/* �༭ͼ�� */
var EDIT_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/edit16_2.gif';

/* �Ҽ�����ͼ�� */
var RIGHT_CLICK_ADD_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/add16.gif';

/* ȫ����ѡͼ�� */
var CHOOSE_ALL_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/choose_all16.png';

/* ��ʾȫ��ͼ�� */
var DISPLAY_ALL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/table_refresh.png';

/* ����ͼ�� */
var RETURN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/return.gif';

/* ����ͼ�� */
var COPY_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/copy16.gif';

/* ����ͼ�� */
var UP_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/up.png';

/* ����ͼ�� */
var DOWN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/down.png';

/* �������ͼ�� */
var PLGIN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/1a.gif';

/* DIYǰ̨���²˵�ͼ�� */
var FRONT_ARTICAL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/22.gif';

/* ж��DIY */
var UNINSTALL_DIY_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/28.gif';

/* ��ʾ����title */
var WARRING_WIN_TITLE = 'ϵͳ��ʾ' ;

/* grid����� ����е����� */
var GRID_INDEX_STR = '���' ;

/* ��֯�ṹ�����ڵ����� */
var ORG_TREE_ROOT_NODE_NAME = '��֯�ṹ��';

/* ��֯�ṹ�����ڵ����� */
var MENU_TREE_ROOT_NODE_NAME = '���ܽṹ��';

/* �����ʽ */
var READ_ONLY_STYLE = 'margin-top:0;margin-bottom:0;border:none;background:none;overflow-y:auto;' ;

/* Ĭ���ұ߿��ҳ��߶� */
var RIGHT_SIDE_PAGE_HEIGHT = 620 ;

/* 
 	Ĭ���ұ߿��ҳ��߶�
 	��Ҫǰ̨������ : ���������ʱ��������3��4����
 	��������LOGIN_SUCC_GO_PAGE����ѡһ��
*/
var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/app/index.do" ; //����̨
//var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/app/index.do?htzt=5/index.html" ; //�����⣬����̨
//var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/front/index/index.do" ; //��ǰ̨

/* �ж���������֮���������� yyyy-mm-dd */
function DaysBetween( startDay , endDay){
	var sDay = new Date();
	sDay.setFullYear( Number( startDay.substring(0,4)  ) , Number( startDay.substring(5,7)  )-1, Number( startDay.substring(8)  ));
	
	var eDay = new Date();
	eDay.setFullYear( Number( endDay.substring(0,4)  ) , Number( endDay.substring(5,7)  )-1, Number( endDay.substring(8)  ));
	
	return Math.floor( ( eDay.getTime() - sDay.getTime() )/1000/60/60/24 )  ;
}


/* ��ȡ ʱ�����к� */
function GetTimeIndexNo(){
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = ( nowDate.getMonth()+1 > 9 ) ?  ( nowDate.getMonth()+1 ) : ( "0" + (nowDate.getMonth()+1)  );
	var date =  ( nowDate.getDate() > 9 ) ?  ( nowDate.getDate() ) : ( "0" + nowDate.getDate() );
	var hour =  ( nowDate.getHours() > 9 ) ?  ( nowDate.getHours() ) : ( "0" + nowDate.getHours() );
	var minute =  ( nowDate.getMinutes() > 9 ) ?  ( nowDate.getMinutes() ) : ( "0" + nowDate.getMinutes() );
	var second = ( nowDate.getSeconds() > 9 ) ?  ( nowDate.getSeconds() ) : ( "0" + nowDate.getSeconds() );
	return "" + year + month + date + hour + minute + second ;
}

/* ��ȡ ��ǰʱ�� yyyy-mm-dd */
function GetNowDate(){
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = ( nowDate.getMonth()+1 > 9 ) ?  ( nowDate.getMonth()+1 ) : ( "0" + (nowDate.getMonth()+1)  );
	var date =  ( nowDate.getDate() > 9 ) ?  ( nowDate.getDate() ) : ( "0" + nowDate.getDate() );
	return "" + year + "-" + month + "-" + date  ;
}

/* ��ȡ ��ǰʱ�� yyyy-mm-dd hh:mm:ss*/
function GetNowTime(){
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = ( nowDate.getMonth()+1 > 9 ) ?  ( nowDate.getMonth()+1 ) : ( "0" + (nowDate.getMonth()+1)  );
	var date =  ( nowDate.getDate() > 9 ) ?  ( nowDate.getDate() ) : ( "0" + nowDate.getDate() );
	var hour =  ( nowDate.getHours() > 9 ) ?  ( nowDate.getHours() ) : ( "0" + nowDate.getHours() );
	var minute =  ( nowDate.getMinutes() > 9 ) ?  ( nowDate.getMinutes() ) : ( "0" + nowDate.getMinutes() );
	var second = ( nowDate.getSeconds() > 9 ) ?  ( nowDate.getSeconds() ) : ( "0" + nowDate.getSeconds() );
	return "" + year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}

Ext.override(Ext.menu.DateMenu, {
    autoWidth: function () {
        this.width += "px";
    }
});
