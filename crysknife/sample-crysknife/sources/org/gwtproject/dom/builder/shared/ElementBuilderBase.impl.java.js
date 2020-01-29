goog.module('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

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
let FieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');
let FormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FormBuilder$impl');
let FrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameBuilder$impl');
let FrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');
let HRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HRBuilder$impl');
let HeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadBuilder$impl');
let HeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');
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
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let TableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableBuilder$impl');
let TableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');
let TableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
let TableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableColBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let TextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');
let UListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.UListBuilder$impl');
let VideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.VideoBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @template T
 */
class ElementBuilderBase {
 /**
  * @abstract
  * @param {?string} name
  * @param {number} value
  * @return {T}
  * @public
  */
 m_attribute__java_lang_String__int(name, value) {}
 /**
  * @abstract
  * @param {?string} name
  * @param {?string} value
  * @return {T}
  * @public
  */
 m_attribute__java_lang_String__java_lang_String(name, value) {}
 /**
  * @abstract
  * @param {?string} className
  * @return {T}
  * @public
  */
 m_className__java_lang_String(className) {}
 /**
  * @abstract
  * @param {?string} dir
  * @return {T}
  * @public
  */
 m_dir__java_lang_String(dir) {}
 /**
  * @abstract
  * @param {?string} draggable
  * @return {T}
  * @public
  */
 m_draggable__java_lang_String(draggable) {}
 /**
  * @abstract
  * @public
  */
 m_end__() {}
 /**
  * @abstract
  * @param {?string} tagName
  * @public
  */
 m_end__java_lang_String(tagName) {}
 /**
  * @abstract
  * @public
  */
 m_endAnchor__() {}
 /**
  * @abstract
  * @public
  */
 m_endArea__() {}
 /**
  * @abstract
  * @public
  */
 m_endAudio__() {}
 /**
  * @abstract
  * @public
  */
 m_endBase__() {}
 /**
  * @abstract
  * @public
  */
 m_endBlockQuote__() {}
 /**
  * @abstract
  * @public
  */
 m_endBody__() {}
 /**
  * @abstract
  * @public
  */
 m_endBR__() {}
 /**
  * @abstract
  * @public
  */
 m_endButton__() {}
 /**
  * @abstract
  * @public
  */
 m_endCanvas__() {}
 /**
  * @abstract
  * @public
  */
 m_endCol__() {}
 /**
  * @abstract
  * @public
  */
 m_endColGroup__() {}
 /**
  * @abstract
  * @public
  */
 m_endDiv__() {}
 /**
  * @abstract
  * @public
  */
 m_endDList__() {}
 /**
  * @abstract
  * @public
  */
 m_endFieldSet__() {}
 /**
  * @abstract
  * @public
  */
 m_endForm__() {}
 /**
  * @abstract
  * @public
  */
 m_endFrame__() {}
 /**
  * @abstract
  * @public
  */
 m_endFrameSet__() {}
 /**
  * @abstract
  * @public
  */
 m_endH1__() {}
 /**
  * @abstract
  * @public
  */
 m_endH2__() {}
 /**
  * @abstract
  * @public
  */
 m_endH3__() {}
 /**
  * @abstract
  * @public
  */
 m_endH4__() {}
 /**
  * @abstract
  * @public
  */
 m_endH5__() {}
 /**
  * @abstract
  * @public
  */
 m_endH6__() {}
 /**
  * @abstract
  * @public
  */
 m_endHead__() {}
 /**
  * @abstract
  * @public
  */
 m_endHR__() {}
 /**
  * @abstract
  * @public
  */
 m_endIFrame__() {}
 /**
  * @abstract
  * @public
  */
 m_endImage__() {}
 /**
  * @abstract
  * @public
  */
 m_endInput__() {}
 /**
  * @abstract
  * @public
  */
 m_endLabel__() {}
 /**
  * @abstract
  * @public
  */
 m_endLegend__() {}
 /**
  * @abstract
  * @public
  */
 m_endLI__() {}
 /**
  * @abstract
  * @public
  */
 m_endLink__() {}
 /**
  * @abstract
  * @public
  */
 m_endMap__() {}
 /**
  * @abstract
  * @public
  */
 m_endMeta__() {}
 /**
  * @abstract
  * @public
  */
 m_endOList__() {}
 /**
  * @abstract
  * @public
  */
 m_endOptGroup__() {}
 /**
  * @abstract
  * @public
  */
 m_endOption__() {}
 /**
  * @abstract
  * @public
  */
 m_endParagraph__() {}
 /**
  * @abstract
  * @public
  */
 m_endParam__() {}
 /**
  * @abstract
  * @public
  */
 m_endPre__() {}
 /**
  * @abstract
  * @public
  */
 m_endQuote__() {}
 /**
  * @abstract
  * @public
  */
 m_endScript__() {}
 /**
  * @abstract
  * @public
  */
 m_endSelect__() {}
 /**
  * @abstract
  * @public
  */
 m_endSource__() {}
 /**
  * @abstract
  * @public
  */
 m_endSpan__() {}
 /**
  * @abstract
  * @public
  */
 m_endStyle__() {}
 /**
  * @abstract
  * @public
  */
 m_endTable__() {}
 /**
  * @abstract
  * @public
  */
 m_endTableCaption__() {}
 /**
  * @abstract
  * @public
  */
 m_endTBody__() {}
 /**
  * @abstract
  * @public
  */
 m_endTD__() {}
 /**
  * @abstract
  * @public
  */
 m_endTextArea__() {}
 /**
  * @abstract
  * @public
  */
 m_endTFoot__() {}
 /**
  * @abstract
  * @public
  */
 m_endTH__() {}
 /**
  * @abstract
  * @public
  */
 m_endTHead__() {}
 /**
  * @abstract
  * @public
  */
 m_endTR__() {}
 /**
  * @abstract
  * @public
  */
 m_endUList__() {}
 /**
  * @abstract
  * @public
  */
 m_endVideo__() {}
 /**
  * @abstract
  * @return {Object}
  * @public
  */
 m_finish__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getDepth__() {}
 /**
  * @abstract
  * @param {SafeHtml} html
  * @return {T}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {}
 /**
  * @abstract
  * @param {?string} id
  * @return {T}
  * @public
  */
 m_id__java_lang_String(id) {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isChildElementSupported__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isEndTagForbidden__() {}
 /**
  * @abstract
  * @param {?string} lang
  * @return {T}
  * @public
  */
 m_lang__java_lang_String(lang) {}
 /**
  * @abstract
  * @return {AnchorBuilder}
  * @public
  */
 m_startAnchor__() {}
 /**
  * @abstract
  * @return {AreaBuilder}
  * @public
  */
 m_startArea__() {}
 /**
  * @abstract
  * @return {AudioBuilder}
  * @public
  */
 m_startAudio__() {}
 /**
  * @abstract
  * @return {BaseBuilder}
  * @public
  */
 m_startBase__() {}
 /**
  * @abstract
  * @return {QuoteBuilder}
  * @public
  */
 m_startBlockQuote__() {}
 /**
  * @abstract
  * @return {BodyBuilder}
  * @public
  */
 m_startBody__() {}
 /**
  * @abstract
  * @return {BRBuilder}
  * @public
  */
 m_startBR__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startButtonInput__() {}
 /**
  * @abstract
  * @return {CanvasBuilder}
  * @public
  */
 m_startCanvas__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startCheckboxInput__() {}
 /**
  * @abstract
  * @return {TableColBuilder}
  * @public
  */
 m_startCol__() {}
 /**
  * @abstract
  * @return {TableColBuilder}
  * @public
  */
 m_startColGroup__() {}
 /**
  * @abstract
  * @return {DivBuilder}
  * @public
  */
 m_startDiv__() {}
 /**
  * @abstract
  * @return {DListBuilder}
  * @public
  */
 m_startDList__() {}
 /**
  * @abstract
  * @return {FieldSetBuilder}
  * @public
  */
 m_startFieldSet__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startFileInput__() {}
 /**
  * @abstract
  * @return {FormBuilder}
  * @public
  */
 m_startForm__() {}
 /**
  * @abstract
  * @return {FrameBuilder}
  * @public
  */
 m_startFrame__() {}
 /**
  * @abstract
  * @return {FrameSetBuilder}
  * @public
  */
 m_startFrameSet__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH1__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH2__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH3__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH4__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH5__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_startH6__() {}
 /**
  * @abstract
  * @return {HeadBuilder}
  * @public
  */
 m_startHead__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startHiddenInput__() {}
 /**
  * @abstract
  * @return {HRBuilder}
  * @public
  */
 m_startHR__() {}
 /**
  * @abstract
  * @return {IFrameBuilder}
  * @public
  */
 m_startIFrame__() {}
 /**
  * @abstract
  * @return {ImageBuilder}
  * @public
  */
 m_startImage__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startImageInput__() {}
 /**
  * @abstract
  * @return {LabelBuilder}
  * @public
  */
 m_startLabel__() {}
 /**
  * @abstract
  * @return {LegendBuilder}
  * @public
  */
 m_startLegend__() {}
 /**
  * @abstract
  * @return {LIBuilder}
  * @public
  */
 m_startLI__() {}
 /**
  * @abstract
  * @return {LinkBuilder}
  * @public
  */
 m_startLink__() {}
 /**
  * @abstract
  * @return {MapBuilder}
  * @public
  */
 m_startMap__() {}
 /**
  * @abstract
  * @return {MetaBuilder}
  * @public
  */
 m_startMeta__() {}
 /**
  * @abstract
  * @return {OListBuilder}
  * @public
  */
 m_startOList__() {}
 /**
  * @abstract
  * @return {OptGroupBuilder}
  * @public
  */
 m_startOptGroup__() {}
 /**
  * @abstract
  * @return {OptionBuilder}
  * @public
  */
 m_startOption__() {}
 /**
  * @abstract
  * @return {ParagraphBuilder}
  * @public
  */
 m_startParagraph__() {}
 /**
  * @abstract
  * @return {ParamBuilder}
  * @public
  */
 m_startParam__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startPasswordInput__() {}
 /**
  * @abstract
  * @return {PreBuilder}
  * @public
  */
 m_startPre__() {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_startPushButton__() {}
 /**
  * @abstract
  * @return {QuoteBuilder}
  * @public
  */
 m_startQuote__() {}
 /**
  * @abstract
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_startRadioInput__java_lang_String(name) {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_startResetButton__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startResetInput__() {}
 /**
  * @abstract
  * @return {ScriptBuilder}
  * @public
  */
 m_startScript__() {}
 /**
  * @abstract
  * @return {SelectBuilder}
  * @public
  */
 m_startSelect__() {}
 /**
  * @abstract
  * @return {SourceBuilder}
  * @public
  */
 m_startSource__() {}
 /**
  * @abstract
  * @return {SpanBuilder}
  * @public
  */
 m_startSpan__() {}
 /**
  * @abstract
  * @return {StyleBuilder}
  * @public
  */
 m_startStyle__() {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_startSubmitButton__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startSubmitInput__() {}
 /**
  * @abstract
  * @return {TableBuilder}
  * @public
  */
 m_startTable__() {}
 /**
  * @abstract
  * @return {TableCaptionBuilder}
  * @public
  */
 m_startTableCaption__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTBody__() {}
 /**
  * @abstract
  * @return {TableCellBuilder}
  * @public
  */
 m_startTD__() {}
 /**
  * @abstract
  * @return {TextAreaBuilder}
  * @public
  */
 m_startTextArea__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_startTextInput__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTFoot__() {}
 /**
  * @abstract
  * @return {TableCellBuilder}
  * @public
  */
 m_startTH__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_startTHead__() {}
 /**
  * @abstract
  * @return {TableRowBuilder}
  * @public
  */
 m_startTR__() {}
 /**
  * @abstract
  * @return {UListBuilder}
  * @public
  */
 m_startUList__() {}
 /**
  * @abstract
  * @return {VideoBuilder}
  * @public
  */
 m_startVideo__() {}
 /**
  * @abstract
  * @return {StylesBuilder}
  * @public
  */
 m_style__() {}
 /**
  * @abstract
  * @param {number} tabIndex
  * @return {T}
  * @public
  */
 m_tabIndex__int(tabIndex) {}
 /**
  * @abstract
  * @param {?string} text
  * @return {T}
  * @public
  */
 m_text__java_lang_String(text) {}
 /**
  * @abstract
  * @param {?string} title
  * @return {T}
  * @public
  */
 m_title__java_lang_String(title) {}
 /**
  * @abstract
  * @param {?string} tagName
  * @return {ElementBuilder}
  * @public
  */
 m_trustedStart__java_lang_String(tagName) {}
 /**
  * @public
  */
 static $clinit() {
  ElementBuilderBase.$clinit = () =>{};
  ElementBuilderBase.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ElementBuilderBase = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ElementBuilderBase;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementBuilderBase, 'org.gwtproject.dom.builder.shared.ElementBuilderBase');

ElementBuilderBase.$markImplementor(/** @type {Function} */ (ElementBuilderBase));

exports = ElementBuilderBase; 
//# sourceMappingURL=ElementBuilderBase.js.map