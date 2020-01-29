goog.module('org.gwtproject.user.client.ui.DialogBox.CaptionImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Caption = goog.require('org.gwtproject.user.client.ui.DialogBox.Caption$impl');
const HTML = goog.require('org.gwtproject.user.client.ui.HTML$impl');

/**
 * @implements {Caption}
  */
class CaptionImpl extends HTML {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!CaptionImpl}
  * @public
  */
 static $create__() {
  CaptionImpl.$clinit();
  let $instance = new CaptionImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox_CaptionImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox_CaptionImpl__() {
  this.$ctor__org_gwtproject_user_client_ui_HTML__();
  this.m_setStyleName__java_lang_String("Caption");
 }
 /**
  * @public
  */
 static $clinit() {
  CaptionImpl.$clinit = () =>{};
  CaptionImpl.$loadModules();
  HTML.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CaptionImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(CaptionImpl, 'org.gwtproject.user.client.ui.DialogBox$CaptionImpl');

Caption.$markImplementor(CaptionImpl);

exports = CaptionImpl; 
//# sourceMappingURL=DialogBox$CaptionImpl.js.map