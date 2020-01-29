goog.module('org.gwtproject.i18n.shared.AnyRtlDirectionEstimator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DirectionEstimator = goog.require('org.gwtproject.i18n.shared.DirectionEstimator$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiUtils$impl');

class AnyRtlDirectionEstimator extends DirectionEstimator {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!AnyRtlDirectionEstimator}
  * @public
  */
 static $create__() {
  AnyRtlDirectionEstimator.$clinit();
  let $instance = new AnyRtlDirectionEstimator();
  $instance.$ctor__org_gwtproject_i18n_shared_AnyRtlDirectionEstimator__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_AnyRtlDirectionEstimator__() {
  this.$ctor__org_gwtproject_i18n_shared_DirectionEstimator__();
 }
 /**
  * @return {AnyRtlDirectionEstimator}
  * @public
  */
 static m_get__() {
  AnyRtlDirectionEstimator.$clinit();
  return AnyRtlDirectionEstimator.f_instance__org_gwtproject_i18n_shared_AnyRtlDirectionEstimator_;
 }
 /**
  * @override
  * @param {?string} str
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String(str) {
  return BidiUtils.m_get__().m_hasAnyRtl__java_lang_String(str) ? Direction.f_RTL__org_gwtproject_i18n_client_HasDirection_Direction : Direction.f_LTR__org_gwtproject_i18n_client_HasDirection_Direction;
 }
 /**
  * @public
  */
 static $clinit() {
  AnyRtlDirectionEstimator.$clinit = () =>{};
  AnyRtlDirectionEstimator.$loadModules();
  DirectionEstimator.$clinit();
  AnyRtlDirectionEstimator.f_instance__org_gwtproject_i18n_shared_AnyRtlDirectionEstimator_ = AnyRtlDirectionEstimator.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AnyRtlDirectionEstimator;
 }
 /**
  * @public
  */
 static $loadModules() {
  Direction = goog.module.get('org.gwtproject.i18n.client.HasDirection.Direction$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.shared.BidiUtils$impl');
 }
 
}
$Util.$setClassMetadata(AnyRtlDirectionEstimator, 'org.gwtproject.i18n.shared.AnyRtlDirectionEstimator');

/** @public {AnyRtlDirectionEstimator} */
AnyRtlDirectionEstimator.f_instance__org_gwtproject_i18n_shared_AnyRtlDirectionEstimator_;

exports = AnyRtlDirectionEstimator; 
//# sourceMappingURL=AnyRtlDirectionEstimator.js.map