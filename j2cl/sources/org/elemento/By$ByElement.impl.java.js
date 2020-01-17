goog.module('org.elemento.By.ByElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.elemento.By$impl');

class ByElement extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_element__org_elemento_By_ByElement_;
 }
 /**
  * @param {?string} element
  * @return {!ByElement}
  * @public
  */
 static $create__java_lang_String(element) {
  ByElement.$clinit();
  let $instance = new ByElement();
  $instance.$ctor__org_elemento_By_ByElement__java_lang_String(element);
  return $instance;
 }
 /**
  * @param {?string} element
  * @public
  */
 $ctor__org_elemento_By_ByElement__java_lang_String(element) {
  this.$ctor__org_elemento_By__();
  this.f_element__org_elemento_By_ByElement_ = element;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_elemento() {
  return this.f_element__org_elemento_By_ByElement_;
 }
 /**
  * @public
  */
 static $clinit() {
  ByElement.$clinit = () =>{};
  ByElement.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ByElement;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(ByElement, 'org.elemento.By$ByElement');

exports = ByElement; 
//# sourceMappingURL=By$ByElement.js.map