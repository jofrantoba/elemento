goog.module('org.gwtproject.dom.builder.shared.ElementBuilderFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderFactory$impl');
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
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
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
let UListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.UListBuilder$impl');
let VideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

/**
 * @abstract
  */
class ElementBuilderFactory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {ElementBuilderFactory}
  * @public
  */
 static m_get__() {
  ElementBuilderFactory.$clinit();
  if ($Equality.$same(ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_, null)) {
   if ($Equality.$same("safari", $Util.$getDefine("user.agent"))) {
    ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_ = DomBuilderFactory.m_get__();
   } else {
    ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_ = HtmlBuilderFactory.m_get__();
   }
  }
  return ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @return {AnchorBuilder}
  * @public
  */
 m_createAnchorBuilder__() {}
 /**
  * @abstract
  * @return {AreaBuilder}
  * @public
  */
 m_createAreaBuilder__() {}
 /**
  * @abstract
  * @return {AudioBuilder}
  * @public
  */
 m_createAudioBuilder__() {}
 /**
  * @abstract
  * @return {BaseBuilder}
  * @public
  */
 m_createBaseBuilder__() {}
 /**
  * @abstract
  * @return {QuoteBuilder}
  * @public
  */
 m_createBlockQuoteBuilder__() {}
 /**
  * @abstract
  * @return {BodyBuilder}
  * @public
  */
 m_createBodyBuilder__() {}
 /**
  * @abstract
  * @return {BRBuilder}
  * @public
  */
 m_createBRBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createButtonInputBuilder__() {}
 /**
  * @abstract
  * @return {CanvasBuilder}
  * @public
  */
 m_createCanvasBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createCheckboxInputBuilder__() {}
 /**
  * @abstract
  * @return {TableColBuilder}
  * @public
  */
 m_createColBuilder__() {}
 /**
  * @abstract
  * @return {TableColBuilder}
  * @public
  */
 m_createColGroupBuilder__() {}
 /**
  * @abstract
  * @return {DivBuilder}
  * @public
  */
 m_createDivBuilder__() {}
 /**
  * @abstract
  * @return {DListBuilder}
  * @public
  */
 m_createDListBuilder__() {}
 /**
  * @abstract
  * @return {FieldSetBuilder}
  * @public
  */
 m_createFieldSetBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createFileInputBuilder__() {}
 /**
  * @abstract
  * @return {FormBuilder}
  * @public
  */
 m_createFormBuilder__() {}
 /**
  * @abstract
  * @return {FrameBuilder}
  * @public
  */
 m_createFrameBuilder__() {}
 /**
  * @abstract
  * @return {FrameSetBuilder}
  * @public
  */
 m_createFrameSetBuilder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH1Builder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH2Builder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH3Builder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH4Builder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH5Builder__() {}
 /**
  * @abstract
  * @return {HeadingBuilder}
  * @public
  */
 m_createH6Builder__() {}
 /**
  * @abstract
  * @return {HeadBuilder}
  * @public
  */
 m_createHeadBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createHiddenInputBuilder__() {}
 /**
  * @abstract
  * @return {HRBuilder}
  * @public
  */
 m_createHRBuilder__() {}
 /**
  * @abstract
  * @return {IFrameBuilder}
  * @public
  */
 m_createIFrameBuilder__() {}
 /**
  * @abstract
  * @return {ImageBuilder}
  * @public
  */
 m_createImageBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createImageInputBuilder__() {}
 /**
  * @abstract
  * @return {LabelBuilder}
  * @public
  */
 m_createLabelBuilder__() {}
 /**
  * @abstract
  * @return {LegendBuilder}
  * @public
  */
 m_createLegendBuilder__() {}
 /**
  * @abstract
  * @return {LIBuilder}
  * @public
  */
 m_createLIBuilder__() {}
 /**
  * @abstract
  * @return {LinkBuilder}
  * @public
  */
 m_createLinkBuilder__() {}
 /**
  * @abstract
  * @return {MapBuilder}
  * @public
  */
 m_createMapBuilder__() {}
 /**
  * @abstract
  * @return {MetaBuilder}
  * @public
  */
 m_createMetaBuilder__() {}
 /**
  * @abstract
  * @return {OListBuilder}
  * @public
  */
 m_createOListBuilder__() {}
 /**
  * @abstract
  * @return {OptGroupBuilder}
  * @public
  */
 m_createOptGroupBuilder__() {}
 /**
  * @abstract
  * @return {OptionBuilder}
  * @public
  */
 m_createOptionBuilder__() {}
 /**
  * @abstract
  * @return {ParagraphBuilder}
  * @public
  */
 m_createParagraphBuilder__() {}
 /**
  * @abstract
  * @return {ParamBuilder}
  * @public
  */
 m_createParamBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createPasswordInputBuilder__() {}
 /**
  * @abstract
  * @return {PreBuilder}
  * @public
  */
 m_createPreBuilder__() {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_createPushButtonBuilder__() {}
 /**
  * @abstract
  * @return {QuoteBuilder}
  * @public
  */
 m_createQuoteBuilder__() {}
 /**
  * @abstract
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_createRadioInputBuilder__java_lang_String(name) {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_createResetButtonBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createResetInputBuilder__() {}
 /**
  * @abstract
  * @return {ScriptBuilder}
  * @public
  */
 m_createScriptBuilder__() {}
 /**
  * @abstract
  * @return {SelectBuilder}
  * @public
  */
 m_createSelectBuilder__() {}
 /**
  * @abstract
  * @return {SourceBuilder}
  * @public
  */
 m_createSourceBuilder__() {}
 /**
  * @abstract
  * @return {SpanBuilder}
  * @public
  */
 m_createSpanBuilder__() {}
 /**
  * @abstract
  * @return {StyleBuilder}
  * @public
  */
 m_createStyleBuilder__() {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_createSubmitButtonBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createSubmitInputBuilder__() {}
 /**
  * @abstract
  * @return {TableBuilder}
  * @public
  */
 m_createTableBuilder__() {}
 /**
  * @abstract
  * @return {TableCaptionBuilder}
  * @public
  */
 m_createTableCaptionBuilder__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_createTBodyBuilder__() {}
 /**
  * @abstract
  * @return {TableCellBuilder}
  * @public
  */
 m_createTDBuilder__() {}
 /**
  * @abstract
  * @return {TextAreaBuilder}
  * @public
  */
 m_createTextAreaBuilder__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_createTextInputBuilder__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_createTFootBuilder__() {}
 /**
  * @abstract
  * @return {TableCellBuilder}
  * @public
  */
 m_createTHBuilder__() {}
 /**
  * @abstract
  * @return {TableSectionBuilder}
  * @public
  */
 m_createTHeadBuilder__() {}
 /**
  * @abstract
  * @return {TableRowBuilder}
  * @public
  */
 m_createTRBuilder__() {}
 /**
  * @abstract
  * @return {UListBuilder}
  * @public
  */
 m_createUListBuilder__() {}
 /**
  * @abstract
  * @return {VideoBuilder}
  * @public
  */
 m_createVideoBuilder__() {}
 /**
  * @abstract
  * @param {?string} tagName
  * @return {ElementBuilder}
  * @public
  */
 m_trustedCreate__java_lang_String(tagName) {}
 /**
  * @public
  */
 static $clinit() {
  ElementBuilderFactory.$clinit = () =>{};
  ElementBuilderFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ElementBuilderFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomBuilderFactory = goog.module.get('org.gwtproject.dom.builder.client.DomBuilderFactory$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
 }
 
}
$Util.$setClassMetadata(ElementBuilderFactory, 'org.gwtproject.dom.builder.shared.ElementBuilderFactory');

/** @public {ElementBuilderFactory} */
ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_;

/* NATIVE.JS EPILOG */

const org_gwtproject_dom_builder_shared_ElementBuilderFactory = ElementBuilderFactory;

// ensure that user.agent defines are included
/** @suppress {extraRequire} */
const useragent = goog.require('user');


exports = ElementBuilderFactory; 
//# sourceMappingURL=ElementBuilderFactory.js.map