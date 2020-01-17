goog.module('org.elemento.By.AttributeOperator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AttributeOperator>}
  */
class AttributeOperator extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_operator__org_elemento_By_AttributeOperator_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} operator
  * @return {!AttributeOperator}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, operator) {
  let $instance = new AttributeOperator();
  $instance.$ctor__org_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String($name, $ordinal, operator);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} operator
  * @public
  */
 $ctor__org_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String($name, $ordinal, operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_operator__org_elemento_By_AttributeOperator_ = operator;
 }
 /**
  * @param {string} name
  * @return {!AttributeOperator}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  AttributeOperator.$clinit();
  if ($Equality.$same(AttributeOperator.f_namesToValuesMap__org_elemento_By_AttributeOperator_, null)) {
   AttributeOperator.f_namesToValuesMap__org_elemento_By_AttributeOperator_ = $Enums.createMapFromValues(AttributeOperator.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AttributeOperator.f_namesToValuesMap__org_elemento_By_AttributeOperator_);
 }
 /**
  * @return {!Array<!AttributeOperator>}
  * @public
  */
 static m_values__() {
  AttributeOperator.$clinit();
  return /**@type {!Array<AttributeOperator>} */ ($Arrays.$init([AttributeOperator.$f_STARTS_WITH__org_elemento_By_AttributeOperator, AttributeOperator.$f_ENDS_WITH__org_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS__org_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS_WORD__org_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator], AttributeOperator));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {AttributeOperator} */ ($Casts.$to(arg0, AttributeOperator)));
 }
 /**
  * @return {!AttributeOperator}
  * @public
  */
 static get f_STARTS_WITH__org_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_STARTS_WITH__org_elemento_By_AttributeOperator);
 }
 /**
  * @return {!AttributeOperator}
  * @public
  */
 static get f_ENDS_WITH__org_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_ENDS_WITH__org_elemento_By_AttributeOperator);
 }
 /**
  * @return {!AttributeOperator}
  * @public
  */
 static get f_CONTAINS__org_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS__org_elemento_By_AttributeOperator);
 }
 /**
  * @return {!AttributeOperator}
  * @public
  */
 static get f_CONTAINS_WORD__org_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS_WORD__org_elemento_By_AttributeOperator);
 }
 /**
  * @return {!AttributeOperator}
  * @public
  */
 static get f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator);
 }
 /**
  * @public
  */
 static $clinit() {
  AttributeOperator.$clinit = () =>{};
  AttributeOperator.$loadModules();
  Enum.$clinit();
  AttributeOperator.$f_STARTS_WITH__org_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STARTS_WITH"), AttributeOperator.$ordinal$f_STARTS_WITH__org_elemento_By_AttributeOperator, "^");
  AttributeOperator.$f_ENDS_WITH__org_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENDS_WITH"), AttributeOperator.$ordinal$f_ENDS_WITH__org_elemento_By_AttributeOperator, "$");
  AttributeOperator.$f_CONTAINS__org_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS"), AttributeOperator.$ordinal$f_CONTAINS__org_elemento_By_AttributeOperator, "*");
  AttributeOperator.$f_CONTAINS_WORD__org_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS_WORD"), AttributeOperator.$ordinal$f_CONTAINS_WORD__org_elemento_By_AttributeOperator, "~");
  AttributeOperator.$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS_TOKEN"), AttributeOperator.$ordinal$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator, "|");
  AttributeOperator.f_namesToValuesMap__org_elemento_By_AttributeOperator_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AttributeOperator;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(AttributeOperator, 'org.elemento.By$AttributeOperator');

/** @private {!AttributeOperator} */
AttributeOperator.$f_STARTS_WITH__org_elemento_By_AttributeOperator;
/** @private {!AttributeOperator} */
AttributeOperator.$f_ENDS_WITH__org_elemento_By_AttributeOperator;
/** @private {!AttributeOperator} */
AttributeOperator.$f_CONTAINS__org_elemento_By_AttributeOperator;
/** @private {!AttributeOperator} */
AttributeOperator.$f_CONTAINS_WORD__org_elemento_By_AttributeOperator;
/** @private {!AttributeOperator} */
AttributeOperator.$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator;
/** @public {Map<?string, !AttributeOperator>} */
AttributeOperator.f_namesToValuesMap__org_elemento_By_AttributeOperator_;
/** @public {number} @const */
AttributeOperator.$ordinal$f_STARTS_WITH__org_elemento_By_AttributeOperator = 0;
/** @public {number} @const */
AttributeOperator.$ordinal$f_ENDS_WITH__org_elemento_By_AttributeOperator = 1;
/** @public {number} @const */
AttributeOperator.$ordinal$f_CONTAINS__org_elemento_By_AttributeOperator = 2;
/** @public {number} @const */
AttributeOperator.$ordinal$f_CONTAINS_WORD__org_elemento_By_AttributeOperator = 3;
/** @public {number} @const */
AttributeOperator.$ordinal$f_CONTAINS_TOKEN__org_elemento_By_AttributeOperator = 4;

exports = AttributeOperator; 
//# sourceMappingURL=By$AttributeOperator.js.map