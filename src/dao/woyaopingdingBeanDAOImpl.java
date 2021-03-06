package dao;

import bean.woyaopingdingBean;
import bean.woyaopingdingBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class woyaopingdingBeanDAOImpl extends SqlMapClientDaoSupport implements woyaopingdingBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public woyaopingdingBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(woyaopingdingBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("woyaopingding.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(woyaopingdingBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("woyaopingding.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        woyaopingdingBean key = new woyaopingdingBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("woyaopingding.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(woyaopingdingBean record) {
        getSqlMapClientTemplate().insert("woyaopingding.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(woyaopingdingBean record) {
        getSqlMapClientTemplate().insert("woyaopingding.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<woyaopingdingBean> selectByExample(woyaopingdingBeanExample example) {
        List<woyaopingdingBean> list = getSqlMapClientTemplate().queryForList("woyaopingding.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public woyaopingdingBean selectByPrimaryKey(Integer id) {
        woyaopingdingBean key = new woyaopingdingBean();
        key.setId(id);
        woyaopingdingBean record = (woyaopingdingBean) getSqlMapClientTemplate().queryForObject("woyaopingding.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(woyaopingdingBean record, woyaopingdingBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("woyaopingding.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(woyaopingdingBean record, woyaopingdingBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("woyaopingding.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(woyaopingdingBean record) {
        int rows = getSqlMapClientTemplate().update("woyaopingding.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(woyaopingdingBean record) {
        int rows = getSqlMapClientTemplate().update("woyaopingding.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table woyaopingding
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends woyaopingdingBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, woyaopingdingBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}