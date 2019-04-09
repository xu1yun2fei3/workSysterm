package dao;

import bean.gangweishezhiBean;
import bean.gangweishezhiBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class gangweishezhiBeanDAOImpl extends SqlMapClientDaoSupport implements gangweishezhiBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public gangweishezhiBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(gangweishezhiBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("gangweishezhi.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(gangweishezhiBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("gangweishezhi.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        gangweishezhiBean key = new gangweishezhiBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("gangweishezhi.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(gangweishezhiBean record) {
        getSqlMapClientTemplate().insert("gangweishezhi.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(gangweishezhiBean record) {
        getSqlMapClientTemplate().insert("gangweishezhi.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<gangweishezhiBean> selectByExample(gangweishezhiBeanExample example) {
        List<gangweishezhiBean> list = getSqlMapClientTemplate().queryForList("gangweishezhi.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public gangweishezhiBean selectByPrimaryKey(Integer id) {
        gangweishezhiBean key = new gangweishezhiBean();
        key.setId(id);
        gangweishezhiBean record = (gangweishezhiBean) getSqlMapClientTemplate().queryForObject("gangweishezhi.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(gangweishezhiBean record, gangweishezhiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("gangweishezhi.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(gangweishezhiBean record, gangweishezhiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("gangweishezhi.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(gangweishezhiBean record) {
        int rows = getSqlMapClientTemplate().update("gangweishezhi.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(gangweishezhiBean record) {
        int rows = getSqlMapClientTemplate().update("gangweishezhi.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table gangweishezhi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends gangweishezhiBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, gangweishezhiBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}