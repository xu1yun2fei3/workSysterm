package dao;

import bean.tabf_yesnoBean;
import bean.tabf_yesnoBeanExample;
import java.util.List;

public interface tabf_yesnoBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(tabf_yesnoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(tabf_yesnoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(tabf_yesnoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(tabf_yesnoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<tabf_yesnoBean> selectByExample(tabf_yesnoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    tabf_yesnoBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(tabf_yesnoBean record, tabf_yesnoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(tabf_yesnoBean record, tabf_yesnoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(tabf_yesnoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table tabf_yesno
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(tabf_yesnoBean record);
}