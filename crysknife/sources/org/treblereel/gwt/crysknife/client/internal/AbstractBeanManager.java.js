goog.module('org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('org.treblereel.gwt.crysknife.client.BeanManager');
goog.require('java.lang.Class');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('javax.enterprise.inject.Default');
goog.require('javax.inject.Provider');
goog.require('org.treblereel.gwt.crysknife.client.Instance');
goog.require('org.treblereel.gwt.crysknife.client.internal.InstanceImpl');
goog.require('vmbootstrap.Casts');

const AbstractBeanManager = goog.require('org.treblereel.gwt.crysknife.client.internal.AbstractBeanManager$impl');
exports = AbstractBeanManager; 