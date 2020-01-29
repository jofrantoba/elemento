goog.module('org.jboss.elemento.sample.crysknife.FooterElement_Factory.FooterElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FooterElement = goog.require('org.jboss.elemento.sample.crysknife.FooterElement$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let FooterElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class FooterElement__Factory_FooterElement extends FooterElement {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {FooterElement__Factory} */
  this.f_$outer_this__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement;
  /** @public {HTMLElement} */
  this.f_root__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement_;
 }
 /**
  * @param {FooterElement__Factory} $outer_this
  * @return {!FooterElement__Factory_FooterElement}
  * @public
  */
 static $create__org_jboss_elemento_sample_crysknife_FooterElement_Factory($outer_this) {
  FooterElement__Factory_FooterElement.$clinit();
  let $instance = new FooterElement__Factory_FooterElement();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement__org_jboss_elemento_sample_crysknife_FooterElement_Factory($outer_this);
  return $instance;
 }
 /**
  * @param {FooterElement__Factory} $outer_this
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement__org_jboss_elemento_sample_crysknife_FooterElement_Factory($outer_this) {
  this.f_$outer_this__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement = $outer_this;
  this.$ctor__org_jboss_elemento_sample_crysknife_FooterElement__();
  this.$init___$p_org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(this.f_root__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement_, "class", "info");
  this.f_root__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement_.innerHTML = "<p>Double-click to edit a todo</p> <p><span>Created by</span>&nbsp;<a href=\"http://hpehl.info\">Harald Pehl</a></p> <p><span>Part of</span>&nbsp;<a href=\"http://todomvc.com\">TodoMVC</a></p>";
 }
 /**
  * @override
  * @return {HTMLElement}
  * @public
  */
 m_getElement__() {
  return /**@type {HTMLElement} */ (this.f_root__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement_);
 }
 /**
  * @private
  */
 $init___$p_org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement() {
  this.f_root__org_jboss_elemento_sample_crysknife_FooterElement_Factory_FooterElement_ = /**@type {HTMLElement} */ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("footer"), HTMLElement_$Overlay));
 }
 /**
  * @public
  */
 static $clinit() {
  FooterElement__Factory_FooterElement.$clinit = () =>{};
  FooterElement__Factory_FooterElement.$loadModules();
  FooterElement.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FooterElement__Factory_FooterElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FooterElement__Factory_FooterElement, 'org.jboss.elemento.sample.crysknife.FooterElement_Factory$FooterElement');

exports = FooterElement__Factory_FooterElement; 
//# sourceMappingURL=FooterElement_Factory$FooterElement.js.map