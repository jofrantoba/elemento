goog.module('org.gwtproject.user.client.ui.HasConstrainedValue$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let Collection = goog.forwardDeclare('java.util.Collection$impl');

/**
 * @interface
 * @template T
 * @extends {HasValue<T>}
 */
class HasConstrainedValue {
 /**
  * @abstract
  * @param {Collection<T>} values
  * @public
  */
 m_setAcceptableValues__java_util_Collection(values) {}
 /**
  * @public
  */
 static $clinit() {
  HasConstrainedValue.$clinit = () =>{};
  HasConstrainedValue.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  HasValue.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_HasConstrainedValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasConstrainedValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasConstrainedValue, 'org.gwtproject.user.client.ui.HasConstrainedValue');

HasConstrainedValue.$markImplementor(/** @type {Function} */ (HasConstrainedValue));

exports = HasConstrainedValue; 
//# sourceMappingURL=HasConstrainedValue.js.map