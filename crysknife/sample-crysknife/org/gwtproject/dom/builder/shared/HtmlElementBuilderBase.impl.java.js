goog.module('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.AbstractElementBuilderBase$impl');

let AnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');
let AreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AreaBuilder$impl');
let AudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AudioBuilder$impl');
let BRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BRBuilder$impl');
let BaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BaseBuilder$impl');
let BodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BodyBuilder$impl');
let ButtonBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ButtonBuilder$impl');
let CanvasBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');
let DListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.DListBuilder$impl');
let DivBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.DivBuilder$impl');
let ElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let FieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');
let FormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FormBuilder$impl');
let FrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameBuilder$impl');
let FrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');
let HRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HRBuilder$impl');
let HeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadBuilder$impl');
let HeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let IFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');
let ImageBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ImageBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.InputBuilder$impl');
let LIBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LIBuilder$impl');
let LabelBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LabelBuilder$impl');
let LegendBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LegendBuilder$impl');
let LinkBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LinkBuilder$impl');
let MapBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.MapBuilder$impl');
let MetaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.MetaBuilder$impl');
let OListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OListBuilder$impl');
let OptGroupBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');
let OptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OptionBuilder$impl');
let ParagraphBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');
let ParamBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ParamBuilder$impl');
let PreBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.PreBuilder$impl');
let QuoteBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');
let ScriptBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');
let SelectBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SelectBuilder$impl');
let SourceBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SourceBuilder$impl');
let SpanBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SpanBuilder$impl');
let StyleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StyleBuilder$impl');
let TableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableBuilder$impl');
let TableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');
let TableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
let TableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableColBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let TextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');
let TitleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TitleBuilder$impl');
let UListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.UListBuilder$impl');
let VideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.VideoBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TitleElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @template R
 * @extends {AbstractElementBuilderBase<R>}
  */
class HtmlElementBuilderBase extends AbstractElementBuilderBase {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HtmlBuilderImpl} */
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_;
 }
 /**
  * Factory method corresponding to constructor 'HtmlElementBuilderBase(HtmlBuilderImpl)'.
  * @template R
  * @param {HtmlBuilderImpl} delegate
  * @return {!HtmlElementBuilderBase<R>}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  HtmlElementBuilderBase.$clinit();
  let $instance = new HtmlElementBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 /**
  * Initialization from constructor 'HtmlElementBuilderBase(HtmlBuilderImpl)'.
  * @param {HtmlBuilderImpl} delegate
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, false);
 }
 /**
  * Factory method corresponding to constructor 'HtmlElementBuilderBase(HtmlBuilderImpl, boolean)'.
  * @template R
  * @param {HtmlBuilderImpl} delegate
  * @param {boolean} isEndTagForbidden
  * @return {!HtmlElementBuilderBase<R>}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, isEndTagForbidden) {
  HtmlElementBuilderBase.$clinit();
  let $instance = new HtmlElementBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, isEndTagForbidden);
  return $instance;
 }
 /**
  * Initialization from constructor 'HtmlElementBuilderBase(HtmlBuilderImpl, boolean)'.
  * @param {HtmlBuilderImpl} delegate
  * @param {boolean} isEndTagForbidden
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, isEndTagForbidden) {
  this.$ctor__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase__org_gwtproject_dom_builder_shared_ElementBuilderImpl__boolean(delegate, isEndTagForbidden);
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_ = delegate;
 }
 /**
  * @return {SafeHtml}
  * @public
  */
 m_asSafeHtml__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_asSafeHtml__();
 }
 /**
  * @override
  * @param {?string} name
  * @param {number} value
  * @return {R}
  * @public
  */
 m_attribute__java_lang_String__int(name, value) {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_attribute__java_lang_String__int(name, value);
  return this.m_getReturnBuilder__();
 }
 /**
  * @override
  * @param {?string} name
  * @param {?string} value
  * @return {R}
  * @public
  */
 m_attribute__java_lang_String__java_lang_String(name, value) {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_attribute__java_lang_String__java_lang_String(name, value);
  return this.m_getReturnBuilder__();
 }
 /**
  * @override
  * @param {?string} className
  * @return {R}
  * @public
  */
 m_className__java_lang_String(className) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("class", className);
 }
 /**
  * @override
  * @param {?string} dir
  * @return {R}
  * @public
  */
 m_dir__java_lang_String(dir) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("dir", dir);
 }
 /**
  * @override
  * @param {?string} draggable
  * @return {R}
  * @public
  */
 m_draggable__java_lang_String(draggable) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("draggable", draggable);
 }
 /**
  * @public
  */
 m_endTitle__() {
  this.m_end__java_lang_String($Overlay.f_TAG__org_gwtproject_dom_client_TitleElement_$Overlay);
 }
 /**
  * @override
  * @param {?string} id
  * @return {R}
  * @public
  */
 m_id__java_lang_String(id) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("id", id);
 }
 /**
  * @override
  * @param {?string} lang
  * @return {R}
  * @public
  */
 m_lang__java_lang_String(lang) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("lang", lang);
 }
 /**
  * @override
  * @return {AnchorBuilder}
  * @public
  */
 m_startAnchor__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startAnchor__();
 }
 /**
  * @override
  * @return {AreaBuilder}
  * @public
  */
 m_startArea__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startArea__();
 }
 /**
  * @override
  * @return {AudioBuilder}
  * @public
  */
 m_startAudio__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startAudio__();
 }
 /**
  * @override
  * @return {BaseBuilder}
  * @public
  */
 m_startBase__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startBase__();
 }
 /**
  * @override
  * @return {QuoteBuilder}
  * @public
  */
 m_startBlockQuote__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startBlockQuote__();
 }
 /**
  * @override
  * @return {BodyBuilder}
  * @public
  */
 m_startBody__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startBody__();
 }
 /**
  * @override
  * @return {BRBuilder}
  * @public
  */
 m_startBR__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startBR__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startButtonInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startButtonInput__();
 }
 /**
  * @override
  * @return {CanvasBuilder}
  * @public
  */
 m_startCanvas__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startCanvas__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startCheckboxInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startCheckboxInput__();
 }
 /**
  * @override
  * @return {TableColBuilder}
  * @public
  */
 m_startCol__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startCol__();
 }
 /**
  * @override
  * @return {TableColBuilder}
  * @public
  */
 m_startColGroup__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startColGroup__();
 }
 /**
  * @override
  * @return {DivBuilder}
  * @public
  */
 m_startDiv__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startDiv__();
 }
 /**
  * @override
  * @return {DListBuilder}
  * @public
  */
 m_startDList__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startDList__();
 }
 /**
  * @override
  * @return {FieldSetBuilder}
  * @public
  */
 m_startFieldSet__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startFieldSet__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startFileInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startFileInput__();
 }
 /**
  * @override
  * @return {FormBuilder}
  * @public
  */
 m_startForm__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startForm__();
 }
 /**
  * @override
  * @return {FrameBuilder}
  * @public
  */
 m_startFrame__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startFrame__();
 }
 /**
  * @override
  * @return {FrameSetBuilder}
  * @public
  */
 m_startFrameSet__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startFrameSet__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH1__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH1__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH2__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH2__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH3__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH3__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH4__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH4__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH5__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH5__();
 }
 /**
  * @override
  * @return {HeadingBuilder}
  * @public
  */
 m_startH6__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startH6__();
 }
 /**
  * @override
  * @return {HeadBuilder}
  * @public
  */
 m_startHead__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startHead__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startHiddenInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startHiddenInput__();
 }
 /**
  * @override
  * @return {HRBuilder}
  * @public
  */
 m_startHR__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startHR__();
 }
 /**
  * @override
  * @return {IFrameBuilder}
  * @public
  */
 m_startIFrame__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startIFrame__();
 }
 /**
  * @override
  * @return {ImageBuilder}
  * @public
  */
 m_startImage__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startImage__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startImageInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startImageInput__();
 }
 /**
  * @override
  * @return {LabelBuilder}
  * @public
  */
 m_startLabel__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startLabel__();
 }
 /**
  * @override
  * @return {LegendBuilder}
  * @public
  */
 m_startLegend__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startLegend__();
 }
 /**
  * @override
  * @return {LIBuilder}
  * @public
  */
 m_startLI__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startLI__();
 }
 /**
  * @override
  * @return {LinkBuilder}
  * @public
  */
 m_startLink__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startLink__();
 }
 /**
  * @override
  * @return {MapBuilder}
  * @public
  */
 m_startMap__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startMap__();
 }
 /**
  * @override
  * @return {MetaBuilder}
  * @public
  */
 m_startMeta__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startMeta__();
 }
 /**
  * @override
  * @return {OListBuilder}
  * @public
  */
 m_startOList__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startOList__();
 }
 /**
  * @override
  * @return {OptGroupBuilder}
  * @public
  */
 m_startOptGroup__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startOptGroup__();
 }
 /**
  * @override
  * @return {OptionBuilder}
  * @public
  */
 m_startOption__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startOption__();
 }
 /**
  * @override
  * @return {ParagraphBuilder}
  * @public
  */
 m_startParagraph__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startParagraph__();
 }
 /**
  * @override
  * @return {ParamBuilder}
  * @public
  */
 m_startParam__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startParam__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startPasswordInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startPasswordInput__();
 }
 /**
  * @override
  * @return {PreBuilder}
  * @public
  */
 m_startPre__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startPre__();
 }
 /**
  * @override
  * @return {ButtonBuilder}
  * @public
  */
 m_startPushButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startPushButton__();
 }
 /**
  * @override
  * @return {QuoteBuilder}
  * @public
  */
 m_startQuote__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startQuote__();
 }
 /**
  * @override
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_startRadioInput__java_lang_String(name) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startRadioInput__java_lang_String(name);
 }
 /**
  * @override
  * @return {ButtonBuilder}
  * @public
  */
 m_startResetButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startResetButton__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startResetInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startResetInput__();
 }
 /**
  * @override
  * @return {ScriptBuilder}
  * @public
  */
 m_startScript__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startScript__();
 }
 /**
  * @override
  * @return {SelectBuilder}
  * @public
  */
 m_startSelect__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startSelect__();
 }
 /**
  * @override
  * @return {SourceBuilder}
  * @public
  */
 m_startSource__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startSource__();
 }
 /**
  * @override
  * @return {SpanBuilder}
  * @public
  */
 m_startSpan__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startSpan__();
 }
 /**
  * @override
  * @return {StyleBuilder}
  * @public
  */
 m_startStyle__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startStyle__();
 }
 /**
  * @override
  * @return {ButtonBuilder}
  * @public
  */
 m_startSubmitButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startSubmitButton__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startSubmitInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startSubmitInput__();
 }
 /**
  * @override
  * @return {TableBuilder}
  * @public
  */
 m_startTable__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTable__();
 }
 /**
  * @override
  * @return {TableCaptionBuilder}
  * @public
  */
 m_startTableCaption__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTableCaption__();
 }
 /**
  * @override
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTBody__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTBody__();
 }
 /**
  * @override
  * @return {TableCellBuilder}
  * @public
  */
 m_startTD__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTD__();
 }
 /**
  * @override
  * @return {TextAreaBuilder}
  * @public
  */
 m_startTextArea__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTextArea__();
 }
 /**
  * @override
  * @return {InputBuilder}
  * @public
  */
 m_startTextInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTextInput__();
 }
 /**
  * @override
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTFoot__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTFoot__();
 }
 /**
  * @override
  * @return {TableCellBuilder}
  * @public
  */
 m_startTH__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTH__();
 }
 /**
  * @override
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTHead__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTHead__();
 }
 /**
  * @return {TitleBuilder}
  * @public
  */
 m_startTitle__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTitle__();
 }
 /**
  * @override
  * @return {TableRowBuilder}
  * @public
  */
 m_startTR__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startTR__();
 }
 /**
  * @override
  * @return {UListBuilder}
  * @public
  */
 m_startUList__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startUList__();
 }
 /**
  * @override
  * @return {VideoBuilder}
  * @public
  */
 m_startVideo__() {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_startVideo__();
 }
 /**
  * @override
  * @param {number} tabIndex
  * @return {R}
  * @public
  */
 m_tabIndex__int(tabIndex) {
  return this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("tabIndex", tabIndex);
 }
 /**
  * @override
  * @param {?string} title
  * @return {R}
  * @public
  */
 m_title__java_lang_String(title) {
  return this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("title", title);
 }
 /**
  * @override
  * @param {?string} tagName
  * @return {ElementBuilder}
  * @public
  */
 m_trustedStart__java_lang_String(tagName) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_trustedStart__java_lang_String(tagName);
 }
 /**
  * @param {?string} name
  * @param {number} value
  * @return {R}
  * @public
  */
 m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared(name, value) {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_trustedAttribute__java_lang_String__int(name, value);
  return this.m_getReturnBuilder__();
 }
 /**
  * @param {?string} name
  * @param {?string} value
  * @return {R}
  * @public
  */
 m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared(name, value) {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase_.m_trustedAttribute__java_lang_String__java_lang_String(name, value);
  return this.m_getReturnBuilder__();
 }
 /**
  * @public
  */
 static $clinit() {
  HtmlElementBuilderBase.$clinit = () =>{};
  HtmlElementBuilderBase.$loadModules();
  AbstractElementBuilderBase.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HtmlElementBuilderBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.TitleElement.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(HtmlElementBuilderBase, 'org.gwtproject.dom.builder.shared.HtmlElementBuilderBase');

exports = HtmlElementBuilderBase; 
//# sourceMappingURL=HtmlElementBuilderBase.js.map