package dao;

import bean.systemrolemanageBean;
import bean.systemrolemanageBeanExample;
import java.util.List;

public interface systemrolemanageBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(systemrolemanageBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(systemrolemanageBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(systemrolemanageBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(systemrolemanageBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<systemrolemanageBean> selectByExample(systemrolemanageBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    systemrolemanageBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(systemrolemanageBean record, systemrolemanageBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(systemrolemanageBean record, systemrolemanageBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(systemrolemanageBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table systemrolemanage
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(systemrolemanageBean record);
}