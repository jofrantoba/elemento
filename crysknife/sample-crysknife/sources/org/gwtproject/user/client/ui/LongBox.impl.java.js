goog.module('org.gwtproject.user.client.ui.LongBox$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueBox = goog.require('org.gwtproject.user.client.ui.ValueBox$impl');

let Long = goog.forwardDeclare('java.lang.Long$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let LongParser = goog.forwardDeclare('org.gwtproject.text.client.LongParser$impl');
let LongRenderer = goog.forwardDeclare('org.gwtproject.text.client.LongRenderer$impl');

/**
 * @extends {ValueBox<Long>}
  */
class LongBox extends ValueBox {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LongBox}
  * @public
  */
 static $create__() {
  LongBox.$clinit();
  let $instance = new LongBox();
  $instance.$ctor__org_gwtproject_user_client_ui_LongBox__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LongBox__() {
  this.$ctor__org_gwtproject_user_client_ui_ValueBox__org_gwtproject_dom_client_Element__org_gwtproject_text_shared_Renderer__org_gwtproject_text_shared_Parser($Overlay.m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), LongRenderer.m_instance__(), LongParser.m_instance__());
 }
 /**
  * @public
  */
 static $clinit() {
  LongBox.$clinit = () =>{};
  LongBox.$loadModules();
  ValueBox.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LongBox;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  LongParser = goog.module.get('org.gwtproject.text.client.LongParser$impl');
  LongRenderer = goog.module.get('org.gwtproject.text.client.LongRenderer$impl');
 }
 
}
$Util.$setClassMetadata(LongBox, 'org.gwtproject.user.client.ui.LongBox');

exports = LongBox; 
//# sourceMappingURL=LongBox.js.map