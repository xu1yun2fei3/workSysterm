package dao;

import bean.wodexitongdiaochaBean;
import bean.wodexitongdiaochaBeanExample;
import java.util.List;

public interface wodexitongdiaochaBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(wodexitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(wodexitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(wodexitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(wodexitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<wodexitongdiaochaBean> selectByExample(wodexitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    wodexitongdiaochaBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(wodexitongdiaochaBean record, wodexitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(wodexitongdiaochaBean record, wodexitongdiaochaBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(wodexitongdiaochaBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(wodexitongdiaochaBean record);
}