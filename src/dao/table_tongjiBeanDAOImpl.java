package dao;

import bean.table_tongjiBean;
import bean.table_tongjiBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class table_tongjiBeanDAOImpl extends SqlMapClientDaoSupport implements table_tongjiBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public table_tongjiBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(table_tongjiBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("table_tongji.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(table_tongjiBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("table_tongji.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        table_tongjiBean key = new table_tongjiBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("table_tongji.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(table_tongjiBean record) {
        getSqlMapClientTemplate().insert("table_tongji.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(table_tongjiBean record) {
        getSqlMapClientTemplate().insert("table_tongji.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<table_tongjiBean> selectByExample(table_tongjiBeanExample example) {
        List<table_tongjiBean> list = getSqlMapClientTemplate().queryForList("table_tongji.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public table_tongjiBean selectByPrimaryKey(Integer id) {
        table_tongjiBean key = new table_tongjiBean();
        key.setId(id);
        table_tongjiBean record = (table_tongjiBean) getSqlMapClientTemplate().queryForObject("table_tongji.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(table_tongjiBean record, table_tongjiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("table_tongji.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(table_tongjiBean record, table_tongjiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("table_tongji.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(table_tongjiBean record) {
        int rows = getSqlMapClientTemplate().update("table_tongji.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(table_tongjiBean record) {
        int rows = getSqlMapClientTemplate().update("table_tongji.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table table_tongji
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends table_tongjiBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, table_tongjiBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}