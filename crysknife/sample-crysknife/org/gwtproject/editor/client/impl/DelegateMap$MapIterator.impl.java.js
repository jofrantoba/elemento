goog.module('org.gwtproject.editor.client.impl.DelegateMap.MapIterator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const Iterator = goog.require('java.util.Iterator$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let DelegateMap = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Iterator<AbstractEditorDelegate<?, ?>>}
  */
class MapIterator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractEditorDelegate<?, ?>} */
  this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_;
  /** @public {Iterator<AbstractEditorDelegate<?, ?>>} */
  this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_;
  /** @public {Iterator<List<AbstractEditorDelegate<?, ?>>>} */
  this.f_values__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_;
 }
 /**
  * @param {DelegateMap} map
  * @return {!MapIterator}
  * @public
  */
 static $create__org_gwtproject_editor_client_impl_DelegateMap(map) {
  MapIterator.$clinit();
  let $instance = new MapIterator();
  $instance.$ctor__org_gwtproject_editor_client_impl_DelegateMap_MapIterator__org_gwtproject_editor_client_impl_DelegateMap(map);
  return $instance;
 }
 /**
  * @param {DelegateMap} map
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_DelegateMap_MapIterator__org_gwtproject_editor_client_impl_DelegateMap(map) {
  this.$ctor__java_lang_Object__();
  this.f_values__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_ = map.f_map__org_gwtproject_editor_client_impl_DelegateMap_.values().m_iterator__();
  this.m_next__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasNext__() {
  return !$Equality.$same(this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_, null);
 }
 /**
  * @override
  * @return {AbstractEditorDelegate<?, ?>}
  * @public
  */
 m_next__() {
  let toReturn = this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_;
  if (!$Equality.$same(this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_, null) && this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_hasNext__()) {
   this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_ = /**@type {AbstractEditorDelegate<*, Editor>} */ ($Casts.$to(this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_next__(), AbstractEditorDelegate));
  } else {
   this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_ = null;
   while (this.f_values__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_hasNext__()) {
    this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_ = /**@type {List<AbstractEditorDelegate<?, ?>>} */ ($Casts.$to(this.f_values__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_next__(), List)).m_iterator__();
    if (this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_hasNext__()) {
     this.f_next__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_ = /**@type {AbstractEditorDelegate<*, Editor>} */ ($Casts.$to(this.f_list__org_gwtproject_editor_client_impl_DelegateMap_MapIterator_.m_next__(), AbstractEditorDelegate));
     break;
    }
   }
  }
  return toReturn;
 }
 /**
  * @override
  * @public
  */
 m_remove__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
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
  MapIterator.$clinit = () =>{};
  MapIterator.$loadModules();
  j_l_Object.$clinit();
  Iterator.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MapIterator;
 }
 /**
  * @public
  */
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(MapIterator, 'org.gwtproject.editor.client.impl.DelegateMap$MapIterator');

Iterator.$markImplementor(MapIterator);

exports = MapIterator; 
//# sourceMappingURL=DelegateMap$MapIterator.js.map