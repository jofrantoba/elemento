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
 /** @abstract */
 m_setAcceptableValues__java_util_Collection(/** Collection<T> */ values) {}
 
 static $clinit() {
  HasConstrainedValue.$clinit = () =>{};
  HasConstrainedValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasValue.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_HasConstrainedValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_HasConstrainedValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasConstrainedValue, 'org.gwtproject.user.client.ui.HasConstrainedValue');

HasConstrainedValue.$markImplementor(/** @type {Function} */ (HasConstrainedValue));

exports = HasConstrainedValue; 
//# sourceMappingURL=HasConstrainedValue.js.map