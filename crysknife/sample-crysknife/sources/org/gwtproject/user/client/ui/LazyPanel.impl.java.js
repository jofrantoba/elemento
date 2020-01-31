goog.module('org.gwtproject.user.client.ui.LazyPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @abstract
  */
class LazyPanel extends SimplePanel {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_user_client_ui_LazyPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
 }
 /** @abstract @return {Widget} */
 m_createWidget__() {}
 
 m_ensureWidget__() {
  let widget = this.m_getWidget__();
  if ($Equality.$same(widget, null)) {
   widget = this.m_createWidget__();
   this.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
  }
 }
 /** @override */
 m_setVisible__boolean(/** boolean */ visible) {
  if (visible) {
   this.m_ensureWidget__();
  }
  super.m_setVisible__boolean(visible);
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 
 static $clinit() {
  LazyPanel.$clinit = () =>{};
  LazyPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LazyPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(LazyPanel, 'org.gwtproject.user.client.ui.LazyPanel');

exports = LazyPanel; 
//# sourceMappingURL=LazyPanel.js.map