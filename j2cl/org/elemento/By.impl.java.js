goog.module('org.elemento.By$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AttributeOperator = goog.forwardDeclare('org.elemento.By.AttributeOperator$impl');
let ByAttribute = goog.forwardDeclare('org.elemento.By.ByAttribute$impl');
let ByClassname = goog.forwardDeclare('org.elemento.By.ByClassname$impl');
let ByCombination = goog.forwardDeclare('org.elemento.By.ByCombination$impl');
let ByData = goog.forwardDeclare('org.elemento.By.ByData$impl');
let ByElement = goog.forwardDeclare('org.elemento.By.ByElement$impl');
let ByGroup = goog.forwardDeclare('org.elemento.By.ByGroup$impl');
let ById = goog.forwardDeclare('org.elemento.By.ById$impl');
let BySelector = goog.forwardDeclare('org.elemento.By.BySelector$impl');
let Combinator = goog.forwardDeclare('org.elemento.By.Combinator$impl');
let IsElement = goog.forwardDeclare('org.elemento.IsElement$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
  */
class By extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_elemento_By__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} selector
  * @return {By}
  * @public
  */
 static m_selector__java_lang_String(selector) {
  By.$clinit();
  return BySelector.$create__java_lang_String(selector);
 }
 /**
  * @param {?string} id
  * @return {By}
  * @public
  */
 static m_id__java_lang_String(id) {
  By.$clinit();
  return ById.$create__java_lang_String(id);
 }
 /**
  * @param {?string} element
  * @return {By}
  * @public
  */
 static m_element__java_lang_String(element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(element);
 }
 /**
  * @param {Element} element
  * @return {By}
  * @public
  */
 static m_element__elemental2_dom_Element(element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(j_l_String.m_toLowerCase__java_lang_String(element.tagName));
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @return {By}
  * @public
  */
 static m_element__org_elemento_IsElement(element) {
  By.$clinit();
  return ByElement.$create__java_lang_String(j_l_String.m_toLowerCase__java_lang_String(/**@type {HTMLElement} */ (element.m_element__()).tagName));
 }
 /**
  * @param {?string} classname
  * @return {By}
  * @public
  */
 static m_classname__java_lang_String(classname) {
  By.$clinit();
  return ByClassname.$create__arrayOf_java_lang_String(/**@type {!Array<?string>} */ ($Arrays.$init([classname], j_l_String)));
 }
 /**
  * @param {?string} first
  * @param {?string} second
  * @param {Array<?string>} remaining
  * @return {By}
  * @public
  */
 static m_classnames__java_lang_String__java_lang_String__arrayOf_java_lang_String(first, second, remaining) {
  By.$clinit();
  let length = 2;
  if (!$Equality.$same(remaining, null)) {
   length += remaining.length;
  }
  let classnames = /**@type {!Array<?string>} */ ($Arrays.$create([length], j_l_String));
  $Arrays.$set(classnames, 0, first);
  $Arrays.$set(classnames, 1, second);
  if (!$Equality.$same(remaining, null)) {
   let index = 2;
   for (let $array = remaining, $index = 0; $index < $array.length; $index++) {
    let classname = $array[$index];
    $Arrays.$set(classnames, index, classname);
    index++;
   }
  }
  return ByClassname.$create__arrayOf_java_lang_String(classnames);
 }
 /**
  * @param {Array<?string>} classnames
  * @return {By}
  * @public
  */
 static m_classnames__arrayOf_java_lang_String(classnames) {
  By.$clinit();
  return ByClassname.$create__arrayOf_java_lang_String(classnames);
 }
 /**
  * @param {?string} name
  * @return {By}
  * @public
  */
 static m_attribute__java_lang_String(name) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, null, null);
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {By}
  * @public
  */
 static m_attribute__java_lang_String__java_lang_String(name, value) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, null, value);
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} operator
  * @param {?string} value
  * @return {By}
  * @public
  */
 static m_attribute__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value) {
  By.$clinit();
  return ByAttribute.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value);
 }
 /**
  * @param {?string} name
  * @return {By}
  * @public
  */
 static m_data__java_lang_String(name) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, null, null);
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {By}
  * @public
  */
 static m_data__java_lang_String__java_lang_String(name, value) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, null, value);
 }
 /**
  * @param {?string} name
  * @param {AttributeOperator} operator
  * @param {?string} value
  * @return {By}
  * @public
  */
 static m_data__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value) {
  By.$clinit();
  return ByData.$create__java_lang_String__org_elemento_By_AttributeOperator__java_lang_String(name, operator, value);
 }
 /**
  * @param {By} first
  * @param {By} second
  * @param {Array<By>} remaining
  * @return {By}
  * @public
  */
 static m_group__org_elemento_By__org_elemento_By__arrayOf_org_elemento_By(first, second, remaining) {
  By.$clinit();
  let length = 2;
  if (!$Equality.$same(remaining, null)) {
   length += remaining.length;
  }
  let group = /**@type {!Array<By>} */ ($Arrays.$create([length], By));
  $Arrays.$set(group, 0, first);
  $Arrays.$set(group, 1, second);
  if (!$Equality.$same(remaining, null)) {
   let index = 2;
   for (let $array = remaining, $index = 0; $index < $array.length; $index++) {
    let by = $array[$index];
    $Arrays.$set(group, index, by);
    index++;
   }
  }
  return ByGroup.$create__arrayOf_org_elemento_By(group);
 }
 /**
  * @param {Array<By>} selectors
  * @return {By}
  * @public
  */
 static m_group__arrayOf_org_elemento_By(selectors) {
  By.$clinit();
  return ByGroup.$create__arrayOf_org_elemento_By(selectors);
 }
 /**
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_and__org_elemento_By(selector) {
  return this.m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(Combinator.f_AND__org_elemento_By_Combinator, selector);
 }
 /**
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_desc__org_elemento_By(selector) {
  return this.m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(Combinator.f_DESCENDANT__org_elemento_By_Combinator, selector);
 }
 /**
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_child__org_elemento_By(selector) {
  return this.m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(Combinator.f_CHILD__org_elemento_By_Combinator, selector);
 }
 /**
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_sibling__org_elemento_By(selector) {
  return this.m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(Combinator.f_SIBLING__org_elemento_By_Combinator, selector);
 }
 /**
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_adjacentSibling__org_elemento_By(selector) {
  return this.m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(Combinator.f_ADJACENT_SIBLING__org_elemento_By_Combinator, selector);
 }
 /**
  * @param {Combinator} combinator
  * @param {By} selector
  * @return {By}
  * @public
  */
 m_combinator__org_elemento_By_Combinator__org_elemento_By_$p_org_elemento_By(combinator, selector) {
  return ByCombination.$create__org_elemento_By__org_elemento_By_Combinator__org_elemento_By(this, combinator, selector);
 }
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_selector___$pp_org_elemento() {}
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return Objects.m_hashCode__java_lang_Object(this.m_selector___$pp_org_elemento());
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 equals(o) {
  if ($Equality.$same(this, o)) {
   return true;
  }
  if (!By.$isInstance(o)) {
   return false;
  }
  let by = /**@type {By} */ ($Casts.$to(o, By));
  return j_l_String.m_equals__java_lang_String__java_lang_Object(this.m_selector___$pp_org_elemento(), by.m_selector___$pp_org_elemento());
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return this.m_selector___$pp_org_elemento();
 }
 /**
  * @public
  */
 static $clinit() {
  By.$clinit = () =>{};
  By.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof By;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ByAttribute = goog.module.get('org.elemento.By.ByAttribute$impl');
  ByClassname = goog.module.get('org.elemento.By.ByClassname$impl');
  ByCombination = goog.module.get('org.elemento.By.ByCombination$impl');
  ByData = goog.module.get('org.elemento.By.ByData$impl');
  ByElement = goog.module.get('org.elemento.By.ByElement$impl');
  ByGroup = goog.module.get('org.elemento.By.ByGroup$impl');
  ById = goog.module.get('org.elemento.By.ById$impl');
  BySelector = goog.module.get('org.elemento.By.BySelector$impl');
  Combinator = goog.module.get('org.elemento.By.Combinator$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(By, 'org.elemento.By');

exports = By; 
//# sourceMappingURL=By.js.map