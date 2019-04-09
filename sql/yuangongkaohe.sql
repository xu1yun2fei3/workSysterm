/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50511
Source Host           : localhost:3306
Source Database       : yuangongkaohe

Target Server Type    : MYSQL
Target Server Version : 50511
File Encoding         : 65001

Date: 2019-02-26 16:12:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `bumenxinxi`
-- ----------------------------
DROP TABLE IF EXISTS `bumenxinxi`;
CREATE TABLE `bumenxinxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `bumenmingchen` varchar(50) DEFAULT NULL COMMENT '部门名称',
  `shangjibumen` varchar(50) DEFAULT NULL COMMENT '上级部门',
  `bumenzhize` varchar(2000) DEFAULT NULL COMMENT '部门职责',
  `chenglishijian` varchar(50) DEFAULT NULL COMMENT '成立时间',
  `bumenfuzeren` varchar(50) DEFAULT NULL COMMENT '部门负责人',
  `bianzhirenshu` varchar(50) DEFAULT NULL COMMENT '编制人数',
  `bumenmiaoshu` varchar(2000) DEFAULT NULL COMMENT '部门描述',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bumenxinxi
-- ----------------------------
INSERT INTO `bumenxinxi` VALUES ('1', '公司董事会', '顶级部门', '公司董事，决策制定。', '2019-02-01', '王总', '2', '公司董事：王总，李总。', '1', '2019-02-25 17:59:45 ', '', '0', null, null, null, null, null, '');
INSERT INTO `bumenxinxi` VALUES ('2', '财务部门', '公司董事会', '财务核算', '2019-02-02', '王晓松', '5', '财务预算', '1', '2019-02-25 18:00:36 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `fabuxitongdiaocha`
-- ----------------------------
DROP TABLE IF EXISTS `fabuxitongdiaocha`;
CREATE TABLE `fabuxitongdiaocha` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `diaochamingchen` varchar(50) DEFAULT NULL COMMENT '调查名称',
  `diaocharenqun` varchar(50) DEFAULT NULL COMMENT '调查人群',
  `diaochanarong` varchar(2000) DEFAULT NULL COMMENT '调查内容',
  `fabushijian` varchar(50) DEFAULT NULL COMMENT '发布时间',
  `faburen` varchar(50) DEFAULT NULL COMMENT '发布人',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `tuPian` varchar(200) DEFAULT NULL COMMENT '图片ID',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fabuxitongdiaocha
-- ----------------------------

-- ----------------------------
-- Table structure for `gangweishezhi`
-- ----------------------------
DROP TABLE IF EXISTS `gangweishezhi`;
CREATE TABLE `gangweishezhi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `gangweimingchen` varchar(50) DEFAULT NULL COMMENT '岗位名称',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gangweishezhi
-- ----------------------------
INSERT INTO `gangweishezhi` VALUES ('1', '普通员工', '1', '2019-02-25 17:06:46 ', '', '0', null, null, null, null, null, '');
INSERT INTO `gangweishezhi` VALUES ('2', '项目经理', '1', '2019-02-25 17:06:54 ', '', '0', null, null, null, null, null, '');
INSERT INTO `gangweishezhi` VALUES ('3', '部门经理', '1', '2019-02-25 17:06:59 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `kaohepingdingfabu`
-- ----------------------------
DROP TABLE IF EXISTS `kaohepingdingfabu`;
CREATE TABLE `kaohepingdingfabu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `kaopingmingchen` varchar(50) DEFAULT NULL COMMENT '考评名称',
  `kaopingmiaoshu` varchar(2000) DEFAULT NULL COMMENT '考评描述',
  `canyuren` varchar(50) DEFAULT NULL COMMENT '参与人',
  `tijiaoriqi` varchar(50) DEFAULT NULL COMMENT '提交日期',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kaohepingdingfabu
-- ----------------------------
INSERT INTO `kaohepingdingfabu` VALUES ('1', '2019第一季度考评', '2019第一季度工作季度考评，例行考评。', '全员', '2019-03-31', '', '1', '2019-02-25 18:08:13 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `kaopingxiangmushezhi`
-- ----------------------------
DROP TABLE IF EXISTS `kaopingxiangmushezhi`;
CREATE TABLE `kaopingxiangmushezhi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `kaopingxiangmingchen` varchar(50) DEFAULT NULL COMMENT '考评项名称',
  `kaopingbiaozhun` varchar(2000) DEFAULT NULL COMMENT '考评标准',
  `kaopingshuoming` varchar(2000) DEFAULT NULL COMMENT '考评说明',
  `zhidingren` varchar(2000) DEFAULT NULL COMMENT '制定人',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kaopingxiangmushezhi
-- ----------------------------
INSERT INTO `kaopingxiangmushezhi` VALUES ('1', '工作完成情况', '是否做好工作以及完成情况，质量等评定', '对实际工作情况进行考评', '董事会', '', '1', '2019-02-25 18:06:31 ', '', '0', null, null, null, null, null, '');
INSERT INTO `kaopingxiangmushezhi` VALUES ('2', '职责履行程度', '对完成的工作的职责履行程度', '对实际工作情况进行考评', '董事会', '', '1', '2019-02-25 18:06:00 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `lanmuguanli`
-- ----------------------------
DROP TABLE IF EXISTS `lanmuguanli`;
CREATE TABLE `lanmuguanli` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `lanmumingcheng` varchar(100) DEFAULT NULL COMMENT '栏目名称',
  `chuangjianren` varchar(20) DEFAULT NULL COMMENT '创建人',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lanmuguanli
-- ----------------------------
INSERT INTO `lanmuguanli` VALUES ('1', '网站公告', 'admin', '1', '2019-02-23 09:36:02', '', '0');
INSERT INTO `lanmuguanli` VALUES ('2', '行业信息', 'admin', '1', '2019-02-23 09:36:02', '', '0');
INSERT INTO `lanmuguanli` VALUES ('3', '站长推荐', 'admin', '1', '2019-02-23 09:36:02', '', '0');
INSERT INTO `lanmuguanli` VALUES ('4', '意见建议', 'admin', '1', '2019-02-23 09:36:02', '', '0');

-- ----------------------------
-- Table structure for `menu_info`
-- ----------------------------
DROP TABLE IF EXISTS `menu_info`;
CREATE TABLE `menu_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(50) NOT NULL COMMENT '菜单名称',
  `menu_ename` varchar(50) DEFAULT NULL,
  `f_id` int(11) NOT NULL DEFAULT '0' COMMENT '父级菜单ID（fid为0表示为根节点）',
  `menu_todo` varchar(256) DEFAULT NULL COMMENT '菜单url',
  `menu_status` int(1) NOT NULL DEFAULT '1' COMMENT '菜单状态（1：正常； 0 ：非正常）',
  `menu_type` int(1) NOT NULL DEFAULT '1' COMMENT '菜单类型（0：系统菜单 ； 1：自定义普通菜单 ; 2 :自定义浏览菜单；3 :自定义审批菜单 ; 4:复制新增菜单）',
  `menu_index` int(11) DEFAULT '0' COMMENT '菜单显示序列',
  `menu_table` varchar(50) DEFAULT NULL COMMENT '菜单对应数据库表',
  `view_menu` int(1) NOT NULL DEFAULT '0' COMMENT '是否有浏览菜单（0：无 ； 1：有）',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `data_right` int(2) DEFAULT '0' COMMENT '数据权限（0：都可见；1：仅自己可见；2：自己和管理员可见）',
  `exDataRight` varchar(1000) DEFAULT NULL COMMENT '附加数据权限',
  `export_excel` int(1) DEFAULT '0' COMMENT '是否需要导出excel（0：不需要；1：需要）',
  `fuJian` int(1) DEFAULT '0' COMMENT '是否需要附件（0：不需要；1：需要）',
  `frontS` int(1) DEFAULT '0',
  `shenpi` int(1) DEFAULT '0' COMMENT '审批（0：无审批 ； 1：有审批）',
  `is_default` int(1) DEFAULT '0' COMMENT '是否是默认菜单（0：不是；1：是）',
  `tuPian` int(1) DEFAULT '0' COMMENT '是否需要图片（0：不需要；1：需要）',
  `isErJi` int(1) DEFAULT '0' COMMENT '是否是二级页面（0：不是；1：是）',
  `erJiUrl` varchar(256) DEFAULT NULL COMMENT '二级页面url',
  `oper_need` varchar(50) DEFAULT '1,1,1' COMMENT '需要的业务操作（新增，编辑，删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu_info
-- ----------------------------
INSERT INTO `menu_info` VALUES ('-3', '值表：性别', '', '-1', '', '0', '1', '1', 'tabf_gender', '0', null, '0', null, '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('-2', '值表：是否', '', '-1', '', '0', '1', '1', 'tabf_yesno', '0', '', '0', null, '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('1', '系统管理', 'sysManage', '0', '/WEB-ROOT/app/sysManage/', '1', '0', '105', null, '0', '', '0', null, '0', '0', '0', '0', '1', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('2', '用户管理', 'user_info', '1', '/WEB-ROOT/app/sysManage/systemUserManage.do', '1', '1', '1', 'user_info', '0', '', '0', null, '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('12', '个人信息', 'systemUserManage', '1', '/WEB-ROOT/app/sysManage/systemUserManage.do?from=self', '1', '0', '4', 'user_info', '0', null, '0', null, '0', '0', '0', '0', '1', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('13', '网站管理', 'wangzhanguanli', '0', '/WEB-ROOT/app/wangzhanguanli/', '0', '1', '104', null, '0', '', '0', null, '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('14', '栏目管理', 'lanmuguanli', '13', '/WEB-ROOT/app/wangzhanguanli/lanmuguanli.do?m=lanmuguanli', '1', '1', '1', 'lanmuguanli', '0', '', '0', null, '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('15', '首页幻灯片', 'shouyehuandengpian', '13', '/WEB-ROOT/app/wangzhanguanli/shouyehuandengpian.do?m=shouyehuandengpian', '1', '1', '3', 'shouyehuandengpian', '0', '', '0', null, '0', '1', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('16', '文章管理', 'wenzhangguanli', '13', '/WEB-ROOT/app/wangzhanguanli/wenzhangguanli.do?m=wenzhangguanli', '1', '1', '2', 'wenzhangguanli', '0', '', '0', '', '0', '0', '0', '0', '0', '0', '0', null, '1,1,1');
INSERT INTO `menu_info` VALUES ('18', '角色管理', 'systemRoleManage', '1', '/WEB-ROOT/app/sysManage/systemRoleManage.do?m=systemRoleManage', '1', '1', '2', 'systemRoleManage', '0', '', '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('19', '系统调查管理', 'xitongdiaochaguanli', '0', '/WEB-ROOT/app/xitongdiaochaguanli/', '0', '1', '100', null, '0', '', null, null, null, null, '0', null, '0', null, null, null, '1,1,1');
INSERT INTO `menu_info` VALUES ('20', '系统调查浏览', 'fabuxitongdiaocha', '19', '/WEB-ROOT/app/xitongdiaochaguanli/fabuxitongdiaocha.do?r=y&m=fabuxitongdiaocha', '1', '2', '0', 'fabuxitongdiaocha', '1', '', '0', '', '1', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('21', '发布系统调查', 'fabuxitongdiaocha', '19', '/WEB-ROOT/app/xitongdiaochaguanli/fabuxitongdiaocha.do?m=fabuxitongdiaocha', '1', '1', '0', 'fabuxitongdiaocha', '1', '', '0', '', '1', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('22', '我的系统调查', 'wodexitongdiaocha', '19', '/WEB-ROOT/app/xitongdiaochaguanli/wodexitongdiaocha.do?m=wodexitongdiaocha', '1', '1', '0', 'wodexitongdiaocha', '0', '', '2', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('23', '消息管理', 'xiaoxiguanli', '0', '/WEB-ROOT/app/xiaoxiguanli/', '0', '1', '101', null, '0', '', null, null, null, null, '0', null, '0', null, null, null, '1,1,1');
INSERT INTO `menu_info` VALUES ('24', '发布系统消息', 'xitongxiaoxi', '23', '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do?m=xitongxiaoxi', '1', '1', '0', 'xitongxiaoxi', '1', '', '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('25', '系统消息', 'xitongxiaoxi', '23', '/WEB-ROOT/app/xiaoxiguanli/xitongxiaoxi.do?r=y&m=xitongxiaoxi', '1', '2', '0', 'xitongxiaoxi', '1', '', '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('26', '站内消息', 'zhannaxiaoxi', '23', '/WEB-ROOT/app/xiaoxiguanli/zhannaxiaoxi.do?m=zhannaxiaoxi', '1', '1', '0', 'zhannaxiaoxi', '0', '', '2', ' or jieshouren=\'\\\"+SysInfo.getLoginUserAcct(request, response)+\\\"\'  ', '0', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('27', '意见箱管理', 'yijianxiangguanli', '0', '/WEB-ROOT/app/yijianxiangguanli/', '0', '1', '102', null, '0', '', null, null, null, null, '0', null, '0', null, null, null, '1,1,1');
INSERT INTO `menu_info` VALUES ('28', '意见箱浏览', 'wodeyijianxiang', '27', '/WEB-ROOT/app/yijianxiangguanli/wodeyijianxiang.do?r=y&m=wodeyijianxiang', '1', '2', '2', 'wodeyijianxiang', '1', '', '0', '', '0', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('29', '我的意见箱', 'wodeyijianxiang', '27', '/WEB-ROOT/app/yijianxiangguanli/wodeyijianxiang.do?m=wodeyijianxiang', '1', '1', '1', 'wodeyijianxiang', '1', '', '0', '', '0', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('30', '评论/评价管理', 'pinglunpingjiaguanli', '0', '/WEB-ROOT/app/pinglunpingjiaguanli/', '0', '1', '103', null, '0', '', null, null, null, null, '0', null, '0', null, null, null, '1,1,1');
INSERT INTO `menu_info` VALUES ('31', '评论浏览', 'wodepinglun', '30', '/WEB-ROOT/app/pinglunpingjiaguanli/wodepinglun.do?r=y&m=wodepinglun', '1', '2', '0', 'wodepinglun', '1', '', '2', '', '1', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('32', '我的评论', 'wodepinglun', '30', '/WEB-ROOT/app/pinglunpingjiaguanli/wodepinglun.do?m=wodepinglun', '1', '1', '0', 'wodepinglun', '1', '', '2', '', '1', '1', '0', '0', '0', '1', '0', '', '1,1,1');
INSERT INTO `menu_info` VALUES ('33', '系统高级设置', 'xitonggaojishezhi', '0', '/WEB-ROOT/app/xitonggaojishezhi/', '1', '1', '1', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('34', '岗位设置', 'gangweishezhi', '33', '/WEB-ROOT/app/xitonggaojishezhi/gangweishezhi.do?m=gangweishezhi', '1', '1', '0', 'gangweishezhi', '0', null, '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('35', '部门信息管理', 'bumenxinxiguanli', '0', '/WEB-ROOT/app/bumenxinxiguanli/', '1', '1', '2', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('36', '部门信息', 'bumenxinxi', '35', '/WEB-ROOT/app/bumenxinxiguanli/bumenxinxi.do?m=bumenxinxi', '1', '1', '0', 'bumenxinxi', '1', null, '2', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('37', '部门浏览', 'bumenxinxi', '35', '/WEB-ROOT/app/bumenxinxiguanli/bumenxinxi.do?r=y&m=bumenxinxi', '1', '2', '0', 'bumenxinxi', '1', null, '2', '', '0', '0', '1', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('38', '员工信息管理', 'yuangongxinxiguanli', '0', '/WEB-ROOT/app/yuangongxinxiguanli/', '1', '1', '3', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('39', '员工信息', 'yuangongxinxi', '38', '/WEB-ROOT/app/yuangongxinxiguanli/yuangongxinxi.do?m=yuangongxinxi', '1', '1', '0', 'yuangongxinxi', '1', null, '2', '', '1', '1', '0', '0', '0', '1', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('40', '员工信浏览', 'yuangongxinxi', '38', '/WEB-ROOT/app/yuangongxinxiguanli/yuangongxinxi.do?r=y&m=yuangongxinxi', '1', '2', '0', 'yuangongxinxi', '1', null, '2', '', '1', '1', '1', '0', '0', '1', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('41', '评定等级', 'pingdingdengji', '33', '/WEB-ROOT/app/xitonggaojishezhi/pingdingdengji.do?m=pingdingdengji', '1', '1', '0', 'pingdingdengji', '0', null, '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('42', '考核评定管理', 'kaohepingdingguanli', '0', '/WEB-ROOT/app/kaohepingdingguanli/', '1', '1', '4', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('43', '考评项目设置', 'kaopingxiangmushezhi', '42', '/WEB-ROOT/app/kaohepingdingguanli/kaopingxiangmushezhi.do?m=kaopingxiangmushezhi', '1', '1', '0', 'kaopingxiangmushezhi', '1', null, '2', '', '1', '1', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('44', '考评项目浏览', 'kaopingxiangmushezhi', '42', '/WEB-ROOT/app/kaohepingdingguanli/kaopingxiangmushezhi.do?r=y&m=kaopingxiangmushezhi', '1', '2', '0', 'kaopingxiangmushezhi', '1', null, '2', '', '1', '1', '1', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('45', '我的考核评定', 'wodekaohepingding', '0', '/WEB-ROOT/app/wodekaohepingding/', '1', '1', '5', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('48', '评定分数', 'pingdingfenshu', '33', '/WEB-ROOT/app/xitonggaojishezhi/pingdingfenshu.do?m=pingdingfenshu', '1', '1', '0', 'pingdingfenshu', '0', null, '0', '', '0', '0', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('49', '评定明细', 'pingdingmingxi', '45', '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do?m=pingdingmingxi', '0', '1', '0', 'pingdingmingxi', '1', null, '2', '', '0', '0', '0', '0', '0', '0', '1', null, '1,1,1,');
INSERT INTO `menu_info` VALUES ('50', '评定明细（浏览）', 'pingdingmingxi', '45', '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do?r=y&m=pingdingmingxi', '0', '2', '0', 'pingdingmingxi', '1', null, '2', '', '0', '0', '0', '0', '0', '0', '1', null, '1,1,1,');
INSERT INTO `menu_info` VALUES ('54', '考核评定发布', 'kaohepingdingfabu', '42', '/WEB-ROOT/app/kaohepingdingguanli/kaohepingdingfabu.do?m=kaohepingdingfabu', '1', '1', '0', 'kaohepingdingfabu', '1', null, '2', '', '0', '1', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('55', '考核评定浏览', 'kaohepingdingfabu', '42', '/WEB-ROOT/app/kaohepingdingguanli/kaohepingdingfabu.do?r=y&m=kaohepingdingfabu', '1', '2', '0', 'kaohepingdingfabu', '1', null, '2', '', '0', '1', '1', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('56', '我要评定', 'woyaopingding', '45', '/WEB-ROOT/app/wodekaohepingding/woyaopingding.do?m=woyaopingding', '1', '1', '0', 'woyaopingding', '1', null, '2', '', '0', '0', '0', '1', '0', '0', '0', '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do', '1,1,1,');
INSERT INTO `menu_info` VALUES ('57', '评定浏览', 'woyaopingding', '45', '/WEB-ROOT/app/wodekaohepingding/woyaopingding.do?r=y&m=woyaopingding', '1', '2', '0', 'woyaopingding', '1', null, '2', '', '0', '0', '0', '1', '0', '0', '0', '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do', '1,1,1,');
INSERT INTO `menu_info` VALUES ('58', '评定审批', 'woyaopingding', '45', '/WEB-ROOT/app/wodekaohepingding/woyaopingding.do?r=y&m=woyaopingding&sp=1', '1', '3', '0', 'woyaopingding', '1', null, '2', '', '0', '0', '0', '1', '0', '0', '0', '/WEB-ROOT/app/wodekaohepingding/pingdingmingxi.do', '1,1,1,');
INSERT INTO `menu_info` VALUES ('59', '考核评定结果及统计', 'kaohepingdingjieguojitongji', '0', '/WEB-ROOT/app/kaohepingdingjieguojitongji/', '1', '1', '6', null, '0', null, null, null, null, null, '0', null, '0', null, null, null, null);
INSERT INTO `menu_info` VALUES ('60', '评定结果', 'pingdingjieguo', '59', '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do?m=pingdingjieguo', '1', '1', '0', 'pingdingjieguo', '1', null, '2', '', '1', '1', '0', '0', '0', '0', '0', '', '1,1,1,');
INSERT INTO `menu_info` VALUES ('61', '结果统计', 'pingdingjieguo', '59', '/WEB-ROOT/app/kaohepingdingjieguojitongji/pingdingjieguo.do?r=y&m=pingdingjieguo', '1', '2', '0', 'pingdingjieguo', '1', null, '2', '', '1', '1', '0', '0', '0', '0', '0', '', '1,1,1,');

-- ----------------------------
-- Table structure for `organize_info`
-- ----------------------------
DROP TABLE IF EXISTS `organize_info`;
CREATE TABLE `organize_info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `orgName` varchar(50) NOT NULL COMMENT '组织名称',
  `fID` int(11) NOT NULL DEFAULT '0' COMMENT '父组织编号',
  `authorizeNum` int(11) DEFAULT '-1' COMMENT '编制人数（-1为无限制）',
  `startTime` varchar(19) NOT NULL COMMENT '生效开始时间',
  `endTime` datetime DEFAULT NULL COMMENT '作废时间',
  `orgManager` int(11) DEFAULT NULL COMMENT '组织负责人编号',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) NOT NULL DEFAULT '0' COMMENT '删除表示（0：正常；1：作废）',
  `fName` varchar(50) DEFAULT NULL COMMENT '父组织名称',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of organize_info
-- ----------------------------
INSERT INTO `organize_info` VALUES ('1', '财务部', '0', '1', '2012-05-31 14:13:11', null, '1', '财务部门', '0', '缁�缁�缁�����');
INSERT INTO `organize_info` VALUES ('2', '人力部', '0', '3', '2012-05-31 14:15:52', null, '1', '人力资源部门：分管人事，后勤。', '0', '组织结构树');

-- ----------------------------
-- Table structure for `pingdingdengji`
-- ----------------------------
DROP TABLE IF EXISTS `pingdingdengji`;
CREATE TABLE `pingdingdengji` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `pingdingdengji` varchar(50) DEFAULT NULL COMMENT '评定等级',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pingdingdengji
-- ----------------------------
INSERT INTO `pingdingdengji` VALUES ('1', '优秀', '1', '2019-02-25 17:07:11 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingdengji` VALUES ('2', '好', '1', '2019-02-25 17:07:18 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingdengji` VALUES ('3', '一般', '1', '2019-02-25 17:07:22 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingdengji` VALUES ('4', '差', '1', '2019-02-25 17:07:26 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `pingdingfenshu`
-- ----------------------------
DROP TABLE IF EXISTS `pingdingfenshu`;
CREATE TABLE `pingdingfenshu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `pingdingfenshu` varchar(50) DEFAULT NULL COMMENT '评定分数',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pingdingfenshu
-- ----------------------------
INSERT INTO `pingdingfenshu` VALUES ('1', '100', '1', '2019-02-25 18:13:45 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('2', '90', '1', '2019-02-25 18:13:49 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('3', '80', '1', '2019-02-25 18:13:53 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('4', '70', '1', '2019-02-25 18:13:57 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('5', '60', '1', '2019-02-25 18:14:01 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('6', '50', '1', '2019-02-25 18:14:05 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('7', '40', '1', '2019-02-25 18:14:09 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('8', '30', '1', '2019-02-25 18:14:14 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('9', '20', '1', '2019-02-25 18:14:18 ', '', '0', null, null, null, null, null, '');
INSERT INTO `pingdingfenshu` VALUES ('10', '10', '1', '2019-02-25 18:14:21 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `pingdingjieguo`
-- ----------------------------
DROP TABLE IF EXISTS `pingdingjieguo`;
CREATE TABLE `pingdingjieguo` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `kaopingxiangmu` varchar(50) DEFAULT NULL COMMENT '考评项目',
  `beikaopingren` varchar(50) DEFAULT NULL COMMENT '被考评人',
  `kaopingfenshu` varchar(50) DEFAULT NULL COMMENT '考评分数',
  `pingdingdengji` varchar(50) DEFAULT NULL COMMENT '评定等级',
  `xiangxishuoming` varchar(2000) DEFAULT NULL COMMENT '详细说明',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pingdingjieguo
-- ----------------------------
INSERT INTO `pingdingjieguo` VALUES ('1', '2019第一季度考评', '赵信出', '190', '优秀', '很好的完成了工作', '', '1', '2019-02-25 18:16:34 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `pingdingmingxi`
-- ----------------------------
DROP TABLE IF EXISTS `pingdingmingxi`;
CREATE TABLE `pingdingmingxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `kaopingxiangmu` varchar(50) DEFAULT NULL COMMENT '考评项目',
  `kaopingfenshu` varchar(50) DEFAULT NULL COMMENT '考评分数',
  `defenshuoming` varchar(2000) DEFAULT NULL COMMENT '得分说明',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pingdingmingxi
-- ----------------------------
INSERT INTO `pingdingmingxi` VALUES ('1', '工作完成情况', '90', '工作认真负责', '2', '2019-02-25 18:14:51 ', '', '0', null, null, null, null, null, '1');
INSERT INTO `pingdingmingxi` VALUES ('2', '职责履行程度', '90', '可以领到员工完成计划', '2', '2019-02-25 18:15:10 ', '', '0', null, null, null, null, null, '1');
INSERT INTO `pingdingmingxi` VALUES ('3', '工作完成情况', '70', '完成一般', '2', '2019-02-26 16:01:18 ', '', '0', null, null, null, null, null, '2');
INSERT INTO `pingdingmingxi` VALUES ('4', '职责履行程度', '80', '完成一般', '2', '2019-02-26 16:01:31 ', '', '0', null, null, null, null, null, '2');

-- ----------------------------
-- Table structure for `role_menu`
-- ----------------------------
DROP TABLE IF EXISTS `role_menu`;
CREATE TABLE `role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `menu_id` int(11) NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_menu
-- ----------------------------
INSERT INTO `role_menu` VALUES ('5', '1', '2');
INSERT INTO `role_menu` VALUES ('6', '1', '1');
INSERT INTO `role_menu` VALUES ('7', '1', '4');
INSERT INTO `role_menu` VALUES ('8', '1', '18');
INSERT INTO `role_menu` VALUES ('9', '2', '44');
INSERT INTO `role_menu` VALUES ('10', '2', '42');
INSERT INTO `role_menu` VALUES ('11', '2', '55');
INSERT INTO `role_menu` VALUES ('12', '2', '56');
INSERT INTO `role_menu` VALUES ('13', '2', '45');
INSERT INTO `role_menu` VALUES ('14', '2', '61');
INSERT INTO `role_menu` VALUES ('15', '2', '59');
INSERT INTO `role_menu` VALUES ('16', '3', '56');
INSERT INTO `role_menu` VALUES ('17', '3', '45');
INSERT INTO `role_menu` VALUES ('18', '3', '57');

-- ----------------------------
-- Table structure for `shouyehuandengpian`
-- ----------------------------
DROP TABLE IF EXISTS `shouyehuandengpian`;
CREATE TABLE `shouyehuandengpian` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `tupianmingcheng` varchar(100) DEFAULT NULL COMMENT '图片名称',
  `tupianbianhao` varchar(300) DEFAULT NULL COMMENT '图片编号',
  `changd` varchar(10) DEFAULT NULL COMMENT '长度',
  `kuandu` varchar(10) DEFAULT NULL COMMENT '宽度',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shouyehuandengpian
-- ----------------------------
INSERT INTO `shouyehuandengpian` VALUES ('1', 'banner1.jpg', '1', '490', '250', 'E:/java/IDE/MyEclipse/10.0/workspace_stef/BYSJ_DEMO/UploadFile/banner1.jpg', '1', '2013-02-26 16:21:55 ', '首页幻灯片：banner1.jpg', '0');
INSERT INTO `shouyehuandengpian` VALUES ('2', 'banner2.jpg', '2', '490', '250', 'E:/java/IDE/MyEclipse/10.0/workspace_stef/BYSJ_DEMO/UploadFile/banner2.jpg', '1', '2013-02-26 16:22:18 ', '', '0');
INSERT INTO `shouyehuandengpian` VALUES ('3', 'banner3.jpg', '3', '490', '250', 'E:/java/IDE/MyEclipse/10.0/workspace_stef/BYSJ_DEMO/UploadFile/banner3.jpg', '1', '2013-02-26 16:22:33 ', '', '0');
INSERT INTO `shouyehuandengpian` VALUES ('4', 'banner4.jpg', '4', '490', '250', 'E:/java/IDE/MyEclipse/10.0/workspace_stef/BYSJ_DEMO/UploadFile/banner4.jpg', '1', '2013-02-26 16:22:52 ', '', '0');

-- ----------------------------
-- Table structure for `systemrolemanage`
-- ----------------------------
DROP TABLE IF EXISTS `systemrolemanage`;
CREATE TABLE `systemrolemanage` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `jiaosemingchen` varchar(50) DEFAULT NULL COMMENT '角色名称',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of systemrolemanage
-- ----------------------------
INSERT INTO `systemrolemanage` VALUES ('1', '系统管理员', '1', '2014-10-09 11:00:32 ', '', '0', '');
INSERT INTO `systemrolemanage` VALUES ('2', '普通用户', '1', '2014-10-09 11:00:42 ', '', '0', '');
INSERT INTO `systemrolemanage` VALUES ('3', '经理', '1', '2019-02-25 18:03:09 ', '', '0', '');
INSERT INTO `systemrolemanage` VALUES ('4', '部门经理', '1', '2019-02-25 18:03:18 ', '', '0', '');

-- ----------------------------
-- Table structure for `system_info`
-- ----------------------------
DROP TABLE IF EXISTS `system_info`;
CREATE TABLE `system_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `systemName` varchar(100) NOT NULL DEFAULT '后台管理系统' COMMENT '系统名称',
  `systemDesigner` varchar(50) NOT NULL DEFAULT '***' COMMENT '设计人名称',
  `loginPageStyle` varchar(50) NOT NULL DEFAULT '方案一' COMMENT '登陆界面样式',
  `systemSkin` varchar(80) NOT NULL DEFAULT '' COMMENT '系统主题皮肤',
  `systemSkinName` varchar(50) NOT NULL DEFAULT '默认主题' COMMENT '系统主题皮肤名称',
  `topPanDisplay` varchar(1) NOT NULL DEFAULT '1' COMMENT '上部面板是否显示（1：显示 ； 0：不显示）',
  `southPanDisplay` varchar(1) NOT NULL DEFAULT '1' COMMENT '下部面板是否显示（1：显示 ； 0：不显示）',
  `menuRegion` varchar(1) NOT NULL DEFAULT '1' COMMENT '菜单显示方位（1：左边 ； 2：右边）',
  `menuCollapse` varchar(1) NOT NULL DEFAULT '1' COMMENT '菜单折叠（1：折叠 ； 0：不折叠）',
  `menuAnimate` varchar(1) NOT NULL DEFAULT '1' COMMENT '菜单动态效果（1：使用 ； 0：不使用）',
  `menuBackground` varchar(1) NOT NULL DEFAULT '0' COMMENT '菜单背景色（1：使用；0：不使用）',
  `isApprove` varchar(1) NOT NULL DEFAULT '0' COMMENT '注册后审批（0：不需要； 1：需要）',
  `qianTaiZhuTi` varchar(50) NOT NULL COMMENT '前台主题',
  `zhuCeZhuTi` varchar(50) NOT NULL COMMENT '注册主题',
  `houTaiZhuTi` varchar(50) NOT NULL COMMENT '后台主题',
  `buttonPlace` varchar(1) NOT NULL COMMENT '新增和删除按钮放置位置',
  `searchPlace` varchar(1) NOT NULL COMMENT '查询面板放置的位置',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of system_info
-- ----------------------------
INSERT INTO `system_info` VALUES ('1', '公司员工考核评价系统', '公司员工考核评价系统', '22', '', '默认主题（浅蓝色）', '1', '1', '1', '1', '1', '0', '0', '15/index.html', '1/index.jsp', '23/index.html', '1', '0');

-- ----------------------------
-- Table structure for `tabf_gender`
-- ----------------------------
DROP TABLE IF EXISTS `tabf_gender`;
CREATE TABLE `tabf_gender` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `descr` varchar(100) NOT NULL COMMENT '描述',
  `deleteFlag` int(1) NOT NULL DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tabf_gender
-- ----------------------------
INSERT INTO `tabf_gender` VALUES ('1', '男', '0');
INSERT INTO `tabf_gender` VALUES ('2', '女', '0');

-- ----------------------------
-- Table structure for `tabf_yesno`
-- ----------------------------
DROP TABLE IF EXISTS `tabf_yesno`;
CREATE TABLE `tabf_yesno` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `descr` varchar(100) NOT NULL COMMENT '描述',
  `deleteFlag` int(1) NOT NULL DEFAULT '0' COMMENT '删除标记',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tabf_yesno
-- ----------------------------
INSERT INTO `tabf_yesno` VALUES ('1', '是', '0');
INSERT INTO `tabf_yesno` VALUES ('2', '否', '0');

-- ----------------------------
-- Table structure for `table_guanlian`
-- ----------------------------
DROP TABLE IF EXISTS `table_guanlian`;
CREATE TABLE `table_guanlian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_name` varchar(100) NOT NULL COMMENT '当前表',
  `field_name` varchar(50) NOT NULL COMMENT '本表字段名称',
  `guanlianbiao` varchar(100) DEFAULT NULL COMMENT '关联表名称',
  `guanlianziduan` varchar(50) DEFAULT NULL COMMENT '关联表字段',
  `guanlian` int(1) NOT NULL DEFAULT '0' COMMENT '是否需要关联（0：不需要； 1：需要）',
  `bitian` int(1) NOT NULL DEFAULT '1' COMMENT '是否必填（0：不必填； 1：必填）',
  `zhidu` int(1) NOT NULL DEFAULT '0' COMMENT '是否只读（0：不只读； 1：只读）',
  `morenzhi` varchar(50) DEFAULT NULL COMMENT '默认值',
  `ziduanleixing` varchar(50) DEFAULT 'varchar' COMMENT '字段类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_guanlian
-- ----------------------------
INSERT INTO `table_guanlian` VALUES ('4', 'lanmuguanli', 'lanmumingcheng', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('5', 'lanmuguanli', 'chuangjianren', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('13', 'shouyehuandengpian', 'tupianmingcheng', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('14', 'shouyehuandengpian', 'tupianbianhao', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('15', 'shouyehuandengpian', 'changd', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('16', 'shouyehuandengpian', 'kuandu', '', '', '0', '1', '0', '', null);
INSERT INTO `table_guanlian` VALUES ('17', 'wenzhangguanli', 'wenzhangbiaoti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('18', 'wenzhangguanli', 'fubiaoti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('19', 'wenzhangguanli', 'zhengwen', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('20', 'wenzhangguanli', 'luokuan', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('21', 'wenzhangguanli', 'suoshulanmu', 'lanmuguanli', 'lanmumingcheng', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('22', 'systemRoleManage', 'jiaosemingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('23', 'fabuxitongdiaocha', 'diaochamingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('24', 'fabuxitongdiaocha', 'diaocharenqun', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('25', 'fabuxitongdiaocha', 'diaochanarong', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('26', 'fabuxitongdiaocha', 'fabushijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('27', 'fabuxitongdiaocha', 'faburen', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('28', 'wodexitongdiaocha', 'diaochamingchen', 'fabuxitongdiaocha', 'diaochamingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('29', 'wodexitongdiaocha', 'diaochajieguo', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('30', 'wodexitongdiaocha', 'tijiaoshijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('31', 'wodexitongdiaocha', 'tijiaoren', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('49', 'zhannaxiaoxi', 'xiaoxibiaoti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('50', 'zhannaxiaoxi', 'xiaoxinarong', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('51', 'zhannaxiaoxi', 'jieshouren', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('52', 'zhannaxiaoxi', 'faburen', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('53', 'zhannaxiaoxi', 'fabushijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('54', 'zhannaxiaoxi', 'yueduzhuangtai', '', '', '0', '1', '1', '对方未读', 'varchar');
INSERT INTO `table_guanlian` VALUES ('55', 'xitongxiaoxi', 'xiaoxizhuti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('56', 'xitongxiaoxi', 'xiaoximingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('57', 'xitongxiaoxi', 'xiaoxinarong', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('58', 'xitongxiaoxi', 'fabushijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('59', 'xitongxiaoxi', 'faburen', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('60', 'wodeyijianxiang', 'yijianbiaoti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('61', 'wodeyijianxiang', 'yijiannarong', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('62', 'wodeyijianxiang', 'tijiaoren', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('63', 'wodeyijianxiang', 'tijiaoshijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('64', 'wodepinglun', 'pinglunbiaoti', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('65', 'wodepinglun', 'pinglunnarong', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('66', 'wodepinglun', 'pinglunren', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('67', 'wodepinglun', 'pinglunshijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('69', 'ceshicaidan1', 'ceshicaidan', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('70', 'gangweishezhi', 'gangweimingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('71', 'bumenxinxi', 'bumenmingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('72', 'bumenxinxi', 'shangjibumen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('73', 'bumenxinxi', 'bumenzhize', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('74', 'bumenxinxi', 'chenglishijian', '', '', '0', '1', '0', '', 'date');
INSERT INTO `table_guanlian` VALUES ('75', 'bumenxinxi', 'bumenfuzeren', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('76', 'bumenxinxi', 'bianzhirenshu', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('77', 'bumenxinxi', 'bumenmiaoshu', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('78', 'yuangongxinxi', 'yuangongid', 'user_info', 'userAcct', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('79', 'yuangongxinxi', 'gonghao', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('80', 'yuangongxinxi', 'xingming', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('81', 'yuangongxinxi', 'xingbie', 'tabf_gender', 'descr', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('82', 'yuangongxinxi', 'ruzhishijian', '', '', '0', '1', '0', '', 'date');
INSERT INTO `table_guanlian` VALUES ('83', 'yuangongxinxi', 'suozaibumen', 'bumenxinxi', 'bumenmingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('84', 'yuangongxinxi', 'suozaigangwei', 'gangweishezhi', 'gangweimingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('85', 'yuangongxinxi', 'gerenjianli', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('86', 'yuangongxinxi', 'lianxifangshi', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('87', 'pingdingdengji', 'pingdingdengji', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('88', 'kaopingxiangmushezhi', 'kaopingxiangmingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('89', 'kaopingxiangmushezhi', 'kaopingbiaozhun', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('90', 'kaopingxiangmushezhi', 'kaopingshuoming', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('91', 'kaopingxiangmushezhi', 'zhidingren', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('95', 'pingdingfenshu', 'pingdingfenshu', '', '', '0', '1', '0', '', 'numberfield');
INSERT INTO `table_guanlian` VALUES ('96', 'pingdingmingxi', 'kaopingxiangmu', 'kaopingxiangmushezhi', 'kaopingxiangmingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('97', 'pingdingmingxi', 'kaopingfenshu', 'pingdingfenshu', 'pingdingfenshu', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('98', 'pingdingmingxi', 'defenshuoming', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('104', 'kaohepingdingfabu', 'kaopingmingchen', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('105', 'kaohepingdingfabu', 'kaopingmiaoshu', '', '', '0', '1', '0', '', 'textarea');
INSERT INTO `table_guanlian` VALUES ('106', 'kaohepingdingfabu', 'canyuren', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('107', 'kaohepingdingfabu', 'tijiaoriqi', '', '', '0', '1', '0', '', 'date');
INSERT INTO `table_guanlian` VALUES ('108', 'woyaopingding', 'kaopingmingchen', 'kaohepingdingfabu', 'kaopingmingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('109', 'woyaopingding', 'kaopingduixiang', 'yuangongxinxi', 'xingming', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('110', 'woyaopingding', 'tijiaoren', '', '', '0', '1', '1', '', 'loginAcct');
INSERT INTO `table_guanlian` VALUES ('111', 'woyaopingding', 'tijiaoshijian', '', '', '0', '1', '1', '', 'nowDate');
INSERT INTO `table_guanlian` VALUES ('112', 'woyaopingding', 'shenpi', '', '', '0', '0', '1', '待审批', 'varchar');
INSERT INTO `table_guanlian` VALUES ('113', 'pingdingjieguo', 'kaopingxiangmu', 'kaohepingdingfabu', 'kaopingmingchen', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('114', 'pingdingjieguo', 'beikaopingren', 'woyaopingding', 'kaopingduixiang', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('115', 'pingdingjieguo', 'kaopingfenshu', '', '', '0', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('116', 'pingdingjieguo', 'pingdingdengji', 'pingdingdengji', 'pingdingdengji', '1', '1', '0', '', 'varchar');
INSERT INTO `table_guanlian` VALUES ('117', 'pingdingjieguo', 'xiangxishuoming', '', '', '0', '1', '0', '', 'textarea');

-- ----------------------------
-- Table structure for `table_pic`
-- ----------------------------
DROP TABLE IF EXISTS `table_pic`;
CREATE TABLE `table_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `picName` varchar(100) DEFAULT NULL COMMENT '图片名称',
  `picPath` varchar(200) DEFAULT NULL COMMENT '图片路径',
  `itime` varchar(20) DEFAULT NULL COMMENT '上传时间',
  `operatorId` varchar(11) DEFAULT NULL COMMENT '上传人ID',
  `detail` varchar(500) DEFAULT NULL COMMENT '备注',
  `tuPianIndex` varchar(50) NOT NULL COMMENT '图片所属记录ID',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_pic
-- ----------------------------
INSERT INTO `table_pic` VALUES ('1', '1.png', 'C:/java/ide/myeclipse/workspace/BYSJ_DEMO/UploadFile/201602231633189/1.png', '2016-02-23 16:33:18 ', '1', null, '201602231633189');

-- ----------------------------
-- Table structure for `table_tongji`
-- ----------------------------
DROP TABLE IF EXISTS `table_tongji`;
CREATE TABLE `table_tongji` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_name` varchar(30) NOT NULL DEFAULT '' COMMENT '表名称',
  `field_name` varchar(30) NOT NULL DEFAULT '' COMMENT '字段名称',
  `tongji` varchar(1) NOT NULL DEFAULT '0' COMMENT '是否需要统计（0：不需要； 1：需要）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_tongji
-- ----------------------------
INSERT INTO `table_tongji` VALUES ('4', 'lanmuguanli', 'lanmumingcheng', '0');
INSERT INTO `table_tongji` VALUES ('5', 'lanmuguanli', 'chuangjianren', '0');
INSERT INTO `table_tongji` VALUES ('13', 'shouyehuandengpian', 'tupianmingcheng', '0');
INSERT INTO `table_tongji` VALUES ('14', 'shouyehuandengpian', 'tupianbianhao', '0');
INSERT INTO `table_tongji` VALUES ('15', 'shouyehuandengpian', 'changd', '0');
INSERT INTO `table_tongji` VALUES ('16', 'shouyehuandengpian', 'kuandu', '0');
INSERT INTO `table_tongji` VALUES ('17', 'wenzhangguanli', 'wenzhangbiaoti', '0');
INSERT INTO `table_tongji` VALUES ('18', 'wenzhangguanli', 'fubiaoti', '0');
INSERT INTO `table_tongji` VALUES ('19', 'wenzhangguanli', 'zhengwen', '0');
INSERT INTO `table_tongji` VALUES ('20', 'wenzhangguanli', 'luokuan', '0');
INSERT INTO `table_tongji` VALUES ('21', 'wenzhangguanli', 'suoshulanmu', '0');
INSERT INTO `table_tongji` VALUES ('22', 'systemRoleManage', 'jiaosemingchen', '0');
INSERT INTO `table_tongji` VALUES ('23', 'fabuxitongdiaocha', 'diaochamingchen', '0');
INSERT INTO `table_tongji` VALUES ('24', 'fabuxitongdiaocha', 'diaocharenqun', '0');
INSERT INTO `table_tongji` VALUES ('25', 'fabuxitongdiaocha', 'diaochanarong', '0');
INSERT INTO `table_tongji` VALUES ('26', 'fabuxitongdiaocha', 'fabushijian', '0');
INSERT INTO `table_tongji` VALUES ('27', 'fabuxitongdiaocha', 'faburen', '0');
INSERT INTO `table_tongji` VALUES ('28', 'wodexitongdiaocha', 'diaochamingchen', '0');
INSERT INTO `table_tongji` VALUES ('29', 'wodexitongdiaocha', 'diaochajieguo', '0');
INSERT INTO `table_tongji` VALUES ('30', 'wodexitongdiaocha', 'tijiaoshijian', '0');
INSERT INTO `table_tongji` VALUES ('31', 'wodexitongdiaocha', 'tijiaoren', '0');
INSERT INTO `table_tongji` VALUES ('49', 'zhannaxiaoxi', 'xiaoxibiaoti', '0');
INSERT INTO `table_tongji` VALUES ('50', 'zhannaxiaoxi', 'xiaoxinarong', '0');
INSERT INTO `table_tongji` VALUES ('51', 'zhannaxiaoxi', 'jieshouren', '0');
INSERT INTO `table_tongji` VALUES ('52', 'zhannaxiaoxi', 'faburen', '0');
INSERT INTO `table_tongji` VALUES ('53', 'zhannaxiaoxi', 'fabushijian', '0');
INSERT INTO `table_tongji` VALUES ('54', 'zhannaxiaoxi', 'yueduzhuangtai', '0');
INSERT INTO `table_tongji` VALUES ('55', 'xitongxiaoxi', 'xiaoxizhuti', '0');
INSERT INTO `table_tongji` VALUES ('56', 'xitongxiaoxi', 'xiaoximingchen', '0');
INSERT INTO `table_tongji` VALUES ('57', 'xitongxiaoxi', 'xiaoxinarong', '0');
INSERT INTO `table_tongji` VALUES ('58', 'xitongxiaoxi', 'fabushijian', '0');
INSERT INTO `table_tongji` VALUES ('59', 'xitongxiaoxi', 'faburen', '0');
INSERT INTO `table_tongji` VALUES ('60', 'wodeyijianxiang', 'yijianbiaoti', '0');
INSERT INTO `table_tongji` VALUES ('61', 'wodeyijianxiang', 'yijiannarong', '0');
INSERT INTO `table_tongji` VALUES ('62', 'wodeyijianxiang', 'tijiaoren', '0');
INSERT INTO `table_tongji` VALUES ('63', 'wodeyijianxiang', 'tijiaoshijian', '0');
INSERT INTO `table_tongji` VALUES ('64', 'wodepinglun', 'pinglunbiaoti', '0');
INSERT INTO `table_tongji` VALUES ('65', 'wodepinglun', 'pinglunnarong', '0');
INSERT INTO `table_tongji` VALUES ('66', 'wodepinglun', 'pinglunren', '0');
INSERT INTO `table_tongji` VALUES ('67', 'wodepinglun', 'pinglunshijian', '0');
INSERT INTO `table_tongji` VALUES ('68', 'gangweishezhi', 'gangweimingchen', '0');
INSERT INTO `table_tongji` VALUES ('69', 'bumenxinxi', 'bumenmingchen', '0');
INSERT INTO `table_tongji` VALUES ('70', 'bumenxinxi', 'shangjibumen', '0');
INSERT INTO `table_tongji` VALUES ('71', 'bumenxinxi', 'bumenzhize', '0');
INSERT INTO `table_tongji` VALUES ('72', 'bumenxinxi', 'chenglishijian', '0');
INSERT INTO `table_tongji` VALUES ('73', 'bumenxinxi', 'bumenfuzeren', '0');
INSERT INTO `table_tongji` VALUES ('74', 'bumenxinxi', 'bianzhirenshu', '0');
INSERT INTO `table_tongji` VALUES ('75', 'bumenxinxi', 'bumenmiaoshu', '0');
INSERT INTO `table_tongji` VALUES ('76', 'yuangongxinxi', 'yuangongid', '0');
INSERT INTO `table_tongji` VALUES ('77', 'yuangongxinxi', 'gonghao', '0');
INSERT INTO `table_tongji` VALUES ('78', 'yuangongxinxi', 'xingming', '0');
INSERT INTO `table_tongji` VALUES ('79', 'yuangongxinxi', 'xingbie', '0');
INSERT INTO `table_tongji` VALUES ('80', 'yuangongxinxi', 'ruzhishijian', '0');
INSERT INTO `table_tongji` VALUES ('81', 'yuangongxinxi', 'suozaibumen', '0');
INSERT INTO `table_tongji` VALUES ('82', 'yuangongxinxi', 'suozaigangwei', '0');
INSERT INTO `table_tongji` VALUES ('83', 'yuangongxinxi', 'gerenjianli', '0');
INSERT INTO `table_tongji` VALUES ('84', 'yuangongxinxi', 'lianxifangshi', '0');
INSERT INTO `table_tongji` VALUES ('85', 'pingdingdengji', 'pingdingdengji', '0');
INSERT INTO `table_tongji` VALUES ('86', 'kaopingxiangmushezhi', 'kaopingxiangmingchen', '0');
INSERT INTO `table_tongji` VALUES ('87', 'kaopingxiangmushezhi', 'kaopingbiaozhun', '0');
INSERT INTO `table_tongji` VALUES ('88', 'kaopingxiangmushezhi', 'kaopingshuoming', '0');
INSERT INTO `table_tongji` VALUES ('89', 'kaopingxiangmushezhi', 'zhidingren', '0');
INSERT INTO `table_tongji` VALUES ('93', 'pingdingfenshu', 'pingdingfenshu', '0');
INSERT INTO `table_tongji` VALUES ('94', 'pingdingmingxi', 'kaopingxiangmu', '0');
INSERT INTO `table_tongji` VALUES ('95', 'pingdingmingxi', 'kaopingfenshu', '0');
INSERT INTO `table_tongji` VALUES ('96', 'pingdingmingxi', 'defenshuoming', '0');
INSERT INTO `table_tongji` VALUES ('102', 'kaohepingdingfabu', 'kaopingmingchen', '0');
INSERT INTO `table_tongji` VALUES ('103', 'kaohepingdingfabu', 'kaopingmiaoshu', '0');
INSERT INTO `table_tongji` VALUES ('104', 'kaohepingdingfabu', 'canyuren', '0');
INSERT INTO `table_tongji` VALUES ('105', 'kaohepingdingfabu', 'tijiaoriqi', '0');
INSERT INTO `table_tongji` VALUES ('106', 'woyaopingding', 'kaopingmingchen', '0');
INSERT INTO `table_tongji` VALUES ('107', 'woyaopingding', 'kaopingduixiang', '0');
INSERT INTO `table_tongji` VALUES ('108', 'woyaopingding', 'tijiaoren', '0');
INSERT INTO `table_tongji` VALUES ('109', 'woyaopingding', 'tijiaoshijian', '0');
INSERT INTO `table_tongji` VALUES ('110', 'woyaopingding', 'shenpi', '0');
INSERT INTO `table_tongji` VALUES ('111', 'pingdingjieguo', 'kaopingxiangmu', '0');
INSERT INTO `table_tongji` VALUES ('112', 'pingdingjieguo', 'beikaopingren', '0');
INSERT INTO `table_tongji` VALUES ('113', 'pingdingjieguo', 'kaopingfenshu', '0');
INSERT INTO `table_tongji` VALUES ('114', 'pingdingjieguo', 'pingdingdengji', '0');
INSERT INTO `table_tongji` VALUES ('115', 'pingdingjieguo', 'xiangxishuoming', '0');

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `userAcct` varchar(50) NOT NULL COMMENT '用户帐号',
  `userPass` varchar(50) NOT NULL COMMENT '用户密码',
  `deleteFlag` int(1) NOT NULL DEFAULT '0' COMMENT '删除标识（0：正常 ； 1：删除）',
  `userName` varchar(50) NOT NULL COMMENT '用户名称',
  `userType` int(1) NOT NULL DEFAULT '2' COMMENT '用户类型（1：系统管理员；2：普通用户）',
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '状态（0：未审批；1：审批通过）',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'admin', '2A3FEAC13FC7F6BB', '0', '系统管理员', '1', '1');
INSERT INTO `user_info` VALUES ('2', '1111', '2A3FEAC13FC7F6BB', '0', '1111', '2', '1');
INSERT INTO `user_info` VALUES ('3', '2222', '2A3FEAC13FC7F6BB', '0', '2222', '2', '1');
INSERT INTO `user_info` VALUES ('4', 'jl1', '2A3FEAC13FC7F6BB', '0', 'jl1', '3', '1');

-- ----------------------------
-- Table structure for `user_info_detail`
-- ----------------------------
DROP TABLE IF EXISTS `user_info_detail`;
CREATE TABLE `user_info_detail` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userSex` varchar(1) DEFAULT NULL COMMENT '用户性别',
  `userAge` int(3) DEFAULT NULL COMMENT '用户年龄',
  `registerTime` varchar(10) DEFAULT NULL COMMENT '注册时间',
  `userId` int(11) DEFAULT NULL,
  `userPhone` varchar(20) DEFAULT NULL COMMENT '用户电话',
  `userName` varchar(50) DEFAULT NULL COMMENT '用户名称',
  `userDetail` varchar(2000) DEFAULT NULL COMMENT '用户备注',
  `userDoc` varchar(200) DEFAULT NULL COMMENT '用户附件',
  `danwei` varchar(50) DEFAULT NULL,
  `bumen` varchar(50) DEFAULT NULL,
  `zhiwei` varchar(60) DEFAULT NULL,
  `idcard` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info_detail
-- ----------------------------
INSERT INTO `user_info_detail` VALUES ('1', '男', '22', '2017-01-10', '1', '135********', '系统管理员', '', '', '无', '110***************', '本系统的超级管理员，拥有最大权限', null);
INSERT INTO `user_info_detail` VALUES ('2', '男', null, '2017-02-19', '2', '', '1111', '', '', null, '', '', null);
INSERT INTO `user_info_detail` VALUES ('3', '男', null, '2017-03-09', '3', '', '2222', '', '', null, '', '', null);
INSERT INTO `user_info_detail` VALUES ('4', '男', null, '2019-02-25', '4', '', 'jl1', '', '', null, '', '', null);

-- ----------------------------
-- Table structure for `user_menu`
-- ----------------------------
DROP TABLE IF EXISTS `user_menu`;
CREATE TABLE `user_menu` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `menu_id` int(11) NOT NULL DEFAULT '0' COMMENT '菜单ID',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=1126 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_menu
-- ----------------------------
INSERT INTO `user_menu` VALUES ('1098', '1', '2');
INSERT INTO `user_menu` VALUES ('1099', '1', '1');
INSERT INTO `user_menu` VALUES ('1100', '1', '4');
INSERT INTO `user_menu` VALUES ('1101', '1', '5');
INSERT INTO `user_menu` VALUES ('1102', '1', '12');
INSERT INTO `user_menu` VALUES ('1103', '1', '18');
INSERT INTO `user_menu` VALUES ('1104', '1', '34');
INSERT INTO `user_menu` VALUES ('1105', '1', '33');
INSERT INTO `user_menu` VALUES ('1106', '1', '41');
INSERT INTO `user_menu` VALUES ('1107', '1', '48');
INSERT INTO `user_menu` VALUES ('1108', '1', '36');
INSERT INTO `user_menu` VALUES ('1109', '1', '35');
INSERT INTO `user_menu` VALUES ('1110', '1', '37');
INSERT INTO `user_menu` VALUES ('1111', '1', '39');
INSERT INTO `user_menu` VALUES ('1112', '1', '38');
INSERT INTO `user_menu` VALUES ('1113', '1', '40');
INSERT INTO `user_menu` VALUES ('1114', '1', '43');
INSERT INTO `user_menu` VALUES ('1115', '1', '42');
INSERT INTO `user_menu` VALUES ('1116', '1', '44');
INSERT INTO `user_menu` VALUES ('1117', '1', '54');
INSERT INTO `user_menu` VALUES ('1118', '1', '55');
INSERT INTO `user_menu` VALUES ('1119', '1', '56');
INSERT INTO `user_menu` VALUES ('1120', '1', '45');
INSERT INTO `user_menu` VALUES ('1121', '1', '57');
INSERT INTO `user_menu` VALUES ('1122', '1', '58');
INSERT INTO `user_menu` VALUES ('1123', '1', '60');
INSERT INTO `user_menu` VALUES ('1124', '1', '59');
INSERT INTO `user_menu` VALUES ('1125', '1', '61');

-- ----------------------------
-- Table structure for `wenzhangguanli`
-- ----------------------------
DROP TABLE IF EXISTS `wenzhangguanli`;
CREATE TABLE `wenzhangguanli` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `wenzhangbiaoti` varchar(100) DEFAULT NULL COMMENT '文章标题',
  `fubiaoti` varchar(100) DEFAULT NULL COMMENT '副标题',
  `zhengwen` text COMMENT '正文',
  `luokuan` varchar(200) DEFAULT NULL COMMENT '落款',
  `suoshulanmu` varchar(100) DEFAULT NULL COMMENT '所属栏目',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wenzhangguanli
-- ----------------------------
INSERT INTO `wenzhangguanli` VALUES ('1', '系统正式上线啦', '我们的系统正式上线啦', '系统正式上线啦，欢迎大家多多访问。谢谢你们的支持喔 ^^', 'admin', '网站公告', '1', '2019-02-23 09:36:02', '系统正式上线啦', '0');
INSERT INTO `wenzhangguanli` VALUES ('2', '号外号外', '特大号外', '号外号外，特大号外。福利多多，奖品多多。', 'admin', '行业信息', '1', '2019-02-23 09:36:02', '号外号外', '0');
INSERT INTO `wenzhangguanli` VALUES ('3', '站长推荐', '强烈推荐', '站长吐血推荐，不看后悔一万年。', 'admin', '站长推荐', '1', '2019-02-23 09:36:02', '站长推荐', '0');
INSERT INTO `wenzhangguanli` VALUES ('4', '热心网友，各抒己见。', '热心网友，各抒己见。', '热心网友，各抒己见。请吐露你们的心声，在这里我们一吐为快。', 'admin', '意见建议', '1', '2019-02-23 09:36:02', '热心网友，各抒己见。', '0');

-- ----------------------------
-- Table structure for `wodepinglun`
-- ----------------------------
DROP TABLE IF EXISTS `wodepinglun`;
CREATE TABLE `wodepinglun` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `pinglunbiaoti` varchar(50) DEFAULT NULL COMMENT '评论标题',
  `pinglunnarong` varchar(2000) DEFAULT NULL COMMENT '评论内容',
  `pinglunren` varchar(50) DEFAULT NULL COMMENT '评论人',
  `pinglunshijian` varchar(50) DEFAULT NULL COMMENT '评论时间',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `tuPian` varchar(200) DEFAULT NULL COMMENT '图片ID',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wodepinglun
-- ----------------------------

-- ----------------------------
-- Table structure for `wodexitongdiaocha`
-- ----------------------------
DROP TABLE IF EXISTS `wodexitongdiaocha`;
CREATE TABLE `wodexitongdiaocha` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `diaochamingchen` varchar(50) DEFAULT NULL COMMENT '调查名称',
  `diaochajieguo` varchar(2000) DEFAULT NULL COMMENT '调查结果',
  `tijiaoshijian` varchar(50) DEFAULT NULL COMMENT '提交时间',
  `tijiaoren` varchar(50) DEFAULT NULL COMMENT '提交人',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wodexitongdiaocha
-- ----------------------------

-- ----------------------------
-- Table structure for `wodeyijianxiang`
-- ----------------------------
DROP TABLE IF EXISTS `wodeyijianxiang`;
CREATE TABLE `wodeyijianxiang` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `yijianbiaoti` varchar(50) DEFAULT NULL COMMENT '意见标题',
  `yijiannarong` varchar(2000) DEFAULT NULL COMMENT '意见内容',
  `tijiaoren` varchar(50) DEFAULT NULL COMMENT '提交人',
  `tijiaoshijian` varchar(50) DEFAULT NULL COMMENT '提交时间',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `tuPian` varchar(200) DEFAULT NULL COMMENT '图片ID',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wodeyijianxiang
-- ----------------------------

-- ----------------------------
-- Table structure for `woyaopingding`
-- ----------------------------
DROP TABLE IF EXISTS `woyaopingding`;
CREATE TABLE `woyaopingding` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `kaopingmingchen` varchar(50) DEFAULT NULL COMMENT '考评名称',
  `kaopingduixiang` varchar(50) DEFAULT NULL COMMENT '考评对象',
  `tijiaoren` varchar(50) DEFAULT NULL COMMENT '提交人',
  `tijiaoshijian` varchar(50) DEFAULT NULL COMMENT '提交时间',
  `shenpi` varchar(50) DEFAULT NULL COMMENT '状态',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of woyaopingding
-- ----------------------------
INSERT INTO `woyaopingding` VALUES ('1', '2019第一季度考评', '赵信出', '1111', '2019-02-25', '审批通过', '2', '2019-02-25 18:11:09 ', '', '0', null, null, null, null, null, '');
INSERT INTO `woyaopingding` VALUES ('2', '2019第一季度考评', '朱小雪', '1111', '2019-02-26', '待审批', '2', '2019-02-26 16:00:33 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `xingbie_info`
-- ----------------------------
DROP TABLE IF EXISTS `xingbie_info`;
CREATE TABLE `xingbie_info` (
  `id` int(10) NOT NULL COMMENT 'ID',
  `xingbie` varchar(10) NOT NULL COMMENT '性别',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xingbie_info
-- ----------------------------
INSERT INTO `xingbie_info` VALUES ('1', '男');
INSERT INTO `xingbie_info` VALUES ('2', '女');
INSERT INTO `xingbie_info` VALUES ('3', '保密');

-- ----------------------------
-- Table structure for `xitongxiaoxi`
-- ----------------------------
DROP TABLE IF EXISTS `xitongxiaoxi`;
CREATE TABLE `xitongxiaoxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `xiaoxizhuti` varchar(50) DEFAULT NULL COMMENT '消息主题',
  `xiaoximingchen` varchar(50) DEFAULT NULL COMMENT '消息名称',
  `xiaoxinarong` varchar(2000) DEFAULT NULL COMMENT '消息内容',
  `fabushijian` varchar(50) DEFAULT NULL COMMENT '发布时间',
  `faburen` varchar(50) DEFAULT NULL COMMENT '发布人',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xitongxiaoxi
-- ----------------------------

-- ----------------------------
-- Table structure for `yuangongxinxi`
-- ----------------------------
DROP TABLE IF EXISTS `yuangongxinxi`;
CREATE TABLE `yuangongxinxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `yuangongid` varchar(50) DEFAULT NULL COMMENT '员工ID',
  `gonghao` varchar(50) DEFAULT NULL COMMENT '工号',
  `xingming` varchar(50) DEFAULT NULL COMMENT '姓名',
  `xingbie` varchar(50) DEFAULT NULL COMMENT '性别',
  `ruzhishijian` varchar(50) DEFAULT NULL COMMENT '入职时间',
  `suozaibumen` varchar(50) DEFAULT NULL COMMENT '所在部门',
  `suozaigangwei` varchar(50) DEFAULT NULL COMMENT '所在岗位',
  `gerenjianli` varchar(2000) DEFAULT NULL COMMENT '个人简历',
  `lianxifangshi` varchar(2000) DEFAULT NULL COMMENT '联系方式',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `tuPian` varchar(200) DEFAULT NULL COMMENT '图片ID',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `attr1` varchar(100) DEFAULT NULL COMMENT '扩展字段1',
  `attr2` varchar(100) DEFAULT NULL COMMENT '扩展字段2',
  `attr3` varchar(100) DEFAULT NULL COMMENT '扩展字段3',
  `attr4` varchar(100) DEFAULT NULL COMMENT '扩展字段4',
  `attr5` varchar(100) DEFAULT NULL COMMENT '扩展字段5',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of yuangongxinxi
-- ----------------------------
INSERT INTO `yuangongxinxi` VALUES ('1', 'jl1', '12345', '赵信出', '男', '2019-02-01', '财务部门', '部门经理', '赵信出，男，汉族', '电话：\r\n微信：', '', null, '1', '2019-02-25 18:04:13 ', '', '0', null, null, null, null, null, '');
INSERT INTO `yuangongxinxi` VALUES ('2', '1111', '01234', '朱小雪', '女', '2019-02-01', '财务部门', '普通员工', '朱小雪，女', '电话 ：\r\n微信 ：', '', null, '1', '2019-02-25 18:10:38 ', '', '0', null, null, null, null, null, '');

-- ----------------------------
-- Table structure for `zhannaxiaoxi`
-- ----------------------------
DROP TABLE IF EXISTS `zhannaxiaoxi`;
CREATE TABLE `zhannaxiaoxi` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `xiaoxibiaoti` varchar(50) DEFAULT NULL COMMENT '消息标题',
  `xiaoxinarong` varchar(2000) DEFAULT NULL COMMENT '消息内容',
  `jieshouren` varchar(50) DEFAULT NULL COMMENT '接收人',
  `faburen` varchar(50) DEFAULT NULL COMMENT '发布人',
  `fabushijian` varchar(50) DEFAULT NULL COMMENT '发布时间',
  `yueduzhuangtai` varchar(50) DEFAULT NULL COMMENT '阅读状态',
  `fuJian` varchar(200) DEFAULT NULL COMMENT '附件路径',
  `tuPian` varchar(200) DEFAULT NULL COMMENT '图片ID',
  `operatorId` varchar(20) DEFAULT NULL COMMENT '操作人ID',
  `itime` varchar(20) DEFAULT NULL COMMENT '操作时间',
  `detail` varchar(1000) DEFAULT NULL COMMENT '备注',
  `deleteFlag` int(1) DEFAULT '0' COMMENT '删除标识（0：正常；1：删除）',
  `erjiguanlianzd` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhannaxiaoxi
-- ----------------------------
