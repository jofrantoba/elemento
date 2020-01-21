goog.module('org.jboss.elemento.LazyElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 * @template E
 * @implements {IsElement<E>}
  */
class LazyElement extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {E} */
  this.f_element__org_jboss_elemento_LazyElement_;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_LazyElement__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {E}
  * @public
  */
 m_element__() {
  if ($Equality.$same(this.f_element__org_jboss_elemento_LazyElement_, null)) {
   this.f_element__org_jboss_elemento_LazyElement_ = this.m_createElement__();
  }
  return this.f_element__org_jboss_elemento_LazyElement_;
 }
 /**
  * @abstract
  * @return {E}
  * @public
  */
 m_createElement__() {}
 /**
  * @return {boolean}
  * @public
  */
 m_initialized__() {
  return !$Equality.$same(this.f_element__org_jboss_elemento_LazyElement_, null);
 }
 /**
  * @public
  */
 static $clinit() {
  LazyElement.$clinit = () =>{};
  LazyElement.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LazyElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(LazyElement, 'org.jboss.elemento.LazyElement');

IsElement.$markImplementor(LazyElement);

exports = LazyElement; 
//# sourceMappingURL=LazyElement.js.map