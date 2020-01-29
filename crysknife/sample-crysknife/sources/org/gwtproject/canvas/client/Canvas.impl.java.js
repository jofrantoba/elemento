goog.module('org.gwtproject.canvas.client.Canvas$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FocusWidget = goog.require('org.gwtproject.user.client.ui.FocusWidget$impl');

let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Context_$Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context.$Overlay$impl');
let Context2d_$Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.$Overlay$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Canvas extends FocusWidget {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {Canvas}
  * @public
  */
 static m_createIfSupported__() {
  Canvas.$clinit();
  let element = $Overlay.m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  if (!Canvas.m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(element)) {
   return null;
  }
  return Canvas.$create__org_gwtproject_dom_client_CanvasElement(element);
 }
 /**
  * @param {Object} element
  * @return {Canvas}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_CanvasElement(element) {
  Canvas.$clinit();
  if (!Canvas.m_isSupported__org_gwtproject_dom_client_CanvasElement(element)) {
   return null;
  }
  $Asserts.$assert(Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node($Overlay.m_get__().body, element));
  let canvas = Canvas.$create__org_gwtproject_dom_client_CanvasElement(element);
  canvas.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(canvas);
  return canvas;
 }
 /**
  * @return {boolean}
  * @public
  */
 static m_isSupported__() {
  Canvas.$clinit();
  return Canvas.m_isSupported__org_gwtproject_dom_client_CanvasElement($Overlay.m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /**
  * @param {Object} element
  * @return {boolean}
  * @public
  */
 static m_isSupported__org_gwtproject_dom_client_CanvasElement(element) {
  return Canvas.m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(element);
 }
 /**
  * @param {Object} element
  * @return {!Canvas}
  * @public
  */
 static $create__org_gwtproject_dom_client_CanvasElement(element) {
  let $instance = new Canvas();
  $instance.$ctor__org_gwtproject_canvas_client_Canvas__org_gwtproject_dom_client_CanvasElement(element);
  return $instance;
 }
 /**
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_canvas_client_Canvas__org_gwtproject_dom_client_CanvasElement(element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getCanvasElement__() {
  return /**@type {Object} */ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), CanvasElement_$Overlay));
 }
 /**
  * @param {?string} contextId
  * @return {Object}
  * @public
  */
 m_getContext__java_lang_String(contextId) {
  return this.m_getCanvasElement__().getContext(contextId);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getContext2d__() {
  return CanvasElement_$Overlay.m_getContext2d__$devirt__org_gwtproject_dom_client_CanvasElement(this.m_getCanvasElement__());
 }
 /**
  * @return {number}
  * @public
  */
 m_getCoordinateSpaceHeight__() {
  return this.m_getCanvasElement__().height;
 }
 /**
  * @return {number}
  * @public
  */
 m_getCoordinateSpaceWidth__() {
  return this.m_getCanvasElement__().width;
 }
 /**
  * @param {number} height
  * @public
  */
 m_setCoordinateSpaceHeight__int(height) {
  this.m_getCanvasElement__().height = height;
 }
 /**
  * @param {number} width
  * @public
  */
 m_setCoordinateSpaceWidth__int(width) {
  this.m_getCanvasElement__().width = width;
 }
 /**
  * @return {?string}
  * @public
  */
 m_toDataUrl__() {
  return this.m_getCanvasElement__().toDataURL();
 }
 /**
  * @param {?string} type
  * @return {?string}
  * @public
  */
 m_toDataUrl__java_lang_String(type) {
  return this.m_getCanvasElement__().toDataURL(type);
 }
 /**
  * @param {Object} element
  * @return {boolean}
  * @public
  */
 static m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(element) {
  return JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (element), "getContext");
 }
 /**
  * @public
  */
 static $clinit() {
  Canvas.$clinit = () =>{};
  Canvas.$loadModules();
  FocusWidget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Canvas;
 }
 /**
  * @public
  */
 static $loadModules() {
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  CanvasElement_$Overlay = goog.module.get('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Canvas, 'org.gwtproject.canvas.client.Canvas');

exports = Canvas; 
//# sourceMappingURL=Canvas.js.map