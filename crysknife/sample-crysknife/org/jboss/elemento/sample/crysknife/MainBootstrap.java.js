goog.module('org.jboss.elemento.sample.crysknife.MainBootstrap');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('goog.reflect');
goog.require('java.lang.Class');
goog.require('java.util.function.Supplier');
goog.require('org.jboss.elemento.sample.crysknife.ApplicationElement');
goog.require('org.jboss.elemento.sample.crysknife.FooterElement');
goog.require('org.jboss.elemento.sample.crysknife.Main');
goog.require('org.jboss.elemento.sample.crysknife.MainInfo');
goog.require('org.jboss.elemento.sample.crysknife.TodoRepository');
goog.require('org.treblereel.gwt.crysknife.client.BeanManagerImpl');
goog.require('org.treblereel.gwt.crysknife.client.Instance');
goog.require('org.treblereel.gwt.crysknife.client.Interceptor');
goog.require('org.treblereel.gwt.crysknife.client.internal.OnFieldAccessed');
goog.require('vmbootstrap.Casts');

const MainBootstrap = goog.require('org.jboss.elemento.sample.crysknife.MainBootstrap$impl');
exports = MainBootstrap; 