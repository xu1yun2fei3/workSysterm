
/* 应用的名称 */
//var GLOBAL_APP_NAME = '/pm' ;
var GLOBAL_APP_NAME = '' ;

/* 表格最大分页数 */
var GLOBAL_MAX_PAGE_SIZE = 20 ;

/* 菜单根节点名称 */
var TREE_ROOT_NODE_NAME = '顶级部门' ;

/* 导出Excel图标路径 */
var EXPORT_EXCEL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/excel16.png';

/* 打印图标路径 */
var PRINTER_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/printer16.png';

/* 管理操作图标路径 */
var MANAGE_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/manage16.png';

/* 新增图标 */
var ADD_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/add.gif';

/* 冻结图标 */
var LOCK_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/hmenu-lock.png';

/* 解冻图标 */
var UNLOCK_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/hmenu-unlock.png';

/* 删除图标 */
var DELETE_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/delete16.gif';

/* 浏览图标 */
var VIEW_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/view16.gif';

/* 编辑图标 */
var EDIT_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/edit16_2.gif';

/* 右键新增图标 */
var RIGHT_CLICK_ADD_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/add16.gif';

/* 全、反选图标 */
var CHOOSE_ALL_OPERATION_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/choose_all16.png';

/* 显示全部图标 */
var DISPLAY_ALL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/table_refresh.png';

/* 返回图标 */
var RETURN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/return.gif';

/* 复制图标 */
var COPY_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/copy16.gif';

/* 向上图标 */
var UP_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/up.png';

/* 向下图标 */
var DOWN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/down.png';

/* 新增插件图标 */
var PLGIN_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/1a.gif';

/* DIY前台文章菜单图标 */
var FRONT_ARTICAL_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/22.gif';

/* 卸载DIY */
var UNINSTALL_DIY_ICON_PATH = GLOBAL_APP_NAME + '/WEB-ROOT/skin/images/app/28.gif';

/* 提示窗口title */
var WARRING_WIN_TITLE = '系统提示' ;

/* grid表格中 序号列的名称 */
var GRID_INDEX_STR = '序号' ;

/* 组织结构树根节点名称 */
var ORG_TREE_ROOT_NODE_NAME = '组织结构树';

/* 组织结构树根节点名称 */
var MENU_TREE_ROOT_NODE_NAME = '功能结构树';

/* 浏览样式 */
var READ_ONLY_STYLE = 'margin-top:0;margin-bottom:0;border:none;background:none;overflow-y:auto;' ;

/* 默认右边框架页面高度 */
var RIGHT_SIDE_PAGE_HEIGHT = 620 ;

/* 
 	默认右边框架页面高度
 	需要前台传主题 : 带主题参数时，不能用3，4主题
 	下面两个LOGIN_SUCC_GO_PAGE，任选一个
*/
var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/app/index.do" ; //到后台
//var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/app/index.do?htzt=5/index.html" ; //带主题，到后台
//var LOGIN_SUCC_GO_PAGE = "/WEB-ROOT/front/index/index.do" ; //到前台

/* 判断两个日期之间的相差天数 yyyy-mm-dd */
function DaysBetween( startDay , endDay){
	var sDay = new Date();
	sDay.setFullYear( Number( startDay.substring(0,4)  ) , Number( startDay.substring(5,7)  )-1, Number( startDay.substring(8)  ));
	
	var eDay = new Date();
	eDay.setFullYear( Number( endDay.substring(0,4)  ) , Number( endDay.substring(5,7)  )-1, Number( endDay.substring(8)  ));
	
	return Math.floor( ( eDay.getTime() - sDay.getTime() )/1000/60/60/24 )  ;
}


/* 获取 时间序列号 */
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

/* 获取 当前时间 yyyy-mm-dd */
function GetNowDate(){
	var nowDate = new Date();
	var year = nowDate.getFullYear();
	var month = ( nowDate.getMonth()+1 > 9 ) ?  ( nowDate.getMonth()+1 ) : ( "0" + (nowDate.getMonth()+1)  );
	var date =  ( nowDate.getDate() > 9 ) ?  ( nowDate.getDate() ) : ( "0" + nowDate.getDate() );
	return "" + year + "-" + month + "-" + date  ;
}

/* 获取 当前时间 yyyy-mm-dd hh:mm:ss*/
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
