goog.module('org.gwtproject.user.client.ui.HeaderPanel.WidgetProviderImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const WidgetProvider = goog.require('org.gwtproject.user.client.ui.FiniteWidgetIterator.WidgetProvider$impl');

let ArrayIndexOutOfBoundsException = goog.forwardDeclare('java.lang.ArrayIndexOutOfBoundsException$impl');
let HeaderPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {WidgetProvider}
  */
class WidgetProviderImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HeaderPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl;
 }
 /**
  * @param {HeaderPanel} $outer_this
  * @return {!WidgetProviderImpl}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HeaderPanel($outer_this) {
  WidgetProviderImpl.$clinit();
  let $instance = new WidgetProviderImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl__org_gwtproject_user_client_ui_HeaderPanel($outer_this);
  return $instance;
 }
 /**
  * @param {HeaderPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl__org_gwtproject_user_client_ui_HeaderPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_get__int(index) {
  switch (index) {
   case 0: 
    return this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl.f_header__org_gwtproject_user_client_ui_HeaderPanel_;
   case 1: 
    return this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl.f_content__org_gwtproject_user_client_ui_HeaderPanel_;
   case 2: 
    return this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_WidgetProviderImpl.f_footer__org_gwtproject_user_client_ui_HeaderPanel_;
  }
  throw $Exceptions.toJs(ArrayIndexOutOfBoundsException.$create__int(index));
 }
 /**
  * @public
  */
 static $clinit() {
  WidgetProviderImpl.$clinit = () =>{};
  WidgetProviderImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WidgetProviderImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayIndexOutOfBoundsException = goog.module.get('java.lang.ArrayIndexOutOfBoundsException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(WidgetProviderImpl, 'org.gwtproject.user.client.ui.HeaderPanel$WidgetProviderImpl');

WidgetProvider.$markImplementor(WidgetProviderImpl);

exports = WidgetProviderImpl; 
//# sourceMappingURL=HeaderPanel$WidgetProviderImpl.js.map