goog.module('org.jboss.elemento.By.BySelector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.jboss.elemento.By$impl');

class BySelector extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 /**
  * @param {?string} selector
  * @return {!BySelector}
  * @public
  */
 static $create__java_lang_String(selector) {
  BySelector.$clinit();
  let $instance = new BySelector();
  $instance.$ctor__org_jboss_elemento_By_BySelector__java_lang_String(selector);
  return $instance;
 }
 /**
  * @param {?string} selector
  * @public
  */
 $ctor__org_jboss_elemento_By_BySelector__java_lang_String(selector) {
  this.$ctor__org_jboss_elemento_By__();
  this.f_selector__org_jboss_elemento_By_BySelector_ = selector;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_jboss_elemento() {
  return this.f_selector__org_jboss_elemento_By_BySelector_;
 }
 /**
  * @public
  */
 static $clinit() {
  BySelector.$clinit = () =>{};
  BySelector.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BySelector;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(BySelector, 'org.jboss.elemento.By$BySelector');

exports = BySelector; 
//# sourceMappingURL=By$BySelector.js.map