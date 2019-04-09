package dao;

import bean.wodepinglunBean;
import bean.wodepinglunBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class wodepinglunBeanDAOImpl extends SqlMapClientDaoSupport implements wodepinglunBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public wodepinglunBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(wodepinglunBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("wodepinglun.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(wodepinglunBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("wodepinglun.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        wodepinglunBean key = new wodepinglunBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("wodepinglun.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(wodepinglunBean record) {
        getSqlMapClientTemplate().insert("wodepinglun.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(wodepinglunBean record) {
        getSqlMapClientTemplate().insert("wodepinglun.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<wodepinglunBean> selectByExample(wodepinglunBeanExample example) {
        List<wodepinglunBean> list = getSqlMapClientTemplate().queryForList("wodepinglun.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public wodepinglunBean selectByPrimaryKey(Integer id) {
        wodepinglunBean key = new wodepinglunBean();
        key.setId(id);
        wodepinglunBean record = (wodepinglunBean) getSqlMapClientTemplate().queryForObject("wodepinglun.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(wodepinglunBean record, wodepinglunBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("wodepinglun.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(wodepinglunBean record, wodepinglunBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("wodepinglun.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(wodepinglunBean record) {
        int rows = getSqlMapClientTemplate().update("wodepinglun.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(wodepinglunBean record) {
        int rows = getSqlMapClientTemplate().update("wodepinglun.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table wodepinglun
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends wodepinglunBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, wodepinglunBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}