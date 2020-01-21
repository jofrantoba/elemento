goog.module('org.jboss.elemento.By.ByCombination$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Combinator = goog.forwardDeclare('org.jboss.elemento.By.Combinator$impl');

class ByCombination extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {By} */
  this.f_by1__org_jboss_elemento_By_ByCombination_;
  /** @public {Combinator} */
  this.f_combinator__org_jboss_elemento_By_ByCombination_;
  /** @public {By} */
  this.f_by2__org_jboss_elemento_By_ByCombination_;
 }
 /**
  * @param {By} by1
  * @param {Combinator} combinator
  * @param {By} by2
  * @return {!ByCombination}
  * @public
  */
 static $create__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By(by1, combinator, by2) {
  ByCombination.$clinit();
  let $instance = new ByCombination();
  $instance.$ctor__org_jboss_elemento_By_ByCombination__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By(by1, combinator, by2);
  return $instance;
 }
 /**
  * @param {By} by1
  * @param {Combinator} combinator
  * @param {By} by2
  * @public
  */
 $ctor__org_jboss_elemento_By_ByCombination__org_jboss_elemento_By__org_jboss_elemento_By_Combinator__org_jboss_elemento_By(by1, combinator, by2) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_by1__org_jboss_elemento_By_ByCombination_ = by1;
  this.f_combinator__org_jboss_elemento_By_ByCombination_ = combinator;
  this.f_by2__org_jboss_elemento_By_ByCombination_ = by2;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_jboss_elemento() {
  return j_l_String.m_valueOf__java_lang_Object(this.f_by1__org_jboss_elemento_By_ByCombination_.m_selector___$pp_org_jboss_elemento()) + j_l_String.m_valueOf__java_lang_Object(this.f_combinator__org_jboss_elemento_By_ByCombination_.f_operator__org_jboss_elemento_By_Combinator_) + j_l_String.m_valueOf__java_lang_Object(this.f_by2__org_jboss_elemento_By_ByCombination_.m_selector___$pp_org_jboss_elemento());
 }
 /**
  * @public
  */
 static $clinit() {
  ByCombination.$clinit = () =>{};
  ByCombination.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ByCombination;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ByCombination, 'org.jboss.elemento.By$ByCombination');

exports = ByCombination; 
//# sourceMappingURL=By$ByCombination.js.map