goog.module('org.gwtproject.dom.builder.shared.HtmlMapBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const MapBuilder = goog.require('org.gwtproject.dom.builder.shared.MapBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<MapBuilder>}
 * @implements {MapBuilder}
  */
class HtmlMapBuilder extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlMapBuilder}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlMapBuilder.$clinit();
  let $instance = new HtmlMapBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlMapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlMapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @param {?string} name
  * @return {MapBuilder}
  * @public
  */
 m_name__java_lang_String(name) {
  return /**@type {MapBuilder} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), MapBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlMapBuilder.$clinit = () =>{};
  HtmlMapBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlMapBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlMapBuilder, 'org.gwtproject.dom.builder.shared.HtmlMapBuilder');

MapBuilder.$markImplementor(HtmlMapBuilder);

exports = HtmlMapBuilder; 
//# sourceMappingURL=HtmlMapBuilder.js.map