package dao;

import bean.organize_infoBean;
import bean.organize_infoBeanExample;
import java.util.List;

public interface organize_infoBeanDAO {
    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int countByExample(organize_infoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByExample(organize_infoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insert(organize_infoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    void insertSelective(organize_infoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    List<organize_infoBean> selectByExample(organize_infoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    organize_infoBean selectByPrimaryKey(Integer id);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExampleSelective(organize_infoBean record, organize_infoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByExample(organize_infoBean record, organize_infoBeanExample example);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKeySelective(organize_infoBean record);

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table organize_info
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    int updateByPrimaryKey(organize_infoBean record);
}