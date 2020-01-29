goog.module('org.gwtproject.touch.client.Momentum$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let State = goog.forwardDeclare('org.gwtproject.touch.client.Momentum.State$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

/**
 * @interface
 */
class Momentum {
 /**
  * @abstract
  * @param {Point} initialPosition
  * @param {Point} initialVelocity
  * @return {State}
  * @public
  */
 m_createState__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(initialPosition, initialVelocity) {}
 /**
  * @abstract
  * @param {State} state
  * @return {boolean}
  * @public
  */
 m_updateState__org_gwtproject_touch_client_Momentum_State(state) {}
 /**
  * @public
  */
 static $clinit() {
  Momentum.$clinit = () =>{};
  Momentum.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_touch_client_Momentum = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_touch_client_Momentum;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Momentum, 'org.gwtproject.touch.client.Momentum');

Momentum.$markImplementor(/** @type {Function} */ (Momentum));

exports = Momentum; 
//# sourceMappingURL=Momentum.js.map