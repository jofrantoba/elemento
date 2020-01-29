goog.module('org.gwtproject.dom.builder.client.DomBuilderImpl');

goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.dom.builder.shared.ElementBuilderImpl');
goog.require('java.lang.IllegalStateException');
goog.require('nativebootstrap.Equality');
goog.require('org.gwtproject.dom.builder.client.DomAnchorBuilder');
goog.require('org.gwtproject.dom.builder.client.DomAreaBuilder');
goog.require('org.gwtproject.dom.builder.client.DomAudioBuilder');
goog.require('org.gwtproject.dom.builder.client.DomBRBuilder');
goog.require('org.gwtproject.dom.builder.client.DomBaseBuilder');
goog.require('org.gwtproject.dom.builder.client.DomBodyBuilder');
goog.require('org.gwtproject.dom.builder.client.DomButtonBuilder');
goog.require('org.gwtproject.dom.builder.client.DomCanvasBuilder');
goog.require('org.gwtproject.dom.builder.client.DomDListBuilder');
goog.require('org.gwtproject.dom.builder.client.DomDivBuilder');
goog.require('org.gwtproject.dom.builder.client.DomElementBuilder');
goog.require('org.gwtproject.dom.builder.client.DomFieldSetBuilder');
goog.require('org.gwtproject.dom.builder.client.DomFormBuilder');
goog.require('org.gwtproject.dom.builder.client.DomFrameBuilder');
goog.require('org.gwtproject.dom.builder.client.DomFrameSetBuilder');
goog.require('org.gwtproject.dom.builder.client.DomHRBuilder');
goog.require('org.gwtproject.dom.builder.client.DomHeadBuilder');
goog.require('org.gwtproject.dom.builder.client.DomHeadingBuilder');
goog.require('org.gwtproject.dom.builder.client.DomIFrameBuilder');
goog.require('org.gwtproject.dom.builder.client.DomImageBuilder');
goog.require('org.gwtproject.dom.builder.client.DomInputBuilder');
goog.require('org.gwtproject.dom.builder.client.DomLIBuilder');
goog.require('org.gwtproject.dom.builder.client.DomLabelBuilder');
goog.require('org.gwtproject.dom.builder.client.DomLegendBuilder');
goog.require('org.gwtproject.dom.builder.client.DomLinkBuilder');
goog.require('org.gwtproject.dom.builder.client.DomMapBuilder');
goog.require('org.gwtproject.dom.builder.client.DomMetaBuilder');
goog.require('org.gwtproject.dom.builder.client.DomOListBuilder');
goog.require('org.gwtproject.dom.builder.client.DomOptGroupBuilder');
goog.require('org.gwtproject.dom.builder.client.DomOptionBuilder');
goog.require('org.gwtproject.dom.builder.client.DomParagraphBuilder');
goog.require('org.gwtproject.dom.builder.client.DomParamBuilder');
goog.require('org.gwtproject.dom.builder.client.DomPreBuilder');
goog.require('org.gwtproject.dom.builder.client.DomQuoteBuilder');
goog.require('org.gwtproject.dom.builder.client.DomScriptBuilder');
goog.require('org.gwtproject.dom.builder.client.DomSelectBuilder');
goog.require('org.gwtproject.dom.builder.client.DomSourceBuilder');
goog.require('org.gwtproject.dom.builder.client.DomSpanBuilder');
goog.require('org.gwtproject.dom.builder.client.DomStyleBuilder');
goog.require('org.gwtproject.dom.builder.client.DomStylesBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableCaptionBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableCellBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableColBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableRowBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTableSectionBuilder');
goog.require('org.gwtproject.dom.builder.client.DomTextAreaBuilder');
goog.require('org.gwtproject.dom.builder.client.DomUListBuilder');
goog.require('org.gwtproject.dom.builder.client.DomVideoBuilder');
goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase');
goog.require('org.gwtproject.dom.builder.shared.InputBuilder');
goog.require('org.gwtproject.dom.builder.shared.StylesBuilder');
goog.require('org.gwtproject.dom.client.ButtonElement.$Overlay');
goog.require('org.gwtproject.dom.client.Document.$Overlay');
goog.require('org.gwtproject.dom.client.Element.$Overlay');
goog.require('org.gwtproject.dom.client.InputElement.$Overlay');
goog.require('org.gwtproject.dom.client.Node.$Overlay');
goog.require('org.gwtproject.dom.client.QuoteElement.$Overlay');
goog.require('org.gwtproject.dom.client.Style.$Overlay');
goog.require('org.gwtproject.dom.client.TableSectionElement.$Overlay');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('vmbootstrap.Exceptions');

const DomBuilderImpl = goog.require('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
exports = DomBuilderImpl; 