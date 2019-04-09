package  app.xitonggaojishezhi.pingdingdengji;

import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;
import org.springframework.web.servlet.ModelAndView;

import app.pub.base.BaseFormController;
import app.pub.database.DBUtils;
import app.pub.database.IbatisUtil;
import app.pub.sysInfo.SysInfo;
import app.pub.date.DateUtil;

import jxl.Workbook;
import jxl.format.Alignment;
import jxl.format.Colour;
import jxl.format.UnderlineStyle;
import jxl.format.VerticalAlignment;
import jxl.write.Label;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;

import java.io.File;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import app.pub.global.Global;
import app.pub.conf.InitSystemConfig;

import com.ibatis.sqlmap.client.SqlMapClient;

public class Pingdingdengji extends BaseFormController {
    //ҵ������
    public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
        //����Spring , ModelAndView����
        ModelAndView modelAndView = null;
        SqlMapClient sqlMap = null;
        try {
            //��������
            sqlMap = DBUtils.getSqlMap(this.getClass());
            
            //��������
            sqlMap.startTransaction();
            
            //��ȡ��ǰ������ʶ
            String flag = request.getParameter("flag");
            
            // ��ȡ�б�����
            if (flag != null && flag.equals("getJsonStore")) {
                modelAndView = doGetJsonStore(sqlMap, request, response);
            }// ������¼
            else if (flag != null && flag.equals("doAddSubmit")) {
                 modelAndView = doAdd(sqlMap, request, response);
            }// �޸ļ�¼
            else if (flag != null && flag.equals("doUpdateSubmit")) {
            	modelAndView = doUpdate(sqlMap, request, response);
            }// ɾ����ⶳ��¼
            else if (flag != null && flag.equals("doDeleOrUnDele")) {
                 modelAndView = doDeleOrUnDele(sqlMap, request, response);
            }// ����excel
            else if (flag != null && flag.equals("doExportExcel")) {
                modelAndView = doExportExcel(sqlMap, request, response);
            }// �ֶ�ͳ��
            else if (flag != null && flag.equals("doTongJi")) {
                    modelAndView = doTongJi(sqlMap, request, response);
            }// �����ֶ�
            else if (flag != null && flag.equals("doGuanLian")) {
                    modelAndView = doGuanLian(sqlMap, request, response);
            }//���� 
            else if (flag != null && flag.equals("doShenPi")) {
                    modelAndView = doShenPi(sqlMap, request, response);
            }//�ϴ�ͼƬ
            else if (flag != null && flag.equals("doAddPicSubmit")) {
                    modelAndView = doAddPicSubmit(sqlMap, request, response);
            }//��ȡͼƬ����
			else if (flag != null && flag.equals("getPicJsonStore")) {
				modelAndView = doGetPicJsonStore(sqlMap, request, response);
			}//ɾ��ͼƬ
            else if (flag != null && flag.equals("doDelePic")) {
                    modelAndView = doDelePic(sqlMap, request, response);
            }else{
                HashMap<Object, Object> resultMap = new HashMap<Object, Object>();
                return toFinish("/WEB-ROOT/app/xitonggaojishezhi/pingdingdengji/pingdingdengji.jsp", resultMap, request,  response);
            }
            //�ύ���ݿ�
            sqlMap.commitTransaction();
        } catch (Exception e) {
             //��ӡ�����ջ��Ϣ
            e.printStackTrace();
        } finally {
            //����������Ϊ�գ��ر�sqlMap
            if (sqlMap != null) {
                DBUtils.closeSqlMap(sqlMap, this.getClass());
            }
        }
        return modelAndView;
    }
    
    //�õ���ѯ����
    public ModelAndView doGetJsonStore(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) {
        //�������������  
        PrintWriter pw = null;
        try {
            //���ò�ѯ����
            HashMap<String, Object> where = new HashMap<String, Object>();
            String pingdingdengjiSearch = request.getParameter("pingdingdengjiSearch"); 
 if( pingdingdengjiSearch != null && !pingdingdengjiSearch.equals("") ){  
 	 where.put("pingdingdengjiSearch", pingdingdengjiSearch);  
 } 
String idSearch = request.getParameter("idSearch"); 
 if( idSearch != null && !idSearch.equals("") ){  
 	 where.put("idSearch", idSearch);  
 } 
String itimeSearch = request.getParameter("itimeSearch"); 
 if( itimeSearch != null && !itimeSearch.equals("") ){  
 	 where.put("itimeSearch", itimeSearch);  
 } 
String detailSearch = request.getParameter("detailSearch"); 
 if( detailSearch != null && !detailSearch.equals("") ){  
 	 where.put("detailSearch", detailSearch);  
 } 
String deleteFlagSearch = request.getParameter("deleteFlagSearch"); 
 if( deleteFlagSearch != null && !deleteFlagSearch.equals("") ){  
 	 where.put("deleteFlagSearch", deleteFlagSearch);  
 } 
String erjiguanlianzdSearch = request.getParameter("erjiguanlianzdSearch"); 
 if( erjiguanlianzdSearch != null && !erjiguanlianzdSearch.equals("") ){  
 	 where.put("erjiguanlianzdSearch", erjiguanlianzdSearch);  
 } 
String attr1Search = request.getParameter("attr1Search"); 
 if( attr1Search != null && !attr1Search.equals("") ){  
 	 where.put("attr1Search", attr1Search);  
 } 
String attr2Search = request.getParameter("attr2Search"); 
 if( attr2Search != null && !attr2Search.equals("") ){  
 	 where.put("attr2Search", attr2Search);  
 } 
String attr3Search = request.getParameter("attr3Search"); 
 if( attr3Search != null && !attr3Search.equals("") ){  
 	 where.put("attr3Search", attr3Search);  
 } 
String attr4Search = request.getParameter("attr4Search"); 
 if( attr4Search != null && !attr4Search.equals("") ){  
 	 where.put("attr4Search", attr4Search);  
 } 
String attr5Search = request.getParameter("attr5Search"); 
 if( attr5Search != null && !attr5Search.equals("") ){  
 	 where.put("attr5Search", attr5Search);  
 } 

            
            //����ʱ��
            String itimeStartSearch = request.getParameter("itimeStartSearch");
            if( itimeStartSearch != null && !itimeStartSearch.equals("") ){
                where.put("itimeStartSearch", itimeStartSearch + " 00:00:00");
            }
            String itimeEndSearch = request.getParameter("itimeEndSearch");
            if( itimeEndSearch != null && !itimeEndSearch.equals("") ){
                where.put("itimeEndSearch", itimeEndSearch + " 23:59:59");
            }
            
            String r = request.getParameter("r");
            if( r != null && r.equals("n") ){
            	
            }
            
            String erjiguanlianzd = request.getParameter("erjiguanlianzd");
            if( erjiguanlianzd != null && !erjiguanlianzd.equals("") ){
            	where.put("erjiguanlianzd", erjiguanlianzd );
            }
            
            //���ݲ�ѯ������ȡ����
            String json = IbatisUtil.queryForPage(sqlMap, request, response, where, "Pingdingdengji.selecteList");

            //���ñ��뼯Ϊutf8
            response.setCharacterEncoding("utf-8");
            
            //��ȡ�����
            pw = response.getWriter();
            
            //��ǰ̨�������
            pw.write(json);
        } catch (Exception e) {
            //�������׳��쳣
            e.printStackTrace();
        } finally {
            //����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
    //��������
    public ModelAndView doAdd(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //�������������
        PrintWriter pw = null;
        try {
            //���ñ���Ϊutf8
            response.setCharacterEncoding("utf-8");
            
            //��ʼ�������
            pw = response.getWriter();
            
            //��������
            HashMap<String, Object> where = new HashMap<String, Object>();
            where.put("operatorId",  SysInfo.getLoginUserId(request, response) ); 
            String pingdingdengji = request.getParameter("pingdingdengji"); 
where.put("pingdingdengji", pingdingdengji);  
String detail = request.getParameter("detail"); 
where.put("detail", detail);  
String erjiguanlianzd = request.getParameter("erjiguanlianzd"); 
where.put("erjiguanlianzd", erjiguanlianzd);  

            
            //�����ݿ���������
            sqlMap.insert("Pingdingdengji.insertObj", where);
            
            //�����ɹ�����ʾ
            pw.write("{success:true,msg:'���������ɹ���'}");
            
        } catch (Exception e) {
              //����ʧ�ܺ���ʾ
            pw.write("{success:false,msg:'" + e.getMessage() + "'}");
            
            //��ӡ�����ջ��Ϣ
            e.printStackTrace();
            
            //�׳��쳣
            throw new Exception();
        } finally {
            //����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
    //�����ϴ����ݷ���
    public ModelAndView doAddWithAttach(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
         //�������������
        PrintWriter pw = null;
		try {
		        //���ñ���ΪGB2312����ֹ�������롣
			response.setCharacterEncoding("GB2312");
			
			/* �������ı��ύ���������� ContentTypeΪtext/html */
			response.setContentType("text/html");

			//��ʼ�������
			pw = response.getWriter();
			
			//����DiskFileItemFactory����
			DiskFileItemFactory factory = new DiskFileItemFactory();
			
			//���û�������СΪ4096k
			factory.setSizeThreshold(4096);
			
			//�����ϴ�����
			ServletFileUpload upload = new ServletFileUpload(factory);
			
			//�����ϴ��������
			upload.setSizeMax(Global.UPLOAD_FILE_MAX_SIZE);
			
			// ����ϴ��ļ���Ϊ���ĵ�����
			upload.setHeaderEncoding("gb2312");
			
			//��������
			HashMap<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("operatorId",  SysInfo.getLoginUserId(request, response) ); 
			
			//��ȡ���ύ����
			List fileItems = upload.parseRequest(request);
			Iterator iter = fileItems.iterator();
			int i = 0;
			int j = 0;
						
			while (iter.hasNext()) {
				FileItem item = (FileItem) iter.next();
				/* ���ļ��� */
				if (item.isFormField()) {
					
					i++;
				} /* �ļ��� */
				else {
					if (j == 0) {
						//��ȡ�ļ�����
						String filePath = item.getName();
						
						//�ļ�����Ϊ�գ�����ת�´�ѭ��
						if (filePath == null || filePath.equals("")) {
							whereMap.put("fuJian", "");
							continue;
						}
						
						//��ȡ�ļ�·��
						filePath = filePath.substring(filePath.lastIndexOf("\\") + 1);
						
						//�����ļ����浽��������·��
						String uploadPath = InitSystemConfig.UPLOAD_FILE_PATH + filePath;
						
						//�½��ļ�
						File file = new File(uploadPath);
						
						//д�ļ�
						item.write(file);
						
						//���ļ�·������
						whereMap.put("fuJian", uploadPath);
					}
					j++;
				}
			}
            
            //��������
		    sqlMap.insert("Pingdingdengji.insertObj", whereMap);
			
			//��ʾ�����ɹ�
			pw.write("{success:true,msg:'���������ɹ���'}");

		} catch (Exception e) {
		    //��ӡ�����ջ
			e.printStackTrace();
			try {
			    //��ǰ̨��ʾ����ʧ����Ϣ
				pw.write("{success:false,msg:'" + e.getMessage() + "'}");
			} catch (Exception e1) {
				throw new Exception("��������ʧ��");
			}
		} finally {
		    //����������Ϊ�գ��ر������
			if (pw != null) {
				pw.close();
			}
		}

		return null;
	}
    
    //�޸����ݷ���
    public ModelAndView doUpdate(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //�������������
        PrintWriter pw = null;
        try {
            //���ñ���Ϊutf8
            response.setCharacterEncoding("utf-8");
            
             //��ʼ�������
            pw = response.getWriter();
            
             //��������
            HashMap<String, Object> where = new HashMap<String, Object>();
            String pingdingdengji = request.getParameter("pingdingdengji"); 
where.put("pingdingdengji", pingdingdengji);  
String id = request.getParameter("id"); 
where.put("id", id);  
String detail = request.getParameter("detail"); 
where.put("detail", detail);  
String erjiguanlianzd = request.getParameter("erjiguanlianzd"); 
where.put("erjiguanlianzd", erjiguanlianzd);  

            
            //�����ݿ��ύ�޸�����
            sqlMap.update("Pingdingdengji.updateObj", where);
            
            //��ʾ�����ɹ�
            pw.write("{success:true,msg:'�޸ı��ɹ���'}");
            
        } catch (Exception e) {
             //��ǰ̨��ʾ����ʧ����Ϣ
            pw.write("{success:false,msg:'" + e.getMessage() + "'}");
            e.printStackTrace();
            throw new Exception();
        } finally {
            //����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
    //�޸ĸ����ķ���
    public ModelAndView doUpdateWithAttach(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //�������������
        PrintWriter pw = null;
		try {
			//���ñ���ΪGB2312����ֹ�������롣
			response.setCharacterEncoding("GB2312");
			
			/* �������ı��ύ���������� ContentTypeΪtext/html */
			response.setContentType("text/html");

			//��ʼ�������
			pw = response.getWriter();
			
			//����DiskFileItemFactory����
			DiskFileItemFactory factory = new DiskFileItemFactory();
			
			//���û�������СΪ4096k
			factory.setSizeThreshold(4096);
			
			//�����ϴ�����
			ServletFileUpload upload = new ServletFileUpload(factory);
			
			//�����ϴ��������
			upload.setSizeMax(Global.UPLOAD_FILE_MAX_SIZE);
			
			// ����ϴ��ļ���Ϊ���ĵ�����
			upload.setHeaderEncoding("gb2312");
			
			//��ȡ����ID
      	    String id = request.getParameter("id");
      	    
      	    //�жϸ����Ƿ��޸�
			String isChangeAttach = request.getParameter("isChangeAttach");
			
			//��������
			HashMap<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("operatorId",  SysInfo.getLoginUserId(request, response) ); 
			
			//��ȡ���ύ����
			List fileItems = upload.parseRequest(request);
			Iterator iter = fileItems.iterator();
			int i = 0;
			int j = 0;
						
			while (iter.hasNext()) {
				FileItem item = (FileItem) iter.next();
				/* ���ļ��� */
				if (item.isFormField()) {
					
					i++;
				} /* �ļ��� */
				else {
					if (j == 0) {
						if (isChangeAttach != null && isChangeAttach.equals("1")) {
						    //��ȡ�ļ�����
							String fileName = item.getName();
							
							//�ļ�����Ϊ�գ�����ת�´�ѭ��
							if (fileName == null || fileName.equals("")) {
								whereMap.put("fuJian", "");
								continue;
							}
							//��ȡ�ļ�·��
							fileName = fileName.substring(fileName.lastIndexOf("\\") + 1);
							
							//�����ļ����浽��������·��
							String uploadPath = InitSystemConfig.UPLOAD_FILE_PATH + fileName;
							
							//�½��ļ�
							File file = new File(uploadPath);
							
							//д�ļ�
							item.write(file);
							
							//���ļ�·������
							whereMap.put("fuJian", uploadPath);
						}
					}
					j++;
				}
			}

            //������Ҫ�޸����ݵ�ID
			whereMap.put("id", id);
			
			//�����ݿ��ύ�޸���Ϣ
		    sqlMap.update("Pingdingdengji.updateObj", whereMap);
			
			//�޸ĳɹ���ʾ
			pw.write("{success:true,msg:'�޸Ĳ����ɹ���'}");

		} catch (Exception e) {
		    //��ӡ�����ջ
			e.printStackTrace();
			try {
			     //��ǰ̨��ʾ����ʧ����Ϣ
				pw.write("{success:false,msg:'" + e.getMessage() + "'}");
			} catch (Exception e1) {
				throw new Exception("��������ʧ��");
			}
		} finally {
		     //����������Ϊ�գ��ر������
			if (pw != null) {
				pw.close();
			}
		}

		return null;
	}
    
    //ɾ�����ݷ���
    public ModelAndView doDeleOrUnDele(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
        //�������������
        PrintWriter pw = null;
        String info = "";
        try {
            //��ȡ��Ҫɾ�����ݵ�ID
            String id = request.getParameter("id");
            
            //��ȡɾ����ʶ
            String deleteFlag = request.getParameter("deleteFlag");
            info = (deleteFlag.equals("0")) ? "�ⶳ" : "ɾ��";
            
            //���ñ���Ϊutf8
            response.setCharacterEncoding("utf-8");
            
             //��ʼ�������
            pw = response.getWriter();
            
            //����ɾ��������
            HashMap<String, Object> where = new HashMap<String, Object>();
            where.put("deleteFlag", deleteFlag);
            where.put("id", id);
            
            //�����ݿ��ύɾ������
            sqlMap.update("Pingdingdengji.doDeleOrUnDele", where);
            
            

            //�����ɹ���ʾ
            pw.write("{success:true,msg:'" + info + "���ɹ���'}");
            
        } catch (Exception e) {
        	//����ʧ����ʾ
            pw.write("{success:false,msg:'" + info + "��ʧ�ܣ�'}");
            
            //��ӡ�����ջ��Ϣ
            e.printStackTrace();
            
            //�׳��쳣
            throw new Exception();
        } finally {
            //����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
     //��������
     public ModelAndView doShenPi(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
         //�������������
        PrintWriter pw = null;
        String info = "";
        try {
            //��ȡ��Ҫ������Ϣ��ID
            String id = request.getParameter("id");
            
            //��ȡ��Ҫ������Ϣ��״̬
            String shenpi = request.getParameter("shenpi");
            
            //���ñ���Ϊutf8
            response.setCharacterEncoding("utf-8");
            
             //��ʼ�������
            pw = response.getWriter();
            
             //��������
            HashMap<String, Object> where = new HashMap<String, Object>();
            where.put("shenpi", shenpi);
            where.put("id", id);
            
            //�����ݿ��ύ������Ϣ
            sqlMap.update("Pingdingdengji.doShenPi", where);
   
             //�����ɹ�����ʾ
            pw.write("{success:true,msg:'�����ɹ���'}");
            
        } catch (Exception e) {
            //����ʧ�ܺ���ʾ
            pw.write("{success:false,msg:'����ʧ�ܣ�'}");
            
           //��ӡ�����ջ��Ϣ
            e.printStackTrace();
            
            //�׳��쳣
            throw new Exception();
        } finally {
        	//����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
     //ͳ�Ʒ���
     public ModelAndView doTongJi(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
	     //�������������
	    PrintWriter pw = null;
	    try {
	    	 //���ñ���Ϊutf8
		    response.setCharacterEncoding("utf-8");
		    
		    //��ʼ�������
		    pw = response.getWriter();
		    
		    String m = request.getParameter("m"); 
		    if( m != null && !m.equals("") ){
		    	 /* ��ȡͳ���ֶ� */
		    	 String descTabSql = "select column_name as Field , data_type , column_comment as columnComment ," +
												   				  "SUBSTRING(column_type,INSTR(column_type,'(') + 1,( INSTR(column_type,')') - INSTR(column_type,'(') ) -1  ) as column_type," +
												                  "b.tongji " +
											         "from information_schema.columns a,table_tongji b " +
											         "where a.table_schema='"+Global.DATABASE_NAME +"'  and " +
												        	  		"a.table_name='" + m + "' and  " +
												                    "a.column_name <>'id' and " +
												                    "a.column_name <>'itime' and " +
												                    "a.column_name <>'detail' and " +
												                    "a.column_name <>'deleteFlag' and " +
												                    "a.column_name <>'operatorId' and " +
												                    "a.table_name=b.table_name and " +
												                    "a.column_name=b.field_name ";
				 
				 //����ͳ������
				 HashMap<String, Object> where = new HashMap<String, Object>();
				 where.put("descTabSql", descTabSql);
				 
				 //��ȡͳ������
				 List list = IbatisUtil.queryForList(sqlMap, request, response, where, "Util.descTab");
				 
				 //����ͳ������ֵ
				 String msg = "" ;
			    	 if( list != null && list.size() > 0 ){
			    		 for( int i = 0 ; i < list.size() ; i ++ ){
			    			 String tongji = ( (HashMap)(list.get(i)) ).get("tongji").toString();
			    			 if( tongji.equals("1") ){
			    				String column_name = ( (HashMap)(list.get(i)) ).get("Field").toString();
			    				String columnComment = ( (HashMap)(list.get(i)) ).get("columnComment").toString();
			    				//����ͳ������
		    				    HashMap<String, Object> whereMap = new HashMap<String, Object>();
		    				    whereMap.put("column_name", column_name);
		    				    whereMap.put("table_name", m);
		    				    
		    				    String r = request.getParameter("r");
        					    if( r != null && r.equals("n") ){
			    					
			    				}
			    				String erjiguanlianzd = request.getParameter("erjiguanlianzd");
        					    if( erjiguanlianzd != null && !erjiguanlianzd.equals("") ){
			    					whereMap.put("erjiguanlianzd", erjiguanlianzd);
			    				}
			    				//����ͳ�ƽ����Ϣ
			    				float zongshu = Float.parseFloat( sqlMap.queryForObject( "Util.selTongJiTab" , whereMap ).toString() );
			    				if( msg.equals("") ){
			    					msg = columnComment + "��" + zongshu + "  " ;
			    				}else{
			    					msg = msg + " ��" +  columnComment + "��" + zongshu + "  " ;
			    				}
			    			 }
			    		 }
			    	 }
			    	 //��ǰ̨���ͳ�ƽ����Ϣ
			   	     pw.write("{success:true,msg:'"+msg+"'}");
			    }else{
			    //��ǰ̨���ͳ�ƽ����Ϣ
			   	pw.write("{success:true,msg:''}");
		    }
	    } catch (Exception e) {
	        //��ǰ̨���ͳ�ƽ����Ϣ
		    pw.write("{success:false,msg:''}");
		    
		    //��ӡ�����ջ��Ϣ
		    e.printStackTrace();
		    
		    //�������׳��쳣 
		    throw new Exception();
	    } finally {
	        //����������Ϊ�գ��ر������
		    if (pw != null) {
			    pw.close();
		    }
	    }
	    return null;
    }
    
    
     public ModelAndView doGuanLian(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
	     //�������������
	    PrintWriter pw = null;
        try {
            //���ù�������
            HashMap<String, Object> where = new HashMap<String, Object>();
            String guanLianBiao = request.getParameter("guanLianBiao");
            if( guanLianBiao != null && !guanLianBiao.equals("") ){
                where.put("guanLianBiao", guanLianBiao );
            }
            String guanLianZiDuan = request.getParameter("guanLianZiDuan");
            if( guanLianZiDuan != null && !guanLianZiDuan.equals("") ){
                where.put("guanLianZiDuan", guanLianZiDuan );
            }
            where.put("deleteFlag", 0);
            
            //�õ�����
            String json = IbatisUtil.queryForPage(sqlMap, request, response, where, "Util.selecteGuanLianList");

			//���ñ���Ϊutf8 
            response.setCharacterEncoding("utf-8");
            
            //��ʼ�������
            pw = response.getWriter();
            
            //��ǰ̨�����Ϣ
            pw.write(json);
        } catch (Exception e) {
            //��ӡ�����ջ��Ϣ
            e.printStackTrace();
        } finally {
            //����������Ϊ�գ��ر������
            if (pw != null) {
                pw.close();
            }
        }
        return null;
    }
    
    public static ModelAndView doExportExcel(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
		//���������
		OutputStream os = null;
		//����excel�����
		WritableWorkbook wwb = null;
		try {
			// ���ݲ�ѯ�����õ������
			HashMap<String, Object> where = new HashMap<String, Object>();
			List<Object> listInfo = sqlMap.queryForList("Pingdingdengji.selecteList", where);

			// ����responseΪ����ģʽ
			Date local = new Date();
			
			//��ʽ����ǰʱ����Ϊ�ļ���
			SimpleDateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
			String finalStr = df.format(local);
			
			//����response
			response.reset();
			
			//���ñ�ͷΪapplication/x-excel;charset=gb2312
			response.setContentType("application/x-excel;charset=gb2312");
			
			//���õ���excel�ļ����ļ���
			String filename = new String((new String(finalStr + ".xls")).getBytes("GBK"), "ISO8859-1");
			
			//�������Ϊ����ģʽ
			response.setHeader("Content-Disposition", "attachement; filename=\"" + filename + "\"");
			
			//���ñ��ػ�����Ϊchina
			response.setLocale(Locale.CHINA);
			
			//��ȡ�����
			os = response.getOutputStream();

			// ����������
			wwb = Workbook.createWorkbook(os);
			WritableSheet ws = wwb.createSheet("ͳ��", 0);
			
			//�����п�
			if( listInfo != null && listInfo.size() > 0 ){
				int colSize = ((HashMap)(listInfo.get(0))).size() ;
				for( int i = 0 ; i < colSize ; i ++ ){
					ws.setColumnView( i + 1, 25);
				}
			}
			
			// �ػ湤����
			ws = refreashSheet(listInfo, ws);
			wwb.write();
		} catch (Exception e) {
		    //��ӡ�����ջ��Ϣ
			e.printStackTrace();
			
			//�׳��쳣
			throw new Exception();
		} finally {
		    //����������Ϊ�գ��ر������
			if (wwb != null) {
				wwb.close();
			}
			 //����������Ϊ�գ��ر������
			if (wwb != null) {
				os.close();
			}
		}
		return null;
	}

	public static WritableSheet refreashSheet(List<Object> al, WritableSheet ws) throws Exception {
	    //��ʽ1
		WritableFont wfc = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfFC = new WritableCellFormat(wfc);
		//���ñ���Ϊ��ɫ
		wcfFC.setBackground(jxl.format.Colour.ICE_BLUE);
		//���ö��뷽ʽΪ���ж���
		wcfFC.setAlignment(Alignment.CENTRE);
		//���ñ߿���ʽ
		wcfFC.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);
       
        //��ʽ2
		WritableFont wfc1 = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfFC1 = new WritableCellFormat(wfc1);
		//���ñ���Ϊ��ɫ
		wcfFC1.setBackground(jxl.format.Colour.WHITE);
		//���ö��뷽ʽΪ���ж���
		wcfFC1.setAlignment(Alignment.CENTRE);
		//���ñ߿���ʽ
		wcfFC1.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);
		  
		 //��ʽ3
		WritableFont wfc2 = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfFC2 = new WritableCellFormat(wfc2);
		//���ñ���Ϊ��ɫ
		wcfFC2.setBackground(jxl.format.Colour.YELLOW);
		//���ö��뷽ʽΪ���ж���
		wcfFC2.setAlignment(Alignment.CENTRE);
		//���ñ߿���ʽ
		wcfFC2.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);
       
        //��ʽ4
		WritableFont wfc3 = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfFC3 = new WritableCellFormat(wfc3);
		//���ñ���Ϊ��ɫ
		wcfFC3.setBackground(jxl.format.Colour.ICE_BLUE);
		//���ö��뷽ʽΪ�������
		wcfFC3.setAlignment(Alignment.LEFT);
		//���ñ߿���ʽ
		wcfFC3.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);

       //��ʽ5
		WritableFont wf4 = new WritableFont(WritableFont.ARIAL, 10, WritableFont.NO_BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfF4 = new WritableCellFormat(wf4);
		//���ñ���Ϊ��ɫ
		wcfF4.setBackground(jxl.format.Colour.WHITE);
		//���ö��뷽ʽΪ���ж���
		wcfF4.setAlignment(Alignment.CENTRE);
		//���ö��뷽ʽΪ���ж���
		wcfF4.setVerticalAlignment(VerticalAlignment.CENTRE);
		//���ñ߿���ʽ
		wcfF4.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);

        //��ʽ6
		WritableFont wfc5 = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD, false, UnderlineStyle.NO_UNDERLINE, Colour.BLACK);
		WritableCellFormat wcfFC5 = new WritableCellFormat(wfc5);
		//���ñ���Ϊ��ɫ
		wcfFC5.setBackground(jxl.format.Colour.ORANGE);
		//���ö��뷽ʽΪ���ж���
		wcfFC5.setAlignment(Alignment.CENTRE);
		//���ñ߿���ʽ
		wcfFC5.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.MEDIUM);

        //�����п�
		int colSize = ((HashMap)(al.get(0))).size() ;
		
		// ���ñ�����ʽ
		Label tableHead = new Label(1, 1, "ͳ��Excel", wcfFC);
		ws.addCell(tableHead);
		ws.mergeCells(1, 1, colSize-3, 1);


		// ���ñ�ͷ(�к�,�к� ,���� )
		 Label label_0 = new Label(1, 3, "�����ȼ�", wcfFC5);  
 ws.addCell(label_0); 
 Label label_1 = new Label(2, 3, "Id", wcfFC5);  
 ws.addCell(label_1); 
 Label label_2 = new Label(3, 3, "����ʱ��", wcfFC5);  
 ws.addCell(label_2); 
 Label label_3 = new Label(4, 3, "��ע", wcfFC5);  
 ws.addCell(label_3); 


		//���ñ���
		for (int i = 0; i < al.size(); i++) { String pingdingdengji = ((HashMap) (al.get(i))).get("pingdingdengji").toString();  
 label_0 = new Label(1, i + 4, pingdingdengji, wcfF4); 
 ws.addCell(label_0); 
 String id = ((HashMap) (al.get(i))).get("id").toString();  
 label_1 = new Label(2, i + 4, id, wcfF4); 
 ws.addCell(label_1); 
 String itime = ((HashMap) (al.get(i))).get("itime").toString();  
 label_2 = new Label(3, i + 4, itime, wcfF4); 
 ws.addCell(label_2); 
 String detail = ((HashMap) (al.get(i))).get("detail").toString();  
 label_3 = new Label(4, i + 4, detail, wcfF4); 
 ws.addCell(label_3); 
 } 

		
		return ws;
	}
	
	public ModelAndView doAddPicSubmit(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
		 //�������������
		PrintWriter pw = null;
		try {
		    //���ñ���ΪGB2312
			response.setCharacterEncoding("GB2312");
			
			//��ʼ�������
			pw = response.getWriter();
			
			//��ȡDiskFileItemFactory����
			DiskFileItemFactory factory = new DiskFileItemFactory();
			
			//���û�������СΪ4096k
			factory.setSizeThreshold(4096);
			
			//�����ϴ�����
			ServletFileUpload upload = new ServletFileUpload(factory);
			
			//�����ϴ��������
			upload.setSizeMax(Global.UPLOAD_FILE_MAX_SIZE);
			
			// ����ϴ��ļ���Ϊ���ĵ�����
			upload.setHeaderEncoding("gb2312");
			
			//��ȡID
			String id = request.getParameter("id");
			
			//����ͼƬID
			HashMap<String, Object> whereMap = new HashMap<String, Object>();
			whereMap.put("id", id);
			String tuPianIndex = "" ;
			
			//��ѯͼƬ��Ϣ
			List list = sqlMap.queryForList("Pingdingdengji.getTuPianIndex", whereMap);
			if( list != null && list.size() > 0 ){
				if( list.get(0) != null ){
					tuPianIndex = ((HashMap)(list.get(0))).get("tuPian").toString(); 
				}
			}
			
			//�����ļ��У����ϴ�ͼƬ
			if( tuPianIndex.equals("") ){
				tuPianIndex = DateUtil.parse(new Date(), "yyyyMMddHHmmss") + (int)(Math.random() * 10);
				whereMap.put("tuPianIndex", tuPianIndex);
				sqlMap.update("Pingdingdengji.updateTuPianIndex", whereMap);
				File f = new File( InitSystemConfig.UPLOAD_FILE_PATH + tuPianIndex );
				f.mkdir();
			}
			
			//�õ����ύ����
			List fileItems = upload.parseRequest(request);
			Iterator iter = fileItems.iterator();
			
			whereMap.clear();
			while (iter.hasNext()) {
				FileItem item = (FileItem) iter.next();
				/* �ļ��� */
				if ( !item.isFormField()) {
				   //��ȡ�ļ�����
					String filePath = item.getName();
					filePath = filePath.substring(filePath.lastIndexOf("\\") + 1);
					whereMap.put("picName", filePath);
					
					//��ȡ�ļ�·��
					String uploadPath = InitSystemConfig.UPLOAD_FILE_PATH + tuPianIndex + "/" + filePath;
					whereMap.put("picPath", uploadPath);
					
					//�ļ������ڣ�������
					if( ! new File( uploadPath ).exists() ){
						whereMap.put("operatorId", SysInfo.getLoginUserId(request, response));
						whereMap.put("tuPianIndex", tuPianIndex);
						sqlMap.insert("Pingdingdengji.insertTuPian", whereMap);
					}
					
					//�����ļ��ϴ�
					File file = new File(uploadPath);
					item.write(file);					

				} 
			}
			
			
			/* �������ı��ύ���������� ContentTypeΪtext/html */
			response.setContentType("text/html");
			
			//��ʾ�����ɹ�
			pw.write("{success:true,msg:'����ͼƬ�ɹ���'}");
			
		} catch (Exception e) {
		    //��ӡ�����ջ
			e.printStackTrace();
			try {
			   //��ǰ̨��ʾ����ʧ����Ϣ
				pw.write("{success:false,msg:'" + e.getMessage() + "'}");
			} catch (Exception e1) {
			    //�׳������쳣
				throw new Exception("����ͼƬʧ��");
			}
		} finally {
		    //����������Ϊ�գ��ر������
			if (pw != null) {
				pw.close();
			}
		}
		
		return null;
	}
	
	public ModelAndView doGetPicJsonStore(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) {
		//�������������
		PrintWriter pw = null;
		try {
		    //���ò�ѯͼƬ����
			HashMap<String, Object> where = new HashMap<String, Object>();
			String id = request.getParameter("id");
			if (id != null && !id.equals("")) {
				where.put("id", id);
			}
			
			//�õ���ѯͼƬ�����Ϣ
			String json = IbatisUtil.queryForPage(sqlMap, request, response, where, "Pingdingdengji.selectePicList");
			
			//���ñ���Ϊutf8
			response.setCharacterEncoding("utf-8");
			
			//��ʼ�������
			pw = response.getWriter();
			
			//��ǰ̨������
			pw.write(json);
		}  catch (Exception e) {
		    //��ӡ�����ջ��Ϣ
			e.printStackTrace();
		} finally {
		    //����������Ϊ�գ��ر������
			if (pw != null) {
				pw.close();
			}
		}
		return null;
	}
	
	public ModelAndView doDelePic(SqlMapClient sqlMap, HttpServletRequest request, HttpServletResponse response) throws Exception {
	     //�������������
	    PrintWriter pw = null;
	    try {
	        //������Ҫɾ��ͼƬ��ID
		    String id = request.getParameter("id");
		    
		    //��ȡͼƬ��·��
		    String picPath = request.getParameter("picPath");
		    
		    //���ñ���Ϊutf8
		    response.setCharacterEncoding("utf-8");
		    
		    //��ʼ�������
		    pw = response.getWriter();
		    
		    //����ɾ������
		    HashMap<String, Object> where = new HashMap<String, Object>();
		    where.put("id", id);
		    
		    //�����ݿ��ύɾ����Ϣ
		    sqlMap.delete("Pingdingdengji.doDelePic", where);
		    
		    //���ļ�ɾ��
		    File f = new File(picPath) ;
		    if( f.exists() ){
			    f.delete();
		    }
		    
		    //�����ɹ���ʾ
		    pw.write("{success:true,msg:'ɾ��ͼƬ�ɹ���'}");
	    } catch (Exception e) {
	        //����ʧ����ʾ
		    pw.write("{success:false,msg:'ɾ��ͼƬʧ�ܣ�'}");
		    
		    //��ӡ�����ջ��Ϣ
		    e.printStackTrace();
		    
		    //�������׳��쳣
		    throw new Exception();
	    } finally {
	       //����������Ϊ�գ��ر������
		    if (pw != null) {
			    pw.close();
		    }
	    }
	    return null;
    }
}
    
