goog.module('org.elemento.ElementBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.elemento.TypedBuilder$impl');

let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.elemento.By$impl');
let Elements = goog.forwardDeclare('org.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.elemento.EventType$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template E, B
 * @implements {TypedBuilder<E, B>}
 * @implements {IsElement<E>}
  */
class ElementBuilder extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {E} */
  this.f_element__org_elemento_ElementBuilder;
 }
 /**
  * @param {E} element
  * @public
  */
 $ctor__org_elemento_ElementBuilder__elemental2_dom_HTMLElement(element) {
  this.$ctor__java_lang_Object__();
  this.f_element__org_elemento_ElementBuilder = /**@type {E} */ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String(element, "element required"), $Overlay));
 }
 /**
  * @override
  * @return {E}
  * @public
  */
 m_element__() {
  return this.f_element__org_elemento_ElementBuilder;
 }
 /**
  * @return {B}
  * @public
  */
 m_id__() {
  return this.m_id__java_lang_String(Elements.m_uniqueId__());
 }
 /**
  * @param {?string} id
  * @return {B}
  * @public
  */
 m_id__java_lang_String(id) {
  /**@type {HTMLElement} */ (this.m_element__()).id = id;
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} title
  * @return {B}
  * @public
  */
 m_title__java_lang_String(title) {
  /**@type {HTMLElement} */ (this.m_element__()).title = title;
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {Array<?string>} classes
  * @return {B}
  * @public
  */
 m_css__arrayOf_java_lang_String(classes) {
  if (!$Equality.$same(classes, null)) {
   let failSafeClasses = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
   for (let $array = classes, $index = 0; $index < $array.length; $index++) {
    let c = $array[$index];
    if (!$Equality.$same(c, null)) {
     if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(c, " ")) {
      failSafeClasses.addAll(/**@type {List<?string>} */ (Arrays.m_asList__arrayOf_java_lang_Object(j_l_String.m_split__java_lang_String__java_lang_String(c, " "))));
     } else {
      failSafeClasses.add(c);
     }
    }
   }
   for (let $iterator = failSafeClasses.m_iterator__(); $iterator.m_hasNext__(); ) {
    let failSafeClass = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
    /**@type {HTMLElement} */ (this.m_element__()).classList.add(failSafeClass);
   }
  }
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} className
  * @return {B}
  * @public
  */
 m_toggle__java_lang_String(className) {
  /**@type {HTMLElement} */ (this.m_element__()).classList.toggle(className);
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} className
  * @param {boolean} force
  * @return {B}
  * @public
  */
 m_toggle__java_lang_String__boolean(className, force) {
  /**@type {HTMLElement} */ (this.m_element__()).classList.toggle(className, force);
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} className
  * @param {Supplier<?boolean>} force
  * @return {B}
  * @public
  */
 m_toggle__java_lang_String__java_util_function_Supplier(className, force) {
  /**@type {HTMLElement} */ (this.m_element__()).classList.toggle(className, Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(force.m_get__(), Boolean))));
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} style
  * @return {B}
  * @public
  */
 m_style__java_lang_String(style) {
  /**@type {HTMLElement} */ (this.m_element__()).style.cssText = style;
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {B}
  * @public
  */
 m_attr__java_lang_String__java_lang_String(name, value) {
  Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(this.m_element__(), name, value);
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {B}
  * @public
  */
 m_data__java_lang_String__java_lang_String(name, value) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {HTMLElement} */ (this.m_element__()).dataset, j_l_String.m_replaceFirst__java_lang_String__java_lang_String__java_lang_String(name, "^data-", ""), value);
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {B}
  * @public
  */
 m_aria__java_lang_String__java_lang_String(name, value) {
  let safeName = j_l_String.m_startsWith__java_lang_String__java_lang_String(name, "aria-") ? name : "aria-" + j_l_String.m_valueOf__java_lang_Object(name);
  return this.m_attr__java_lang_String__java_lang_String(safeName, value);
 }
 /**
  * @param {Consumer<E>} consumer
  * @return {B}
  * @public
  */
 m_apply__java_util_function_Consumer(consumer) {
  consumer.m_accept__java_lang_Object(this.m_element__());
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {boolean} hidden
  * @return {B}
  * @public
  */
 m_hidden__boolean(hidden) {
  /**@type {HTMLElement} */ (this.m_element__()).hidden = hidden;
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @template V
  * @param {EventType<V, ?>} type
  * @param {?function(V):void} callback
  * @return {B}
  * @public
  */
 m_on__org_elemento_EventType__org_elemento_EventCallbackFn(type, callback) {
  EventType.m_bind__elemental2_dom_EventTarget__org_elemento_EventType__org_elemento_EventCallbackFn(this.m_element__(), type, callback);
  return /**@type {B} */ ($Casts.$to(this.m_that__(), ElementBuilder));
 }
 /**
  * @param {By} selector
  * @return {Iterable<HTMLElement>}
  * @public
  */
 m_findAll__org_elemento_By(selector) {
  return Elements.m_findAll__elemental2_dom_Node__org_elemento_By(this.m_element__(), selector);
 }
 /**
  * @template F
  * @param {By} selector
  * @return {F}
  * @public
  */
 m_find__org_elemento_By(selector) {
  return Elements.m_find__elemental2_dom_Node__org_elemento_By(this.m_element__(), selector);
 }
 /**
  * @template F
  * @param {By} selector
  * @return {F}
  * @public
  */
 m_closest__org_elemento_By(selector) {
  return Elements.m_closest__elemental2_dom_Element__org_elemento_By(this.m_element__(), selector);
 }
 /**
  * @public
  */
 static $clinit() {
  ElementBuilder.$clinit = () =>{};
  ElementBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ElementBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.elemento.Elements$impl');
  EventType = goog.module.get('org.elemento.EventType$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ElementBuilder, 'org.elemento.ElementBuilder');

TypedBuilder.$markImplementor(ElementBuilder);
IsElement.$markImplementor(ElementBuilder);

exports = ElementBuilder; 
//# sourceMappingURL=ElementBuilder.js.map