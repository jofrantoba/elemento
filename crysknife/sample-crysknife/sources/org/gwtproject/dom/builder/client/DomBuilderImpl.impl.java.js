goog.module('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderImpl = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomAnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAnchorBuilder$impl');
let DomAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAreaBuilder$impl');
let DomAudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomAudioBuilder$impl');
let DomBRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBRBuilder$impl');
let DomBaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBaseBuilder$impl');
let DomBodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBodyBuilder$impl');
let DomButtonBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomButtonBuilder$impl');
let DomCanvasBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomCanvasBuilder$impl');
let DomDListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomDListBuilder$impl');
let DomDivBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomDivBuilder$impl');
let DomElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomElementBuilder$impl');
let DomFieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFieldSetBuilder$impl');
let DomFormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFormBuilder$impl');
let DomFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFrameBuilder$impl');
let DomFrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomFrameSetBuilder$impl');
let DomHRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHRBuilder$impl');
let DomHeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHeadBuilder$impl');
let DomHeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomHeadingBuilder$impl');
let DomIFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomIFrameBuilder$impl');
let DomImageBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomImageBuilder$impl');
let DomInputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomInputBuilder$impl');
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
let DomStylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomStylesBuilder$impl');
let DomTableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableBuilder$impl');
let DomTableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableCaptionBuilder$impl');
let DomTableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableCellBuilder$impl');
let DomTableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableColBuilder$impl');
let DomTableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableRowBuilder$impl');
let DomTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTableSectionBuilder$impl');
let DomTextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomTextAreaBuilder$impl');
let DomUListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomUListBuilder$impl');
let DomVideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomVideoBuilder$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let InputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.InputBuilder$impl');
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let ButtonElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let QuoteElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class DomBuilderImpl extends ElementBuilderImpl {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DomAnchorBuilder} */
  this.f_anchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomAreaBuilder} */
  this.f_areaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomAudioBuilder} */
  this.f_audioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomBaseBuilder} */
  this.f_baseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomBodyBuilder} */
  this.f_bodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomBRBuilder} */
  this.f_brBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomButtonBuilder} */
  this.f_buttonBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomCanvasBuilder} */
  this.f_canvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomDivBuilder} */
  this.f_divBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomDListBuilder} */
  this.f_dListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomElementBuilder} */
  this.f_elementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomFieldSetBuilder} */
  this.f_fieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomFormBuilder} */
  this.f_formBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomFrameBuilder} */
  this.f_frameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomFrameSetBuilder} */
  this.f_frameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomHeadBuilder} */
  this.f_headBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomHeadingBuilder} */
  this.f_headingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomHRBuilder} */
  this.f_hrBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomIFrameBuilder} */
  this.f_iFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomImageBuilder} */
  this.f_imageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomInputBuilder} */
  this.f_inputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomLabelBuilder} */
  this.f_labelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomLegendBuilder} */
  this.f_legendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomLIBuilder} */
  this.f_liBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomLinkBuilder} */
  this.f_linkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomMapBuilder} */
  this.f_mapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomMetaBuilder} */
  this.f_metaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomOListBuilder} */
  this.f_oListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomOptionBuilder} */
  this.f_optionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomOptGroupBuilder} */
  this.f_optGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomParagraphBuilder} */
  this.f_paragraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomParamBuilder} */
  this.f_paramBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomPreBuilder} */
  this.f_preBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomQuoteBuilder} */
  this.f_quoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomScriptBuilder} */
  this.f_scriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomSelectBuilder} */
  this.f_selectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomSourceBuilder} */
  this.f_sourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomSpanBuilder} */
  this.f_spanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {StylesBuilder} */
  this.f_stylesBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomStyleBuilder} */
  this.f_styleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableBuilder} */
  this.f_tableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableCellBuilder} */
  this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableCaptionBuilder} */
  this.f_tableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableColBuilder} */
  this.f_tableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableColBuilder} */
  this.f_tableColGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableRowBuilder} */
  this.f_tableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTableSectionBuilder} */
  this.f_tableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomTextAreaBuilder} */
  this.f_textAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomUListBuilder} */
  this.f_uListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {DomVideoBuilder} */
  this.f_videoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {Object} */
  this.f_rootElement__org_gwtproject_dom_builder_client_DomBuilderImpl_;
  /** @public {Object} */
  this.f_currentElement__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {!DomBuilderImpl}
  * @public
  */
 static $create__() {
  DomBuilderImpl.$clinit();
  let $instance = new DomBuilderImpl();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBuilderImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_builder_client_DomBuilderImpl__() {
  this.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl__();
  this.$init___$p_org_gwtproject_dom_builder_client_DomBuilderImpl();
 }
 /**
  * @return {DomAnchorBuilder}
  * @public
  */
 m_startAnchor__() {
  if ($Equality.$same(this.f_anchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_anchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomAnchorBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createAnchorElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_anchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_anchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomAreaBuilder}
  * @public
  */
 m_startArea__() {
  if ($Equality.$same(this.f_areaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_areaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomAreaBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createAreaElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_areaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_areaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomAudioBuilder}
  * @public
  */
 m_startAudio__() {
  if ($Equality.$same(this.f_audioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_audioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomAudioBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createAudioElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_audioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_audioBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomBaseBuilder}
  * @public
  */
 m_startBase__() {
  if ($Equality.$same(this.f_baseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_baseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomBaseBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createBaseElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_baseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_baseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomQuoteBuilder}
  * @public
  */
 m_startBlockQuote__() {
  return this.m_startQuote__org_gwtproject_dom_client_QuoteElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createBlockQuoteElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomBodyBuilder}
  * @public
  */
 m_startBody__() {
  if ($Equality.$same(this.f_bodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_bodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomBodyBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($Overlay.m_get__(), "body"), this.f_bodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_bodyBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomBRBuilder}
  * @public
  */
 m_startBR__() {
  if ($Equality.$same(this.f_brBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_brBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomBRBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createBRElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_brBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_brBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startButtonInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createButtonInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomCanvasBuilder}
  * @public
  */
 m_startCanvas__() {
  if ($Equality.$same(this.f_canvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_canvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomCanvasBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_canvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_canvasBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startCheckboxInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createCheckInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomTableColBuilder}
  * @public
  */
 m_startCol__() {
  if ($Equality.$same(this.f_tableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_tableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableColBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(this, false);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createColElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTableColBuilder}
  * @public
  */
 m_startColGroup__() {
  if ($Equality.$same(this.f_tableColGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_tableColGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableColBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(this, true);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createColGroupElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableColGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableColGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomDivBuilder}
  * @public
  */
 m_startDiv__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_divBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_divBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomDListBuilder}
  * @public
  */
 m_startDList__() {
  if ($Equality.$same(this.f_dListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_dListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomDListBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createDLElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_dListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_dListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomFieldSetBuilder}
  * @public
  */
 m_startFieldSet__() {
  if ($Equality.$same(this.f_fieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_fieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomFieldSetBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createFieldSetElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_fieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_fieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startFileInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createFileInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomFormBuilder}
  * @public
  */
 m_startForm__() {
  if ($Equality.$same(this.f_formBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_formBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomFormBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createFormElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_formBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_formBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomFrameBuilder}
  * @public
  */
 m_startFrame__() {
  if ($Equality.$same(this.f_frameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_frameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomFrameBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createFrameElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_frameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_frameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomFrameSetBuilder}
  * @public
  */
 m_startFrameSet__() {
  if ($Equality.$same(this.f_frameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_frameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomFrameSetBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createFrameSetElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_frameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_frameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH1__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(1);
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH2__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(2);
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH3__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(3);
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH4__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(4);
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH5__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(5);
 }
 /**
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startH6__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(6);
 }
 /**
  * @return {DomHeadBuilder}
  * @public
  */
 m_startHead__() {
  if ($Equality.$same(this.f_headBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_headBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomHeadBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createHeadElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_headBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_headBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startHiddenInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createHiddenInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomHRBuilder}
  * @public
  */
 m_startHR__() {
  if ($Equality.$same(this.f_hrBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_hrBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomHRBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createHRElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_hrBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_hrBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomIFrameBuilder}
  * @public
  */
 m_startIFrame__() {
  if ($Equality.$same(this.f_iFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_iFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomIFrameBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createIFrameElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_iFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_iFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomImageBuilder}
  * @public
  */
 m_startImage__() {
  if ($Equality.$same(this.f_imageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_imageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomImageBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createImageElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_imageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_imageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startImageInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createImageInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @param {Object} input
  * @return {DomInputBuilder}
  * @public
  */
 m_startInput__org_gwtproject_dom_client_InputElement(input) {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(input, this.f_inputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_inputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomLabelBuilder}
  * @public
  */
 m_startLabel__() {
  if ($Equality.$same(this.f_labelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_labelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomLabelBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createLabelElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_labelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_labelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomLegendBuilder}
  * @public
  */
 m_startLegend__() {
  if ($Equality.$same(this.f_legendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_legendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomLegendBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createLegendElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_legendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_legendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomLIBuilder}
  * @public
  */
 m_startLI__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createLIElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_liBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_liBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomLinkBuilder}
  * @public
  */
 m_startLink__() {
  if ($Equality.$same(this.f_linkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_linkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomLinkBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createLinkElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_linkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_linkBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomMapBuilder}
  * @public
  */
 m_startMap__() {
  if ($Equality.$same(this.f_mapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_mapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomMapBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createMapElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_mapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_mapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomMetaBuilder}
  * @public
  */
 m_startMeta__() {
  if ($Equality.$same(this.f_metaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_metaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomMetaBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createMetaElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_metaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_metaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomOListBuilder}
  * @public
  */
 m_startOList__() {
  if ($Equality.$same(this.f_oListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_oListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomOListBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createOLElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_oListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_oListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomOptGroupBuilder}
  * @public
  */
 m_startOptGroup__() {
  if ($Equality.$same(this.f_optGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_optGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomOptGroupBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createOptGroupElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_optGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_optGroupBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomOptionBuilder}
  * @public
  */
 m_startOption__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createOptionElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_optionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_optionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomParagraphBuilder}
  * @public
  */
 m_startParagraph__() {
  if ($Equality.$same(this.f_paragraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_paragraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomParagraphBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createPElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_paragraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_paragraphBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomParamBuilder}
  * @public
  */
 m_startParam__() {
  if ($Equality.$same(this.f_paramBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_paramBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomParamBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createParamElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_paramBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_paramBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startPasswordInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createPasswordInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomPreBuilder}
  * @public
  */
 m_startPre__() {
  if ($Equality.$same(this.f_preBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_preBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomPreBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createPreElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_preBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_preBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomButtonBuilder}
  * @public
  */
 m_startPushButton__() {
  return this.m_startButton__org_gwtproject_dom_client_ButtonElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createPushButtonElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomQuoteBuilder}
  * @public
  */
 m_startQuote__() {
  return this.m_startQuote__org_gwtproject_dom_client_QuoteElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createQElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_startRadioInput__java_lang_String(name) {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createRadioInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($Overlay.m_get__(), name));
 }
 /**
  * @return {DomButtonBuilder}
  * @public
  */
 m_startResetButton__() {
  return this.m_startButton__org_gwtproject_dom_client_ButtonElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createResetButtonElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startResetInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createSubmitInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomScriptBuilder}
  * @public
  */
 m_startScript__() {
  if ($Equality.$same(this.f_scriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_scriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomScriptBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createScriptElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_scriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_scriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomSelectBuilder}
  * @public
  */
 m_startSelect__() {
  if ($Equality.$same(this.f_selectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_selectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomSelectBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createSelectElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_selectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_selectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomSourceBuilder}
  * @public
  */
 m_startSource__() {
  if ($Equality.$same(this.f_sourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_sourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomSourceBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createSourceElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_sourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_sourceBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomSpanBuilder}
  * @public
  */
 m_startSpan__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_spanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_spanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomStyleBuilder}
  * @public
  */
 m_startStyle__() {
  if ($Equality.$same(this.f_styleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_styleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomStyleBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createStyleElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_styleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_styleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomButtonBuilder}
  * @public
  */
 m_startSubmitButton__() {
  return this.m_startButton__org_gwtproject_dom_client_ButtonElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createSubmitButtonElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startSubmitInput__() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createSubmitInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomTableBuilder}
  * @public
  */
 m_startTable__() {
  if ($Equality.$same(this.f_tableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_tableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTableElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTableCaptionBuilder}
  * @public
  */
 m_startTableCaption__() {
  if ($Equality.$same(this.f_tableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_tableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableCaptionBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createCaptionElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableCaptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_startTBody__() {
  return this.m_startTableSection__org_gwtproject_dom_client_TableSectionElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomTableCellBuilder}
  * @public
  */
 m_startTD__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTDElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTextAreaBuilder}
  * @public
  */
 m_startTextArea__() {
  if ($Equality.$same(this.f_textAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_textAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTextAreaBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTextAreaElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_textAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_textAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_startTFoot__() {
  return this.m_startTableSection__org_gwtproject_dom_client_TableSectionElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTFootElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomTableCellBuilder}
  * @public
  */
 m_startTH__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTHElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_startTHead__() {
  return this.m_startTableSection__org_gwtproject_dom_client_TableSectionElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTHeadElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @return {DomTableRowBuilder}
  * @public
  */
 m_startTR__() {
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createTRElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_tableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomUListBuilder}
  * @public
  */
 m_startUList__() {
  if ($Equality.$same(this.f_uListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_uListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomUListBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createULElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_uListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_uListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {DomVideoBuilder}
  * @public
  */
 m_startVideo__() {
  if ($Equality.$same(this.f_videoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_videoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomVideoBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createVideoElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), this.f_videoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_videoBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @override
  * @return {StylesBuilder}
  * @public
  */
 m_style__() {
  return this.f_stylesBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @param {?string} tagName
  * @return {DomElementBuilder}
  * @public
  */
 m_trustedStart__java_lang_String(tagName) {
  this.m_assertValidTagName__java_lang_String(tagName);
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($Overlay.m_get__(), tagName), this.f_elementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_elementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @override
  * @public
  */
 m_doCloseStartTagImpl__() {}
 /**
  * @override
  * @public
  */
 m_doCloseStyleAttributeImpl__() {}
 /**
  * @override
  * @public
  */
 m_doEndStartTagImpl__() {
  this.m_popElement___$p_org_gwtproject_dom_builder_client_DomBuilderImpl();
 }
 /**
  * @override
  * @param {?string} tagName
  * @public
  */
 m_doEndTagImpl__java_lang_String(tagName) {
  this.m_popElement___$p_org_gwtproject_dom_builder_client_DomBuilderImpl();
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_doFinishImpl__() {
  return this.f_rootElement__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_doHtmlImpl__org_gwtproject_safehtml_shared_SafeHtml(html) {
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client(), html);
 }
 /**
  * @override
  * @public
  */
 m_doOpenStyleImpl__() {}
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_doTextImpl__java_lang_String(text) {
  Element_$Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client(), text);
 }
 /**
  * @override
  * @public
  */
 m_lockCurrentElement__() {
  super.m_lockCurrentElement__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_assertCanAddAttribute___$pp_org_gwtproject_dom_builder_client() {
  this.m_assertCanAddAttributeImpl__();
  return this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client();
 }
 /**
  * @return {Object}
  * @public
  */
 m_assertCanAddStyleProperty___$pp_org_gwtproject_dom_builder_client() {
  this.m_assertCanAddStylePropertyImpl__();
  return this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client().style;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getCurrentElement___$pp_org_gwtproject_dom_builder_client() {
  if ($Equality.$same(this.f_currentElement__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("There are no elements on the stack."));
  }
  return this.f_currentElement__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @return {InputBuilder}
  * @public
  */
 m_startTextInput___$pp_org_gwtproject_dom_builder_client() {
  return this.m_startInput__org_gwtproject_dom_client_InputElement($Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @public
  */
 m_popElement___$p_org_gwtproject_dom_builder_client_DomBuilderImpl() {
  this.f_currentElement__org_gwtproject_dom_builder_client_DomBuilderImpl_ = Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client());
 }
 /**
  * @param {Object} element
  * @param {ElementBuilderBase<?>} builder
  * @public
  */
 m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(element, builder) {
  this.m_onStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(element), builder);
  if ($Equality.$same(this.f_rootElement__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_rootElement__org_gwtproject_dom_builder_client_DomBuilderImpl_ = element;
  } else {
   this.m_getCurrentElement___$pp_org_gwtproject_dom_builder_client().appendChild(element);
  }
  this.f_currentElement__org_gwtproject_dom_builder_client_DomBuilderImpl_ = element;
 }
 /**
  * @param {Object} button
  * @return {DomButtonBuilder}
  * @public
  */
 m_startButton__org_gwtproject_dom_client_ButtonElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(button) {
  if ($Equality.$same(this.f_buttonBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_buttonBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomButtonBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(button, this.f_buttonBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_buttonBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @param {number} level
  * @return {DomHeadingBuilder}
  * @public
  */
 m_startHeading__int_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(level) {
  if ($Equality.$same(this.f_headingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_headingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomHeadingBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl($Overlay.m_createHElement__$devirt__org_gwtproject_dom_client_Document__int($Overlay.m_get__(), level), this.f_headingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_headingBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @param {Object} quote
  * @return {DomQuoteBuilder}
  * @public
  */
 m_startQuote__org_gwtproject_dom_client_QuoteElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(quote) {
  if ($Equality.$same(this.f_quoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_quoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomQuoteBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(quote, this.f_quoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_quoteBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @param {Object} section
  * @return {DomTableSectionBuilder}
  * @public
  */
 m_startTableSection__org_gwtproject_dom_client_TableSectionElement_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(section) {
  if ($Equality.$same(this.f_tableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_, null)) {
   this.f_tableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableSectionBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  }
  this.m_start__org_gwtproject_dom_client_Element__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_client_DomBuilderImpl(section, this.f_tableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_);
  return this.f_tableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_dom_builder_client_DomBuilderImpl() {
  this.f_divBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomDivBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_elementBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomElementBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_inputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomInputBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_liBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomLIBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_optionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomOptionBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_spanBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomSpanBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_stylesBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomStylesBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_tableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableCellBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
  this.f_tableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl_ = DomTableRowBuilder.$create__org_gwtproject_dom_builder_client_DomBuilderImpl(this);
 }
 /**
  * @public
  */
 static $clinit() {
  DomBuilderImpl.$clinit = () =>{};
  DomBuilderImpl.$loadModules();
  ElementBuilderImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DomBuilderImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomAnchorBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomAnchorBuilder$impl');
  DomAreaBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomAreaBuilder$impl');
  DomAudioBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomAudioBuilder$impl');
  DomBRBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomBRBuilder$impl');
  DomBaseBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomBaseBuilder$impl');
  DomBodyBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomBodyBuilder$impl');
  DomButtonBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomButtonBuilder$impl');
  DomCanvasBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomCanvasBuilder$impl');
  DomDListBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomDListBuilder$impl');
  DomDivBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomDivBuilder$impl');
  DomElementBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomElementBuilder$impl');
  DomFieldSetBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomFieldSetBuilder$impl');
  DomFormBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomFormBuilder$impl');
  DomFrameBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomFrameBuilder$impl');
  DomFrameSetBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomFrameSetBuilder$impl');
  DomHRBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomHRBuilder$impl');
  DomHeadBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomHeadBuilder$impl');
  DomHeadingBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomHeadingBuilder$impl');
  DomIFrameBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomIFrameBuilder$impl');
  DomImageBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomImageBuilder$impl');
  DomInputBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomInputBuilder$impl');
  DomLIBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomLIBuilder$impl');
  DomLabelBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomLabelBuilder$impl');
  DomLegendBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomLegendBuilder$impl');
  DomLinkBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomLinkBuilder$impl');
  DomMapBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomMapBuilder$impl');
  DomMetaBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomMetaBuilder$impl');
  DomOListBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomOListBuilder$impl');
  DomOptGroupBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomOptGroupBuilder$impl');
  DomOptionBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomOptionBuilder$impl');
  DomParagraphBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomParagraphBuilder$impl');
  DomParamBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomParamBuilder$impl');
  DomPreBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomPreBuilder$impl');
  DomQuoteBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomQuoteBuilder$impl');
  DomScriptBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomScriptBuilder$impl');
  DomSelectBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomSelectBuilder$impl');
  DomSourceBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomSourceBuilder$impl');
  DomSpanBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomSpanBuilder$impl');
  DomStyleBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomStyleBuilder$impl');
  DomStylesBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomStylesBuilder$impl');
  DomTableBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableBuilder$impl');
  DomTableCaptionBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableCaptionBuilder$impl');
  DomTableCellBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableCellBuilder$impl');
  DomTableColBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableColBuilder$impl');
  DomTableRowBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableRowBuilder$impl');
  DomTableSectionBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTableSectionBuilder$impl');
  DomTextAreaBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomTextAreaBuilder$impl');
  DomUListBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomUListBuilder$impl');
  DomVideoBuilder = goog.module.get('org.gwtproject.dom.builder.client.DomVideoBuilder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomBuilderImpl, 'org.gwtproject.dom.builder.client.DomBuilderImpl');

exports = DomBuilderImpl; 
//# sourceMappingURL=DomBuilderImpl.js.map