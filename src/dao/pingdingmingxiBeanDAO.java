package dao;

import bean.pingdingmingxiBean;
import bean.pingdingmingxiBeanExample;
import java.util.List;

public interface pingdingmingxiBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(pingdingmingxiBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(pingdingmingxiBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(pingdingmingxiBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(pingdingmingxiBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<pingdingmingxiBean> selectByExample(pingdingmingxiBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    pingdingmingxiBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(pingdingmingxiBean record, pingdingmingxiBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(pingdingmingxiBean record, pingdingmingxiBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(pingdingmingxiBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingmingxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(pingdingmingxiBean record);
}