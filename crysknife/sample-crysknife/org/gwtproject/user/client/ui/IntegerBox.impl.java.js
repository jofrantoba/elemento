goog.module('org.gwtproject.user.client.ui.IntegerBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBox = goog.require('org.gwtproject.user.client.ui.ValueBox$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let IntegerParser = goog.forwardDeclare('org.gwtproject.text.client.IntegerParser$impl');
let IntegerRenderer = goog.forwardDeclare('org.gwtproject.text.client.IntegerRenderer$impl');

/**
 * @extends {ValueBox<Integer>}
  */
class IntegerBox extends ValueBox {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!IntegerBox} */
 static $create__() {
  IntegerBox.$clinit();
  let $instance = new IntegerBox();
  $instance.$ctor__org_gwtproject_user_client_ui_IntegerBox__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_IntegerBox__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueBox__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser($Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), IntegerRenderer.m_instance__(), IntegerParser.m_instance__());
 }
 
 static $clinit() {
  IntegerBox.$clinit = () =>{};
  IntegerBox.$loadModules();
  ValueBox.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IntegerBox;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  IntegerParser = goog.module.get('org.gwtproject.text.client.IntegerParser$impl');
  IntegerRenderer = goog.module.get('org.gwtproject.text.client.IntegerRenderer$impl');
 }
 
}
$Util.$setClassMetadata(IntegerBox, 'org.gwtproject.user.client.ui.IntegerBox');

exports = IntegerBox; 
//# sourceMappingURL=IntegerBox.js.map