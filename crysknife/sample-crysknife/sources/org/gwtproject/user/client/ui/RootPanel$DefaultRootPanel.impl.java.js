goog.module('org.gwtproject.user.client.ui.RootPanel.DefaultRootPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RootPanel = goog.require('org.gwtproject.user.client.ui.RootPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

class DefaultRootPanel extends RootPanel {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultRootPanel} */
 static $create__() {
  DefaultRootPanel.$clinit();
  let $instance = new DefaultRootPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_RootPanel_DefaultRootPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_RootPanel_DefaultRootPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_RootPanel__org_gwtproject_dom_client_Element(RootPanel.m_getBodyElement__());
 }
 /** @override */
 m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(/** Widget */ w, /** number */ left, /** number */ top) {
  left -= $Overlay.m_getBodyOffsetLeft__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  top -= $Overlay.m_getBodyOffsetTop__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  super.m_setWidgetPositionImpl__org_gwtproject_user_client_ui_Widget__int__int(w, left, top);
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
  DefaultRootPanel.$clinit = () =>{};
  DefaultRootPanel.$loadModules();
  RootPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultRootPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(DefaultRootPanel, 'org.gwtproject.user.client.ui.RootPanel$DefaultRootPanel');

exports = DefaultRootPanel; 
//# sourceMappingURL=RootPanel$DefaultRootPanel.js.map