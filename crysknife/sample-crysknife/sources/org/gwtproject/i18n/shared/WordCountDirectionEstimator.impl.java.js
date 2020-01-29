goog.module('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DirectionEstimator = goog.require('org.gwtproject.i18n.shared.DirectionEstimator$impl');

let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiUtils$impl');

class WordCountDirectionEstimator extends DirectionEstimator {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!WordCountDirectionEstimator}
  * @public
  */
 static $create__() {
  WordCountDirectionEstimator.$clinit();
  let $instance = new WordCountDirectionEstimator();
  $instance.$ctor__org_gwtproject_i18n_shared_WordCountDirectionEstimator__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_WordCountDirectionEstimator__() {
  this.$ctor__org_gwtproject_i18n_shared_DirectionEstimator__();
 }
 /**
  * @return {WordCountDirectionEstimator}
  * @public
  */
 static m_get__() {
  WordCountDirectionEstimator.$clinit();
  return WordCountDirectionEstimator.f_instance__org_gwtproject_i18n_shared_WordCountDirectionEstimator_;
 }
 /**
  * @override
  * @param {?string} str
  * @return {Direction}
  * @public
  */
 m_estimateDirection__java_lang_String(str) {
  return BidiUtils.m_get__().m_estimateDirection__java_lang_String(str);
 }
 /**
  * @public
  */
 static $clinit() {
  WordCountDirectionEstimator.$clinit = () =>{};
  WordCountDirectionEstimator.$loadModules();
  DirectionEstimator.$clinit();
  WordCountDirectionEstimator.f_instance__org_gwtproject_i18n_shared_WordCountDirectionEstimator_ = WordCountDirectionEstimator.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WordCountDirectionEstimator;
 }
 /**
  * @public
  */
 static $loadModules() {
  BidiUtils = goog.module.get('org.gwtproject.i18n.shared.BidiUtils$impl');
 }
 
}
$Util.$setClassMetadata(WordCountDirectionEstimator, 'org.gwtproject.i18n.shared.WordCountDirectionEstimator');

/** @public {WordCountDirectionEstimator} */
WordCountDirectionEstimator.f_instance__org_gwtproject_i18n_shared_WordCountDirectionEstimator_;

exports = WordCountDirectionEstimator; 
//# sourceMappingURL=WordCountDirectionEstimator.js.map