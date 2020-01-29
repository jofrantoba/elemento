goog.module('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JreImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const JsImpl = goog.require('org.gwtproject.safehtml.shared.SafeUriHostedModeUtils.JsImpl$impl');

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
  $instance.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JreImpl__() {
  this.$ctor__org_gwtproject_safehtml_shared_SafeUriHostedModeUtils_JsImpl__();
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JreImpl, 'org.gwtproject.safehtml.shared.SafeUriHostedModeUtils$JreImpl');

exports = JreImpl; 
//# sourceMappingURL=SafeUriHostedModeUtils$JreImpl.js.map