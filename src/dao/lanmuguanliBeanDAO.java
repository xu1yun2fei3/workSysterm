package dao;

import bean.lanmuguanliBean;
import bean.lanmuguanliBeanExample;
import java.util.List;

public interface lanmuguanliBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(lanmuguanliBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(lanmuguanliBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(lanmuguanliBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(lanmuguanliBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<lanmuguanliBean> selectByExample(lanmuguanliBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    lanmuguanliBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(lanmuguanliBean record, lanmuguanliBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(lanmuguanliBean record, lanmuguanliBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(lanmuguanliBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table lanmuguanli
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(lanmuguanliBean record);
}