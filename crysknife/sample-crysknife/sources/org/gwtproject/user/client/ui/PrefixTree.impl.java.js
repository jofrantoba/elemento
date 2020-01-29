goog.module('org.gwtproject.user.client.ui.PrefixTree$impl');

const AbstractCollection = goog.require('java.util.AbstractCollection$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let PrefixTreeIterator = goog.forwardDeclare('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {AbstractCollection<?string>}
  */
class PrefixTree extends AbstractCollection {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_prefixLength__org_gwtproject_user_client_ui_PrefixTree = 0;
  /** @public {Map<?string, ?boolean>} */
  this.f_suffixes__org_gwtproject_user_client_ui_PrefixTree;
  /** @public {Map<?string, PrefixTree>} */
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree;
  /** @public {number} */
  this.f_size__org_gwtproject_user_client_ui_PrefixTree = 0;
 }
 /**
  * @param {number} prefixLength
  * @return {PrefixTree}
  * @public
  */
 static m_createPrefixTree__int(prefixLength) {
  PrefixTree.$clinit();
  return PrefixTree.$create__int(prefixLength);
 }
 /**
  * @param {?string} s
  * @return {?string}
  * @public
  */
 static m_safe__java_lang_String(s) {
  return j_l_String.m_valueOf__char(58 /* ':' */) + j_l_String.m_valueOf__java_lang_Object(s);
 }
 /**
  * @param {?string} s
  * @return {?string}
  * @public
  */
 static m_unsafe__java_lang_String(s) {
  PrefixTree.$clinit();
  return j_l_String.m_substring__java_lang_String__int(s, 1);
 }
 /**
  * Factory method corresponding to constructor 'PrefixTree()'.
  * @return {!PrefixTree}
  * @public
  */
 static $create__() {
  PrefixTree.$clinit();
  let $instance = new PrefixTree();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree__();
  return $instance;
 }
 /**
  * Initialization from constructor 'PrefixTree()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree__() {
  this.$ctor__org_gwtproject_user_client_ui_PrefixTree__int__java_util_Collection(2, null);
 }
 /**
  * Factory method corresponding to constructor 'PrefixTree(Collection)'.
  * @param {Collection<?string>} source
  * @return {!PrefixTree}
  * @public
  */
 static $create__java_util_Collection(source) {
  PrefixTree.$clinit();
  let $instance = new PrefixTree();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree__java_util_Collection(source);
  return $instance;
 }
 /**
  * Initialization from constructor 'PrefixTree(Collection)'.
  * @param {Collection<?string>} source
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree__java_util_Collection(source) {
  this.$ctor__org_gwtproject_user_client_ui_PrefixTree__int__java_util_Collection(2, source);
 }
 /**
  * Factory method corresponding to constructor 'PrefixTree(int)'.
  * @param {number} prefixLength
  * @return {!PrefixTree}
  * @public
  */
 static $create__int(prefixLength) {
  PrefixTree.$clinit();
  let $instance = new PrefixTree();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree__int(prefixLength);
  return $instance;
 }
 /**
  * Initialization from constructor 'PrefixTree(int)'.
  * @param {number} prefixLength
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree__int(prefixLength) {
  this.$ctor__org_gwtproject_user_client_ui_PrefixTree__int__java_util_Collection(prefixLength, null);
 }
 /**
  * Factory method corresponding to constructor 'PrefixTree(int, Collection)'.
  * @param {number} prefixLength
  * @param {Collection<?string>} source
  * @return {!PrefixTree}
  * @public
  */
 static $create__int__java_util_Collection(prefixLength, source) {
  PrefixTree.$clinit();
  let $instance = new PrefixTree();
  $instance.$ctor__org_gwtproject_user_client_ui_PrefixTree__int__java_util_Collection(prefixLength, source);
  return $instance;
 }
 /**
  * Initialization from constructor 'PrefixTree(int, Collection)'.
  * @param {number} prefixLength
  * @param {Collection<?string>} source
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PrefixTree__int__java_util_Collection(prefixLength, source) {
  this.$ctor__java_util_AbstractCollection__();
  this.$init___$p_org_gwtproject_user_client_ui_PrefixTree();
  this.f_prefixLength__org_gwtproject_user_client_ui_PrefixTree = prefixLength;
  this.clear();
  if (!$Equality.$same(source, null)) {
   this.addAll(source);
  }
 }
 /**
  * @param {?string} s
  * @return {boolean}
  * @public
  */
 m_add__java_lang_String(s) {
  let suffixes = this.f_suffixes__org_gwtproject_user_client_ui_PrefixTree;
  let subtrees = this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree;
  let prefixLength = this.f_prefixLength__org_gwtproject_user_client_ui_PrefixTree;
  if ($Equality.$same(s, null) || (j_l_String.m_length__java_lang_String(s) == 0)) {
   return false;
  }
  if (j_l_String.m_length__java_lang_String(s) <= prefixLength) {
   let safeKey = PrefixTree.m_safe__java_lang_String(s);
   if (suffixes.containsKey(safeKey)) {
    return false;
   } else {
    this.f_size__org_gwtproject_user_client_ui_PrefixTree++;
    suffixes.put(safeKey, true);
    return true;
   }
  } else {
   let prefix = PrefixTree.m_safe__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(s, 0, prefixLength));
   let /** PrefixTree */ theTree;
   if (subtrees.containsKey(prefix)) {
    theTree = /**@type {PrefixTree} */ ($Casts.$to(subtrees.get(prefix), PrefixTree));
   } else {
    theTree = PrefixTree.m_createPrefixTree__int(prefixLength << 1);
    subtrees.put(prefix, theTree);
   }
   let slice = j_l_String.m_substring__java_lang_String__int(s, prefixLength);
   if (theTree.add(slice)) {
    this.f_size__org_gwtproject_user_client_ui_PrefixTree++;
    return true;
   } else {
    return false;
   }
  }
 }
 /**
  * @override
  * @public
  */
 clear() {
  this.f_size__org_gwtproject_user_client_ui_PrefixTree = 0;
  this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree = /**@type {!HashMap<?string, PrefixTree>} */ (HashMap.$create__());
  this.f_suffixes__org_gwtproject_user_client_ui_PrefixTree = /**@type {!HashMap<?string, ?boolean>} */ (HashMap.$create__());
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 contains(o) {
  if (j_l_String.$isInstance(o)) {
   return this.m_contains__java_lang_String(/**@type {?string} */ ($Casts.$to(o, j_l_String)));
  } else {
   return false;
  }
 }
 /**
  * @param {?string} s
  * @return {boolean}
  * @public
  */
 m_contains__java_lang_String(s) {
  return this.m_getSuggestions__java_lang_String__int(s, 1).contains(s);
 }
 /**
  * @param {?string} search
  * @param {number} limit
  * @return {List<?string>}
  * @public
  */
 m_getSuggestions__java_lang_String__int(search, limit) {
  let toReturn = /**@type {!ArrayList<?string>} */ (ArrayList.$create__());
  if ((!$Equality.$same(search, null)) && (limit > 0)) {
   this.m_suggestImpl__java_lang_String__java_lang_String__java_util_Collection__int(search, "", toReturn, limit);
  }
  return toReturn;
 }
 /**
  * @override
  * @return {Iterator<?string>}
  * @public
  */
 m_iterator__() {
  return PrefixTreeIterator.$create__org_gwtproject_user_client_ui_PrefixTree(this);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 size() {
  return this.f_size__org_gwtproject_user_client_ui_PrefixTree;
 }
 /**
  * @param {?string} search
  * @param {?string} prefix
  * @param {Collection<?string>} output
  * @param {number} limit
  * @public
  */
 m_suggestImpl__java_lang_String__java_lang_String__java_util_Collection__int(search, prefix, output, limit) {
  let suffixes = this.f_suffixes__org_gwtproject_user_client_ui_PrefixTree;
  let subtrees = this.f_subtrees__org_gwtproject_user_client_ui_PrefixTree;
  let prefixLength = this.f_prefixLength__org_gwtproject_user_client_ui_PrefixTree;
  if (j_l_String.m_length__java_lang_String(search) > j_l_String.m_length__java_lang_String(prefix) + prefixLength) {
   let key = PrefixTree.m_safe__java_lang_String(j_l_String.m_substring__java_lang_String__int__int(search, j_l_String.m_length__java_lang_String(prefix), j_l_String.m_length__java_lang_String(prefix) + prefixLength));
   if (subtrees.containsKey(key)) {
    let subtree = /**@type {PrefixTree} */ ($Casts.$to(subtrees.get(key), PrefixTree));
    let target = j_l_String.m_valueOf__java_lang_Object(prefix) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(key));
    subtree.m_suggestImpl__java_lang_String__java_lang_String__java_util_Collection__int(search, target, output, limit);
   }
  } else {
   for (let $iterator = suffixes.keySet().m_iterator__(); $iterator.m_hasNext__(); ) {
    let suffix = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
    if (j_l_String.m_indexOf__java_lang_String__int(suffix, 58 /* ':' */) != 0) {
     continue;
    }
    let target_1 = j_l_String.m_valueOf__java_lang_Object(prefix) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(suffix));
    if (j_l_String.m_indexOf__java_lang_String__java_lang_String(target_1, search) == 0) {
     output.add(target_1);
    }
    if (output.size() >= limit) {
     return;
    }
   }
   for (let $iterator_1 = subtrees.keySet().m_iterator__(); $iterator_1.m_hasNext__(); ) {
    let key_1 = /**@type {?string} */ ($Casts.$to($iterator_1.m_next__(), j_l_String));
    if (j_l_String.m_indexOf__java_lang_String__int(key_1, 58 /* ':' */) != 0) {
     continue;
    }
    let target_2 = j_l_String.m_valueOf__java_lang_Object(prefix) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(key_1));
    let subtree_1 = /**@type {PrefixTree} */ ($Casts.$to(subtrees.get(key_1), PrefixTree));
    if (j_l_String.m_indexOf__java_lang_String__java_lang_String(target_2, search) == 0) {
     if ((subtree_1.f_size__org_gwtproject_user_client_ui_PrefixTree <= limit - output.size()) || (subtree_1.f_size__org_gwtproject_user_client_ui_PrefixTree == 1)) {
      subtree_1.m_dump__java_util_Collection__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree(output, target_2);
     } else {
      for (let $iterator_2 = subtree_1.f_suffixes__org_gwtproject_user_client_ui_PrefixTree.keySet().m_iterator__(); $iterator_2.m_hasNext__(); ) {
       let suffix_1 = /**@type {?string} */ ($Casts.$to($iterator_2.m_next__(), j_l_String));
       if (j_l_String.m_indexOf__java_lang_String__int(suffix_1, 58 /* ':' */) == 0) {
        output.add(j_l_String.m_valueOf__java_lang_Object(target_2) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(suffix_1)));
       }
      }
      for (let $iterator_3 = subtree_1.f_subtrees__org_gwtproject_user_client_ui_PrefixTree.keySet().m_iterator__(); $iterator_3.m_hasNext__(); ) {
       let subkey = /**@type {?string} */ ($Casts.$to($iterator_3.m_next__(), j_l_String));
       if (j_l_String.m_indexOf__java_lang_String__int(subkey, 58 /* ':' */) == 0) {
        output.add(j_l_String.m_valueOf__java_lang_Object(target_2) + j_l_String.m_valueOf__java_lang_Object(PrefixTree.m_unsafe__java_lang_String(subkey)) + "...");
       }
      }
     }
    }
   }
  }
 }
 /**
  * @param {Collection<?string>} output
  * @param {?string} prefix
  * @public
  */
 m_dump__java_util_Collection__java_lang_String_$p_org_gwtproject_user_client_ui_PrefixTree(output, prefix) {
  for (let $iterator = this.m_iterator__(); $iterator.m_hasNext__(); ) {
   let s = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   output.add(j_l_String.m_valueOf__java_lang_Object(prefix) + j_l_String.m_valueOf__java_lang_Object(s));
  }
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Stream<?string>}
  * @public
  */
 m_parallelStream__() {
  return /**@type {Stream<?string>} */ (Collection.m_parallelStream__$default__java_util_Collection(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Predicate<?>} arg0
  * @return {boolean}
  * @public
  */
 m_removeIf__java_util_function_Predicate(arg0) {
  return Collection.m_removeIf__$default__java_util_Collection__java_util_function_Predicate(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<?string>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<?string>} */ (Collection.m_spliterator__$default__java_util_Collection(this));
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Stream<?string>}
  * @public
  */
 m_stream__() {
  return /**@type {Stream<?string>} */ (Collection.m_stream__$default__java_util_Collection(this));
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
  * Bridge method.
  * @override
  * @param {*} arg0
  * @return {boolean}
  * @public
  */
 add(arg0) {
  return this.m_add__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_PrefixTree() {
  this.f_size__org_gwtproject_user_client_ui_PrefixTree = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  PrefixTree.$clinit = () =>{};
  PrefixTree.$loadModules();
  AbstractCollection.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PrefixTree;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collection = goog.module.get('java.util.Collection$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  PrefixTreeIterator = goog.module.get('org.gwtproject.user.client.ui.PrefixTree.PrefixTreeIterator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(PrefixTree, 'org.gwtproject.user.client.ui.PrefixTree');

exports = PrefixTree; 
//# sourceMappingURL=PrefixTree.js.map