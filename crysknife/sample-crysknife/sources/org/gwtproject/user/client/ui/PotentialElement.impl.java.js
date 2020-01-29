goog.module('org.gwtproject.user.client.ui.PotentialElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Error = goog.forwardDeclare('java.lang.Error$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Number = goog.forwardDeclare('java.lang.Number$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
let HtmlElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlElementBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let GwtPotentialElementShim = goog.forwardDeclare('org.gwtproject.user.client.ui.GwtPotentialElementShim$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class PotentialElement extends Object {
 /**
  * @public
  */
 constructor() {
  PotentialElement.$clinit();
  super();
  this.$ctor__org_gwtproject_user_client_ui_PotentialElement__();
 }
 /**
  * @param {Object} e
  * @return {PotentialElement}
  * @public
  */
 static m_as__org_gwtproject_dom_client_Element(e) {
  PotentialElement.$clinit();
  $Asserts.$assert(PotentialElement.m_isPotential__org_gwtproject_core_client_JavaScriptObject(e));
  return /**@type {PotentialElement} */ ($Casts.$to(e, PotentialElement));
 }
 /**
  * @param {UIObject} o
  * @return {PotentialElement}
  * @public
  */
 static m_build__org_gwtproject_user_client_ui_UIObject(o) {
  PotentialElement.$clinit();
  return PotentialElement.m_build__org_gwtproject_user_client_ui_UIObject__java_lang_String(o, "div");
 }
 /**
  * @param {UIObject} o
  * @param {?string} tagName
  * @return {PotentialElement}
  * @public
  */
 static m_build__org_gwtproject_user_client_ui_UIObject__java_lang_String(o, tagName) {
  PotentialElement.$clinit();
  let shim = new GwtPotentialElementShim();
  shim.tagName = tagName;
  shim.__gwt_resolve = () =>{
   PotentialElement.m_buildResolveCallback__org_gwtproject_user_client_ui_UIObject(o);
  };
  return /**@type {PotentialElement} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(shim)));
 }
 /**
  * @param {Object} potentialElement
  * @return {HtmlElementBuilder}
  * @public
  */
 static m_createBuilderFor__org_gwtproject_dom_client_Element(potentialElement) {
  PotentialElement.$clinit();
  let el = PotentialElement.m_as__org_gwtproject_dom_client_Element(potentialElement);
  let builder = HtmlBuilderFactory.m_get__().m_trustedCreate__java_lang_String($Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(el));
  el.m_mergeInto__org_gwtproject_dom_builder_shared_HtmlElementBuilder_$p_org_gwtproject_user_client_ui_PotentialElement(builder);
  return builder;
 }
 /**
  * @param {Object} o
  * @return {boolean}
  * @public
  */
 static m_isPotential__org_gwtproject_core_client_JavaScriptObject(o) {
  PotentialElement.$clinit();
  return DOM.m_isPotential__org_gwtproject_core_client_JavaScriptObject(o);
 }
 /**
  * @param {Object} maybePotential
  * @return {Object}
  * @public
  */
 static m_resolve__org_gwtproject_dom_client_Element(maybePotential) {
  PotentialElement.$clinit();
  return /**@type {PotentialElement} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(maybePotential), PotentialElement)).m_resolve___$p_org_gwtproject_user_client_ui_PotentialElement();
 }
 /**
  * @param {UIObject} resolver
  * @return {Object}
  * @public
  */
 static m_buildResolveCallback__org_gwtproject_user_client_ui_UIObject(resolver) {
  let func = () =>{
   return resolver.m_resolvePotentialElement__();
  };
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(func));
 }
 /**
  * @public
  */
 static m_cannotResolveTwice__() {
  throw $Exceptions.toJs(Error.$create__java_lang_String("A PotentialElement cannot be resolved twice."));
 }
 /**
  * @public
  */
 static m_declareShim__() {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(window.window), "GwtPotentialElementShim", new GwtPotentialElementShim());
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PotentialElement__() {}
 /**
  * @param {UIObject} resolver
  * @return {Object}
  * @public
  */
 m_setResolver__org_gwtproject_user_client_ui_UIObject_$pp_org_gwtproject_user_client_ui(resolver) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (this), "__gwt_resolve", PotentialElement.m_buildResolveCallback__org_gwtproject_user_client_ui_UIObject(resolver));
  return this;
 }
 /**
  * @param {HtmlElementBuilder} builder
  * @public
  */
 m_mergeInto__org_gwtproject_dom_builder_shared_HtmlElementBuilder_$p_org_gwtproject_user_client_ui_PotentialElement(builder) {
  let _this = /**@type {Object} */ (this);
  let savedProto = $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "__proto__"));
  let tagName = $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "tagName"));
  let gwtResolve = $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "__gwt_resolve"));
  let className = $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "className"));
  try {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "__proto__", null);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "tagName", null);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "__gwt_resolve", null);
   if (!$Equality.$same(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "className"), null)) {
    builder.m_className__java_lang_String($Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, "className")));
    JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "className", null);
   }
   JsPropertyMap_$Overlay.m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn(_this, (/** ?string */ fn) =>{
    if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, fn)) {
     let obj = JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, fn);
     if (j_l_String.$isInstance(obj)) {
      builder.m_attribute__java_lang_String__java_lang_String(fn, $Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, fn)));
     } else if (Number.$isInstance(obj)) {
      builder.m_attribute__java_lang_String__int(fn, Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(_this, fn))).m_intValue__());
     }
    }
   });
  } finally {
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "__proto__", savedProto);
   if (!$Equality.$same(className, null)) {
    JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "className", className);
   }
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "__gwt_resolve", gwtResolve);
   JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(_this, "tagName", tagName);
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_resolve___$p_org_gwtproject_user_client_ui_PotentialElement() {
  return JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (this), "__gwt_resolve") ? /**@type {?function():Object} */ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (this), "__gwt_resolve"), $JavaScriptFunction))() : this;
 }
 /**
  * @public
  */
 static $clinit() {
  PotentialElement.$clinit = () =>{};
  PotentialElement.$loadModules();
  PotentialElement.m_declareShim__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PotentialElement;
 }
 /**
  * @public
  */
 static $loadModules() {
  Error = goog.module.get('java.lang.Error$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Number = goog.module.get('java.lang.Number$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  GwtPotentialElementShim = goog.module.get('org.gwtproject.user.client.ui.GwtPotentialElementShim$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(PotentialElement, 'org.gwtproject.user.client.ui.PotentialElement');

exports = PotentialElement; 
//# sourceMappingURL=PotentialElement.js.map