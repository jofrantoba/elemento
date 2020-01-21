goog.module('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils.JsImpl$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class JreImpl extends JsImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!JreImpl}
  * @public
  */
 static $create__() {
  JreImpl.$clinit();
  let $instance = new JreImpl();
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JreImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeHtmlHostedModeUtils_JsImpl__();
 }
 /**
  * @param {boolean} completeHtml
  * @param {?string} message
  * @public
  */
 static m_checkArgument__boolean__java_lang_String(completeHtml, message) {
  if (!completeHtml) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String(message));
  }
 }
 /**
  * @public
  */
 static $clinit() {
  JreImpl.$clinit = () =>{};
  JreImpl.$loadModules();
  JsImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof JreImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeHtmlHostedModeUtils$JreImpl');

exports = JreImpl; 
//# sourceMappingURL=SafeHtmlHostedModeUtils$JreImpl.js.map