goog.module('org.elemento.ElementsBag$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IterableImpl = goog.forwardDeclare('org.elemento.ElementsBag.IterableImpl$impl');
let IsElement = goog.forwardDeclare('org.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TypedBuilder<Iterable<HTMLElement>, ElementsBag>}
  */
class ElementsBag extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {IterableImpl} */
  this.f_iterable__org_elemento_ElementsBag_;
 }
 /**
  * @return {!ElementsBag}
  * @public
  */
 static $create__() {
  ElementsBag.$clinit();
  let $instance = new ElementsBag();
  $instance.$ctor__org_elemento_ElementsBag__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_elemento_ElementsBag__() {
  this.$ctor__java_lang_Object__();
  this.f_iterable__org_elemento_ElementsBag_ = IterableImpl.$create__();
 }
 /**
  * @override
  * @return {ElementsBag}
  * @public
  */
 m_that__() {
  return this;
 }
 /**
  * @return {Iterable<HTMLElement>}
  * @public
  */
 m_elements__() {
  return this.f_iterable__org_elemento_ElementsBag_;
 }
 /**
  * @param {HTMLElement} element
  * @return {ElementsBag}
  * @public
  */
 m_add__elemental2_dom_HTMLElement(element) {
  this.f_iterable__org_elemento_ElementsBag_.f_elements__org_elemento_ElementsBag_IterableImpl.push(element);
  return this.m_that__();
 }
 /**
  * @param {IsElement<?>} element
  * @return {ElementsBag}
  * @public
  */
 m_add__org_elemento_IsElement(element) {
  if (!$Equality.$same(element, null)) {
   return this.m_add__elemental2_dom_HTMLElement(element.m_element__());
  }
  return this.m_that__();
 }
 /**
  * @param {Array<HTMLElement>} elements
  * @return {ElementsBag}
  * @public
  */
 m_addAll__arrayOf_elemental2_dom_HTMLElement(elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   this.m_add__elemental2_dom_HTMLElement(element);
  }
  return this.m_that__();
 }
 /**
  * @param {Array<IsElement<?>>} elements
  * @return {ElementsBag}
  * @public
  */
 m_addAll__arrayOf_org_elemento_IsElement(elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   if (!$Equality.$same(element, null)) {
    this.m_add__elemental2_dom_HTMLElement(element.m_element__());
   }
  }
  return this.m_that__();
 }
 /**
  * @param {Iterable<?>} elements
  * @return {ElementsBag}
  * @public
  */
 m_addAll__java_lang_Iterable(elements) {
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let element = $iterator.m_next__();
   if ($Overlay.$isInstance(element)) {
    this.m_add__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(element, $Overlay)));
   } else if (IsElement.$isInstance(element)) {
    this.m_add__elemental2_dom_HTMLElement(/**@type {IsElement} */ ($Casts.$to(element, IsElement)).m_element__());
   }
  }
  return this.m_that__();
 }
 /**
  * @public
  */
 static $clinit() {
  ElementsBag.$clinit = () =>{};
  ElementsBag.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ElementsBag;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IterableImpl = goog.module.get('org.elemento.ElementsBag.IterableImpl$impl');
  IsElement = goog.module.get('org.elemento.IsElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ElementsBag, 'org.elemento.ElementsBag');

TypedBuilder.$markImplementor(ElementsBag);

exports = ElementsBag; 
//# sourceMappingURL=ElementsBag.js.map