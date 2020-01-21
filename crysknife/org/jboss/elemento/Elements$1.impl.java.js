goog.module('org.jboss.elemento.Elements.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementCreator = goog.require('org.jboss.elemento.ElementCreator$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ElementCreator}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!$1}
  * @public
  */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_jboss_elemento_Elements_1__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_Elements_1__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {E}
  * @public
  */
 m_create__java_lang_String__java_lang_Class(element, type) {
  return /**@type {E} */ ($Casts.$to(Js.m_cast__java_lang_Object($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement(element)), HTMLElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.jboss.elemento.Elements$1');

ElementCreator.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=Elements$1.js.map