UserCombo = Ext.extend(Ext.form.ComboBox, {
	/*
			 * 默认值
			 */
			name : 'emp_name',// 显示的文本框的name
			hiddenName : 'emp_no',// 隐藏域name,存放服务器返回的员工编号
			hiddenNameTmp : 'emp_name_tmp',// 隐藏域name,存放服务器返回的员工姓名

			/* store查询用 */
			queryParam : 'emp_name',
			queryDelay : 220,
			hideTrigger : true,
			loadingText : '搜索..',
			pageSize : 20,
			valueField : 'emp_no',
			displayField : 'emp_name',
			typeAhead : false,
			minChars : 2,
			anchor : '90%',
			url:'index.do?type=getEmpTree',

			initComponent : function() {
				UserCombo.superclass.initComponent.call(this);
				this.store = new Ext.data.JsonStore({
							//parent : this,
							root : 'root',
							totalProperty : 'totalProperty',
							proxy : new Ext.data.HttpProxy({
										url : GLOBAL_APP_NAME + '/WEB-ROOT/app/util/ext/userCombo.do',
										method : 'POST'
									}),
							baseParams : {
								flag : 'getAllUserList'
							},
							reader : new Ext.data.JsonReader([{
												name : 'id',
												mapping : 'ID'
											}, {
												name : 'userName',
												mapping : 'USERNAME'
											}])
						})
			},

			onRender : function(ct, position) {
				Ext.form.ComboBox.superclass.onRender.call(this, ct, position);
				if (this.hiddenName) {
					this.hiddenField = this.el.insertSibling({
						tag : 'input',
						type : 'hidden',
						name : this.hiddenName
							// ,id: (this.hiddenId||this.hiddenName)
						}, 'before', true);
					// 增加一个隐藏域存放服务返回的人员名称,用于验证输入的员工是否是系统中员工
					this.hiddenFieldTmp = this.el.insertSibling({
						tag : 'input',
						type : 'hidden',
						name : this.hiddenNameTmp
							// ,id: (this.hiddenId||this.hiddenNameTmp)
						}, 'before', true);

					// prevent input submission
					// this.el.dom.removeAttribute('name');//保留显示文本域的name使其能提交到后台
				}
				if (Ext.isGecko) {
					this.el.dom.setAttribute('autocomplete', 'off');
				}

				if (!this.lazyInit) {
					this.initList();
				} else {
					this.on('focus', this.initList, this, {
								single : true
							});
				}

				if (!this.editable) {
					this.editable = true;
					this.setEditable(false);
				}
			},

			// private
			initEvents : function() {
				Ext.form.ComboBox.superclass.initEvents.call(this);

				this.keyNav = new Ext.KeyNav(this.el, {
							"up" : function(e) {
								this.inKeyMode = true;
								this.selectPrev();
							},

							"down" : function(e) {
								if (!this.isExpanded()) {
									this.onTriggerClick();
								} else {
									this.inKeyMode = true;
									this.selectNext();
								}
							},

							"enter" : function(e) {
								this.onViewClick();
								this.delayedCheck = true;
								this.unsetDelayCheck.defer(10, this);
							},

							"esc" : function(e) {
								this.collapse();
							},

							"tab" : function(e) {
								this.onViewClick(false);
								return true;
							},

							scope : this,

							doRelay : function(foo, bar, hname) {
								if (hname == 'down' || this.scope.isExpanded()) {
									return Ext.KeyNav.prototype.doRelay.apply(
											this, arguments);
								}
								return true;
							},

							forceKeyDown : true
						});
				this.queryDelay = Math.max(this.queryDelay || 10,
						this.mode == 'local' ? 10 : 250);
				this.dqTask = new Ext.util.DelayedTask(this.initQuery, this);
				if (this.typeAhead) {
					this.taTask = new Ext.util.DelayedTask(this.onTypeAhead,
							this);
				}
				if (this.editable !== false) {
					this.el.on("keyup", this.onKeyUp, this);
				}

				this.on('blur', this.checkData, this);// 失去焦点时进行数据验证
			},

			// 数据加载完成后会调用
			onLoad : function() {
				if (!this.hasFocus) {
					return;
				}
				if (this.store.getCount() > 0) {
					this.expand();
					this.restrictHeight();
					if (this.lastQuery == this.allQuery) {
						if (this.editable) {
							this.el.dom.select();
						}
						if (!this.selectByValue(this.value, true)) {
							this.select(0, true);
						}
					} else {
						this.selectNext();
						if (this.typeAhead
								&& this.lastKey != Ext.EventObject.BACKSPACE
								&& this.lastKey != Ext.EventObject.DELETE) {
							this.taTask.delay(this.typeAheadDelay);
						}
					}
				} else {
					this.onEmptyResults();
				}

				// 如果只有一条记录就隐藏选择列表,并直接设置值
				if (this.store.getCount() == 1) {
					this.list.hide();

					var _record = this.store.getAt(0);
					this.value = _record.data.emp_name;
					this.el.dom.value = _record.data.emp_name;
					this.hiddenField.value = _record.data.emp_no;
					this.hiddenFieldTmp.value = _record.data.emp_name;

					// 触发事件
					this.fireEvent('select', this, _record, 0);
				}

				this.list.setWidth(200);
				this.innerList.setWidth(200 - this.list.getFrameWidth('lr'));

				// this.el.focus();
			},

			doQuery : function(q, forceAll) {
				if (q === undefined || q === null) {
					q = '';
				}
				var qe = {
					query : q,
					forceAll : forceAll,
					combo : this,
					cancel : false
				};
				if (this.fireEvent('beforequery', qe) === false || qe.cancel) {
					return false;
				}
				q = qe.query;
				forceAll = qe.forceAll;
				// 修改判断中文长度
				if (forceAll === true
						|| (q.replace(/[^\x00-\xff]/g, "**").length >= this.minChars)) {
					if (this.lastQuery !== q) {
						this.lastQuery = q;
						if (this.mode == 'local') {
							this.selectedIndex = -1;
							if (forceAll) {
								this.store.clearFilter();
							} else {
								this.store.filter(this.displayField, q);
							}
							this.onLoad();
						} else {
							this.store.baseParams[this.queryParam] = q;
							this.store.load({
										params : {
											userAcct : q
										}
									});
							this.expand();
						}
					} else {
						this.selectedIndex = -1;
						this.onLoad();
					}
				}
			},

			// 选择数据后写入值到显示和隐藏域
			select : function(combo, record, index) {
				if (combo.el) {
					var emp_name = Ext.query("input[name='" + this.id + "']",
							combo.el.dom.parentNode)[0];
					var emp_no = Ext.query("input[name='" + this.hiddenName
									+ "']", combo.el.dom.parentNode)[0];
					var emp_name_tmp = Ext.query("input[name='"
									+ this.hiddenNameTmp + "']",
							combo.el.parentNode)[0];

					emp_name.value = record.data.emp_name;
					emp_no.value = record.data.emp_no;
					emp_name_tmp.value = record.data.emp_name;
				}
				// alert("emp_name.value="+emp_name.value+"
				// emp_no.value="+emp_no.value+"
				// emp_name_tmp.value="+emp_name_tmp.value);
			},

			// private
			checkData : function() {
				// 输入的数据和服务返回的数据不一样
				if (this.hiddenFieldTmp.value != this.el.dom.value) {
					this.el.dom.value = "";
					this.hiddenField.value = "";
					this.hiddenFieldTmp.value = "";
				}
			},

			// 重载设置值方法
			setValue : function(v) {
				var text = v;
				if (this.valueField) {
					var r = this.findRecord(this.valueField, v);
					if (r) {
						text = r.data[this.displayField];
					} else if (this.valueNotFoundText !== undefined) {
						text = this.valueNotFoundText;
					}
				}
				this.lastSelectionText = text;
				if (this.hiddenField) {
					this.hiddenField.value = v;
				}
				if (this.hiddenFieldTmp) {
					this.hiddenFieldTmp.value = text;
				}
				Ext.form.ComboBox.superclass.setValue.call(this, text);
				this.value = v;
			},

			// 添加一个方法给编辑设置用
			setData : function(emp_no, emp_name) {
				this.setValue(emp_name);
				this.value = emp_name;
				this.el.dom.value = emp_name;
				this.hiddenField.value = emp_no;
				this.hiddenFieldTmp.value = emp_name;
			}

		});

Ext.reg('UserCombo', UserCombo);