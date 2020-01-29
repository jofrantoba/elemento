goog.module('org.jboss.elemento.Elements.JsArrayLikeIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @implements {Iterator<T>}
  */
class JsArrayLikeIterator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {IArrayLike<?>} */
  this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_;
  /** @public {number} */
  this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ = 0;
 }
 /**
  * @template T
  * @param {IArrayLike<?>} nodes
  * @return {!JsArrayLikeIterator<T>}
  * @public
  */
 static $create__jsinterop_base_JsArrayLike(nodes) {
  JsArrayLikeIterator.$clinit();
  let $instance = new JsArrayLikeIterator();
  $instance.$ctor__org_jboss_elemento_Elements_JsArrayLikeIterator__jsinterop_base_JsArrayLike(nodes);
  return $instance;
 }
 /**
  * @param {IArrayLike<?>} nodes
  * @public
  */
 $ctor__org_jboss_elemento_Elements_JsArrayLikeIterator__jsinterop_base_JsArrayLike(nodes) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_jboss_elemento_Elements_JsArrayLikeIterator();
  this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_ = nodes;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasNext__() {
  return this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ < $Overlay.m_getLength__$devirt__jsinterop_base_JsArrayLike(this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_);
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_next__() {
  if (!this.m_hasNext__()) {
   throw $Exceptions.toJs(NoSuchElementException.$create__());
  }
  return $Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(this.f_data__org_jboss_elemento_Elements_JsArrayLikeIterator_, this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_++);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEachRemaining__java_util_function_Consumer(arg0) {
  Iterator.m_forEachRemaining__$default__java_util_Iterator__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @public
  */
 m_remove__() {
  Iterator.m_remove__$default__java_util_Iterator(this);
 }
 /**
  * @private
  */
 $init___$p_org_jboss_elemento_Elements_JsArrayLikeIterator() {
  this.f_pos__org_jboss_elemento_Elements_JsArrayLikeIterator_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  JsArrayLikeIterator.$clinit = () =>{};
  JsArrayLikeIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof JsArrayLikeIterator;
 }
 /**
  * @public
  */
 static $loadModules() {
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(JsArrayLikeIterator, 'org.jboss.elemento.Elements$JsArrayLikeIterator');

Iterator.$markImplementor(JsArrayLikeIterator);

exports = JsArrayLikeIterator; 
//# sourceMappingURL=Elements$JsArrayLikeIterator.js.map