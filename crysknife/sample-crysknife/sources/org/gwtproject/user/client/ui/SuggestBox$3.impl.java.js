goog.module('org.gwtproject.user.client.ui.SuggestBox.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.gwtproject.event.dom.client.ChangeHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let SuggestBox = goog.forwardDeclare('org.gwtproject.user.client.ui.SuggestBox$impl');

/**
 * @implements {ChangeHandler}
  */
class $3 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SuggestBox} */
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_3;
 }
 /**
  * @param {SuggestBox} $outer_this
  * @return {!$3}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_SuggestBox($outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_user_client_ui_SuggestBox_3__org_gwtproject_user_client_ui_SuggestBox($outer_this);
  return $instance;
 }
 /**
  * @param {SuggestBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SuggestBox_3__org_gwtproject_user_client_ui_SuggestBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_SuggestBox_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ChangeEvent} changeEvent
  * @public
  */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(changeEvent) {}
 /**
  * @public
  */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.user.client.ui.SuggestBox$3');

ChangeHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=SuggestBox$3.js.map