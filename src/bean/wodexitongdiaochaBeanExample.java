package bean;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class wodexitongdiaochaBeanExample {
    /**
     * This field was generated by Apache iBATIS ibator.
     * This field corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    protected String orderByClause;

    /**
     * This field was generated by Apache iBATIS ibator.
     * This field corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public wodexitongdiaochaBeanExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    protected wodexitongdiaochaBeanExample(wodexitongdiaochaBeanExample example) {
        this.orderByClause = example.orderByClause;
        this.oredCriteria = example.oredCriteria;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by Apache iBATIS ibator.
     * This method corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public void clear() {
        oredCriteria.clear();
    }

    /**
     * This class was generated by Apache iBATIS ibator.
     * This class corresponds to the database table wodexitongdiaocha
     *
     * @ibatorgenerated Mon Feb 25 18:31:15 CST 2019
     */
    public static class Criteria {
        protected List<String> criteriaWithoutValue;

        protected List<Map<String, Object>> criteriaWithSingleValue;

        protected List<Map<String, Object>> criteriaWithListValue;

        protected List<Map<String, Object>> criteriaWithBetweenValue;

        protected Criteria() {
            super();
            criteriaWithoutValue = new ArrayList<String>();
            criteriaWithSingleValue = new ArrayList<Map<String, Object>>();
            criteriaWithListValue = new ArrayList<Map<String, Object>>();
            criteriaWithBetweenValue = new ArrayList<Map<String, Object>>();
        }

        public boolean isValid() {
            return criteriaWithoutValue.size() > 0
                || criteriaWithSingleValue.size() > 0
                || criteriaWithListValue.size() > 0
                || criteriaWithBetweenValue.size() > 0;
        }

        public List<String> getCriteriaWithoutValue() {
            return criteriaWithoutValue;
        }

        public List<Map<String, Object>> getCriteriaWithSingleValue() {
            return criteriaWithSingleValue;
        }

        public List<Map<String, Object>> getCriteriaWithListValue() {
            return criteriaWithListValue;
        }

        public List<Map<String, Object>> getCriteriaWithBetweenValue() {
            return criteriaWithBetweenValue;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteriaWithoutValue.add(condition);
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("condition", condition);
            map.put("value", value);
            criteriaWithSingleValue.add(map);
        }

        protected void addCriterion(String condition, List<? extends Object> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("condition", condition);
            map.put("values", values);
            criteriaWithListValue.add(map);
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            List<Object> list = new ArrayList<Object>();
            list.add(value1);
            list.add(value2);
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("condition", condition);
            map.put("values", list);
            criteriaWithBetweenValue.add(map);
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return this;
        }

        public Criteria andDiaochamingchenIsNull() {
            addCriterion("diaochamingchen is null");
            return this;
        }

        public Criteria andDiaochamingchenIsNotNull() {
            addCriterion("diaochamingchen is not null");
            return this;
        }

        public Criteria andDiaochamingchenEqualTo(String value) {
            addCriterion("diaochamingchen =", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenNotEqualTo(String value) {
            addCriterion("diaochamingchen <>", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenGreaterThan(String value) {
            addCriterion("diaochamingchen >", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenGreaterThanOrEqualTo(String value) {
            addCriterion("diaochamingchen >=", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenLessThan(String value) {
            addCriterion("diaochamingchen <", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenLessThanOrEqualTo(String value) {
            addCriterion("diaochamingchen <=", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenLike(String value) {
            addCriterion("diaochamingchen like", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenNotLike(String value) {
            addCriterion("diaochamingchen not like", value, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenIn(List<String> values) {
            addCriterion("diaochamingchen in", values, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenNotIn(List<String> values) {
            addCriterion("diaochamingchen not in", values, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenBetween(String value1, String value2) {
            addCriterion("diaochamingchen between", value1, value2, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochamingchenNotBetween(String value1, String value2) {
            addCriterion("diaochamingchen not between", value1, value2, "diaochamingchen");
            return this;
        }

        public Criteria andDiaochajieguoIsNull() {
            addCriterion("diaochajieguo is null");
            return this;
        }

        public Criteria andDiaochajieguoIsNotNull() {
            addCriterion("diaochajieguo is not null");
            return this;
        }

        public Criteria andDiaochajieguoEqualTo(String value) {
            addCriterion("diaochajieguo =", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoNotEqualTo(String value) {
            addCriterion("diaochajieguo <>", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoGreaterThan(String value) {
            addCriterion("diaochajieguo >", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoGreaterThanOrEqualTo(String value) {
            addCriterion("diaochajieguo >=", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoLessThan(String value) {
            addCriterion("diaochajieguo <", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoLessThanOrEqualTo(String value) {
            addCriterion("diaochajieguo <=", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoLike(String value) {
            addCriterion("diaochajieguo like", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoNotLike(String value) {
            addCriterion("diaochajieguo not like", value, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoIn(List<String> values) {
            addCriterion("diaochajieguo in", values, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoNotIn(List<String> values) {
            addCriterion("diaochajieguo not in", values, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoBetween(String value1, String value2) {
            addCriterion("diaochajieguo between", value1, value2, "diaochajieguo");
            return this;
        }

        public Criteria andDiaochajieguoNotBetween(String value1, String value2) {
            addCriterion("diaochajieguo not between", value1, value2, "diaochajieguo");
            return this;
        }

        public Criteria andTijiaoshijianIsNull() {
            addCriterion("tijiaoshijian is null");
            return this;
        }

        public Criteria andTijiaoshijianIsNotNull() {
            addCriterion("tijiaoshijian is not null");
            return this;
        }

        public Criteria andTijiaoshijianEqualTo(String value) {
            addCriterion("tijiaoshijian =", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianNotEqualTo(String value) {
            addCriterion("tijiaoshijian <>", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianGreaterThan(String value) {
            addCriterion("tijiaoshijian >", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianGreaterThanOrEqualTo(String value) {
            addCriterion("tijiaoshijian >=", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianLessThan(String value) {
            addCriterion("tijiaoshijian <", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianLessThanOrEqualTo(String value) {
            addCriterion("tijiaoshijian <=", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianLike(String value) {
            addCriterion("tijiaoshijian like", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianNotLike(String value) {
            addCriterion("tijiaoshijian not like", value, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianIn(List<String> values) {
            addCriterion("tijiaoshijian in", values, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianNotIn(List<String> values) {
            addCriterion("tijiaoshijian not in", values, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianBetween(String value1, String value2) {
            addCriterion("tijiaoshijian between", value1, value2, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaoshijianNotBetween(String value1, String value2) {
            addCriterion("tijiaoshijian not between", value1, value2, "tijiaoshijian");
            return this;
        }

        public Criteria andTijiaorenIsNull() {
            addCriterion("tijiaoren is null");
            return this;
        }

        public Criteria andTijiaorenIsNotNull() {
            addCriterion("tijiaoren is not null");
            return this;
        }

        public Criteria andTijiaorenEqualTo(String value) {
            addCriterion("tijiaoren =", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenNotEqualTo(String value) {
            addCriterion("tijiaoren <>", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenGreaterThan(String value) {
            addCriterion("tijiaoren >", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenGreaterThanOrEqualTo(String value) {
            addCriterion("tijiaoren >=", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenLessThan(String value) {
            addCriterion("tijiaoren <", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenLessThanOrEqualTo(String value) {
            addCriterion("tijiaoren <=", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenLike(String value) {
            addCriterion("tijiaoren like", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenNotLike(String value) {
            addCriterion("tijiaoren not like", value, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenIn(List<String> values) {
            addCriterion("tijiaoren in", values, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenNotIn(List<String> values) {
            addCriterion("tijiaoren not in", values, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenBetween(String value1, String value2) {
            addCriterion("tijiaoren between", value1, value2, "tijiaoren");
            return this;
        }

        public Criteria andTijiaorenNotBetween(String value1, String value2) {
            addCriterion("tijiaoren not between", value1, value2, "tijiaoren");
            return this;
        }

        public Criteria andOperatoridIsNull() {
            addCriterion("operatorId is null");
            return this;
        }

        public Criteria andOperatoridIsNotNull() {
            addCriterion("operatorId is not null");
            return this;
        }

        public Criteria andOperatoridEqualTo(String value) {
            addCriterion("operatorId =", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridNotEqualTo(String value) {
            addCriterion("operatorId <>", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridGreaterThan(String value) {
            addCriterion("operatorId >", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridGreaterThanOrEqualTo(String value) {
            addCriterion("operatorId >=", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridLessThan(String value) {
            addCriterion("operatorId <", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridLessThanOrEqualTo(String value) {
            addCriterion("operatorId <=", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridLike(String value) {
            addCriterion("operatorId like", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridNotLike(String value) {
            addCriterion("operatorId not like", value, "operatorid");
            return this;
        }

        public Criteria andOperatoridIn(List<String> values) {
            addCriterion("operatorId in", values, "operatorid");
            return this;
        }

        public Criteria andOperatoridNotIn(List<String> values) {
            addCriterion("operatorId not in", values, "operatorid");
            return this;
        }

        public Criteria andOperatoridBetween(String value1, String value2) {
            addCriterion("operatorId between", value1, value2, "operatorid");
            return this;
        }

        public Criteria andOperatoridNotBetween(String value1, String value2) {
            addCriterion("operatorId not between", value1, value2, "operatorid");
            return this;
        }

        public Criteria andItimeIsNull() {
            addCriterion("itime is null");
            return this;
        }

        public Criteria andItimeIsNotNull() {
            addCriterion("itime is not null");
            return this;
        }

        public Criteria andItimeEqualTo(String value) {
            addCriterion("itime =", value, "itime");
            return this;
        }

        public Criteria andItimeNotEqualTo(String value) {
            addCriterion("itime <>", value, "itime");
            return this;
        }

        public Criteria andItimeGreaterThan(String value) {
            addCriterion("itime >", value, "itime");
            return this;
        }

        public Criteria andItimeGreaterThanOrEqualTo(String value) {
            addCriterion("itime >=", value, "itime");
            return this;
        }

        public Criteria andItimeLessThan(String value) {
            addCriterion("itime <", value, "itime");
            return this;
        }

        public Criteria andItimeLessThanOrEqualTo(String value) {
            addCriterion("itime <=", value, "itime");
            return this;
        }

        public Criteria andItimeLike(String value) {
            addCriterion("itime like", value, "itime");
            return this;
        }

        public Criteria andItimeNotLike(String value) {
            addCriterion("itime not like", value, "itime");
            return this;
        }

        public Criteria andItimeIn(List<String> values) {
            addCriterion("itime in", values, "itime");
            return this;
        }

        public Criteria andItimeNotIn(List<String> values) {
            addCriterion("itime not in", values, "itime");
            return this;
        }

        public Criteria andItimeBetween(String value1, String value2) {
            addCriterion("itime between", value1, value2, "itime");
            return this;
        }

        public Criteria andItimeNotBetween(String value1, String value2) {
            addCriterion("itime not between", value1, value2, "itime");
            return this;
        }

        public Criteria andDetailIsNull() {
            addCriterion("detail is null");
            return this;
        }

        public Criteria andDetailIsNotNull() {
            addCriterion("detail is not null");
            return this;
        }

        public Criteria andDetailEqualTo(String value) {
            addCriterion("detail =", value, "detail");
            return this;
        }

        public Criteria andDetailNotEqualTo(String value) {
            addCriterion("detail <>", value, "detail");
            return this;
        }

        public Criteria andDetailGreaterThan(String value) {
            addCriterion("detail >", value, "detail");
            return this;
        }

        public Criteria andDetailGreaterThanOrEqualTo(String value) {
            addCriterion("detail >=", value, "detail");
            return this;
        }

        public Criteria andDetailLessThan(String value) {
            addCriterion("detail <", value, "detail");
            return this;
        }

        public Criteria andDetailLessThanOrEqualTo(String value) {
            addCriterion("detail <=", value, "detail");
            return this;
        }

        public Criteria andDetailLike(String value) {
            addCriterion("detail like", value, "detail");
            return this;
        }

        public Criteria andDetailNotLike(String value) {
            addCriterion("detail not like", value, "detail");
            return this;
        }

        public Criteria andDetailIn(List<String> values) {
            addCriterion("detail in", values, "detail");
            return this;
        }

        public Criteria andDetailNotIn(List<String> values) {
            addCriterion("detail not in", values, "detail");
            return this;
        }

        public Criteria andDetailBetween(String value1, String value2) {
            addCriterion("detail between", value1, value2, "detail");
            return this;
        }

        public Criteria andDetailNotBetween(String value1, String value2) {
            addCriterion("detail not between", value1, value2, "detail");
            return this;
        }

        public Criteria andDeleteflagIsNull() {
            addCriterion("deleteFlag is null");
            return this;
        }

        public Criteria andDeleteflagIsNotNull() {
            addCriterion("deleteFlag is not null");
            return this;
        }

        public Criteria andDeleteflagEqualTo(Integer value) {
            addCriterion("deleteFlag =", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagNotEqualTo(Integer value) {
            addCriterion("deleteFlag <>", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagGreaterThan(Integer value) {
            addCriterion("deleteFlag >", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagGreaterThanOrEqualTo(Integer value) {
            addCriterion("deleteFlag >=", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagLessThan(Integer value) {
            addCriterion("deleteFlag <", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagLessThanOrEqualTo(Integer value) {
            addCriterion("deleteFlag <=", value, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagIn(List<Integer> values) {
            addCriterion("deleteFlag in", values, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagNotIn(List<Integer> values) {
            addCriterion("deleteFlag not in", values, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagBetween(Integer value1, Integer value2) {
            addCriterion("deleteFlag between", value1, value2, "deleteflag");
            return this;
        }

        public Criteria andDeleteflagNotBetween(Integer value1, Integer value2) {
            addCriterion("deleteFlag not between", value1, value2, "deleteflag");
            return this;
        }

        public Criteria andErjiguanlianzdIsNull() {
            addCriterion("erjiguanlianzd is null");
            return this;
        }

        public Criteria andErjiguanlianzdIsNotNull() {
            addCriterion("erjiguanlianzd is not null");
            return this;
        }

        public Criteria andErjiguanlianzdEqualTo(String value) {
            addCriterion("erjiguanlianzd =", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdNotEqualTo(String value) {
            addCriterion("erjiguanlianzd <>", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdGreaterThan(String value) {
            addCriterion("erjiguanlianzd >", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdGreaterThanOrEqualTo(String value) {
            addCriterion("erjiguanlianzd >=", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdLessThan(String value) {
            addCriterion("erjiguanlianzd <", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdLessThanOrEqualTo(String value) {
            addCriterion("erjiguanlianzd <=", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdLike(String value) {
            addCriterion("erjiguanlianzd like", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdNotLike(String value) {
            addCriterion("erjiguanlianzd not like", value, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdIn(List<String> values) {
            addCriterion("erjiguanlianzd in", values, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdNotIn(List<String> values) {
            addCriterion("erjiguanlianzd not in", values, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdBetween(String value1, String value2) {
            addCriterion("erjiguanlianzd between", value1, value2, "erjiguanlianzd");
            return this;
        }

        public Criteria andErjiguanlianzdNotBetween(String value1, String value2) {
            addCriterion("erjiguanlianzd not between", value1, value2, "erjiguanlianzd");
            return this;
        }
    }
}