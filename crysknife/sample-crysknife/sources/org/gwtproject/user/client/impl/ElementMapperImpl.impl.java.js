goog.module('org.gwtproject.user.client.impl.ElementMapperImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FreeNode = goog.forwardDeclare('org.gwtproject.user.client.impl.ElementMapperImpl.FreeNode$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
  */
class ElementMapperImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {FreeNode} */
  this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_;
  /** @public {ArrayList<T>} */
  this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_;
 }
 /**
  * @template T
  * @return {!ElementMapperImpl<T>}
  * @public
  */
 static $create__() {
  ElementMapperImpl.$clinit();
  let $instance = new ElementMapperImpl();
  $instance.$ctor__org_gwtproject_user_client_impl_ElementMapperImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_impl_ElementMapperImpl__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_client_impl_ElementMapperImpl();
 }
 /**
  * @param {Object} elem
  * @public
  */
 static m_clearIndex__org_gwtproject_dom_client_Element(elem) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (elem), "__uiObjectID", null);
 }
 /**
  * @param {Object} elem
  * @return {number}
  * @public
  */
 static m_getIndex__org_gwtproject_dom_client_Element(elem) {
  try {
   let index = Integer.m_valueOf__java_lang_String($Objects.m_toString__java_lang_Object($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object} */ (elem), "__uiObjectID")));
   return $Equality.$same(index, null) ? -1 : index.m_intValue__();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (Exception.$isInstance(__$exc)) {
    let e = /**@type {Exception} */ (__$exc);
    return -1;
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @param {Object} elem
  * @param {number} index
  * @public
  */
 static m_setIndex__org_gwtproject_dom_client_Element__int(elem, index) {
  $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object} */ (elem), "__uiObjectID", index);
 }
 /**
  * @param {Object} elem
  * @return {T}
  * @public
  */
 m_get__org_gwtproject_dom_client_Element(elem) {
  let index = ElementMapperImpl.m_getIndex__org_gwtproject_dom_client_Element(elem);
  if (index < 0) {
   return null;
  }
  return /**@type {T} */ ($Casts.$to(this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.getAtIndex(index), UIObject));
 }
 /**
  * @return {ArrayList<T>}
  * @public
  */
 m_getObjectList__() {
  return this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_;
 }
 /**
  * @return {Iterator<T>}
  * @public
  */
 m_iterator__() {
  return this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.m_iterator__();
 }
 /**
  * @param {T} uiObject
  * @public
  */
 m_put__org_gwtproject_user_client_ui_UIObject(uiObject) {
  let /** number */ index;
  if ($Equality.$same(this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_, null)) {
   index = this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.size();
   this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.add(uiObject);
  } else {
   index = this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_.f_index__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode;
   this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.setAtIndex(index, uiObject);
   this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_ = this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_.f_next__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode;
  }
  ElementMapperImpl.m_setIndex__org_gwtproject_dom_client_Element__int(/**@type {UIObject} */ (uiObject).m_getElement__(), index);
 }
 /**
  * @param {Object} elem
  * @public
  */
 m_removeByElement__org_gwtproject_dom_client_Element(elem) {
  let index = ElementMapperImpl.m_getIndex__org_gwtproject_dom_client_Element(elem);
  this.m_removeImpl__org_gwtproject_dom_client_Element__int_$p_org_gwtproject_user_client_impl_ElementMapperImpl(elem, index);
 }
 /**
  * @param {Object} elem
  * @param {number} index
  * @public
  */
 m_removeImpl__org_gwtproject_dom_client_Element__int_$p_org_gwtproject_user_client_impl_ElementMapperImpl(elem, index) {
  ElementMapperImpl.m_clearIndex__org_gwtproject_dom_client_Element(elem);
  this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_.setAtIndex(index, null);
  this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_ = FreeNode.$create__int__org_gwtproject_user_client_impl_ElementMapperImpl_FreeNode(index, this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_impl_ElementMapperImpl() {
  this.f_freeList__org_gwtproject_user_client_impl_ElementMapperImpl_ = null;
  this.f_uiObjectList__org_gwtproject_user_client_impl_ElementMapperImpl_ = /**@type {!ArrayList<T>} */ (ArrayList.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  ElementMapperImpl.$clinit = () =>{};
  ElementMapperImpl.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ElementMapperImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  Exception = goog.module.get('java.lang.Exception$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FreeNode = goog.module.get('org.gwtproject.user.client.impl.ElementMapperImpl.FreeNode$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(ElementMapperImpl, 'org.gwtproject.user.client.impl.ElementMapperImpl');

exports = ElementMapperImpl; 
//# sourceMappingURL=ElementMapperImpl.js.map