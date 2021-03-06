package dao;

import bean.kaohepingdingfabuBean;
import bean.kaohepingdingfabuBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class kaohepingdingfabuBeanDAOImpl extends SqlMapClientDaoSupport implements kaohepingdingfabuBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public kaohepingdingfabuBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(kaohepingdingfabuBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("kaohepingdingfabu.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(kaohepingdingfabuBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("kaohepingdingfabu.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        kaohepingdingfabuBean key = new kaohepingdingfabuBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("kaohepingdingfabu.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(kaohepingdingfabuBean record) {
        getSqlMapClientTemplate().insert("kaohepingdingfabu.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(kaohepingdingfabuBean record) {
        getSqlMapClientTemplate().insert("kaohepingdingfabu.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<kaohepingdingfabuBean> selectByExample(kaohepingdingfabuBeanExample example) {
        List<kaohepingdingfabuBean> list = getSqlMapClientTemplate().queryForList("kaohepingdingfabu.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public kaohepingdingfabuBean selectByPrimaryKey(Integer id) {
        kaohepingdingfabuBean key = new kaohepingdingfabuBean();
        key.setId(id);
        kaohepingdingfabuBean record = (kaohepingdingfabuBean) getSqlMapClientTemplate().queryForObject("kaohepingdingfabu.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(kaohepingdingfabuBean record, kaohepingdingfabuBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("kaohepingdingfabu.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(kaohepingdingfabuBean record, kaohepingdingfabuBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("kaohepingdingfabu.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(kaohepingdingfabuBean record) {
        int rows = getSqlMapClientTemplate().update("kaohepingdingfabu.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(kaohepingdingfabuBean record) {
        int rows = getSqlMapClientTemplate().update("kaohepingdingfabu.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table kaohepingdingfabu
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends kaohepingdingfabuBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, kaohepingdingfabuBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}