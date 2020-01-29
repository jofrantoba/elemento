goog.module('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplSafari.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let CaptionPanelImplSafari = goog.forwardDeclare('org.gwtproject.user.client.ui.CaptionPanel.CaptionPanelImplSafari$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CaptionPanelImplSafari} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari_1;
  /** @public {Object} */
  this.$c_fieldset;
 }
 /**
  * @param {CaptionPanelImplSafari} $outer_this
  * @param {Object} $c_fieldset
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__org_gwtproject_dom_client_FieldSetElement($outer_this, $c_fieldset) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari_1__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__org_gwtproject_dom_client_FieldSetElement($outer_this, $c_fieldset);
  return $instance;
 }
 /**
  * @param {CaptionPanelImplSafari} $outer_this
  * @param {Object} $c_fieldset
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari_1__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari__org_gwtproject_dom_client_FieldSetElement($outer_this, $c_fieldset) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CaptionPanel_CaptionPanelImplSafari_1 = $outer_this;
  this.$c_fieldset = $c_fieldset;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.$c_fieldset.style, "visibility", "");
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.CaptionPanel$CaptionPanelImplSafari$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CaptionPanel$CaptionPanelImplSafari$1.js.map