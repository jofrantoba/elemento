goog.module('org.gwtproject.i18n.client.HasDirection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');

/**
 * @interface
 */
class HasDirection {
 /** @abstract */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {}
 /** @abstract @return {Direction} */
 m_getDirection__() {}
 
 static $clinit() {
  HasDirection.$clinit = () =>{};
  HasDirection.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_HasDirection = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_HasDirection;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirection, 'org.gwtproject.i18n.client.HasDirection');

HasDirection.$markImplementor(/** @type {Function} */ (HasDirection));

exports = HasDirection; 
//# sourceMappingURL=HasDirection.js.map