goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseOverHandler = goog.require('org.gwtproject.event.dom.client.MouseOverHandler$impl');

let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let StackLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');

/**
 * @implements {MouseOverHandler}
  */
class $4 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {StackLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_4;
  /** @public {Header} */
  this.$c_header;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Header} $c_header
  * @return {!$4}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header($outer_this, $c_header) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_4__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header($outer_this, $c_header);
  return $instance;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Header} $c_header
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_4__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header($outer_this, $c_header) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_4 = $outer_this;
  this.$c_header = $c_header;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {MouseOverEvent} event
  * @public
  */
 m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(event) {
  this.$c_header.m_addStyleName__java_lang_String(StackLayoutPanel.f_HEADER_STYLE_HOVERING__org_gwtproject_user_client_ui_StackLayoutPanel_);
 }
 /**
  * @public
  */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $4;
 }
 /**
  * @public
  */
 static $loadModules() {
  StackLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.user.client.ui.StackLayoutPanel$4');

MouseOverHandler.$markImplementor($4);

exports = $4; 
//# sourceMappingURL=StackLayoutPanel$4.js.map