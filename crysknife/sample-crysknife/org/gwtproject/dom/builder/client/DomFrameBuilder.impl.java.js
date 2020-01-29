goog.module('org.gwtproject.dom.builder.client.DomFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FrameBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<FrameBuilder, Object>}
 * @implements {FrameBuilder}
  */
class DomFrameBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomFrameBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomFrameBuilder.$clinit();
  let $instance = new DomFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /**
  * @override
  * @param {number} frameBorder
  * @return {FrameBuilder}
  * @public
  */
 m_frameBorder__int(frameBorder) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).frameBorder = frameBorder;
  return this;
 }
 /**
  * @override
  * @param {SafeUri} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(longDesc) {
  $Overlay.m_setLongDesc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), longDesc);
  return this;
 }
 /**
  * @override
  * @param {?string} longDesc
  * @return {FrameBuilder}
  * @public
  */
 m_longDesc__java_lang_String(longDesc) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).longDesc = longDesc;
  return this;
 }
 /**
  * @override
  * @param {number} marginHeight
  * @return {FrameBuilder}
  * @public
  */
 m_marginHeight__int(marginHeight) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginHeight = marginHeight;
  return this;
 }
 /**
  * @override
  * @param {number} marginWidth
  * @return {FrameBuilder}
  * @public
  */
 m_marginWidth__int(marginWidth) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginWidth = marginWidth;
  return this;
 }
 /**
  * @override
  * @param {?string} name
  * @return {FrameBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /**
  * @override
  * @return {FrameBuilder}
  * @public
  */
 m_noResize__() {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).noResize = true;
  return this;
 }
 /**
  * @override
  * @param {?string} scrolling
  * @return {FrameBuilder}
  * @public
  */
 m_scrolling__java_lang_String(scrolling) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).scrolling = scrolling;
  return this;
 }
 /**
  * @override
  * @param {SafeUri} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__org_gwtproject_safehtml_shared_SafeUri(src) {
  $Overlay.m_setSrc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), src);
  return this;
 }
 /**
  * @override
  * @param {?string} src
  * @return {FrameBuilder}
  * @public
  */
 m_src__java_lang_String(src) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomFrameBuilder.$clinit = () =>{};
  DomFrameBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomFrameBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomFrameBuilder, 'org.gwtproject.dom.builder.client.DomFrameBuilder');

FrameBuilder.$markImplementor(DomFrameBuilder);

exports = DomFrameBuilder; 
//# sourceMappingURL=DomFrameBuilder.js.map