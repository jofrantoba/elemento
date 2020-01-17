goog.module('org.elemento.Elements.AsHTMLElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const j_u_function_Function = goog.require('java.util.function.Function$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {j_u_function_Function<T, HTMLElement>}
  */
class AsHTMLElement extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template T
  * @return {!AsHTMLElement<T>}
  * @public
  */
 static $create__() {
  AsHTMLElement.$clinit();
  let $instance = new AsHTMLElement();
  $instance.$ctor__org_elemento_Elements_AsHTMLElement__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_elemento_Elements_AsHTMLElement__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {T} t
  * @return {HTMLElement}
  * @public
  */
 m_apply__elemental2_dom_Node(t) {
  return /**@type {HTMLElement} */ (Js.m_uncheckedCast__java_lang_Object(t));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template V
  * @param {j_u_function_Function<?, ?>} arg0
  * @return {j_u_function_Function<T, V>}
  * @public
  */
 m_andThen__java_util_function_Function(arg0) {
  return /**@type {j_u_function_Function<T, V>} */ (j_u_function_Function.m_andThen__$default__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @template V
  * @param {j_u_function_Function<?, ?>} arg0
  * @return {j_u_function_Function<V, HTMLElement>}
  * @public
  */
 m_compose__java_util_function_Function(arg0) {
  return /**@type {j_u_function_Function<V, HTMLElement>} */ (j_u_function_Function.m_compose__$default__java_util_function_Function__java_util_function_Function(this, arg0));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {HTMLElement}
  * @public
  */
 m_apply__java_lang_Object(arg0) {
  return this.m_apply__elemental2_dom_Node(/**@type {T} */ ($Casts.$to(arg0, $Overlay)));
 }
 /**
  * @public
  */
 static $clinit() {
  AsHTMLElement.$clinit = () =>{};
  AsHTMLElement.$loadModules();
  j_l_Object.$clinit();
  j_u_function_Function.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AsHTMLElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AsHTMLElement, 'org.elemento.Elements$AsHTMLElement');

j_u_function_Function.$markImplementor(AsHTMLElement);

exports = AsHTMLElement; 
//# sourceMappingURL=Elements$AsHTMLElement.js.map