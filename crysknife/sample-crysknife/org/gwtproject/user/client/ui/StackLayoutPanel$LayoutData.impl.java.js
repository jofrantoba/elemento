goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.LayoutData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Header = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class LayoutData extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData = 0.0;
  /** @public {Header} */
  this.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData;
  /** @public {Widget} */
  this.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData;
 }
 /**
  * @param {Widget} widget
  * @param {Header} header
  * @param {number} headerSize
  * @return {!LayoutData}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double(widget, header, headerSize) {
  LayoutData.$clinit();
  let $instance = new LayoutData();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double(widget, header, headerSize);
  return $instance;
 }
 /**
  * @param {Widget} widget
  * @param {Header} header
  * @param {number} headerSize
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double(widget, header, headerSize) {
  this.$ctor__java_lang_Object__();
  this.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData = widget;
  this.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData = header;
  this.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData = headerSize;
 }
 /**
  * @public
  */
 static $clinit() {
  LayoutData.$clinit = () =>{};
  LayoutData.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LayoutData;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(LayoutData, 'org.gwtproject.user.client.ui.StackLayoutPanel$LayoutData');

exports = LayoutData; 
//# sourceMappingURL=StackLayoutPanel$LayoutData.js.map