package dao;

import bean.bumenxinxiBean;
import bean.bumenxinxiBeanExample;
import java.util.List;
import org.springframework.orm.ibatis.support.SqlMapClientDaoSupport;

public class bumenxinxiBeanDAOImpl extends SqlMapClientDaoSupport implements bumenxinxiBeanDAO {

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public bumenxinxiBeanDAOImpl() {
        super();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int countByExample(bumenxinxiBeanExample example) {
        Integer count = (Integer)  getSqlMapClientTemplate().queryForObject("bumenxinxi.ibatorgenerated_countByExample", example);
        return count;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByExample(bumenxinxiBeanExample example) {
        int rows = getSqlMapClientTemplate().delete("bumenxinxi.ibatorgenerated_deleteByExample", example);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int deleteByPrimaryKey(Integer id) {
        bumenxinxiBean key = new bumenxinxiBean();
        key.setId(id);
        int rows = getSqlMapClientTemplate().delete("bumenxinxi.ibatorgenerated_deleteByPrimaryKey", key);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insert(bumenxinxiBean record) {
        getSqlMapClientTemplate().insert("bumenxinxi.ibatorgenerated_insert", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void insertSelective(bumenxinxiBean record) {
        getSqlMapClientTemplate().insert("bumenxinxi.ibatorgenerated_insertSelective", record);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    @SuppressWarnings("unchecked")
    public List<bumenxinxiBean> selectByExample(bumenxinxiBeanExample example) {
        List<bumenxinxiBean> list = getSqlMapClientTemplate().queryForList("bumenxinxi.ibatorgenerated_selectByExample", example);
        return list;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public bumenxinxiBean selectByPrimaryKey(Integer id) {
        bumenxinxiBean key = new bumenxinxiBean();
        key.setId(id);
        bumenxinxiBean record = (bumenxinxiBean) getSqlMapClientTemplate().queryForObject("bumenxinxi.ibatorgenerated_selectByPrimaryKey", key);
        return record;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExampleSelective(bumenxinxiBean record, bumenxinxiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("bumenxinxi.ibatorgenerated_updateByExampleSelective", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByExample(bumenxinxiBean record, bumenxinxiBeanExample example) {
        UpdateByExampleParms parms = new UpdateByExampleParms(record, example);
        int rows = getSqlMapClientTemplate().update("bumenxinxi.ibatorgenerated_updateByExample", parms);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKeySelective(bumenxinxiBean record) {
        int rows = getSqlMapClientTemplate().update("bumenxinxi.ibatorgenerated_updateByPrimaryKeySelective", record);
        return rows;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public int updateByPrimaryKey(bumenxinxiBean record) {
        int rows = getSqlMapClientTemplate().update("bumenxinxi.ibatorgenerated_updateByPrimaryKey", record);
        return rows;
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table bumenxinxi
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    private static class UpdateByExampleParms extends bumenxinxiBeanExample {
        private Object record;

        public UpdateByExampleParms(Object record, bumenxinxiBeanExample example) {
            super(example);
            this.record = record;
        }

        public Object getRecord() {
            return record;
        }
    }
}