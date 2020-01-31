goog.module('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');

/**
 * @interface
 */
class HasDirectionEstimator {
 /** @abstract @return {DirectionEstimator} */
 m_getDirectionEstimator__() {}
 /** @abstract */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {}
 /** @abstract */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {}
 
 static $clinit() {
  HasDirectionEstimator.$clinit = () =>{};
  HasDirectionEstimator.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_HasDirectionEstimator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_HasDirectionEstimator;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasDirectionEstimator, 'org.gwtproject.i18n.shared.HasDirectionEstimator');

HasDirectionEstimator.$markImplementor(/** @type {Function} */ (HasDirectionEstimator));

exports = HasDirectionEstimator; 
//# sourceMappingURL=HasDirectionEstimator.js.map