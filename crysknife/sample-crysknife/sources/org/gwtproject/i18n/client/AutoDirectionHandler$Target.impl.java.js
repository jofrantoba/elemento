goog.module('org.gwtproject.i18n.client.AutoDirectionHandler.Target$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasKeyUpHandlers = goog.require('org.gwtproject.event.dom.client.HasKeyUpHandlers$impl');
const HasDirection = goog.require('org.gwtproject.i18n.client.HasDirection$impl');

/**
 * @interface
 * @extends {HasDirection}
 * @extends {HasKeyUpHandlers}
 */
class Target {
 /** @abstract @return {?string} */
 m_getText__() {}
 /** @abstract */
 m_setText__java_lang_String(/** ?string */ text) {}
 
 static $clinit() {
  Target.$clinit = () =>{};
  Target.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasDirection.$markImplementor(ctor);
  HasKeyUpHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_AutoDirectionHandler_Target = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_AutoDirectionHandler_Target;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Target, 'org.gwtproject.i18n.client.AutoDirectionHandler$Target');

Target.$markImplementor(/** @type {Function} */ (Target));

exports = Target; 
//# sourceMappingURL=AutoDirectionHandler$Target.js.map