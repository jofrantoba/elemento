goog.module('org.gwtproject.i18n.shared.DirectionEstimator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiUtils$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @abstract
  */
class DirectionEstimator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_DirectionEstimator__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @param {?string} str
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String(str) {}
 /**
  * @param {?string} str
  * @param {boolean} isHtml
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String__boolean(str, isHtml) {
  return this.m_estimateDirection__java_lang_String(BidiUtils.m_get__().m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(str, isHtml));
 }
 /**
  * @param {SafeHtml} html
  * @return {Direction}
  * @public
  */
 m_estimateDirection__org_gwtproject_safehtml_shared_SafeHtml(html) {
  return this.m_estimateDirection__java_lang_String(BidiUtils.m_get__().m_stripHtmlIfNeeded__java_lang_String__boolean_$pp_org_gwtproject_i18n_shared(html.m_asString__(), true));
 }
 /**
  * @public
  */
 static $clinit() {
  DirectionEstimator.$clinit = () =>{};
  DirectionEstimator.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DirectionEstimator;
 }
 /**
  * @public
  */
 static $loadModules() {
  BidiUtils = goog.module.get('org.gwtproject.i18n.shared.BidiUtils$impl');
 }
 
}
$Util.$setClassMetadata(DirectionEstimator, 'org.gwtproject.i18n.shared.DirectionEstimator');

exports = DirectionEstimator; 
//# sourceMappingURL=DirectionEstimator.js.map