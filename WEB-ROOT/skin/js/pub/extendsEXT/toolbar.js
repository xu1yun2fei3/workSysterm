Ext.ux.MyPagingToolbar = Ext.extend(Ext.PagingToolbar, {
			pageSizeMsg : '每页显示条数',
			onRender : function(ct, position) {
				Ext.ux.MyPagingToolbar.superclass.onRender.call(this, ct, position);

				var nowArray = [[10, 10], [15, 15], [18, 18], [20, 20],
						[30, 30], [40, 40], [50, 50], [60, 60], [70, 70],
						[80, 80], [90, 90], [100, 100], [200, 200]];
						
				for (i = 0; i < nowArray.length; i++) {
					if (this.pageSize < nowArray[i][0]) {
						nowArray.push([this.pageSize, this.pageSize]);
						break;
					}
					if (this.pageSize == nowArray[i][0]) {
						break;
					}
					if (i == nowArray.length - 1) {
						nowArray.push([this.pageSize, this.pageSize]);
					}
				}
				var cobm = new Ext.form.ComboBox({
							width : 45,
							height : 18,
							store : new Ext.data.SimpleStore({
										fields : ["key", "value"],
										data : nowArray.sort(function(o1, o2) {
													return o1[0] - o2[0];
												})

									}),
							mode : 'local',
							value : this.pageSize,
							valueField : "key",
							displayField : "value",
							forceSelection : true,
							editable : false,
							triggerAction : 'all',
							listeners : {
								select : {
									fn : this.changePageSize.createDelegate(this)
								}
							}
						});

				cobm.setValue(this.pageSize);

				this.addSeparator();
				this.addText(this.pageSizeMsg);
				this.addField(cobm);
			},
			changePageSize : function(co) {
				this.pageSize = co.getValue();
				this.doLoad(0);
			},
			refreshs : function() {
				this.doLoad(this.cursor);
			}

		});