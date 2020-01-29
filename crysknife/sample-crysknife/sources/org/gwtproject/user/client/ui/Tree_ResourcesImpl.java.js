goog.module('org.gwtproject.user.client.ui.Tree_ResourcesImpl');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.user.client.ui.Tree.Resources');
goog.require('java.util.HashMap');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.resources.client.ImageResource');
goog.require('org.gwtproject.resources.client.ResourcePrototype');
goog.require('org.gwtproject.resources.client.impl.ImageResourcePrototype');
goog.require('org.gwtproject.safehtml.shared.UriUtils');
goog.require('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeClosedInitializer');
goog.require('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeLeafInitializer');
goog.require('org.gwtproject.user.client.ui.Tree_ResourcesImpl.treeOpenInitializer');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Tree__ResourcesImpl = goog.require('org.gwtproject.user.client.ui.Tree_ResourcesImpl$impl');
exports = Tree__ResourcesImpl; 