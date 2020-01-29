goog.module('org.gwtproject.dom.style.shared.Visibility$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Visibility>}
 * @implements {HasCssName}
  */
class Visibility extends Enum {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {?string} $name
  * @param {number} $ordinal
  * @public
  */
 $ctor__org_gwtproject_dom_style_shared_Visibility__java_lang_String__int($name, $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_getCssName__() {}
 /**
  * @param {string} name
  * @return {!Visibility}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  Visibility.$clinit();
  if ($Equality.$same(Visibility.f_namesToValuesMap__org_gwtproject_dom_style_shared_Visibility_, null)) {
   Visibility.f_namesToValuesMap__org_gwtproject_dom_style_shared_Visibility_ = $Enums.createMapFromValues(Visibility.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Visibility.f_namesToValuesMap__org_gwtproject_dom_style_shared_Visibility_);
 }
 /**
  * @return {!Array<!Visibility>}
  * @public
  */
 static m_values__() {
  Visibility.$clinit();
  return /**@type {!Array<Visibility>} */ ($Arrays.$init([Visibility.$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility, Visibility.$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility], Visibility));
 }
 /**
  * @return {!Visibility}
  * @public
  */
 static get f_VISIBLE__org_gwtproject_dom_style_shared_Visibility() {
  return (Visibility.$clinit(), Visibility.$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility);
 }
 /**
  * @return {!Visibility}
  * @public
  */
 static get f_HIDDEN__org_gwtproject_dom_style_shared_Visibility() {
  return (Visibility.$clinit(), Visibility.$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
 }
 /**
  * @public
  */
 static $clinit() {
  Visibility.$clinit = () =>{};
  Visibility.$loadModules();
  Enum.$clinit();
  Visibility.$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility = $1.$create__java_lang_String__int($Util.$makeEnumName("VISIBLE"), Visibility.$ordinal$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility);
  Visibility.$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility = $2.$create__java_lang_String__int($Util.$makeEnumName("HIDDEN"), Visibility.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility);
  Visibility.f_namesToValuesMap__org_gwtproject_dom_style_shared_Visibility_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Visibility;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Visibility.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Visibility.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Visibility, 'org.gwtproject.dom.style.shared.Visibility');

HasCssName.$markImplementor(Visibility);

/** @private {!Visibility} */
Visibility.$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility;
/** @private {!Visibility} */
Visibility.$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility;
/** @public {Map<?string, !Visibility>} */
Visibility.f_namesToValuesMap__org_gwtproject_dom_style_shared_Visibility_;
/** @public {number} @const */
Visibility.$ordinal$f_VISIBLE__org_gwtproject_dom_style_shared_Visibility = 0;
/** @public {number} @const */
Visibility.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_Visibility = 1;

exports = Visibility; 
//# sourceMappingURL=Visibility.js.map