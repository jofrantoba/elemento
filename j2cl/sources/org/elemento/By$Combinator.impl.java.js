goog.module('org.elemento.By.Combinator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Combinator>}
  */
class Combinator extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_operator__org_elemento_By_Combinator_;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} operator
  * @return {!Combinator}
  * @public
  */
 static $create__java_lang_String__int__java_lang_String($name, $ordinal, operator) {
  let $instance = new Combinator();
  $instance.$ctor__org_elemento_By_Combinator__java_lang_String__int__java_lang_String($name, $ordinal, operator);
  return $instance;
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @param {?string} operator
  * @public
  */
 $ctor__org_elemento_By_Combinator__java_lang_String__int__java_lang_String($name, $ordinal, operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_operator__org_elemento_By_Combinator_ = operator;
 }
 /**
  * @param {string} name
  * @return {!Combinator}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  Combinator.$clinit();
  if ($Equality.$same(Combinator.f_namesToValuesMap__org_elemento_By_Combinator_, null)) {
   Combinator.f_namesToValuesMap__org_elemento_By_Combinator_ = $Enums.createMapFromValues(Combinator.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Combinator.f_namesToValuesMap__org_elemento_By_Combinator_);
 }
 /**
  * @return {!Array<!Combinator>}
  * @public
  */
 static m_values__() {
  Combinator.$clinit();
  return /**@type {!Array<Combinator>} */ ($Arrays.$init([Combinator.$f_AND__org_elemento_By_Combinator, Combinator.$f_DESCENDANT__org_elemento_By_Combinator, Combinator.$f_CHILD__org_elemento_By_Combinator, Combinator.$f_ADJACENT_SIBLING__org_elemento_By_Combinator, Combinator.$f_SIBLING__org_elemento_By_Combinator], Combinator));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {number}
  * @public
  */
 m_compareTo__java_lang_Object(arg0) {
  return super.compareTo(/**@type {Combinator} */ ($Casts.$to(arg0, Combinator)));
 }
 /**
  * @return {!Combinator}
  * @public
  */
 static get f_AND__org_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_AND__org_elemento_By_Combinator);
 }
 /**
  * @return {!Combinator}
  * @public
  */
 static get f_DESCENDANT__org_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_DESCENDANT__org_elemento_By_Combinator);
 }
 /**
  * @return {!Combinator}
  * @public
  */
 static get f_CHILD__org_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_CHILD__org_elemento_By_Combinator);
 }
 /**
  * @return {!Combinator}
  * @public
  */
 static get f_ADJACENT_SIBLING__org_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_ADJACENT_SIBLING__org_elemento_By_Combinator);
 }
 /**
  * @return {!Combinator}
  * @public
  */
 static get f_SIBLING__org_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_SIBLING__org_elemento_By_Combinator);
 }
 /**
  * @public
  */
 static $clinit() {
  Combinator.$clinit = () =>{};
  Combinator.$loadModules();
  Enum.$clinit();
  Combinator.$f_AND__org_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AND"), Combinator.$ordinal$f_AND__org_elemento_By_Combinator, "");
  Combinator.$f_DESCENDANT__org_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESCENDANT"), Combinator.$ordinal$f_DESCENDANT__org_elemento_By_Combinator, " ");
  Combinator.$f_CHILD__org_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHILD"), Combinator.$ordinal$f_CHILD__org_elemento_By_Combinator, " > ");
  Combinator.$f_ADJACENT_SIBLING__org_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADJACENT_SIBLING"), Combinator.$ordinal$f_ADJACENT_SIBLING__org_elemento_By_Combinator, " + ");
  Combinator.$f_SIBLING__org_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SIBLING"), Combinator.$ordinal$f_SIBLING__org_elemento_By_Combinator, " ~ ");
  Combinator.f_namesToValuesMap__org_elemento_By_Combinator_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Combinator;
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
$Util.$setClassMetadataForEnum(Combinator, 'org.elemento.By$Combinator');

/** @private {!Combinator} */
Combinator.$f_AND__org_elemento_By_Combinator;
/** @private {!Combinator} */
Combinator.$f_DESCENDANT__org_elemento_By_Combinator;
/** @private {!Combinator} */
Combinator.$f_CHILD__org_elemento_By_Combinator;
/** @private {!Combinator} */
Combinator.$f_ADJACENT_SIBLING__org_elemento_By_Combinator;
/** @private {!Combinator} */
Combinator.$f_SIBLING__org_elemento_By_Combinator;
/** @public {Map<?string, !Combinator>} */
Combinator.f_namesToValuesMap__org_elemento_By_Combinator_;
/** @public {number} @const */
Combinator.$ordinal$f_AND__org_elemento_By_Combinator = 0;
/** @public {number} @const */
Combinator.$ordinal$f_DESCENDANT__org_elemento_By_Combinator = 1;
/** @public {number} @const */
Combinator.$ordinal$f_CHILD__org_elemento_By_Combinator = 2;
/** @public {number} @const */
Combinator.$ordinal$f_ADJACENT_SIBLING__org_elemento_By_Combinator = 3;
/** @public {number} @const */
Combinator.$ordinal$f_SIBLING__org_elemento_By_Combinator = 4;

exports = Combinator; 
//# sourceMappingURL=By$Combinator.js.map