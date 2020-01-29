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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LazyPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
 }
 /**
  * @abstract
  * @return {Widget}
  * @public
  */
 m_createWidget__() {}
 /**
  * @public
  */
 m_ensureWidget__() {
  let widget = this.m_getWidget__();
  if ($Equality.$same(widget, null)) {
   widget = this.m_createWidget__();
   this.m_setWidget__org_gwtproject_user_client_ui_Widget(widget);
  }
 }
 /**
  * @override
  * @param {boolean} visible
  * @public
  */
 m_setVisible__boolean(visible) {
  if (visible) {
   this.m_ensureWidget__();
  }
  super.m_setVisible__boolean(visible);
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
  LazyPanel.$clinit = () =>{};
  LazyPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LazyPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(LazyPanel, 'org.gwtproject.user.client.ui.LazyPanel');

exports = LazyPanel; 
//# sourceMappingURL=LazyPanel.js.map