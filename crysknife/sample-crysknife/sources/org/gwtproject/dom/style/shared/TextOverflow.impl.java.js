goog.module('org.gwtproject.dom.style.shared.TextOverflow$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextOverflow.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextOverflow.$2$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextOverflow>}
 * @implements {HasCssName}
  */
class TextOverflow extends Enum {
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
 $ctor__org_gwtproject_dom_style_shared_TextOverflow__java_lang_String__int($name, $ordinal) {
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
  * @return {!TextOverflow}
  * @public
  */
 static m_valueOf__java_lang_String(name) {
  TextOverflow.$clinit();
  if ($Equality.$same(TextOverflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextOverflow_, null)) {
   TextOverflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextOverflow_ = $Enums.createMapFromValues(TextOverflow.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextOverflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextOverflow_);
 }
 /**
  * @return {!Array<!TextOverflow>}
  * @public
  */
 static m_values__() {
  TextOverflow.$clinit();
  return /**@type {!Array<TextOverflow>} */ ($Arrays.$init([TextOverflow.$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow, TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow], TextOverflow));
 }
 /**
  * @return {!TextOverflow}
  * @public
  */
 static get f_CLIP__org_gwtproject_dom_style_shared_TextOverflow() {
  return (TextOverflow.$clinit(), TextOverflow.$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow);
 }
 /**
  * @return {!TextOverflow}
  * @public
  */
 static get f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow() {
  return (TextOverflow.$clinit(), TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow);
 }
 /**
  * @public
  */
 static $clinit() {
  TextOverflow.$clinit = () =>{};
  TextOverflow.$loadModules();
  Enum.$clinit();
  TextOverflow.$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow = $1.$create__java_lang_String__int($Util.$makeEnumName("CLIP"), TextOverflow.$ordinal$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow);
  TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow = $2.$create__java_lang_String__int($Util.$makeEnumName("ELLIPSIS"), TextOverflow.$ordinal$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow);
  TextOverflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextOverflow_ = null;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextOverflow;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TextOverflow.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TextOverflow.$2$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextOverflow, 'org.gwtproject.dom.style.shared.TextOverflow');

HasCssName.$markImplementor(TextOverflow);

/** @private {!TextOverflow} */
TextOverflow.$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow;
/** @private {!TextOverflow} */
TextOverflow.$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow;
/** @public {Map<?string, !TextOverflow>} */
TextOverflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextOverflow_;
/** @public {number} @const */
TextOverflow.$ordinal$f_CLIP__org_gwtproject_dom_style_shared_TextOverflow = 0;
/** @public {number} @const */
TextOverflow.$ordinal$f_ELLIPSIS__org_gwtproject_dom_style_shared_TextOverflow = 1;

exports = TextOverflow; 
//# sourceMappingURL=TextOverflow.js.map