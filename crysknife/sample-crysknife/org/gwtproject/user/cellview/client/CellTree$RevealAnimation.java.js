goog.module('org.gwtproject.user.cellview.client.CellTree.RevealAnimation');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.cellview.client.CellTree.NodeAnimation');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.style.shared.Display');
goog.require('org.gwtproject.dom.style.shared.Overflow');
goog.require('org.gwtproject.dom.style.shared.Position');
goog.require('org.gwtproject.dom.style.shared.Unit');
goog.require('org.gwtproject.user.cellview.client.CellTreeNodeView');
goog.require('vmbootstrap.Primitives');

const RevealAnimation = goog.require('org.gwtproject.user.cellview.client.CellTree.RevealAnimation$impl');
exports = RevealAnimation; 