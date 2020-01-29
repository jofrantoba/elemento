goog.module('org.gwtproject.user.cellview.client.ColumnSortList');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.lang.IllegalArgumentException');
goog.require('java.lang.IndexOutOfBoundsException');
goog.require('java.util.ArrayList');
goog.require('java.util.List');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.user.cellview.client.Column');
goog.require('org.gwtproject.user.cellview.client.ColumnSortList.ColumnSortInfo');
goog.require('org.gwtproject.user.cellview.client.ColumnSortList.Delegate');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');
goog.require('vmbootstrap.Objects');

const ColumnSortList = goog.require('org.gwtproject.user.cellview.client.ColumnSortList$impl');
exports = ColumnSortList; 