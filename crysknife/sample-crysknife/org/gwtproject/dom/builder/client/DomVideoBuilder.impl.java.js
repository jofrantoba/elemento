goog.module('org.gwtproject.dom.builder.client.DomVideoBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomMediaBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomMediaBuilderBase$impl');
const VideoBuilder = goog.require('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomMediaBuilderBase<VideoBuilder, Object>}
 * @implements {VideoBuilder}
  */
class DomVideoBuilder extends DomMediaBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @return {!DomVideoBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  DomVideoBuilder.$clinit();
  let $instance = new DomVideoBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomVideoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {DomBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomVideoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomMediaBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {number} height
  * @return {VideoBuilder}
  * @public
  */
 m_height__int(height) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).height = height;
  return this;
 }
 /**
  * @override
  * @param {?string} url
  * @return {VideoBuilder}
  * @public
  */
 m_poster__java_lang_String(url) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).poster = url;
  return this;
 }
 /**
  * @override
  * @param {number} width
  * @return {VideoBuilder}
  * @public
  */
 m_width__int(width) {
  /**@type {Object} */ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 /**
  * @public
  */
 static $clinit() {
  DomVideoBuilder.$clinit = () =>{};
  DomVideoBuilder.$loadModules();
  DomMediaBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomVideoBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomVideoBuilder, 'org.gwtproject.dom.builder.client.DomVideoBuilder');

VideoBuilder.$markImplementor(DomVideoBuilder);

exports = DomVideoBuilder; 
//# sourceMappingURL=DomVideoBuilder.js.map