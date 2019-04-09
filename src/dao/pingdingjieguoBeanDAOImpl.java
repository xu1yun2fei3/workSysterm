package dao;

import bean.pingdingjieguoBean;
import bean.pingdingjieguoBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class pingdingjieguoBeanDAOImpl extends SqlMapClientDaoSupport implements pingdingjieguoBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public pingdingjieguoBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(pingdingjieguoBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("pingdingjieguo.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(pingdingjieguoBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("pingdingjieguo.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        pingdingjieguoBean key = new pingdingjieguoBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("pingdingjieguo.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(pingdingjieguoBean record) {
        getSqlMapClientTemplate().insert("pingdingjieguo.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(pingdingjieguoBean record) {
        getSqlMapClientTemplate().insert("pingdingjieguo.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<pingdingjieguoBean> selectByExample(pingdingjieguoBeanExample example) {
        List<pingdingjieguoBean> list = getSqlMapClientTemplate().queryForList("pingdingjieguo.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public pingdingjieguoBean selectByPrimaryKey(Integer id) {
        pingdingjieguoBean key = new pingdingjieguoBean();
        key.setId(id);
        pingdingjieguoBean record = (pingdingjieguoBean) getSqlMapClientTemplate().queryForObject("pingdingjieguo.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(pingdingjieguoBean record, pingdingjieguoBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("pingdingjieguo.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(pingdingjieguoBean record, pingdingjieguoBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("pingdingjieguo.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(pingdingjieguoBean record) {
        int rows = getSqlMapClientTemplate().update("pingdingjieguo.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(pingdingjieguoBean record) {
        int rows = getSqlMapClientTemplate().update("pingdingjieguo.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table pingdingjieguo
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends pingdingjieguoBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, pingdingjieguoBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}