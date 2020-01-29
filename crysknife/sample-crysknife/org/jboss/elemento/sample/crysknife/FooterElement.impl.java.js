goog.module('org.jboss.elemento.sample.crysknife.FooterElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.gwt.elemento.core.IsElement$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');

/**
 * @implements {IsElement<HTMLElement>}
  */
class FooterElement extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!FooterElement}
  * @public
  */
 static $create__() {
  FooterElement.$clinit();
  let $instance = new FooterElement();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {HTMLElement}
  * @public
  */
 m_getElement__() {
  return IsElement.m_getElement__$default__org_jboss_gwt_elemento_core_IsElement(this);
 }
 /**
  * @public
  */
 static $clinit() {
  FooterElement.$clinit = () =>{};
  FooterElement.$loadModules();
  j_l_Object.$clinit();
  IsElement.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FooterElement;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FooterElement, 'org.jboss.elemento.sample.crysknife.FooterElement');

IsElement.$markImplementor(FooterElement);

exports = FooterElement; 
//# sourceMappingURL=FooterElement.js.map