goog.module('org.gwtproject.user.client.ui.HasValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValueChangeHandlers = goog.require('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');
const TakesValue = goog.require('org.gwtproject.user.client.TakesValue$impl');

/**
 * @interface
 * @template T
 * @extends {TakesValue<T>}
 * @extends {HasValueChangeHandlers<T>}
 */
class HasValue {
 /** @abstract @override @return {T} */
 m_getValue__() {}
 /** @abstract @override */
 m_setValue__java_lang_Object(/** T */ value) {}
 /** @abstract */
 m_setValue__java_lang_Object__boolean(/** T */ value, /** boolean */ fireEvents) {}
 
 static $clinit() {
  HasValue.$clinit = () =>{};
  HasValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  TakesValue.$markImplementor(ctor);
  HasValueChangeHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasValue, 'org.gwtproject.user.client.ui.HasValue');

HasValue.$markImplementor(/** @type {Function} */ (HasValue));

exports = HasValue; 
//# sourceMappingURL=HasValue.js.map