goog.module('org.gwtproject.dom.builder.shared.ElementBuilderImpl.FastPeekStack$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let ElementBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');
let StackNode = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderImpl.StackNode$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class FastPeekStack extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ElementBuilderImpl} */
  this.f_$outer_this__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack;
  /** @public {StackNode} */
  this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_;
  /** @public {number} */
  this.f_size__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_ = 0;
 }
 /**
  * @param {ElementBuilderImpl} $outer_this
  * @return {!FastPeekStack}
  * @public
  */
 static $create__org_gwtproject_dom_builder_shared_ElementBuilderImpl($outer_this) {
  FastPeekStack.$clinit();
  let $instance = new FastPeekStack();
  $instance.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack__org_gwtproject_dom_builder_shared_ElementBuilderImpl($outer_this);
  return $instance;
 }
 /**
  * @param {ElementBuilderImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack__org_gwtproject_dom_builder_shared_ElementBuilderImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEmpty__() {
  return $Equality.$same(this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_, null);
 }
 /**
  * @return {StackNode}
  * @public
  */
 m_peek__() {
  this.m_assertNotEmpty___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack();
  return this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_;
 }
 /**
  * @return {StackNode}
  * @public
  */
 m_pop__() {
  this.m_assertNotEmpty___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack();
  let toRet = this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_;
  this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_ = this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_.f_next__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
  this.f_size__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_--;
  return toRet;
 }
 /**
  * @param {ElementBuilderBase<?>} builder
  * @param {?string} tagName
  * @public
  */
 m_push__org_gwtproject_dom_builder_shared_ElementBuilderBase__java_lang_String(builder, tagName) {
  let node = StackNode.$create__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder);
  node.f_next__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_ = this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_;
  this.f_top__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_ = node;
  this.f_size__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_++;
 }
 /**
  * @return {number}
  * @public
  */
 m_size__() {
  return this.f_size__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_;
 }
 /**
  * @public
  */
 m_assertNotEmpty___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack() {
  if (this.m_isEmpty__()) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String(FastPeekStack.f_EMPTY_STACK_MESSAGE__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_));
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack() {
  this.f_size__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  FastPeekStack.$clinit = () =>{};
  FastPeekStack.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FastPeekStack;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  StackNode = goog.module.get('org.gwtproject.dom.builder.shared.ElementBuilderImpl.StackNode$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(FastPeekStack, 'org.gwtproject.dom.builder.shared.ElementBuilderImpl$FastPeekStack');

/** @public {?string} @const */
FastPeekStack.f_EMPTY_STACK_MESSAGE__org_gwtproject_dom_builder_shared_ElementBuilderImpl_FastPeekStack_ = "There are no elements on the stack.";

exports = FastPeekStack; 
//# sourceMappingURL=ElementBuilderImpl$FastPeekStack.js.map