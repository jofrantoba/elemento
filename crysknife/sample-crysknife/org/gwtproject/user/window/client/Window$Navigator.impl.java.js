goog.module('org.gwtproject.user.window.client.Window.Navigator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Cookies = goog.forwardDeclare('org.gwtproject.user.window.client.Cookies$impl');

class Window_Navigator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getAppCodeName__() {
  Window_Navigator.$clinit();
  return window.window.navigator.appCodeName;
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getAppName__() {
  Window_Navigator.$clinit();
  return window.window.navigator.appName;
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getAppVersion__() {
  Window_Navigator.$clinit();
  return window.window.navigator.appVersion;
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getPlatform__() {
  Window_Navigator.$clinit();
  return window.window.navigator.platform;
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getUserAgent__() {
  Window_Navigator.$clinit();
  return window.window.navigator.userAgent;
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isCookieEnabled__() {
  Window_Navigator.$clinit();
  return Cookies.m_isCookieEnabled__();
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isJavaEnabled__() {
  Window_Navigator.$clinit();
  return window.window.navigator.javaEnabled();
 }
 /**
  * @return {!Window_Navigator}
  * @public
  */
 static $create__() {
  let $instance = new Window_Navigator();
  $instance.$ctor__org_gwtproject_user_window_client_Window_Navigator__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window_Navigator__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  Window_Navigator.$clinit = () =>{};
  Window_Navigator.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Window_Navigator;
 }
 /**
  * @public
  */
 static $loadModules() {
  Cookies = goog.module.get('org.gwtproject.user.window.client.Cookies$impl');
 }
 
}
$Util.$setClassMetadata(Window_Navigator, 'org.gwtproject.user.window.client.Window$Navigator');

exports = Window_Navigator; 
//# sourceMappingURL=Window$Navigator.js.map