goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class JsImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!JsImpl}
  * @public
  */
 static $create__() {
  let $instance = new JsImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} uri
  * @return {boolean}
  * @public
  */
 m_isValidUri__java_lang_String(uri) {
  return true;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_getForceCheckValieUriFromProperty__() {
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  JsImpl.$clinit = () =>{};
  JsImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof JsImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JsImpl');

exports = JsImpl; 
//# sourceMappingURL=SafeUriHostedModeUtils$JsImpl.js.map