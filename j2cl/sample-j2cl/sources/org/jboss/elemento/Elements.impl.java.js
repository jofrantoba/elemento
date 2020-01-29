goog.module('org.jboss.elemento.Elements$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAreaElement.$Overlay$impl');
let HTMLAudioElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAudioElement.$Overlay$impl');
let HTMLBRElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLBRElement.$Overlay$impl');
let HTMLBodyElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLBodyElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLDListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDListElement.$Overlay$impl');
let HTMLDataListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDataListElement.$Overlay$impl');
let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLEmbedElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLEmbedElement.$Overlay$impl');
let HTMLFieldSetElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFieldSetElement.$Overlay$impl');
let HTMLFormElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLFormElement.$Overlay$impl');
let HTMLHRElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHRElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let HTMLIFrameElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLLegendElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLegendElement.$Overlay$impl');
let HTMLMapElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLMapElement.$Overlay$impl');
let HTMLMeterElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLMeterElement.$Overlay$impl');
let HTMLModElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLModElement.$Overlay$impl');
let HTMLOListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOListElement.$Overlay$impl');
let HTMLObjectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLObjectElement.$Overlay$impl');
let HTMLOptGroupElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
let HTMLOptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOptionElement.$Overlay$impl');
let HTMLOutputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLOutputElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let HTMLParamElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParamElement.$Overlay$impl');
let HTMLPreElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPreElement.$Overlay$impl');
let HTMLProgressElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLProgressElement.$Overlay$impl');
let HTMLQuoteElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLQuoteElement.$Overlay$impl');
let HTMLScriptElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLScriptElement.$Overlay$impl');
let HTMLSelectElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSelectElement.$Overlay$impl');
let HTMLSourceElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLSourceElement.$Overlay$impl');
let HTMLTableCaptionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
let HTMLTableCellElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
let HTMLTableColElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableColElement.$Overlay$impl');
let HTMLTableElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableElement.$Overlay$impl');
let HTMLTableRowElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
let HTMLTableSectionElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
let HTMLTextAreaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
let HTMLTrackElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLTrackElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Spliterators = goog.forwardDeclare('java.util.Spliterators$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let StreamSupport = goog.forwardDeclare('java.util.stream.StreamSupport$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let BodyObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let ElementCreator = goog.forwardDeclare('org.jboss.elemento.ElementCreator$impl');
let $1 = goog.forwardDeclare('org.jboss.elemento.Elements.$1$impl');
let AsHTMLElement = goog.forwardDeclare('org.jboss.elemento.Elements.AsHTMLElement$impl');
let FilterHTMLElements = goog.forwardDeclare('org.jboss.elemento.Elements.FilterHTMLElements$impl');
let JsArrayElementIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
let JsArrayLikeIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');
let JsArrayNodeIterator = goog.forwardDeclare('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
let ElementsBag = goog.forwardDeclare('org.jboss.elemento.ElementsBag$impl');
let EmptyContentBuilder = goog.forwardDeclare('org.jboss.elemento.EmptyContentBuilder$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.jboss.elemento.InputBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let TextContentBuilder = goog.forwardDeclare('org.jboss.elemento.TextContentBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $JavaScriptObject = goog.forwardDeclare('vmbootstrap.JavaScriptObject$impl');

class Elements extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {HtmlContentBuilder<HTMLBodyElement>}
  * @public
  */
 static m_body__() {
  Elements.$clinit();
  return /**@type {!HtmlContentBuilder<HTMLBodyElement>} */ (HtmlContentBuilder.$create__elemental2_dom_HTMLElement($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_address__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("address", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_address__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_article__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("article", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_article__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_aside__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("aside", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_aside__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_footer__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("footer", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_footer__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @param {number} n
  * @return {HtmlContentBuilder<HTMLHeadingElement>}
  * @public
  */
 static m_h__int(n) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLHeadingElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("h" + n, Class.$get($JavaScriptObject)));
 }
 /**
  * @param {number} n
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLHeadingElement>}
  * @public
  */
 static m_h__int__java_lang_String(n, text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLHeadingElement>} */ ($Casts.$to(Elements.m_h__int(n).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLHeadingElement>}
  * @public
  */
 static m_h__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLHeadingElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLHeadingElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLHeadingElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_header__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("header", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_header__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_hgroup__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("hgroup", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_hgroup__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_nav__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("nav", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_nav__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_section__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("section", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_section__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLQuoteElement>}
  * @public
  */
 static m_blockquote__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLQuoteElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("blockquote", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLQuoteElement>}
  * @public
  */
 static m_blockquote__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLQuoteElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLQuoteElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLQuoteElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dd__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("dd", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dd__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLDivElement>}
  * @public
  */
 static m_div__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDivElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("div", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLDivElement>}
  * @public
  */
 static m_div__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDivElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLDivElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLDivElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLDListElement>}
  * @public
  */
 static m_dl__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDListElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("dl", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLDListElement>}
  * @public
  */
 static m_dl__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDListElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLDListElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLDListElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dt__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("dt", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dt__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_figcaption__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("figcaption", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_figcaption__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_figure__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("figure", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_figure__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLHRElement>}
  * @public
  */
 static m_hr__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLHRElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("hr", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLHRElement>}
  * @public
  */
 static m_hr__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLHRElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLHRElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLHRElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLLIElement>}
  * @public
  */
 static m_li__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLIElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("li", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLLIElement>}
  * @public
  */
 static m_li__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLIElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLLIElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLLIElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_main__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("main", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_main__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLOListElement>}
  * @public
  */
 static m_ol__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOListElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("ol", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLOListElement>}
  * @public
  */
 static m_ol__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOListElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLOListElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLOListElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLParagraphElement>}
  * @public
  */
 static m_p__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLParagraphElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("p", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLParagraphElement>}
  * @public
  */
 static m_p__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLParagraphElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLParagraphElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLParagraphElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLPreElement>}
  * @public
  */
 static m_pre__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLPreElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("pre", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLPreElement>}
  * @public
  */
 static m_pre__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLPreElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLPreElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLPreElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLUListElement>}
  * @public
  */
 static m_ul__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLUListElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("ul", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLUListElement>}
  * @public
  */
 static m_ul__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLUListElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLUListElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLUListElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLAnchorElement>}
  * @public
  */
 static m_a__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAnchorElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("a", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} href
  * @return {HtmlContentBuilder<HTMLAnchorElement>}
  * @public
  */
 static m_a__java_lang_String(href) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAnchorElement>} */ ($Casts.$to(Elements.m_a__().m_attr__java_lang_String__java_lang_String("href", href), HtmlContentBuilder));
 }
 /**
  * @param {?string} href
  * @param {?string} target
  * @return {HtmlContentBuilder<HTMLAnchorElement>}
  * @public
  */
 static m_a__java_lang_String__java_lang_String(href, target) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAnchorElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLAnchorElement>} */ ($Casts.$to(Elements.m_a__().m_attr__java_lang_String__java_lang_String("href", href), HtmlContentBuilder)).m_attr__java_lang_String__java_lang_String("target", target), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLAnchorElement>}
  * @public
  */
 static m_a__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAnchorElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLAnchorElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLAnchorElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_abbr__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("abbr", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_abbr__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("abbr", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_abbr__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_b__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("b", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_b__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("b", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_b__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLBRElement>}
  * @public
  */
 static m_br__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLBRElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("br", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLBRElement>}
  * @public
  */
 static m_br__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLBRElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLBRElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLBRElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_cite__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("cite", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_cite__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("cite", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_cite__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_code__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("code", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_code__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("code", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_code__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dfn__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("dfn", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dfn__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("dfn", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_dfn__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_em__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("em", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_em__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("em", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_em__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_i__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("i", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_i__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("i", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_i__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_kbd__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("kbd", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_kbd__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("kbd", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_kbd__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_mark__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("mark", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_mark__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("mark", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_mark__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLQuoteElement>}
  * @public
  */
 static m_q__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLQuoteElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("q", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLQuoteElement>}
  * @public
  */
 static m_q__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLQuoteElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLQuoteElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("q", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLQuoteElement>}
  * @public
  */
 static m_q__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLQuoteElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLQuoteElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLQuoteElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_small__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("small", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_small__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("small", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_small__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_span__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("span", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_span__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_strong__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("strong", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_strong__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("strong", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_strong__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sub__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("sub", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sub__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("sub", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sub__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sup__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("sup", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sup__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("sup", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_sup__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_time__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("time", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_time__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("time", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_time__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_u__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("u", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_u__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("u", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_u__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_var__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("var", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_var__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("var", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_var__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLElement>}
  * @public
  */
 static m_wbr__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("wbr", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLElement>}
  * @public
  */
 static m_wbr__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLAreaElement>}
  * @public
  */
 static m_area__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLAreaElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("area", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLAreaElement>}
  * @public
  */
 static m_area__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLAreaElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLAreaElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLAreaElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLAudioElement>}
  * @public
  */
 static m_audio__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAudioElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("audio", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLAudioElement>}
  * @public
  */
 static m_audio__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLAudioElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLAudioElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLAudioElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLImageElement>}
  * @public
  */
 static m_img__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLImageElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("img", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} src
  * @return {EmptyContentBuilder<HTMLImageElement>}
  * @public
  */
 static m_img__java_lang_String(src) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLImageElement>} */ ($Casts.$to(/**@type {EmptyContentBuilder<HTMLImageElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("img", Class.$get($JavaScriptObject))).m_attr__java_lang_String__java_lang_String("src", src), EmptyContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLImageElement>}
  * @public
  */
 static m_img__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLImageElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLImageElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLImageElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLMapElement>}
  * @public
  */
 static m_map__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLMapElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("map", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLMapElement>}
  * @public
  */
 static m_map__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLMapElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLMapElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLMapElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLTrackElement>}
  * @public
  */
 static m_track__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLTrackElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("track", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLTrackElement>}
  * @public
  */
 static m_track__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLTrackElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLTrackElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTrackElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLVideoElement>}
  * @public
  */
 static m_video__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLVideoElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("video", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLVideoElement>}
  * @public
  */
 static m_video__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLVideoElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLVideoElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLVideoElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLCanvasElement>}
  * @public
  */
 static m_canvas__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLCanvasElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("canvas", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLCanvasElement>}
  * @public
  */
 static m_canvas__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLCanvasElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLCanvasElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLCanvasElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLEmbedElement>}
  * @public
  */
 static m_embed__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLEmbedElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("embed", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLEmbedElement>}
  * @public
  */
 static m_embed__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLEmbedElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLEmbedElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLEmbedElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLIFrameElement>}
  * @public
  */
 static m_iframe__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLIFrameElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("iframe", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} src
  * @return {HtmlContentBuilder<HTMLIFrameElement>}
  * @public
  */
 static m_iframe__java_lang_String(src) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLIFrameElement>} */ ($Casts.$to(Elements.m_iframe__().m_attr__java_lang_String__java_lang_String("src", src), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLIFrameElement>}
  * @public
  */
 static m_iframe__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLIFrameElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLIFrameElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLIFrameElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLObjectElement>}
  * @public
  */
 static m_object__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLObjectElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("object", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLObjectElement>}
  * @public
  */
 static m_object__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLObjectElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLObjectElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLObjectElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLParamElement>}
  * @public
  */
 static m_param__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLParamElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("param", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLParamElement>}
  * @public
  */
 static m_param__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLParamElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLParamElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLParamElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLSourceElement>}
  * @public
  */
 static m_source__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLSourceElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("source", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLSourceElement>}
  * @public
  */
 static m_source__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLSourceElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLSourceElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLSourceElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_noscript__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("noscript", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLElement>}
  * @public
  */
 static m_noscript__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLElement_$Overlay))));
 }
 /**
  * @return {TextContentBuilder<HTMLScriptElement>}
  * @public
  */
 static m_script__() {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLScriptElement>} */ (Elements.m_textElement__java_lang_String__java_lang_Class("script", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {TextContentBuilder<HTMLScriptElement>}
  * @public
  */
 static m_script__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLScriptElement>} */ (Elements.m_wrapTextElement__elemental2_dom_HTMLElement(/**@type {HTMLScriptElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLScriptElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_del__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("del", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_del__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("del", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_del__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLModElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLModElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_ins__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("ins", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_ins__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("ins", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLModElement>}
  * @public
  */
 static m_ins__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLModElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLModElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLModElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableCaptionElement>}
  * @public
  */
 static m_caption__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCaptionElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("caption", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableCaptionElement>}
  * @public
  */
 static m_caption__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCaptionElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableCaptionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableCaptionElement_$Overlay))));
 }
 /**
  * @return {EmptyContentBuilder<HTMLTableColElement>}
  * @public
  */
 static m_col__() {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLTableColElement>} */ (Elements.m_emptyElement__java_lang_String__java_lang_Class("col", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {EmptyContentBuilder<HTMLTableColElement>}
  * @public
  */
 static m_col__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {EmptyContentBuilder<HTMLTableColElement>} */ (Elements.m_wrapEmptyElement__elemental2_dom_HTMLElement(/**@type {HTMLTableColElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableColElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableColElement>}
  * @public
  */
 static m_colgroup__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableColElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("colgroup", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableColElement>}
  * @public
  */
 static m_colgroup__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableColElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableColElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableColElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableElement>}
  * @public
  */
 static m_table__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("table", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableElement>}
  * @public
  */
 static m_table__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_tbody__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("tbody", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_tbody__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableSectionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableCellElement>}
  * @public
  */
 static m_td__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCellElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("td", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableCellElement>}
  * @public
  */
 static m_td__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCellElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableCellElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableCellElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_tfoot__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("tfoot", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_tfoot__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableSectionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableCellElement>}
  * @public
  */
 static m_th__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCellElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("th", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableCellElement>}
  * @public
  */
 static m_th__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableCellElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableCellElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableCellElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_thead__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("thead", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableSectionElement>}
  * @public
  */
 static m_thead__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableSectionElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableSectionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableSectionElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLTableRowElement>}
  * @public
  */
 static m_tr__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableRowElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("tr", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLTableRowElement>}
  * @public
  */
 static m_tr__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLTableRowElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLTableRowElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTableRowElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLButtonElement>}
  * @public
  */
 static m_button__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLButtonElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("button", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLButtonElement>}
  * @public
  */
 static m_button__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLButtonElement>} */ ($Casts.$to(Elements.m_button__().m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLButtonElement>}
  * @public
  */
 static m_button__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLButtonElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLButtonElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLButtonElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLDataListElement>}
  * @public
  */
 static m_datalist__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDataListElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("datalist", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLDataListElement>}
  * @public
  */
 static m_datalist__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLDataListElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLDataListElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLDataListElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLFieldSetElement>}
  * @public
  */
 static m_fieldset__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLFieldSetElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("fieldset", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLFieldSetElement>}
  * @public
  */
 static m_fieldset__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLFieldSetElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLFieldSetElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLFieldSetElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLFormElement>}
  * @public
  */
 static m_form__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLFormElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("form", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLFormElement>}
  * @public
  */
 static m_form__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLFormElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLFormElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLFormElement_$Overlay))));
 }
 /**
  * @param {InputType} type
  * @return {InputBuilder<HTMLInputElement>}
  * @public
  */
 static m_input__org_jboss_elemento_InputType(type) {
  Elements.$clinit();
  return Elements.m_input__java_lang_String(type.name());
 }
 /**
  * @param {?string} type
  * @return {InputBuilder<HTMLInputElement>}
  * @public
  */
 static m_input__java_lang_String(type) {
  Elements.$clinit();
  return /**@type {InputBuilder<HTMLInputElement>} */ (Elements.m_input__java_lang_String__java_lang_Class(type, Class.$get($JavaScriptObject)));
 }
 /**
  * @template E
  * @param {?string} type
  * @param {Class<E>} jType
  * @return {InputBuilder<E>}
  * @public
  */
 static m_input__java_lang_String__java_lang_Class(type, jType) {
  Elements.$clinit();
  let el = /**@type {E} */ ($Casts.$to(Elements.m_createElement__java_lang_String__java_lang_Class("input", jType), HTMLInputElement_$Overlay));
  /**@type {HTMLInputElement} */ (el).type = type;
  return /**@type {!InputBuilder<E>} */ (InputBuilder.$create__elemental2_dom_HTMLInputElement(el));
 }
 /**
  * @param {Element} element
  * @return {InputBuilder<HTMLInputElement>}
  * @public
  */
 static m_input__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {InputBuilder<HTMLInputElement>} */ (Elements.m_wrapInputElement__elemental2_dom_HTMLInputElement(/**@type {HTMLInputElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLInputElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLLabelElement>}
  * @public
  */
 static m_label__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLabelElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("label", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLLabelElement>}
  * @public
  */
 static m_label__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLabelElement>} */ ($Casts.$to(Elements.m_label__().m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLLabelElement>}
  * @public
  */
 static m_label__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLabelElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLLabelElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLLabelElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLLegendElement>}
  * @public
  */
 static m_legend__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLegendElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("legend", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLLegendElement>}
  * @public
  */
 static m_legend__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLLegendElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLLegendElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLLegendElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLMeterElement>}
  * @public
  */
 static m_meter__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLMeterElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("meter", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLMeterElement>}
  * @public
  */
 static m_meter__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLMeterElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLMeterElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("meter", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLMeterElement>}
  * @public
  */
 static m_meter__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLMeterElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLMeterElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLMeterElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLOptGroupElement>}
  * @public
  */
 static m_optgroup__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOptGroupElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("optgroup", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLOptGroupElement>}
  * @public
  */
 static m_optgroup__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOptGroupElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLOptGroupElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLOptGroupElement_$Overlay))));
 }
 /**
  * @return {TextContentBuilder<HTMLOptionElement>}
  * @public
  */
 static m_option__() {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLOptionElement>} */ (Elements.m_textElement__java_lang_String__java_lang_Class("option", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {TextContentBuilder<HTMLOptionElement>}
  * @public
  */
 static m_option__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLOptionElement>} */ ($Casts.$to(Elements.m_option__().m_textContent__java_lang_String(text), TextContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {TextContentBuilder<HTMLOptionElement>}
  * @public
  */
 static m_option__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLOptionElement>} */ (Elements.m_wrapTextElement__elemental2_dom_HTMLElement(/**@type {HTMLOptionElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLOptionElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLOutputElement>}
  * @public
  */
 static m_output__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOutputElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("output", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {?string} text
  * @return {HtmlContentBuilder<HTMLOutputElement>}
  * @public
  */
 static m_output__java_lang_String(text) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOutputElement>} */ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLOutputElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("output", Class.$get($JavaScriptObject))).m_textContent__java_lang_String(text), HtmlContentBuilder));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLOutputElement>}
  * @public
  */
 static m_output__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLOutputElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLOutputElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLOutputElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLProgressElement>}
  * @public
  */
 static m_progress__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLProgressElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("progress", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLProgressElement>}
  * @public
  */
 static m_progress__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLProgressElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLProgressElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLProgressElement_$Overlay))));
 }
 /**
  * @return {HtmlContentBuilder<HTMLSelectElement>}
  * @public
  */
 static m_select__() {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLSelectElement>} */ (Elements.m_htmlElement__java_lang_String__java_lang_Class("select", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {HtmlContentBuilder<HTMLSelectElement>}
  * @public
  */
 static m_select__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {HtmlContentBuilder<HTMLSelectElement>} */ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement(/**@type {HTMLSelectElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLSelectElement_$Overlay))));
 }
 /**
  * @return {TextContentBuilder<HTMLTextAreaElement>}
  * @public
  */
 static m_textarea__() {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLTextAreaElement>} */ (Elements.m_textElement__java_lang_String__java_lang_Class("textarea", Class.$get($JavaScriptObject)));
 }
 /**
  * @param {Element} element
  * @return {TextContentBuilder<HTMLTextAreaElement>}
  * @public
  */
 static m_textarea__elemental2_dom_Element(element) {
  Elements.$clinit();
  return /**@type {TextContentBuilder<HTMLTextAreaElement>} */ (Elements.m_wrapTextElement__elemental2_dom_HTMLElement(/**@type {HTMLTextAreaElement} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), HTMLTextAreaElement_$Overlay))));
 }
 /**
  * @return {ElementsBag}
  * @public
  */
 static m_bag__() {
  Elements.$clinit();
  return ElementsBag.$create__();
 }
 /**
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {EmptyContentBuilder<E>}
  * @public
  */
 static m_emptyElement__java_lang_String__java_lang_Class(element, type) {
  Elements.$clinit();
  return /**@type {!EmptyContentBuilder<E>} */ (EmptyContentBuilder.$create__elemental2_dom_HTMLElement(Elements.m_createElement__java_lang_String__java_lang_Class(element, type)));
 }
 /**
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {TextContentBuilder<E>}
  * @public
  */
 static m_textElement__java_lang_String__java_lang_Class(element, type) {
  Elements.$clinit();
  return /**@type {!TextContentBuilder<E>} */ (TextContentBuilder.$create__elemental2_dom_HTMLElement(Elements.m_createElement__java_lang_String__java_lang_Class(element, type)));
 }
 /**
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 static m_htmlElement__java_lang_String__java_lang_Class(element, type) {
  Elements.$clinit();
  return /**@type {!HtmlContentBuilder<E>} */ (HtmlContentBuilder.$create__elemental2_dom_HTMLElement(Elements.m_createElement__java_lang_String__java_lang_Class(element, type)));
 }
 /**
  * @template E
  * @param {?string} element
  * @param {Class<E>} type
  * @return {E}
  * @public
  */
 static m_createElement__java_lang_String__java_lang_Class(element, type) {
  Elements.$clinit();
  return Elements.$f_createElement__org_jboss_elemento_Elements.m_create__java_lang_String__java_lang_Class(element, type);
 }
 /**
  * @template E
  * @param {E} element
  * @return {EmptyContentBuilder<E>}
  * @public
  */
 static m_wrapEmptyElement__elemental2_dom_HTMLElement(element) {
  Elements.$clinit();
  return /**@type {!EmptyContentBuilder<E>} */ (EmptyContentBuilder.$create__elemental2_dom_HTMLElement(element));
 }
 /**
  * @template E
  * @param {E} element
  * @return {TextContentBuilder<E>}
  * @public
  */
 static m_wrapTextElement__elemental2_dom_HTMLElement(element) {
  Elements.$clinit();
  return /**@type {!TextContentBuilder<E>} */ (TextContentBuilder.$create__elemental2_dom_HTMLElement(element));
 }
 /**
  * @template E
  * @param {E} element
  * @return {InputBuilder<E>}
  * @public
  */
 static m_wrapInputElement__elemental2_dom_HTMLInputElement(element) {
  Elements.$clinit();
  return /**@type {!InputBuilder<E>} */ (InputBuilder.$create__elemental2_dom_HTMLInputElement(element));
 }
 /**
  * @template E
  * @param {E} element
  * @return {HtmlContentBuilder<E>}
  * @public
  */
 static m_wrapHtmlElement__elemental2_dom_HTMLElement(element) {
  Elements.$clinit();
  return /**@type {!HtmlContentBuilder<E>} */ (HtmlContentBuilder.$create__elemental2_dom_HTMLElement(element));
 }
 /**
  * @param {Node} node
  * @param {By} selector
  * @return {Iterable<HTMLElement>}
  * @public
  */
 static m_findAll__elemental2_dom_Node__org_jboss_elemento_By(node, selector) {
  Elements.$clinit();
  if (!$Equality.$same(node, null)) {
   let nodes = node.querySelectorAll(selector.m_selector___$pp_org_jboss_elemento());
   let htmlElements = /**@type {!Array<HTMLElement>} */ (new Array());
   for (let i = 0; i < nodes.length; i++) {
    let element = /**@type {Element} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(nodes, i), Element_$Overlay));
    if (HTMLElement_$Overlay.$isInstance(element)) {
     htmlElements.push(/**@type {HTMLElement} */ ($Casts.$to(element, HTMLElement_$Overlay)));
    }
   }
   return Iterable.$adapt(() =>{
    return /**@type {Iterator<HTMLElement>} */ (Elements.m_iterator__jsinterop_base_JsArrayLike(htmlElements));
   });
  }
  return /**@type {List<HTMLElement>} */ (Collections.m_emptyList__());
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {By} selector
  * @return {Iterable<HTMLElement>}
  * @public
  */
 static m_findAll__org_jboss_elemento_IsElement__org_jboss_elemento_By(element, selector) {
  Elements.$clinit();
  return Elements.m_findAll__elemental2_dom_Node__org_jboss_elemento_By(element.m_element__(), selector);
 }
 /**
  * @template E
  * @param {Node} node
  * @param {By} selector
  * @return {E}
  * @public
  */
 static m_find__elemental2_dom_Node__org_jboss_elemento_By(node, selector) {
  Elements.$clinit();
  return /**@type {E} */ ($Casts.$to(Js.m_cast__java_lang_Object(node.querySelector(selector.m_selector___$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /**
  * @template E, F
  * @param {IsElement<E>} element
  * @param {By} selector
  * @return {F}
  * @public
  */
 static m_find__org_jboss_elemento_IsElement__org_jboss_elemento_By(element, selector) {
  Elements.$clinit();
  return Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By(element.m_element__(), selector);
 }
 /**
  * @template E
  * @param {Element} element
  * @param {By} selector
  * @return {E}
  * @public
  */
 static m_closest__elemental2_dom_Element__org_jboss_elemento_By(element, selector) {
  Elements.$clinit();
  return /**@type {E} */ ($Casts.$to(Js.m_cast__java_lang_Object(element.closest(selector.m_selector___$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /**
  * @template E, F
  * @param {IsElement<E>} element
  * @param {By} selector
  * @return {F}
  * @public
  */
 static m_closest__org_jboss_elemento_IsElement__org_jboss_elemento_By(element, selector) {
  Elements.$clinit();
  return /**@type {F} */ ($Casts.$to(Js.m_cast__java_lang_Object(/**@type {HTMLElement} */ (element.m_element__()).closest(selector.m_selector___$pp_org_jboss_elemento())), HTMLElement_$Overlay));
 }
 /**
  * @template E
  * @param {IArrayLike<E>} data
  * @return {Iterator<E>}
  * @public
  */
 static m_iterator__jsinterop_base_JsArrayLike(data) {
  Elements.$clinit();
  return !$Equality.$same(data, null) ? /**@type {!JsArrayLikeIterator<E>} */ (JsArrayLikeIterator.$create__jsinterop_base_JsArrayLike(data)) : /**@type {Iterator<E>} */ (Collections.m_emptyIterator__());
 }
 /**
  * @param {Node} parent
  * @return {Iterator<Node>}
  * @public
  */
 static m_iterator__elemental2_dom_Node(parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? JsArrayNodeIterator.$create__elemental2_dom_Node(parent) : /**@type {Iterator<Node>} */ (Collections.m_emptyIterator__());
 }
 /**
  * @param {HTMLElement} parent
  * @return {Iterator<HTMLElement>}
  * @public
  */
 static m_iterator__elemental2_dom_HTMLElement(parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? JsArrayElementIterator.$create__elemental2_dom_HTMLElement(parent) : /**@type {Iterator<HTMLElement>} */ (Collections.m_emptyIterator__());
 }
 /**
  * @template E
  * @param {IsElement<E>} parent
  * @return {Iterator<HTMLElement>}
  * @public
  */
 static m_iterator__org_jboss_elemento_IsElement(parent) {
  Elements.$clinit();
  return !$Equality.$same(parent, null) ? Elements.m_iterator__elemental2_dom_HTMLElement(parent.m_element__()) : /**@type {Iterator<HTMLElement>} */ (Collections.m_emptyIterator__());
 }
 /**
  * @template E
  * @param {IArrayLike<E>} nodes
  * @return {Iterable<E>}
  * @public
  */
 static m_elements__jsinterop_base_JsArrayLike(nodes) {
  Elements.$clinit();
  return /**@type {Iterable<E>} */ (Iterable.$adapt(() =>{
   return /**@type {Iterator<E>} */ (Elements.m_iterator__jsinterop_base_JsArrayLike(nodes));
  }));
 }
 /**
  * @param {Node} parent
  * @return {Iterable<Node>}
  * @public
  */
 static m_children__elemental2_dom_Node(parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__elemental2_dom_Node(parent);
  });
 }
 /**
  * @param {HTMLElement} parent
  * @return {Iterable<HTMLElement>}
  * @public
  */
 static m_children__elemental2_dom_HTMLElement(parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__elemental2_dom_HTMLElement(parent);
  });
 }
 /**
  * @template E
  * @param {IsElement<E>} parent
  * @return {Iterable<HTMLElement>}
  * @public
  */
 static m_children__org_jboss_elemento_IsElement(parent) {
  Elements.$clinit();
  return Iterable.$adapt(() =>{
   return Elements.m_iterator__org_jboss_elemento_IsElement(parent);
  });
 }
 /**
  * @template T
  * @return {Predicate<T>}
  * @public
  */
 static m_htmlElements__() {
  Elements.$clinit();
  return /**@type {!FilterHTMLElements<T>} */ (FilterHTMLElements.$create__());
 }
 /**
  * @template T
  * @return {j_u_function_Function<T, HTMLElement>}
  * @public
  */
 static m_asHtmlElement__() {
  Elements.$clinit();
  return /**@type {!AsHTMLElement<T>} */ (AsHTMLElement.$create__());
 }
 /**
  * @template E
  * @param {IArrayLike<E>} nodes
  * @return {Stream<E>}
  * @public
  */
 static m_stream__jsinterop_base_JsArrayLike(nodes) {
  Elements.$clinit();
  if ($Equality.$same(nodes, null)) {
   return /**@type {Stream<E>} */ (Stream.m_empty__());
  } else {
   return /**@type {Stream<E>} */ (StreamSupport.m_stream__java_util_Spliterator__boolean(/**@type {Spliterator<E>} */ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int(/**@type {Iterator<E>} */ (Elements.m_iterator__jsinterop_base_JsArrayLike(nodes)), 0)), false));
  }
 }
 /**
  * @param {Node} parent
  * @return {Stream<Node>}
  * @public
  */
 static m_stream__elemental2_dom_Node(parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<Node>} */ (Stream.m_empty__());
  } else {
   return /**@type {Stream<Node>} */ (StreamSupport.m_stream__java_util_Spliterator__boolean(/**@type {Spliterator<Node>} */ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int(Elements.m_iterator__elemental2_dom_Node(parent), 0)), false));
  }
 }
 /**
  * @param {HTMLElement} parent
  * @return {Stream<HTMLElement>}
  * @public
  */
 static m_stream__elemental2_dom_HTMLElement(parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<HTMLElement>} */ (Stream.m_empty__());
  } else {
   return /**@type {Stream<HTMLElement>} */ (StreamSupport.m_stream__java_util_Spliterator__boolean(/**@type {Spliterator<HTMLElement>} */ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int(Elements.m_iterator__elemental2_dom_HTMLElement(parent), 0)), false));
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} parent
  * @return {Stream<HTMLElement>}
  * @public
  */
 static m_stream__org_jboss_elemento_IsElement(parent) {
  Elements.$clinit();
  if ($Equality.$same(parent, null)) {
   return /**@type {Stream<HTMLElement>} */ (Stream.m_empty__());
  } else {
   return /**@type {Stream<HTMLElement>} */ (StreamSupport.m_stream__java_util_Spliterator__boolean(/**@type {Spliterator<HTMLElement>} */ (Spliterators.m_spliteratorUnknownSize__java_util_Iterator__int(Elements.m_iterator__org_jboss_elemento_IsElement(parent), 0)), false));
  }
 }
 /**
  * @param {Element} parent
  * @param {Element} child
  * @public
  */
 static m_lazyAppend__elemental2_dom_Element__elemental2_dom_Element(parent, child) {
  Elements.$clinit();
  if (!parent.contains(child)) {
   parent.appendChild(child);
  }
 }
 /**
  * @template E
  * @param {Element} parent
  * @param {IsElement<E>} child
  * @public
  */
 static m_lazyAppend__elemental2_dom_Element__org_jboss_elemento_IsElement(parent, child) {
  Elements.$clinit();
  if (!$Equality.$same(child, null)) {
   Elements.m_lazyAppend__elemental2_dom_Element__elemental2_dom_Element(parent, child.m_element__());
  }
 }
 /**
  * @param {Element} newElement
  * @param {Element} after
  * @public
  */
 static m_insertAfter__elemental2_dom_Element__elemental2_dom_Element(newElement, after) {
  Elements.$clinit();
  after.parentNode.insertBefore(newElement, after.nextSibling);
 }
 /**
  * @template E
  * @param {IsElement<E>} newElement
  * @param {Element} after
  * @public
  */
 static m_insertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element(newElement, after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element(newElement.m_element__(), after);
  }
 }
 /**
  * @param {Element} newElement
  * @param {Element} after
  * @public
  */
 static m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element(newElement, after) {
  Elements.$clinit();
  if (!after.parentNode.contains(newElement)) {
   after.parentNode.insertBefore(newElement, after.nextSibling);
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} newElement
  * @param {Element} after
  * @public
  */
 static m_lazyInsertAfter__org_jboss_elemento_IsElement__elemental2_dom_Element(newElement, after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element(newElement.m_element__(), after);
  }
 }
 /**
  * @param {Element} parent
  * @param {Element} newElement
  * @param {Element} after
  * @public
  */
 static m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element(parent, newElement, after) {
  Elements.$clinit();
  if (!parent.contains(newElement)) {
   parent.insertBefore(newElement, after.nextSibling);
  }
 }
 /**
  * @template E
  * @param {Element} parent
  * @param {IsElement<E>} newElement
  * @param {Element} after
  * @public
  */
 static m_lazyInsertAfter__elemental2_dom_Element__org_jboss_elemento_IsElement__elemental2_dom_Element(parent, newElement, after) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertAfter__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element(parent, newElement.m_element__(), after);
  }
 }
 /**
  * @param {Element} newElement
  * @param {Element} before
  * @public
  */
 static m_insertBefore__elemental2_dom_Element__elemental2_dom_Element(newElement, before) {
  Elements.$clinit();
  before.parentNode.insertBefore(newElement, before);
 }
 /**
  * @template E
  * @param {IsElement<E>} newElement
  * @param {Element} before
  * @public
  */
 static m_insertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element(newElement, before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertBefore__elemental2_dom_Element__elemental2_dom_Element(newElement.m_element__(), before);
  }
 }
 /**
  * @param {Element} newElement
  * @param {Element} before
  * @public
  */
 static m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element(newElement, before) {
  Elements.$clinit();
  if (!before.parentNode.contains(newElement)) {
   before.parentNode.insertBefore(newElement, before);
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} newElement
  * @param {Element} before
  * @public
  */
 static m_lazyInsertBefore__org_jboss_elemento_IsElement__elemental2_dom_Element(newElement, before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element(newElement.m_element__(), before);
  }
 }
 /**
  * @param {Element} parent
  * @param {Element} newElement
  * @param {Element} before
  * @public
  */
 static m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element(parent, newElement, before) {
  Elements.$clinit();
  if (!parent.contains(newElement)) {
   parent.insertBefore(newElement, before);
  }
 }
 /**
  * @template E
  * @param {Element} parent
  * @param {IsElement<E>} newElement
  * @param {Element} before
  * @public
  */
 static m_lazyInsertBefore__elemental2_dom_Element__org_jboss_elemento_IsElement__elemental2_dom_Element(parent, newElement, before) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_lazyInsertBefore__elemental2_dom_Element__elemental2_dom_Element__elemental2_dom_Element(parent, newElement.m_element__(), before);
  }
 }
 /**
  * @param {Element} parent
  * @param {Element} newElement
  * @public
  */
 static m_insertFirst__elemental2_dom_Element__elemental2_dom_Element(parent, newElement) {
  Elements.$clinit();
  parent.insertBefore(newElement, parent.firstChild);
 }
 /**
  * @template E
  * @param {Element} parent
  * @param {IsElement<E>} newElement
  * @public
  */
 static m_insertFirst__elemental2_dom_Element__org_jboss_elemento_IsElement(parent, newElement) {
  Elements.$clinit();
  if (!$Equality.$same(newElement, null)) {
   Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element(parent, newElement.m_element__());
  }
 }
 /**
  * @param {Element} element
  * @public
  */
 static m_removeChildrenFrom__elemental2_dom_Element(element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   while (!$Equality.$same(element.firstChild, null)) {
    element.removeChild(element.firstChild);
   }
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @public
  */
 static m_removeChildrenFrom__org_jboss_elemento_IsElement(element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_removeChildrenFrom__elemental2_dom_Element(element.m_element__());
  }
 }
 /**
  * @param {Element} element
  * @return {boolean}
  * @public
  */
 static m_failSafeRemoveFromParent__elemental2_dom_Element(element) {
  Elements.$clinit();
  return Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element(!$Equality.$same(element, null) ? element.parentNode : null, element);
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @return {boolean}
  * @public
  */
 static m_failSafeRemoveFromParent__org_jboss_elemento_IsElement(element) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   return Elements.m_failSafeRemoveFromParent__elemental2_dom_Element(element.m_element__());
  }
  return false;
 }
 /**
  * @param {Node} parent
  * @param {Element} child
  * @return {boolean}
  * @public
  */
 static m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element(parent, child) {
  Elements.$clinit();
  if (!$Equality.$same(parent, null) && !$Equality.$same(child, null) && parent.contains(child)) {
   return !$Equality.$same(parent.removeChild(child), null);
  }
  return false;
 }
 /**
  * @template E
  * @param {Node} parent
  * @param {IsElement<E>} child
  * @return {boolean}
  * @public
  */
 static m_failSafeRemove__elemental2_dom_Node__org_jboss_elemento_IsElement(parent, child) {
  Elements.$clinit();
  if (!$Equality.$same(child, null)) {
   return Elements.m_failSafeRemove__elemental2_dom_Node__elemental2_dom_Element(parent, child.m_element__());
  }
  return false;
 }
 /**
  * @param {HTMLElement} element
  * @param {ObserverCallback} callback
  * @public
  */
 static m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, callback);
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {ObserverCallback} callback
  * @public
  */
 static m_onAttach__org_jboss_elemento_IsElement__org_jboss_elemento_ObserverCallback(element, callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element.m_element__(), callback);
  }
 }
 /**
  * @param {HTMLElement} element
  * @param {ObserverCallback} callback
  * @public
  */
 static m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   BodyObserver.m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, callback);
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {ObserverCallback} callback
  * @public
  */
 static m_onDetach__org_jboss_elemento_IsElement__org_jboss_elemento_ObserverCallback(element, callback) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element.m_element__(), callback);
  }
 }
 /**
  * @return {?string}
  * @public
  */
 static m_uniqueId__() {
  Elements.$clinit();
  let /** ?string */ id;
  do {
   id = j_l_String.m_valueOf__java_lang_Object(Elements.f_UNIQUE_ID__org_jboss_elemento_Elements_) + Elements.f_counter__org_jboss_elemento_Elements_;
   Elements.f_counter__org_jboss_elemento_Elements_++;
  }while (!$Equality.$same($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.getElementById(id), null));
  return id;
 }
 /**
  * @param {?string} id
  * @param {Array<?string>} additionalIds
  * @return {?string}
  * @public
  */
 static m_uniqueId__java_lang_String__arrayOf_java_lang_String(id, additionalIds) {
  Elements.$clinit();
  return j_l_String.m_valueOf__java_lang_Object(Elements.m_buildId__java_lang_String__arrayOf_java_lang_String(id, additionalIds)) + "-" + j_l_String.m_valueOf__java_lang_Object(Elements.m_uniqueId__());
 }
 /**
  * @param {?string} id
  * @param {Array<?string>} additionalIds
  * @return {?string}
  * @public
  */
 static m_buildId__java_lang_String__arrayOf_java_lang_String(id, additionalIds) {
  Elements.$clinit();
  return Elements.m_buildId__java_lang_String__char__arrayOf_java_lang_String(id, 45 /* '-' */, additionalIds);
 }
 /**
  * @param {?string} id
  * @param {number} separator
  * @param {Array<?string>} additionalIds
  * @return {?string}
  * @public
  */
 static m_buildId__java_lang_String__char__arrayOf_java_lang_String(id, separator, additionalIds) {
  Elements.$clinit();
  if ($Equality.$same(id, null) || j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(id)) == 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("ID must not be null or empty."));
  }
  let ids = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
  ids.add(id);
  if (!$Equality.$same(additionalIds, null)) {
   for (let $array = additionalIds, $index = 0; $index < $array.length; $index++) {
    let additionalId = $array[$index];
    if (!$Equality.$same(additionalId, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(additionalId)) != 0) {
     ids.add(additionalId);
    }
   }
  }
  return /**@type {?string} */ ($Casts.$to(/**@type {Stream<?string>} */ (ids.m_stream__().m_map__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {?string} */ ($Casts.$to(arg0, j_l_String));
   return Elements.m_asId__java_lang_String(arg0_1);
  }))).m_filter__java_util_function_Predicate(Predicate.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {?string} */ ($Casts.$to(arg0_2, j_l_String));
   return Objects.m_nonNull__java_lang_Object(arg0_3);
  })).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence(j_l_String.m_valueOf__char(separator))), j_l_String));
 }
 /**
  * @param {?string} text
  * @return {?string}
  * @public
  */
 static m_asId__java_lang_String(text) {
  Elements.$clinit();
  let parts = j_l_String.m_split__java_lang_String__java_lang_String(text, "[-\\s]");
  let sanitized = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
  for (let $array = parts, $index = 0; $index < $array.length; $index++) {
   let part = $array[$index];
   if (!$Equality.$same(part, null)) {
    let s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(part, "\\s+", "");
    s = j_l_String.m_replaceAll__java_lang_String__java_lang_String__java_lang_String(s, "[^a-zA-Z0-9]", "");
    if (j_l_String.m_length__java_lang_String(s) != 0) {
     sanitized.add(s);
    }
   }
  }
  if (sanitized.isEmpty()) {
   return null;
  } else {
   return /**@type {?string} */ ($Casts.$to(/**@type {Stream<?string>} */ (sanitized.m_stream__().m_filter__java_util_function_Predicate(Predicate.$adapt((s_1) =>{
    let s_2 = /**@type {?string} */ ($Casts.$to(s_1, j_l_String));
    return !$Equality.$same(s_2, null) && j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(s_2)) != 0;
   })).m_map__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
    let arg0_1 = /**@type {?string} */ ($Casts.$to(arg0, j_l_String));
    return j_l_String.m_toLowerCase__java_lang_String(arg0_1);
   }))).m_collect__java_util_stream_Collector(Collectors.m_joining__java_lang_CharSequence("-")), j_l_String));
  }
 }
 /**
  * @param {HTMLElement} element
  * @return {boolean}
  * @public
  */
 static m_isVisible__elemental2_dom_HTMLElement(element) {
  Elements.$clinit();
  return !$Equality.$same(element, null) && !$Equality.$same("none", element.style.display);
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @return {boolean}
  * @public
  */
 static m_isVisible__org_jboss_elemento_IsElement(element) {
  Elements.$clinit();
  return !$Equality.$same(element, null) && Elements.m_isVisible__elemental2_dom_HTMLElement(element.m_element__());
 }
 /**
  * @param {HTMLElement} element
  * @param {boolean} visible
  * @public
  */
 static m_setVisible__elemental2_dom_HTMLElement__boolean(element, visible) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.style.display = visible ? "" : "none";
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {boolean} visible
  * @public
  */
 static m_setVisible__org_jboss_elemento_IsElement__boolean(element, visible) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(element.m_element__(), visible);
  }
 }
 /**
  * @param {HTMLElement} element
  * @param {?string} css
  * @param {boolean} condition
  * @public
  */
 static m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean(element, css, condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.classList.toggle(css, condition);
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {?string} css
  * @param {boolean} condition
  * @public
  */
 static m_toggle__org_jboss_elemento_IsElement__java_lang_String__boolean(element, css, condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean(element.m_element__(), css, condition);
  }
 }
 /**
  * @param {HTMLElement} element
  * @param {?string} css
  * @param {Supplier<?boolean>} condition
  * @public
  */
 static m_toggle__elemental2_dom_HTMLElement__java_lang_String__java_util_function_Supplier(element, css, condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.classList.toggle(css, Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(condition.m_get__(), Boolean))));
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {?string} css
  * @param {Supplier<?boolean>} condition
  * @public
  */
 static m_toggle__org_jboss_elemento_IsElement__java_lang_String__java_util_function_Supplier(element, css, condition) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   /**@type {HTMLElement} */ (element.m_element__()).classList.toggle(css, Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(condition.m_get__(), Boolean))));
  }
 }
 /**
  * @param {HTMLElement} element
  * @param {SafeHtml} html
  * @public
  */
 static m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml(element, html) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   element.innerHTML = html.m_asString__();
  }
 }
 /**
  * @template E
  * @param {IsElement<E>} element
  * @param {SafeHtml} html
  * @public
  */
 static m_innerHtml__org_jboss_elemento_IsElement__org_gwtproject_safehtml_shared_SafeHtml(element, html) {
  Elements.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml(element.m_element__(), html);
  }
 }
 /**
  * @return {!Elements}
  * @public
  */
 static $create__() {
  let $instance = new Elements();
  $instance.$ctor__org_jboss_elemento_Elements__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_jboss_elemento_Elements__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {ElementCreator}
  * @public
  */
 static get f_createElement__org_jboss_elemento_Elements() {
  return (Elements.$clinit(), Elements.$f_createElement__org_jboss_elemento_Elements);
 }
 /**
  * @param {ElementCreator} value
  * @public
  */
 static set f_createElement__org_jboss_elemento_Elements(value) {
  (Elements.$clinit(), Elements.$f_createElement__org_jboss_elemento_Elements = value);
 }
 /**
  * @public
  */
 static $clinit() {
  Elements.$clinit = () =>{};
  Elements.$loadModules();
  j_l_Object.$clinit();
  Elements.f_counter__org_jboss_elemento_Elements_ = 0;
  Elements.$f_createElement__org_jboss_elemento_Elements = $1.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Elements;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLAreaElement.$Overlay$impl');
  HTMLAudioElement_$Overlay = goog.module.get('elemental2.dom.HTMLAudioElement.$Overlay$impl');
  HTMLBRElement_$Overlay = goog.module.get('elemental2.dom.HTMLBRElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLCanvasElement_$Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  HTMLDListElement_$Overlay = goog.module.get('elemental2.dom.HTMLDListElement.$Overlay$impl');
  HTMLDataListElement_$Overlay = goog.module.get('elemental2.dom.HTMLDataListElement.$Overlay$impl');
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLEmbedElement_$Overlay = goog.module.get('elemental2.dom.HTMLEmbedElement.$Overlay$impl');
  HTMLFieldSetElement_$Overlay = goog.module.get('elemental2.dom.HTMLFieldSetElement.$Overlay$impl');
  HTMLFormElement_$Overlay = goog.module.get('elemental2.dom.HTMLFormElement.$Overlay$impl');
  HTMLHRElement_$Overlay = goog.module.get('elemental2.dom.HTMLHRElement.$Overlay$impl');
  HTMLHeadingElement_$Overlay = goog.module.get('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
  HTMLIFrameElement_$Overlay = goog.module.get('elemental2.dom.HTMLIFrameElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLIElement_$Overlay = goog.module.get('elemental2.dom.HTMLLIElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLLegendElement_$Overlay = goog.module.get('elemental2.dom.HTMLLegendElement.$Overlay$impl');
  HTMLMapElement_$Overlay = goog.module.get('elemental2.dom.HTMLMapElement.$Overlay$impl');
  HTMLMeterElement_$Overlay = goog.module.get('elemental2.dom.HTMLMeterElement.$Overlay$impl');
  HTMLModElement_$Overlay = goog.module.get('elemental2.dom.HTMLModElement.$Overlay$impl');
  HTMLOListElement_$Overlay = goog.module.get('elemental2.dom.HTMLOListElement.$Overlay$impl');
  HTMLObjectElement_$Overlay = goog.module.get('elemental2.dom.HTMLObjectElement.$Overlay$impl');
  HTMLOptGroupElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptGroupElement.$Overlay$impl');
  HTMLOptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLOptionElement.$Overlay$impl');
  HTMLOutputElement_$Overlay = goog.module.get('elemental2.dom.HTMLOutputElement.$Overlay$impl');
  HTMLParagraphElement_$Overlay = goog.module.get('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
  HTMLParamElement_$Overlay = goog.module.get('elemental2.dom.HTMLParamElement.$Overlay$impl');
  HTMLPreElement_$Overlay = goog.module.get('elemental2.dom.HTMLPreElement.$Overlay$impl');
  HTMLProgressElement_$Overlay = goog.module.get('elemental2.dom.HTMLProgressElement.$Overlay$impl');
  HTMLQuoteElement_$Overlay = goog.module.get('elemental2.dom.HTMLQuoteElement.$Overlay$impl');
  HTMLScriptElement_$Overlay = goog.module.get('elemental2.dom.HTMLScriptElement.$Overlay$impl');
  HTMLSelectElement_$Overlay = goog.module.get('elemental2.dom.HTMLSelectElement.$Overlay$impl');
  HTMLSourceElement_$Overlay = goog.module.get('elemental2.dom.HTMLSourceElement.$Overlay$impl');
  HTMLTableCaptionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCaptionElement.$Overlay$impl');
  HTMLTableCellElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableCellElement.$Overlay$impl');
  HTMLTableColElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableColElement.$Overlay$impl');
  HTMLTableElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableElement.$Overlay$impl');
  HTMLTableRowElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableRowElement.$Overlay$impl');
  HTMLTableSectionElement_$Overlay = goog.module.get('elemental2.dom.HTMLTableSectionElement.$Overlay$impl');
  HTMLTextAreaElement_$Overlay = goog.module.get('elemental2.dom.HTMLTextAreaElement.$Overlay$impl');
  HTMLTrackElement_$Overlay = goog.module.get('elemental2.dom.HTMLTrackElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  Spliterators = goog.module.get('java.util.Spliterators$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Stream = goog.module.get('java.util.stream.Stream$impl');
  StreamSupport = goog.module.get('java.util.stream.StreamSupport$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  BodyObserver = goog.module.get('org.jboss.elemento.BodyObserver$impl');
  $1 = goog.module.get('org.jboss.elemento.Elements.$1$impl');
  AsHTMLElement = goog.module.get('org.jboss.elemento.Elements.AsHTMLElement$impl');
  FilterHTMLElements = goog.module.get('org.jboss.elemento.Elements.FilterHTMLElements$impl');
  JsArrayElementIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayElementIterator$impl');
  JsArrayLikeIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');
  JsArrayNodeIterator = goog.module.get('org.jboss.elemento.Elements.JsArrayNodeIterator$impl');
  ElementsBag = goog.module.get('org.jboss.elemento.ElementsBag$impl');
  EmptyContentBuilder = goog.module.get('org.jboss.elemento.EmptyContentBuilder$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  InputBuilder = goog.module.get('org.jboss.elemento.InputBuilder$impl');
  TextContentBuilder = goog.module.get('org.jboss.elemento.TextContentBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $JavaScriptObject = goog.module.get('vmbootstrap.JavaScriptObject$impl');
 }
 
}
$Util.$setClassMetadata(Elements, 'org.jboss.elemento.Elements');

/** @public {?string} @const */
Elements.f_UNIQUE_ID__org_jboss_elemento_Elements_ = "id-";
/** @public {number} */
Elements.f_counter__org_jboss_elemento_Elements_ = 0;
/** @private {ElementCreator} */
Elements.$f_createElement__org_jboss_elemento_Elements;

exports = Elements; 
//# sourceMappingURL=Elements.js.map