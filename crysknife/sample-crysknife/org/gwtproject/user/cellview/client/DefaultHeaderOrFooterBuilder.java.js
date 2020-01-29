goog.module('org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.cellview.client.AbstractHeaderOrFooterBuilder');
goog.require('java.lang.String');
goog.require('java.lang.StringBuilder');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.cell.client.Cell.Context');
goog.require('org.gwtproject.dom.builder.shared.TableCellBuilder');
goog.require('org.gwtproject.dom.builder.shared.TableRowBuilder');
goog.require('org.gwtproject.user.cellview.client.AbstractCellTable');
goog.require('org.gwtproject.user.cellview.client.Column');
goog.require('org.gwtproject.user.cellview.client.Header');
goog.require('vmbootstrap.Casts');

const DefaultHeaderOrFooterBuilder = goog.require('org.gwtproject.user.cellview.client.DefaultHeaderOrFooterBuilder$impl');
exports = DefaultHeaderOrFooterBuilder; 