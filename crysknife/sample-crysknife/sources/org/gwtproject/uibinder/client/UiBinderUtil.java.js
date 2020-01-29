goog.module('org.gwtproject.uibinder.client.UiBinderUtil');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.client.Style.Display');
goog.require('org.gwtproject.uibinder.client.UiBinderUtil.TempAttachment');

const UiBinderUtil = goog.require('org.gwtproject.uibinder.client.UiBinderUtil$impl');
exports = UiBinderUtil; 