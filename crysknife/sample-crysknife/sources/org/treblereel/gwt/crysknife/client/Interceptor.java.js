goog.module('org.treblereel.gwt.crysknife.client.Interceptor');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('java.util.function.BiFunction');
goog.require('jsinterop.base.Js');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('org.treblereel.gwt.crysknife.client.Proxy.$Overlay');
goog.require('org.treblereel.gwt.crysknife.client.ProxyGetInterceptor');
goog.require('org.treblereel.gwt.crysknife.client.ProxySetInterceptor');

const Interceptor = goog.require('org.treblereel.gwt.crysknife.client.Interceptor$impl');
exports = Interceptor; 