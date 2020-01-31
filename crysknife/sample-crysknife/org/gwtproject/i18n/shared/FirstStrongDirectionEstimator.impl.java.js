goog.module('org.gwtproject.i18n.shared.FirstStrongDirectionEstimator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DirectionEstimator = goog.require('org.gwtproject.i18n.shared.DirectionEstimator$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiUtils$impl');

class FirstStrongDirectionEstimator extends DirectionEstimator {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!FirstStrongDirectionEstimator} */
 static $create__() {
  FirstStrongDirectionEstimator.$clinit();
  let $instance = new FirstStrongDirectionEstimator();
  $instance.$ctor__org_gwtproject_i18n_shared_FirstStrongDirectionEstimator__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_FirstStrongDirectionEstimator__() {
  this.$ctor__org_gwtproject_i18n_shared_DirectionEstimator__();
 }
 /** @return {FirstStrongDirectionEstimator} */
 static m_get__() {
  FirstStrongDirectionEstimator.$clinit();
  return FirstStrongDirectionEstimator.f_instance__org_gwtproject_i18n_shared_FirstStrongDirectionEstimator_;
 }
 /** @override @return {Direction} */
 m_estimateDirection__java_lang_String(/** ?string */ str) {
  return BidiUtils.m_get__().m_startsWithRtl__java_lang_String(str) ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : BidiUtils.m_get__().m_startsWithLtr__java_lang_String(str) ? Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_DEFAULT__org_gwtproject_i18n_client_HasDirection_Direction;
 }
 
 static $clinit() {
  FirstStrongDirectionEstimator.$clinit = () =>{};
  FirstStrongDirectionEstimator.$loadModules();
  DirectionEstimator.$clinit();
  FirstStrongDirectionEstimator.f_instance__org_gwtproject_i18n_shared_FirstStrongDirectionEstimator_ = FirstStrongDirectionEstimator.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FirstStrongDirectionEstimator;
 }
 
 static $loadModules() {
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.shared.BidiUtils$impl');
 }
 
}
$Util.$setClassMetadata(FirstStrongDirectionEstimator, 'org.gwtproject.i18n.shared.FirstStrongDirectionEstimator');

/**@type {FirstStrongDirectionEstimator}*/
FirstStrongDirectionEstimator.f_instance__org_gwtproject_i18n_shared_FirstStrongDirectionEstimator_;

exports = FirstStrongDirectionEstimator; 
//# sourceMappingURL=FirstStrongDirectionEstimator.js.map