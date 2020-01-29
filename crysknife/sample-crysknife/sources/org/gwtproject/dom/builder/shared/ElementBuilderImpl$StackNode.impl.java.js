goog.module('org.gwtproject.dom.builder.shared.ElementBuilderImpl.StackNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

class StackNode extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ElementBuilderBase<?>} */
  this.f_builder__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
  /** @public {StackNode} */
  this.f_next__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
  /** @public {?string} */
  this.f_tagName__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
 }
 /**
  * @param {?string} tagName
  * @param {ElementBuilderBase<?>} builder
  * @return {!StackNode}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder) {
  StackNode.$clinit();
  let $instance = new StackNode();
  $instance.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder);
  return $instance;
 }
 /**
  * @param {?string} tagName
  * @param {ElementBuilderBase<?>} builder
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder) {
  this.$ctor__java_lang_Object__();
  this.f_builder__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_ = builder;
  this.f_tagName__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_ = tagName;
 }
 /**
  * @public
  */
 static $clinit() {
  StackNode.$clinit = () =>{};
  StackNode.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StackNode;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(StackNode, 'org.gwtproject.dom.builder.shared.ElementBuilderImpl$StackNode');

exports = StackNode; 
//# sourceMappingURL=ElementBuilderImpl$StackNode.js.map