goog.module('org.gwtproject.dom.builder.client.DomModBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ModBuilder = goog.require('org.gwtproject.dom.builder.shared.ModBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ModElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<ModBuilder, Object>}
 * @implements {ModBuilder}
  */
class DomModBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomModBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomModBuilder.$clinit();
  let $instance = new DomModBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomModBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomModBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {SafeUri} cite
  * @return {ModBuilder}
  * @public
  */
 m_cite__org_gwtproject_safehtml_shared_SafeUri(cite) {
  $Overlay.m_setCite__$devirt__org_gwtproject_dom_client_ModElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), cite);
  return this;
 }
 /**
  * @override
  * @param {?string} cite
  * @return {ModBuilder}
  * @public
  */
 m_cite__java_lang_String(cite) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cite = cite;
  return this;
 }
 /**
  * @override
  * @param {?string} dateTime
  * @return {ModBuilder}
  * @public
  */
 m_dateTime__java_lang_String(dateTime) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).dateTime = dateTime;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomModBuilder.$clinit = () =>{};
  DomModBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomModBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.ModElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomModBuilder, 'org.gwtproject.dom.builder.client.DomModBuilder');

ModBuilder.$markImplementor(DomModBuilder);

exports = DomModBuilder; 
//# sourceMappingURL=DomModBuilder.js.map