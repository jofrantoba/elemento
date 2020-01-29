goog.module('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let RuntimeException = goog.forwardDeclare('java.lang.RuntimeException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let LinkedList = goog.forwardDeclare('java.util.LinkedList$impl');
let NoSuchElementException = goog.forwardDeclare('java.util.NoSuchElementException$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PrefixTree = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree$impl');
let Frame = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree.Frame$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<?string>}
  */
class PrefixTreeIterator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LinkedList<Frame>} */
  this.f_stack__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator_;
 }
 /**
  * @param {PrefixTree} tree
  * @return {!PrefixTreeIterator}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_PrefixTree(tree) {
  PrefixTreeIterator.$clinit();
  let $instance = new PrefixTreeIterator();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator__org_gwtproject_user_client_ui_PrefixTree(tree);
  return $instance;
 }
 /**
  * @param {PrefixTree} tree
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator__org_gwtproject_user_client_ui_PrefixTree(tree) {
  this.$ctor__java_lang_Object__();
  this.m_init___$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator();
  this.m_addTree__org_gwtproject_user_client_ui_PrefixTree__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(tree, "");
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasNext__() {
  return !$Equality.$same(this.m_nextImpl__boolean_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(true), null);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_next__() {
  let toReturn = this.m_nextImpl__boolean_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(false);
  if ($Equality.$same(toReturn, null)) {
   if (!this.m_hasNext__()) {
    throw $Exceptions.toJs(NoSuchElementException.$create__java_lang_String("No more elements in the iterator"));
   } else {
    throw $Exceptions.toJs(RuntimeException.$create__java_lang_String("nextImpl() returned null, but hasNext says otherwise"));
   }
  }
  return toReturn;
 }
 /**
  * @override
  * @public
  */
 m_remove__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("PrefixTree does not support " + "removal.  Use clear()"));
 }
 /**
  * @param {PrefixTree} tree
  * @param {?string} prefix
  * @public
  */
 m_addTree__org_gwtproject_user_client_ui_PrefixTree__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(tree, prefix) {
  let suffixes = ArrayList.$create__();
  for (let $iterator = tree.f_suffixes__org_gwtproject_user_client_ui_PrefixTree.keySet().m_iterator__(); $iterator.m_hasNext__(); ) {
   let suffix = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   if (j_l_String.m_indexOf__java_lang_String__int(suffix, 58 /* ':' */) == 0) {
    suffixes.add(suffix);
   }
  }
  this.f_stack__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator_.add(Frame.$create__java_util_List__java_util_Map__java_lang_String__int(suffixes, tree.f_subtrees__org_gwtproject_user_client_ui_PrefixTree, prefix, 0));
 }
 /**
  * @public
  */
 m_init___$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator() {
  this.f_stack__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator_ = /**@type {!LinkedList<Frame>} */ (LinkedList.$create__());
 }
 /**
  * @param {boolean} peek
  * @return {?string}
  * @public
  */
 m_nextImpl__boolean_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(peek) {
  let stack = this.f_stack__org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator_;
  while (stack.size() > 0) {
   let frame = /**@type {Frame} */ ($Casts.$to(stack.m_pop__(), Frame));
   if (frame.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame < frame.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame.size()) {
    let toReturn = j_l_String.m_valueOf__java_lang_Object(frame.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(/**@type {?string} */ ($Casts.$to(frame.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame.getAtIndex(frame.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame), j_l_String))));
    if (!peek) {
     frame.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame++;
    }
    if (frame.f_index__org_gwtproject_user_client_ui_PrefixTree_Frame < frame.f_suffixNames__org_gwtproject_user_client_ui_PrefixTree_Frame.size()) {
     stack.m_push__java_lang_Object(frame);
    } else {
     for (let $iterator = frame.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame.keySet().m_iterator__(); $iterator.m_hasNext__(); ) {
      let key = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
      if (j_l_String.m_indexOf__java_lang_String__int(key, 58 /* ':' */) != 0) {
       continue;
      }
      let target = j_l_String.m_valueOf__java_lang_Object(frame.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(key));
      let subtree = /**@type {PrefixTree} */ ($Casts.$to(frame.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame.get(key), PrefixTree));
      this.m_addTree__org_gwtproject_user_client_ui_PrefixTree__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(subtree, target);
     }
    }
    return toReturn;
   } else {
    for (let $iterator_1 = frame.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame.keySet().m_iterator__(); $iterator_1.m_hasNext__(); ) {
     let key_1 = /**@type {?string} */ ($Casts.$to($iterator_1.m_next__(), j_l_String));
     if (j_l_String.m_indexOf__java_lang_String__int(key_1, 58 /* ':' */) != 0) {
      continue;
     }
     let target_1 = j_l_String.m_valueOf__java_lang_Object(frame.f_prefix__org_gwtproject_user_client_ui_PrefixTree_Frame) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(key_1));
     let subtree_1 = /**@type {PrefixTree} */ ($Casts.$to(frame.f_subtrees__org_gwtproject_user_client_ui_PrefixTree_Frame.get(key_1), PrefixTree));
     this.m_addTree__org_gwtproject_user_client_ui_PrefixTree__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree_PrefixTreeIterator(subtree_1, target_1);
    }
   }
  }
  return null;
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
  * @public
  */
 static $clinit() {
  PrefixTreeIterator.$clinit = () =>{};
  PrefixTreeIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PrefixTreeIterator;
 }
 /**
  * @public
  */
 static $loadModules() {
  RuntimeException = goog.module.get('java.lang.RuntimeException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  LinkedList = goog.module.get('java.util.LinkedList$impl');
  NoSuchElementException = goog.module.get('java.util.NoSuchElementException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PrefixTree = goog.module.get('org.gwtproject.user.client.ui.PrefixTree$impl');
  Frame = goog.module.get('org.gwtproject.user.client.ui.PrefixTree.Frame$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(PrefixTreeIterator, 'org.gwtproject.user.client.ui.PrefixTree$PrefixTreeIterator');

Iterator.$markImplementor(PrefixTreeIterator);

exports = PrefixTreeIterator; 
//# sourceMappingURL=PrefixTree$PrefixTreeIterator.js.map