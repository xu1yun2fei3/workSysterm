package dao;

import bean.fabuxitongdiaochaBean;
import bean.fabuxitongdiaochaBeanExample;
import java.util.List;

public interface fabuxitongdiaochaBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(fabuxitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(fabuxitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(fabuxitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(fabuxitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<fabuxitongdiaochaBean> selectByExample(fabuxitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    fabuxitongdiaochaBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(fabuxitongdiaochaBean record, fabuxitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(fabuxitongdiaochaBean record, fabuxitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(fabuxitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table fabuxitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(fabuxitongdiaochaBean record);
}