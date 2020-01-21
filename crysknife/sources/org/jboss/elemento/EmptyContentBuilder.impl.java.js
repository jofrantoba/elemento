goog.module('org.jboss.elemento.EmptyContentBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.jboss.elemento.ElementBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, EmptyContentBuilder<E>>}
  */
class EmptyContentBuilder extends ElementBuilder {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template E
  * @param {E} element
  * @return {!EmptyContentBuilder<E>}
  * @public
  */
 static $create__elemental2_dom_HTMLElement(element) {
  EmptyContentBuilder.$clinit();
  let $instance = new EmptyContentBuilder();
  $instance.$ctor__org_jboss_elemento_EmptyContentBuilder__elemental2_dom_HTMLElement(element);
  return $instance;
 }
 /**
  * @param {E} element
  * @public
  */
 $ctor__org_jboss_elemento_EmptyContentBuilder__elemental2_dom_HTMLElement(element) {
  this.$ctor__org_jboss_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /**
  * @override
  * @return {EmptyContentBuilder<E>}
  * @public
  */
 m_that__() {
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  EmptyContentBuilder.$clinit = () =>{};
  EmptyContentBuilder.$loadModules();
  ElementBuilder.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EmptyContentBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EmptyContentBuilder, 'org.jboss.elemento.EmptyContentBuilder');

exports = EmptyContentBuilder; 
//# sourceMappingURL=EmptyContentBuilder.js.map