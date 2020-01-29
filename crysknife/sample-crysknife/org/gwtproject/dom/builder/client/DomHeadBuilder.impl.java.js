goog.module('org.gwtproject.dom.builder.client.DomHeadBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const HeadBuilder = goog.require('org.gwtproject.dom.builder.shared.HeadBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<HeadBuilder, Object>}
 * @implements {HeadBuilder}
  */
class DomHeadBuilder extends DomElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomHeadBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomHeadBuilder.$clinit();
  let $instance = new DomHeadBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomHeadBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomHeadBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, false);
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {HeadBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @override
  * @param {?string} text
  * @return {HeadBuilder}
  * @public
  */
 m_text__java_lang_String(text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  DomHeadBuilder.$clinit = () =>{};
  DomHeadBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomHeadBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomHeadBuilder, 'org.gwtproject.dom.builder.client.DomHeadBuilder');

HeadBuilder.$markImplementor(DomHeadBuilder);

exports = DomHeadBuilder; 
//# sourceMappingURL=DomHeadBuilder.js.map