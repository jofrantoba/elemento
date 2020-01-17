goog.module('org.elemento.By.ByAttribute$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const By = goog.require('org.elemento.By$impl');

let Character = goog.forwardDeclare('java.lang.Character$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AttributeOperator = goog.forwardDeclare('org.elemento.By.AttributeOperator$impl');

class ByAttribute extends By {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_name__org_elemento_By_ByAttribute_;
  /** @public {?string} */
  this.f_value__org_elemento_By_ByAttribute_;
  /** @public {AttributeOperator} */
  this.f_operator__org_elemento_By_ByAttribute_;
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} operator
  * @param {?string} value
  * @return {!ByAttribute}
  * @public
  */
 static $create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value) {
  ByAttribute.$clinit();
  let $instance = new ByAttribute();
  $instance.$ctor__org_elemento_By_ByAttribute__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value);
  return $instance;
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} operator
  * @param {?string} value
  * @public
  */
 $ctor__org_elemento_By_ByAttribute__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value) {
  this.$ctor__org_elemento_By__();
  this.f_name__org_elemento_By_ByAttribute_ = name;
  this.f_value__org_elemento_By_ByAttribute_ = value;
  this.f_operator__org_elemento_By_ByAttribute_ = operator;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_elemento() {
  let builder = StringBuilder.$create__();
  builder.m_append__java_lang_String("[").m_append__java_lang_String(this.f_name__org_elemento_By_ByAttribute_);
  if (!$Equality.$same(this.f_value__org_elemento_By_ByAttribute_, null) && j_l_String.m_length__java_lang_String(this.f_value__org_elemento_By_ByAttribute_) != 0) {
   let needsQuotes = this.m_needsQuotes__java_lang_String_$p_org_elemento_By_ByAttribute(this.f_value__org_elemento_By_ByAttribute_);
   if (!$Equality.$same(this.f_operator__org_elemento_By_ByAttribute_, null)) {
    builder.m_append__java_lang_String(this.f_operator__org_elemento_By_ByAttribute_.f_operator__org_elemento_By_AttributeOperator_);
   }
   builder.m_append__java_lang_String("=");
   if (needsQuotes) {
    builder.m_append__java_lang_String("\"");
   }
   builder.m_append__java_lang_String(this.f_value__org_elemento_By_ByAttribute_);
   if (needsQuotes) {
    builder.m_append__java_lang_String("\"");
   }
  }
  builder.m_append__java_lang_String("]");
  return builder.toString();
 }
 /**
  * @param {?string} value
  * @return {boolean}
  * @public
  */
 m_needsQuotes__java_lang_String_$p_org_elemento_By_ByAttribute(value) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(value, "-")) {
   return true;
  }
  if (j_l_String.m_startsWith__java_lang_String__java_lang_String(value, "-") && j_l_String.m_length__java_lang_String(value) > 1 && Character.m_isDigit__char(j_l_String.m_charAt__java_lang_String__int(value, 1))) {
   return true;
  }
  if (Character.m_isDigit__char(j_l_String.m_charAt__java_lang_String__int(value, 0))) {
   return true;
  }
  for (let i = 0; i < j_l_String.m_length__java_lang_String(value); i++) {
   let c = j_l_String.m_charAt__java_lang_String__int(value, i);
   if (!Character.m_isLetterOrDigit__char(c) && c != 45 /* '-' */ && c != 95 /* '_' */) {
    return true;
   }
  }
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  ByAttribute.$clinit = () =>{};
  ByAttribute.$loadModules();
  By.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ByAttribute;
 }
 /**
  * @public
  */
 static $loadModules() {
  Character = goog.module.get('java.lang.Character$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(ByAttribute, 'org.elemento.By$ByAttribute');

exports = ByAttribute; 
//# sourceMappingURL=By$ByAttribute.js.map