goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

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
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} html
  * @return {boolean}
  * @public
  */
 m_isCompleteHtml__java_lang_String(html) {
  return true;
 }
 /**
  * @param {?string} html
  * @public
  */
 m_maybeCheckCompleteHtml__java_lang_String(html) {}
 /**
  * @return {boolean}
  * @public
  */
 m_getForceCheckCompleteHtmlFromProperty__() {
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
$Util.$setClassMetadata(JsImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JsImpl');

exports = JsImpl; 
//# sourceMappingURL=SafeHtmlHostedModeUtils$JsImpl.js.map