package dao;

import bean.table_picBean;
import bean.table_picBeanExample;
import java.util.List;

public interface table_picBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(table_picBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(table_picBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(table_picBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(table_picBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<table_picBean> selectByExample(table_picBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    table_picBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(table_picBean record, table_picBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(table_picBean record, table_picBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(table_picBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(table_picBean record);
}