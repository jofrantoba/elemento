goog.module('org.elemento.By.ByData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ByAttribute = goog.require('org.elemento.By.ByAttribute$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let AttributeOperator = goog.forwardDeclare('org.elemento.By.AttributeOperator$impl');

class ByData extends ByAttribute {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} str
  * @return {?string}
  * @public
  */
 static m_camelToKebabCase__java_lang_String(str) {
  return j_l_String.m_toLowerCase__java_lang_String(j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(str, "([a-z0-9]|(?=[A-Z]))([A-Z])", "$1-$2"));
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} attributeOperator
  * @param {?string} value
  * @return {!ByData}
  * @public
  */
 static $create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, attributeOperator, value) {
  ByData.$clinit();
  let $instance = new ByData();
  $instance.$ctor__org_elemento_By_ByData__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, attributeOperator, value);
  return $instance;
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} attributeOperator
  * @param {?string} value
  * @public
  */
 $ctor__org_elemento_By_ByData__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, attributeOperator, value) {
  this.$ctor__org_elemento_By_ByAttribute__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String("data-" + j_l_String.m_valueOf__java_lang_Object((j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "-") ? name : ByData.m_camelToKebabCase__java_lang_String(name))), attributeOperator, value);
 }
 /**
  * @public
  */
 static $clinit() {
  ByData.$clinit = () =>{};
  ByData.$loadModules();
  ByAttribute.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ByData;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(ByData, 'org.elemento.By$ByData');

exports = ByData; 
//# sourceMappingURL=By$ByData.js.map