goog.module('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let FastPeekStack = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderImpl.FastPeekStack$impl');
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
  */
class ElementBuilderImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_asElementCalled__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {boolean} */
  this.f_isEmpty__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {boolean} */
  this.f_isHtmlOrTextAdded__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {boolean} */
  this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {boolean} */
  this.f_isStyleClosed__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {boolean} */
  this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  /** @public {FastPeekStack} */
  this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  if ($Equality.$same(ElementBuilderImpl.f_HTML_TAG_REGEX__org_gwtproject_dom_builder_shared_ElementBuilderImpl_, null)) {
   ElementBuilderImpl.f_HTML_TAG_REGEX__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = RegExp.m_compile__java_lang_String__java_lang_String("^[a-z][a-z0-9]*$", "i");
  }
 }
 /**
  * @public
  */
 m_end__() {
  this.m_endImpl__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl(this.m_getCurrentTagName___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl());
 }
 /**
  * @param {?string} tagName
  * @public
  */
 m_end__java_lang_String(tagName) {
  let topItem = this.m_getCurrentTagName___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  if (!j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String(topItem, tagName)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Specified tag \"" + j_l_String.m_valueOf__java_lang_Object(tagName) + "\" does not match the current element \"" + j_l_String.m_valueOf__java_lang_Object(topItem) + "\""));
  }
  this.m_endImpl__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl(topItem);
 }
 /**
  * @public
  */
 m_endStyle__() {
  if (!this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Attempting to close a style attribute, but the style attribute isn't open"));
  }
  this.m_maybeCloseStyleAttribute___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
 }
 /**
  * @return {Object}
  * @public
  */
 m_finish__() {
  if (this.f_asElementCalled__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("asElement() can only be called once."));
  }
  this.f_asElementCalled__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
  this.m_endAllTags__();
  return this.m_doFinishImpl__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getDepth__() {
  return this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_size__();
 }
 /**
  * @param {SafeHtml} html
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_assertStartTagOpen__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("html cannot be set on an element that already " + "contains other content or elements.");
  this.m_lockCurrentElement__();
  this.m_doHtmlImpl__org_gwtproject_safehtml_shared_SafeHtml(html);
 }
 /**
  * @param {?string} tagName
  * @param {ElementBuilderBase<?>} builder
  * @public
  */
 m_onStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder) {
  if (this.f_isEmpty__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   this.f_isEmpty__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  } else if (this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_isEmpty__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("You can only build one top level element."));
  } else {
   this.m_assertEndTagNotForbidden__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("child elements");
   if (!this.m_getCurrentBuilder___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl().m_isChildElementSupported__()) {
    throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(this.m_getCurrentTagName___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl()) + " does not support child elements."));
   }
  }
  if (this.f_isHtmlOrTextAdded__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Cannot append an element after setting text of html."));
  }
  this.m_assertValidTagName__java_lang_String(tagName);
  this.m_maybeCloseStartTag___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_push__org_gwtproject_dom_builder_shared_ElementBuilderBase__java_lang_String(builder, tagName);
  this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
  this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  this.f_isStyleClosed__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  this.f_isHtmlOrTextAdded__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
 }
 /**
  * @abstract
  * @return {StylesBuilder}
  * @public
  */
 m_style__() {}
 /**
  * @param {?string} text
  * @public
  */
 m_text__java_lang_String(text) {
  this.m_assertStartTagOpen__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("text cannot be set on an element that already " + "contains other content or elements.");
  this.m_lockCurrentElement__();
  this.m_doTextImpl__java_lang_String(text);
 }
 /**
  * @public
  */
 m_assertCanAddAttributeImpl__() {
  this.m_assertStartTagOpen__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("Attributes cannot be added after appending HTML or adding a child " + "element.");
  this.m_maybeCloseStyleAttribute___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
 }
 /**
  * @public
  */
 m_assertCanAddStylePropertyImpl__() {
  this.m_assertStartTagOpen__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("Style properties cannot be added after appending HTML or adding a child " + "element.");
  if (this.f_isStyleClosed__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Style properties must be added at the same time. If you already added style properties," + " you cannot add more after adding non-style attributes."));
  }
  if (!this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
   this.m_doOpenStyleImpl__();
  }
 }
 /**
  * @param {?string} tagName
  * @public
  */
 m_assertValidTagName__java_lang_String(tagName) {
  if (!ElementBuilderImpl.f_HTML_TAG_REGEX__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_test__java_lang_String(tagName)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("The specified tag name is invalid: " + j_l_String.m_valueOf__java_lang_Object(tagName)));
  }
 }
 /**
  * @abstract
  * @public
  */
 m_doCloseStartTagImpl__() {}
 /**
  * @abstract
  * @public
  */
 m_doCloseStyleAttributeImpl__() {}
 /**
  * @abstract
  * @public
  */
 m_doEndStartTagImpl__() {}
 /**
  * @abstract
  * @param {?string} tagName
  * @public
  */
 m_doEndTagImpl__java_lang_String(tagName) {}
 /**
  * @abstract
  * @return {Object}
  * @public
  */
 m_doFinishImpl__() {}
 /**
  * @abstract
  * @param {SafeHtml} html
  * @public
  */
 m_doHtmlImpl__org_gwtproject_safehtml_shared_SafeHtml(html) {}
 /**
  * @abstract
  * @public
  */
 m_doOpenStyleImpl__() {}
 /**
  * @abstract
  * @param {?string} text
  * @public
  */
 m_doTextImpl__java_lang_String(text) {}
 /**
  * @public
  */
 m_endAllTags__() {
  while (!this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_isEmpty__()) {
   this.m_end__();
  }
 }
 /**
  * @public
  */
 m_lockCurrentElement__() {
  this.m_maybeCloseStartTag___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  this.m_assertEndTagNotForbidden__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl("html");
  this.f_isHtmlOrTextAdded__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
 }
 /**
  * @param {?string} operation
  * @public
  */
 m_assertEndTagNotForbidden__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl(operation) {
  if (this.m_getCurrentBuilder___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl().m_isEndTagForbidden__()) {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(this.m_getCurrentTagName___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl()) + " does not support " + j_l_String.m_valueOf__java_lang_Object(operation)));
  }
 }
 /**
  * @param {?string} message
  * @public
  */
 m_assertStartTagOpen__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl(message) {
  if (!this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(message));
  }
 }
 /**
  * @param {?string} tagName
  * @public
  */
 m_endImpl__java_lang_String_$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl(tagName) {
  this.m_maybeCloseStartTag___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  if (this.m_getCurrentBuilder___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl().m_isEndTagForbidden__()) {
   this.m_doEndStartTagImpl__();
  } else {
   this.m_doEndTagImpl__java_lang_String(tagName);
  }
  this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
  this.f_isStyleClosed__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
  this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_pop__();
  this.f_isHtmlOrTextAdded__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
 }
 /**
  * @return {ElementBuilderBase<?>}
  * @public
  */
 m_getCurrentBuilder___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl() {
  return this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_peek__().f_builder__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getCurrentTagName___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl() {
  return this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_.m_peek__().f_tagName__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
 }
 /**
  * @public
  */
 m_maybeCloseStartTag___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl() {
  this.m_maybeCloseStyleAttribute___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl();
  if (this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   this.f_isStartTagOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
   if (!this.m_getCurrentBuilder___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl().m_isEndTagForbidden__()) {
    this.m_doCloseStartTagImpl__();
   }
  }
 }
 /**
  * @public
  */
 m_maybeCloseStyleAttribute___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl() {
  if (this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_) {
   this.f_isStyleOpen__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = false;
   this.f_isStyleClosed__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
   this.m_doCloseStyleAttributeImpl__();
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl() {
  this.f_isEmpty__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = true;
  this.f_stack__org_gwtproject_dom_builder_shared_ElementBuilderImpl_ = FastPeekStack.$create__org_gwtproject_dom_builder_shared_ElementBuilderImpl(this);
 }
 /**
  * @public
  */
 static $clinit() {
  ElementBuilderImpl.$clinit = () =>{};
  ElementBuilderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ElementBuilderImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FastPeekStack = goog.module.get('org.gwtproject.dom.builder.shared.ElementBuilderImpl.FastPeekStack$impl');
  RegExp = goog.module.get('org.gwtproject.regexp.shared.RegExp$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ElementBuilderImpl, 'org.gwtproject.dom.builder.shared.ElementBuilderImpl');

/** @public {RegExp} */
ElementBuilderImpl.f_HTML_TAG_REGEX__org_gwtproject_dom_builder_shared_ElementBuilderImpl_;

exports = ElementBuilderImpl; 
//# sourceMappingURL=ElementBuilderImpl.js.map