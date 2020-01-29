goog.module('org.gwtproject.user.client.ui.DoubleBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBox = goog.require('org.gwtproject.user.client.ui.ValueBox$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let DoubleParser = goog.forwardDeclare('org.gwtproject.text.client.DoubleParser$impl');
let DoubleRenderer = goog.forwardDeclare('org.gwtproject.text.client.DoubleRenderer$impl');

/**
 * @extends {ValueBox<?number>}
  */
class DoubleBox extends ValueBox {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DoubleBox}
  * @public
  */
 static $create__() {
  DoubleBox.$clinit();
  let $instance = new DoubleBox();
  $instance.$ctor__org_gwtproject_user_client_ui_DoubleBox__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DoubleBox__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueBox__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser($Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), DoubleRenderer.m_instance__(), DoubleParser.m_instance__());
 }
 /**
  * @public
  */
 static $clinit() {
  DoubleBox.$clinit = () =>{};
  DoubleBox.$loadModules();
  ValueBox.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DoubleBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  DoubleParser = goog.module.get('org.gwtproject.text.client.DoubleParser$impl');
  DoubleRenderer = goog.module.get('org.gwtproject.text.client.DoubleRenderer$impl');
 }
 
}
$Util.$setClassMetadata(DoubleBox, 'org.gwtproject.user.client.ui.DoubleBox');

exports = DoubleBox; 
//# sourceMappingURL=DoubleBox.js.map