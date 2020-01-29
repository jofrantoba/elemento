goog.module('org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R
 * @extends {HtmlElementBuilderBase<R>}
 * @implements {MediaBuilder<R>}
  */
class HtmlMediaBuilderBase extends HtmlElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template R
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlMediaBuilderBase<R>}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlMediaBuilderBase.$clinit();
  let $instance = new HtmlMediaBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlMediaBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /**
  * @override
  * @return {R}
  * @public
  */
 m_autoplay__() {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("autoplay", "autoplay"), MediaBuilder));
 }
 /**
  * @override
  * @return {R}
  * @public
  */
 m_controls__() {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("controls", "controls"), MediaBuilder));
 }
 /**
  * @override
  * @return {R}
  * @public
  */
 m_loop__() {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("loop", "loop"), MediaBuilder));
 }
 /**
  * @override
  * @return {R}
  * @public
  */
 m_muted__() {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("muted", "muted"), MediaBuilder));
 }
 /**
  * @override
  * @param {?string} preload
  * @return {R}
  * @public
  */
 m_preload__java_lang_String(preload) {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("preload", preload), MediaBuilder));
 }
 /**
  * @override
  * @param {?string} url
  * @return {R}
  * @public
  */
 m_src__java_lang_String(url) {
  return /**@type {R} */ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("src", url), MediaBuilder));
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlMediaBuilderBase.$clinit = () =>{};
  HtmlMediaBuilderBase.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlMediaBuilderBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlMediaBuilderBase, 'org.gwtproject.dom.builder.shared.HtmlMediaBuilderBase');

MediaBuilder.$markImplementor(HtmlMediaBuilderBase);

exports = HtmlMediaBuilderBase; 
//# sourceMappingURL=HtmlMediaBuilderBase.js.map