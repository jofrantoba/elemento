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
 /** @protected */
 constructor() {
  super();
 }
 /** @return {Canvas} */
 static m_createIfSupported__() {
  Canvas.$clinit();
  let element = $Overlay.m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  if (!Canvas.m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(element)) {
   return null;
  }
  return Canvas.$create__org_gwtproject_dom_client_CanvasElement(element);
 }
 /** @return {Canvas} */
 static m_wrap__org_gwtproject_dom_client_CanvasElement(/** Object */ element) {
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
 /** @return {boolean} */
 static m_isSupported__() {
  Canvas.$clinit();
  return Canvas.m_isSupported__org_gwtproject_dom_client_CanvasElement($Overlay.m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
 }
 /** @return {boolean} */
 static m_isSupported__org_gwtproject_dom_client_CanvasElement(/** Object */ element) {
  return Canvas.m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(element);
 }
 /** @return {!Canvas} */
 static $create__org_gwtproject_dom_client_CanvasElement(/** Object */ element) {
  let $instance = new Canvas();
  $instance.$ctor__org_gwtproject_canvas_client_Canvas__org_gwtproject_dom_client_CanvasElement(element);
  return $instance;
 }
 
 $ctor__org_gwtproject_canvas_client_Canvas__org_gwtproject_dom_client_CanvasElement(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_FocusWidget__();
  this.m_setElement__org_gwtproject_dom_client_Element(element);
 }
 /** @return {Object} */
 m_getCanvasElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.m_getElement__()), CanvasElement_$Overlay));
 }
 /** @return {Object} */
 m_getContext__java_lang_String(/** ?string */ contextId) {
  return this.m_getCanvasElement__().getContext(contextId);
 }
 /** @return {Object} */
 m_getContext2d__() {
  return CanvasElement_$Overlay.m_getContext2d__$devirt__org_gwtproject_dom_client_CanvasElement(this.m_getCanvasElement__());
 }
 /** @return {number} */
 m_getCoordinateSpaceHeight__() {
  return this.m_getCanvasElement__().height;
 }
 /** @return {number} */
 m_getCoordinateSpaceWidth__() {
  return this.m_getCanvasElement__().width;
 }
 
 m_setCoordinateSpaceHeight__int(/** number */ height) {
  this.m_getCanvasElement__().height = height;
 }
 
 m_setCoordinateSpaceWidth__int(/** number */ width) {
  this.m_getCanvasElement__().width = width;
 }
 /** @return {?string} */
 m_toDataUrl__() {
  return this.m_getCanvasElement__().toDataURL();
 }
 /** @return {?string} */
 m_toDataUrl__java_lang_String(/** ?string */ type) {
  return this.m_getCanvasElement__().toDataURL(type);
 }
 /** @return {boolean} */
 static m_isSupportedRunTime__org_gwtproject_dom_client_CanvasElement(/** Object */ element) {
  return JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (element), "getContext");
 }
 
 static $clinit() {
  Canvas.$clinit = () =>{};
  Canvas.$loadModules();
  FocusWidget.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Canvas;
 }
 
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