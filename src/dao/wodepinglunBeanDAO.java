package dao;

import bean.wodepinglunBean;
import bean.wodepinglunBeanExample;
import java.util.List;

public interface wodepinglunBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(wodepinglunBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(wodepinglunBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(wodepinglunBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(wodepinglunBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<wodepinglunBean> selectByExample(wodepinglunBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    wodepinglunBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(wodepinglunBean record, wodepinglunBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(wodepinglunBean record, wodepinglunBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(wodepinglunBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(wodepinglunBean record);
}