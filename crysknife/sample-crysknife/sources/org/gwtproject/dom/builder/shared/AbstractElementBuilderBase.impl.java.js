goog.module('org.gwtproject.dom.builder.shared.AbstractElementBuilderBase$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let ElementBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let AreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
let AudioElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
let BRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BRElement.$Overlay$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
let BodyElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
let ButtonElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let DListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DListElement.$Overlay$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let FormElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let FrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let FrameSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
let HRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HRElement.$Overlay$impl');
let HeadElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
let HeadingElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let LIElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LIElement.$Overlay$impl');
let LabelElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let LegendElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
let LinkElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
let MapElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MapElement.$Overlay$impl');
let MetaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
let OListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OListElement.$Overlay$impl');
let OptGroupElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
let OptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let ParagraphElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');
let ParamElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ParamElement.$Overlay$impl');
let PreElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.PreElement.$Overlay$impl');
let QuoteElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
let ScriptElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
let SelectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let SourceElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
let SpanElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
let StyleElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
let TableCaptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');
let TableCellElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let TableColElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let TableElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let TextAreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
let UListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.UListElement.$Overlay$impl');
let VideoElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @abstract
 * @template R
 * @implements {ElementBuilderBase<R>}
  */
class AbstractElementBuilderBase extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ElementBuilderImpl} */
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_;
  /** @public {boolean} */
  this.f_isEndTagForbidden__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_ = false;
  /** @public {R} */
  this.f_returnBuilder__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_;
 }
 /**
  * @param {ElementBuilderImpl} delegate
  * @param {boolean} isEndTagForbidden
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase__org_gwtproject_dom_builder_shared_ElementBuilderImpl__boolean(delegate, isEndTagForbidden) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_ = delegate;
  this.f_isEndTagForbidden__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_ = isEndTagForbidden;
  this.f_returnBuilder__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_ = /**@type {R} */ (this);
 }
 /**
  * @override
  * @public
  */
 m_end__() {
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_end__();
 }
 /**
  * @override
  * @param {?string} tagName
  * @public
  */
 m_end__java_lang_String(tagName) {
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_end__java_lang_String(tagName);
 }
 /**
  * @override
  * @public
  */
 m_endAnchor__() {
  this.m_end__java_lang_String($Overlay.f_TAG__org_gwtproject_dom_client_AnchorElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endArea__() {
  this.m_end__java_lang_String(AreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_AreaElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endAudio__() {
  this.m_end__java_lang_String(AudioElement_$Overlay.f_TAG__org_gwtproject_dom_client_AudioElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endBase__() {
  this.m_end__java_lang_String(BaseElement_$Overlay.f_TAG__org_gwtproject_dom_client_BaseElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endBlockQuote__() {
  this.m_end__java_lang_String(QuoteElement_$Overlay.f_TAG_BLOCKQUOTE__org_gwtproject_dom_client_QuoteElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endBody__() {
  this.m_end__java_lang_String(BodyElement_$Overlay.f_TAG__org_gwtproject_dom_client_BodyElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endBR__() {
  this.m_end__java_lang_String(BRElement_$Overlay.f_TAG__org_gwtproject_dom_client_BRElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endButton__() {
  this.m_end__java_lang_String(ButtonElement_$Overlay.f_TAG__org_gwtproject_dom_client_ButtonElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endCanvas__() {
  this.m_end__java_lang_String(CanvasElement_$Overlay.f_TAG__org_gwtproject_dom_client_CanvasElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endCol__() {
  this.m_end__java_lang_String(TableColElement_$Overlay.f_TAG_COL__org_gwtproject_dom_client_TableColElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endColGroup__() {
  this.m_end__java_lang_String(TableColElement_$Overlay.f_TAG_COLGROUP__org_gwtproject_dom_client_TableColElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endDiv__() {
  this.m_end__java_lang_String(DivElement_$Overlay.f_TAG__org_gwtproject_dom_client_DivElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endDList__() {
  this.m_end__java_lang_String(DListElement_$Overlay.f_TAG__org_gwtproject_dom_client_DListElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endFieldSet__() {
  this.m_end__java_lang_String(FieldSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FieldSetElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endForm__() {
  this.m_end__java_lang_String(FormElement_$Overlay.f_TAG__org_gwtproject_dom_client_FormElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endFrame__() {
  this.m_end__java_lang_String(FrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endFrameSet__() {
  this.m_end__java_lang_String(FrameSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameSetElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH1__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H1__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH2__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H2__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH3__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H3__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH4__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H4__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH5__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H5__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endH6__() {
  this.m_end__java_lang_String(HeadingElement_$Overlay.f_TAG_H6__org_gwtproject_dom_client_HeadingElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endHead__() {
  this.m_end__java_lang_String(HeadElement_$Overlay.f_TAG__org_gwtproject_dom_client_HeadElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endHR__() {
  this.m_end__java_lang_String(HRElement_$Overlay.f_TAG__org_gwtproject_dom_client_HRElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endIFrame__() {
  this.m_end__java_lang_String(IFrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_IFrameElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endImage__() {
  this.m_end__java_lang_String(ImageElement_$Overlay.f_TAG__org_gwtproject_dom_client_ImageElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endInput__() {
  this.m_end__java_lang_String(InputElement_$Overlay.f_TAG__org_gwtproject_dom_client_InputElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endLabel__() {
  this.m_end__java_lang_String(LabelElement_$Overlay.f_TAG__org_gwtproject_dom_client_LabelElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endLegend__() {
  this.m_end__java_lang_String(LegendElement_$Overlay.f_TAG__org_gwtproject_dom_client_LegendElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endLI__() {
  this.m_end__java_lang_String(LIElement_$Overlay.f_TAG__org_gwtproject_dom_client_LIElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endLink__() {
  this.m_end__java_lang_String(LinkElement_$Overlay.f_TAG__org_gwtproject_dom_client_LinkElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endMap__() {
  this.m_end__java_lang_String(MapElement_$Overlay.f_TAG__org_gwtproject_dom_client_MapElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endMeta__() {
  this.m_end__java_lang_String(MetaElement_$Overlay.f_TAG__org_gwtproject_dom_client_MetaElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endOList__() {
  this.m_end__java_lang_String(OListElement_$Overlay.f_TAG__org_gwtproject_dom_client_OListElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endOptGroup__() {
  this.m_end__java_lang_String(OptGroupElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptGroupElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endOption__() {
  this.m_end__java_lang_String(OptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptionElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endParagraph__() {
  this.m_end__java_lang_String(ParagraphElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParagraphElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endParam__() {
  this.m_end__java_lang_String(ParamElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParamElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endPre__() {
  this.m_end__java_lang_String(PreElement_$Overlay.f_TAG__org_gwtproject_dom_client_PreElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endQuote__() {
  this.m_end__java_lang_String(QuoteElement_$Overlay.f_TAG_Q__org_gwtproject_dom_client_QuoteElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endScript__() {
  this.m_end__java_lang_String(ScriptElement_$Overlay.f_TAG__org_gwtproject_dom_client_ScriptElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endSelect__() {
  this.m_end__java_lang_String(SelectElement_$Overlay.f_TAG__org_gwtproject_dom_client_SelectElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endSource__() {
  this.m_end__java_lang_String(SourceElement_$Overlay.f_TAG__org_gwtproject_dom_client_SourceElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endSpan__() {
  this.m_end__java_lang_String(SpanElement_$Overlay.f_TAG__org_gwtproject_dom_client_SpanElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endStyle__() {
  this.m_end__java_lang_String(StyleElement_$Overlay.f_TAG__org_gwtproject_dom_client_StyleElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTable__() {
  this.m_end__java_lang_String(TableElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTableCaption__() {
  this.m_end__java_lang_String(TableCaptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableCaptionElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTBody__() {
  this.m_end__java_lang_String(TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTD__() {
  this.m_end__java_lang_String(TableCellElement_$Overlay.f_TAG_TD__org_gwtproject_dom_client_TableCellElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTextArea__() {
  this.m_end__java_lang_String(TextAreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_TextAreaElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTFoot__() {
  this.m_end__java_lang_String(TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTH__() {
  this.m_end__java_lang_String(TableCellElement_$Overlay.f_TAG_TH__org_gwtproject_dom_client_TableCellElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTHead__() {
  this.m_end__java_lang_String(TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endTR__() {
  this.m_end__java_lang_String(TableRowElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableRowElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endUList__() {
  this.m_end__java_lang_String(UListElement_$Overlay.f_TAG__org_gwtproject_dom_client_UListElement_$Overlay);
 }
 /**
  * @override
  * @public
  */
 m_endVideo__() {
  this.m_end__java_lang_String(VideoElement_$Overlay.f_TAG__org_gwtproject_dom_client_VideoElement_$Overlay);
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_finish__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_finish__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getDepth__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_getDepth__();
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @return {R}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_html__org_gwtproject_safehtml_shared_SafeHtml(html);
  return this.m_getReturnBuilder__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isChildElementSupported__() {
  return !this.f_isEndTagForbidden__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEndTagForbidden__() {
  return this.f_isEndTagForbidden__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_;
 }
 /**
  * @override
  * @return {StylesBuilder}
  * @public
  */
 m_style__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_style__();
 }
 /**
  * @override
  * @param {?string} text
  * @return {R}
  * @public
  */
 m_text__java_lang_String(text) {
  this.f_delegate__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_.m_text__java_lang_String(text);
  return this.m_getReturnBuilder__();
 }
 /**
  * @return {R}
  * @public
  */
 m_getReturnBuilder__() {
  return this.f_returnBuilder__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase_;
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractElementBuilderBase.$clinit = () =>{};
  AbstractElementBuilderBase.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractElementBuilderBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
  AreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
  AudioElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
  BRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BRElement.$Overlay$impl');
  BaseElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
  BodyElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
  ButtonElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
  CanvasElement_$Overlay = goog.module.get('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
  DListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DListElement.$Overlay$impl');
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  FieldSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
  FormElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  FrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  FrameSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
  HRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HRElement.$Overlay$impl');
  HeadElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
  HeadingElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  InputElement_$Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  LIElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LIElement.$Overlay$impl');
  LabelElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
  LegendElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
  LinkElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
  MapElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MapElement.$Overlay$impl');
  MetaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
  OListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OListElement.$Overlay$impl');
  OptGroupElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
  OptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  ParagraphElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');
  ParamElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ParamElement.$Overlay$impl');
  PreElement_$Overlay = goog.module.get('org.gwtproject.dom.client.PreElement.$Overlay$impl');
  QuoteElement_$Overlay = goog.module.get('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
  ScriptElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
  SelectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  SourceElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
  SpanElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
  StyleElement_$Overlay = goog.module.get('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
  TableCaptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');
  TableCellElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  TableColElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  TableElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  TableRowElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  TextAreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
  UListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.UListElement.$Overlay$impl');
  VideoElement_$Overlay = goog.module.get('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(AbstractElementBuilderBase, 'org.gwtproject.dom.builder.shared.AbstractElementBuilderBase');

ElementBuilderBase.$markImplementor(AbstractElementBuilderBase);

exports = AbstractElementBuilderBase; 
//# sourceMappingURL=AbstractElementBuilderBase.js.map