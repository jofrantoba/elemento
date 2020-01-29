goog.module('org.gwtproject.dom.builder.client.DomBuilderFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderFactory = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomAnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAnchorBuilder$impl');
let DomAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAreaBuilder$impl');
let DomAudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAudioBuilder$impl');
let DomBRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBRBuilder$impl');
let DomBaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBaseBuilder$impl');
let DomBodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBodyBuilder$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let DomButtonBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomButtonBuilder$impl');
let DomCanvasBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomCanvasBuilder$impl');
let DomDListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomDListBuilder$impl');
let DomDivBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomDivBuilder$impl');
let DomFieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFieldSetBuilder$impl');
let DomFormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFormBuilder$impl');
let DomFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFrameBuilder$impl');
let DomFrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFrameSetBuilder$impl');
let DomHRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHRBuilder$impl');
let DomHeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHeadBuilder$impl');
let DomHeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHeadingBuilder$impl');
let DomIFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomIFrameBuilder$impl');
let DomImageBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomImageBuilder$impl');
let DomLIBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomLIBuilder$impl');
let DomLabelBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomLabelBuilder$impl');
let DomLegendBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomLegendBuilder$impl');
let DomLinkBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomLinkBuilder$impl');
let DomMapBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomMapBuilder$impl');
let DomMetaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomMetaBuilder$impl');
let DomOListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomOListBuilder$impl');
let DomOptGroupBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomOptGroupBuilder$impl');
let DomOptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomOptionBuilder$impl');
let DomParagraphBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomParagraphBuilder$impl');
let DomParamBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomParamBuilder$impl');
let DomPreBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomPreBuilder$impl');
let DomQuoteBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomQuoteBuilder$impl');
let DomScriptBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomScriptBuilder$impl');
let DomSelectBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomSelectBuilder$impl');
let DomSourceBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomSourceBuilder$impl');
let DomSpanBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomSpanBuilder$impl');
let DomStyleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomStyleBuilder$impl');
let DomTableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableBuilder$impl');
let DomTableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableCaptionBuilder$impl');
let DomTableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableCellBuilder$impl');
let DomTableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableColBuilder$impl');
let DomTableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableRowBuilder$impl');
let DomTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableSectionBuilder$impl');
let DomTextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTextAreaBuilder$impl');
let DomUListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomUListBuilder$impl');
let DomVideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomVideoBuilder$impl');
let ElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.InputBuilder$impl');
let TableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

class DomBuilderFactory extends ElementBuilderFactory {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {DomBuilderFactory}
  * @public
  */
 static m_get__() {
  DomBuilderFactory.$clinit();
  if ($Equality.$same(DomBuilderFactory.f_instance__org_gwtproject_dom_builder_client_DomBuilderFactory_, null)) {
   DomBuilderFactory.f_instance__org_gwtproject_dom_builder_client_DomBuilderFactory_ = DomBuilderFactory.$create__();
  }
  return DomBuilderFactory.f_instance__org_gwtproject_dom_builder_client_DomBuilderFactory_;
 }
 /**
  * @return {!DomBuilderFactory}
  * @public
  */
 static $create__() {
  DomBuilderFactory.$clinit();
  let $instance = new DomBuilderFactory();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBuilderFactory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomBuilderFactory__() {
  this.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderFactory__();
 }
 /**
  * @override
  * @return {DomAnchorBuilder}
  * @public
  */
 m_createAnchorBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startAnchor__();
 }
 /**
  * @override
  * @return {DomAreaBuilder}
  * @public
  */
 m_createAreaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startArea__();
 }
 /**
  * @override
  * @return {DomAudioBuilder}
  * @public
  */
 m_createAudioBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startAudio__();
 }
 /**
  * @override
  * @return {DomBaseBuilder}
  * @public
  */
 m_createBaseBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startBase__();
 }
 /**
  * @override
  * @return {DomQuoteBuilder}
  * @public
  */
 m_createBlockQuoteBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startBlockQuote__();
 }
 /**
  * @override
  * @return {DomBodyBuilder}
  * @public
  */
 m_createBodyBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startBody__();
 }
 /**
  * @override
  * @return {DomBRBuilder}
  * @public
  */
 m_createBRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startBR__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createButtonInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startButtonInput__();
 }
 /**
  * @override
  * @return {DomCanvasBuilder}
  * @public
  */
 m_createCanvasBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startCanvas__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createCheckboxInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startCheckboxInput__();
 }
 /**
  * @override
  * @return {DomTableColBuilder}
  * @public
  */
 m_createColBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startCol__();
 }
 /**
  * @override
  * @return {TableColBuilder}
  * @public
  */
 m_createColGroupBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startColGroup__();
 }
 /**
  * @override
  * @return {DomDivBuilder}
  * @public
  */
 m_createDivBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startDiv__();
 }
 /**
  * @override
  * @return {DomDListBuilder}
  * @public
  */
 m_createDListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startDList__();
 }
 /**
  * @override
  * @return {DomFieldSetBuilder}
  * @public
  */
 m_createFieldSetBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startFieldSet__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createFileInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startFileInput__();
 }
 /**
  * @override
  * @return {DomFormBuilder}
  * @public
  */
 m_createFormBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startForm__();
 }
 /**
  * @override
  * @return {DomFrameBuilder}
  * @public
  */
 m_createFrameBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startFrame__();
 }
 /**
  * @override
  * @return {DomFrameSetBuilder}
  * @public
  */
 m_createFrameSetBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startFrameSet__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH1Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH1__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH2Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH2__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH3Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH3__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH4Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH4__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH5Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH5__();
 }
 /**
  * @override
  * @return {DomHeadingBuilder}
  * @public
  */
 m_createH6Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startH6__();
 }
 /**
  * @override
  * @return {DomHeadBuilder}
  * @public
  */
 m_createHeadBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startHead__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createHiddenInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startHiddenInput__();
 }
 /**
  * @override
  * @return {DomHRBuilder}
  * @public
  */
 m_createHRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startHR__();
 }
 /**
  * @override
  * @return {DomIFrameBuilder}
  * @public
  */
 m_createIFrameBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startIFrame__();
 }
 /**
  * @override
  * @return {DomImageBuilder}
  * @public
  */
 m_createImageBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startImage__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createImageInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startImageInput__();
 }
 /**
  * @override
  * @return {DomLabelBuilder}
  * @public
  */
 m_createLabelBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startLabel__();
 }
 /**
  * @override
  * @return {DomLegendBuilder}
  * @public
  */
 m_createLegendBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startLegend__();
 }
 /**
  * @override
  * @return {DomLIBuilder}
  * @public
  */
 m_createLIBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startLI__();
 }
 /**
  * @override
  * @return {DomLinkBuilder}
  * @public
  */
 m_createLinkBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startLink__();
 }
 /**
  * @override
  * @return {DomMapBuilder}
  * @public
  */
 m_createMapBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startMap__();
 }
 /**
  * @override
  * @return {DomMetaBuilder}
  * @public
  */
 m_createMetaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startMeta__();
 }
 /**
  * @override
  * @return {DomOListBuilder}
  * @public
  */
 m_createOListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startOList__();
 }
 /**
  * @override
  * @return {DomOptGroupBuilder}
  * @public
  */
 m_createOptGroupBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startOptGroup__();
 }
 /**
  * @override
  * @return {DomOptionBuilder}
  * @public
  */
 m_createOptionBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startOption__();
 }
 /**
  * @override
  * @return {DomParagraphBuilder}
  * @public
  */
 m_createParagraphBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startParagraph__();
 }
 /**
  * @override
  * @return {DomParamBuilder}
  * @public
  */
 m_createParamBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startParam__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createPasswordInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startPasswordInput__();
 }
 /**
  * @override
  * @return {DomPreBuilder}
  * @public
  */
 m_createPreBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startPre__();
 }
 /**
  * @override
  * @return {DomButtonBuilder}
  * @public
  */
 m_createPushButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startPushButton__();
 }
 /**
  * @override
  * @return {DomQuoteBuilder}
  * @public
  */
 m_createQuoteBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startQuote__();
 }
 /**
  * @override
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_createRadioInputBuilder__java_lang_String(name) {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startRadioInput__java_lang_String(name);
 }
 /**
  * @override
  * @return {DomButtonBuilder}
  * @public
  */
 m_createResetButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startResetButton__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createResetInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startResetInput__();
 }
 /**
  * @override
  * @return {DomScriptBuilder}
  * @public
  */
 m_createScriptBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startScript__();
 }
 /**
  * @override
  * @return {DomSelectBuilder}
  * @public
  */
 m_createSelectBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startSelect__();
 }
 /**
  * @override
  * @return {DomSourceBuilder}
  * @public
  */
 m_createSourceBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startSource__();
 }
 /**
  * @override
  * @return {DomSpanBuilder}
  * @public
  */
 m_createSpanBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startSpan__();
 }
 /**
  * @override
  * @return {DomStyleBuilder}
  * @public
  */
 m_createStyleBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startStyle__();
 }
 /**
  * @override
  * @return {DomButtonBuilder}
  * @public
  */
 m_createSubmitButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startSubmitButton__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createSubmitInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startSubmitInput__();
 }
 /**
  * @override
  * @return {DomTableBuilder}
  * @public
  */
 m_createTableBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTable__();
 }
 /**
  * @override
  * @return {DomTableCaptionBuilder}
  * @public
  */
 m_createTableCaptionBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTableCaption__();
 }
 /**
  * @override
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_createTBodyBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTBody__();
 }
 /**
  * @override
  * @return {DomTableCellBuilder}
  * @public
  */
 m_createTDBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTD__();
 }
 /**
  * @override
  * @return {DomTextAreaBuilder}
  * @public
  */
 m_createTextAreaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTextArea__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_createTextInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTextInput___$pp_org_gwtproject_dom_builder_client();
 }
 /**
  * @override
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_createTFootBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTFoot__();
 }
 /**
  * @override
  * @return {DomTableCellBuilder}
  * @public
  */
 m_createTHBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTH__();
 }
 /**
  * @override
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_createTHeadBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTHead__();
 }
 /**
  * @override
  * @return {DomTableRowBuilder}
  * @public
  */
 m_createTRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startTR__();
 }
 /**
  * @override
  * @return {DomUListBuilder}
  * @public
  */
 m_createUListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startUList__();
 }
 /**
  * @override
  * @return {DomVideoBuilder}
  * @public
  */
 m_createVideoBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_startVideo__();
 }
 /**
  * @override
  * @param {?string} tagName
  * @return {ElementBuilder}
  * @public
  */
 m_trustedCreate__java_lang_String(tagName) {
  return this.m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory().m_trustedStart__java_lang_String(tagName);
 }
 /**
  * @return {DomBuilderImpl}
  * @public
  */
 m_impl___$p_org_gwtproject_dom_builder_client_DomBuilderFactory() {
  return DomBuilderImpl.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  DomBuilderFactory.$clinit = () =>{};
  DomBuilderFactory.$loadModules();
  ElementBuilderFactory.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomBuilderFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomBuilderImpl = goog.module.get('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
 }
 
}
$Util.$setClassMetadata(DomBuilderFactory, 'org.gwtproject.dom.builder.client.DomBuilderFactory');

/** @public {DomBuilderFactory} */
DomBuilderFactory.f_instance__org_gwtproject_dom_builder_client_DomBuilderFactory_;

exports = DomBuilderFactory; 
//# sourceMappingURL=DomBuilderFactory.js.map