goog.module('org.gwtproject.user.client.ui.TabLayoutPanel.TabbedDeckLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DeckLayoutPanel = goog.require('org.gwtproject.user.client.ui.DeckLayoutPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let TabLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class TabbedDeckLayoutPanel extends DeckLayoutPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TabLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_TabbedDeckLayoutPanel;
 }
 /**
  * @param {TabLayoutPanel} $outer_this
  * @return {!TabbedDeckLayoutPanel}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_TabLayoutPanel($outer_this) {
  TabbedDeckLayoutPanel.$clinit();
  let $instance = new TabbedDeckLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabLayoutPanel_TabbedDeckLayoutPanel__org_gwtproject_user_client_ui_TabLayoutPanel($outer_this);
  return $instance;
 }
 /**
  * @param {TabLayoutPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TabLayoutPanel_TabbedDeckLayoutPanel__org_gwtproject_user_client_ui_TabLayoutPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_TabbedDeckLayoutPanel = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel__();
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabLayoutPanel.add() to alter the DeckLayoutPanel"));
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabLayoutPanel.clear() to alter the DeckLayoutPanel"));
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Use TabLayoutPanel.insert() to alter the DeckLayoutPanel"));
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  return this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_TabbedDeckLayoutPanel.m_remove__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insertProtected__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  super.m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex);
 }
 /**
  * @param {Widget} w
  * @public
  */
 m_removeProtected__org_gwtproject_user_client_ui_Widget(w) {
  super.m_remove__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @public
  */
 static $clinit() {
  TabbedDeckLayoutPanel.$clinit = () =>{};
  TabbedDeckLayoutPanel.$loadModules();
  DeckLayoutPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TabbedDeckLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TabbedDeckLayoutPanel, 'org.gwtproject.user.client.ui.TabLayoutPanel$TabbedDeckLayoutPanel');

exports = TabbedDeckLayoutPanel; 
//# sourceMappingURL=TabLayoutPanel$TabbedDeckLayoutPanel.js.map