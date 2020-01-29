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
 /**
  * @abstract
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {}
 /**
  * @abstract
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {}
 /**
  * @abstract
  * @param {T} value
  * @param {boolean} fireEvents
  * @public
  */
 m_setValue__java_lang_Object__boolean(value, fireEvents) {}
 /**
  * @public
  */
 static $clinit() {
  HasValue.$clinit = () =>{};
  HasValue.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  TakesValue.$markImplementor(classConstructor);
  HasValueChangeHandlers.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasValue, 'org.gwtproject.user.client.ui.HasValue');

HasValue.$markImplementor(/** @type {Function} */ (HasValue));

exports = HasValue; 
//# sourceMappingURL=HasValue.js.map