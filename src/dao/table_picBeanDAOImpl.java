package dao;

import bean.table_picBean;
import bean.table_picBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class table_picBeanDAOImpl extends SqlMapClientDaoSupport implements table_picBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public table_picBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(table_picBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("table_pic.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(table_picBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("table_pic.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        table_picBean key = new table_picBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("table_pic.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(table_picBean record) {
        getSqlMapClientTemplate().insert("table_pic.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(table_picBean record) {
        getSqlMapClientTemplate().insert("table_pic.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<table_picBean> selectByExample(table_picBeanExample example) {
        List<table_picBean> list = getSqlMapClientTemplate().queryForList("table_pic.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public table_picBean selectByPrimaryKey(Integer id) {
        table_picBean key = new table_picBean();
        key.setId(id);
        table_picBean record = (table_picBean) getSqlMapClientTemplate().queryForObject("table_pic.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(table_picBean record, table_picBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("table_pic.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(table_picBean record, table_picBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("table_pic.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(table_picBean record) {
        int rows = getSqlMapClientTemplate().update("table_pic.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(table_picBean record) {
        int rows = getSqlMapClientTemplate().update("table_pic.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table table_pic
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends table_picBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, table_picBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}