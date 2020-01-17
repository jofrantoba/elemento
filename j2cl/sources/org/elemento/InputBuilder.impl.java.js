goog.module('org.elemento.InputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.elemento.ElementBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, InputBuilder<E>>}
  */
class InputBuilder extends ElementBuilder {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template E
  * @param {E} element
  * @return {!InputBuilder<E>}
  * @public
  */
 static $create__elemental2_dom_HTMLInputElement(element) {
  InputBuilder.$clinit();
  let $instance = new InputBuilder();
  $instance.$ctor__org_elemento_InputBuilder__elemental2_dom_HTMLInputElement(element);
  return $instance;
 }
 /**
  * @param {E} element
  * @public
  */
 $ctor__org_elemento_InputBuilder__elemental2_dom_HTMLInputElement(element) {
  this.$ctor__org_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /**
  * @override
  * @return {InputBuilder<E>}
  * @public
  */
 m_that__() {
  return this;
 }
 /**
  * @param {boolean} autofocus
  * @return {InputBuilder<E>}
  * @public
  */
 m_autofocus__boolean(autofocus) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).autofocus = autofocus;
  return this.m_that__();
 }
 /**
  * @param {?string} autocomplete
  * @return {InputBuilder<E>}
  * @public
  */
 m_autocomplete__java_lang_String(autocomplete) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).autocomplete = autocomplete;
  return this.m_that__();
 }
 /**
  * @param {boolean} checked
  * @return {InputBuilder<E>}
  * @public
  */
 m_checked__boolean(checked) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).checked = checked;
  return this.m_that__();
 }
 /**
  * @param {boolean} indeterminate
  * @return {InputBuilder<E>}
  * @public
  */
 m_indeterminate__boolean(indeterminate) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).indeterminate = indeterminate;
  return this.m_that__();
 }
 /**
  * @param {boolean} readOnly
  * @return {InputBuilder<E>}
  * @public
  */
 m_readOnly__boolean(readOnly) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).readOnly = readOnly;
  return this.m_that__();
 }
 /**
  * @param {boolean} disabled
  * @return {InputBuilder<E>}
  * @public
  */
 m_disabled__boolean(disabled) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).disabled = disabled;
  return this.m_that__();
 }
 /**
  * @param {boolean} required
  * @return {InputBuilder<E>}
  * @public
  */
 m_required__boolean(required) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).required = required;
  return this.m_that__();
 }
 /**
  * @param {?string} name
  * @return {InputBuilder<E>}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).name = name;
  return this.m_that__();
 }
 /**
  * @param {number} min
  * @return {InputBuilder<E>}
  * @public
  */
 m_min__int(min) {
  return this.m_min__java_lang_String(j_l_String.m_valueOf__int(min));
 }
 /**
  * @param {?string} min
  * @return {InputBuilder<E>}
  * @public
  */
 m_min__java_lang_String(min) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).min = min;
  return this.m_that__();
 }
 /**
  * @param {number} max
  * @return {InputBuilder<E>}
  * @public
  */
 m_max__int(max) {
  return this.m_max__java_lang_String(j_l_String.m_valueOf__int(max));
 }
 /**
  * @param {?string} max
  * @return {InputBuilder<E>}
  * @public
  */
 m_max__java_lang_String(max) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).max = max;
  return this.m_that__();
 }
 /**
  * @param {?string} placeholder
  * @return {InputBuilder<E>}
  * @public
  */
 m_placeholder__java_lang_String(placeholder) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).placeholder = placeholder;
  return this.m_that__();
 }
 /**
  * @param {number} tabIndex
  * @return {InputBuilder<E>}
  * @public
  */
 m_tabIndex__int(tabIndex) {
  /**@type {HTMLInputElement} */ ($Casts.$to(this.m_element__(), $Overlay)).tabIndex = tabIndex;
  return this.m_that__();
 }
 /**
  * @public
  */
 static $clinit() {
  InputBuilder.$clinit = () =>{};
  InputBuilder.$loadModules();
  ElementBuilder.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof InputBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(InputBuilder, 'org.elemento.InputBuilder');

exports = InputBuilder; 
//# sourceMappingURL=InputBuilder.js.map