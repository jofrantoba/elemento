goog.module('org.gwtproject.text.shared.AbstractRenderer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Renderer = goog.require('org.gwtproject.text.shared.Renderer$impl');

let Appendable = goog.forwardDeclare('java.lang.Appendable$impl');

/**
 * @abstract
 * @template T
 * @implements {Renderer<T>}
  */
class AbstractRenderer extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_text_shared_AbstractRenderer__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {T} object
  * @param {Appendable} appendable
  * @public
  */
 m_render__java_lang_Object__java_lang_Appendable(object, appendable) {
  appendable.m_append__java_lang_CharSequence(this.m_render__java_lang_Object(object));
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractRenderer.$clinit = () =>{};
  AbstractRenderer.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(AbstractRenderer, 'org.gwtproject.text.shared.AbstractRenderer');

Renderer.$markImplementor(AbstractRenderer);

exports = AbstractRenderer; 
//# sourceMappingURL=AbstractRenderer.js.map