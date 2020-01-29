goog.module('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.SimplePager.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.$1$impl');
let simplePagerFastForwardDisabledInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFastForwardDisabledInitializer$impl');
let simplePagerFastForwardInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFastForwardInitializer$impl');
let simplePagerFirstPageDisabledInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageDisabledInitializer$impl');
let simplePagerFirstPageInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageInitializer$impl');
let simplePagerLastPageDisabledInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageDisabledInitializer$impl');
let simplePagerLastPageInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageInitializer$impl');
let simplePagerNextPageDisabledInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageDisabledInitializer$impl');
let simplePagerNextPageInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageInitializer$impl');
let simplePagerPreviousPageDisabledInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerPreviousPageDisabledInitializer$impl');
let simplePagerPreviousPageInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerPreviousPageInitializer$impl');
let simplePagerStyleInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class SimplePager__ResourcesImpl extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!SimplePager__ResourcesImpl}
  * @public
  */
 static $create__() {
  SimplePager__ResourcesImpl.$clinit();
  let $instance = new SimplePager__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 m_simplePagerFastForwardInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerFastForward", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerFastForward__() {
  return simplePagerFastForwardInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerFastForwardDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerFastForwardDisabled", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerFastForwardDisabled__() {
  return simplePagerFastForwardDisabledInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerFirstPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerFirstPage", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerFirstPage__() {
  return simplePagerFirstPageInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerFirstPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerFirstPageDisabled", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage2__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerFirstPageDisabled__() {
  return simplePagerFirstPageDisabledInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerLastPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerLastPage", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage3__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerLastPage__() {
  return simplePagerLastPageInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerLastPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerLastPageDisabled", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage4__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerLastPageDisabled__() {
  return simplePagerLastPageDisabledInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerNextPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerNextPage", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage5__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerNextPage__() {
  return simplePagerNextPageInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerNextPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerNextPageDisabled", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage6__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerNextPageDisabled__() {
  return simplePagerNextPageDisabledInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerPreviousPageInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerPreviousPage", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage7__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerPreviousPage__() {
  return simplePagerPreviousPageInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerPreviousPageDisabledInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("simplePagerPreviousPageDisabled", UriUtils.m_fromTrustedString__java_lang_String(SimplePager__ResourcesImpl.f_externalImage8__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_), 0, 0, 19, 19, false, false);
 }
 /**
  * @override
  * @return {ImageResource}
  * @public
  */
 m_simplePagerPreviousPageDisabled__() {
  return simplePagerPreviousPageDisabledInitializer.m_get__();
 }
 /**
  * @public
  */
 m_simplePagerStyleInitializer___$p_org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl() {
  SimplePager__ResourcesImpl.$f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = $1.$create__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl(this);
 }
 /**
  * @override
  * @return {Style}
  * @public
  */
 m_simplePagerStyle__() {
  return simplePagerStyleInitializer.m_get__();
 }
 /**
  * @return {Array<ResourcePrototype>}
  * @public
  */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>} */ ($Arrays.$init([this.m_simplePagerFastForward__(), this.m_simplePagerFastForwardDisabled__(), this.m_simplePagerFirstPage__(), this.m_simplePagerFirstPageDisabled__(), this.m_simplePagerLastPage__(), this.m_simplePagerLastPageDisabled__(), this.m_simplePagerNextPage__(), this.m_simplePagerNextPageDisabled__(), this.m_simplePagerPreviousPage__(), this.m_simplePagerPreviousPageDisabled__(), this.m_simplePagerStyle__()], ResourcePrototype));
 }
 /**
  * @param {?string} name
  * @return {ResourcePrototype}
  * @public
  */
 m_getResource__java_lang_String(name) {
  if ($Equality.$same(SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_, null)) {
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>} */ (HashMap.$create__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerFastForward", this.m_simplePagerFastForward__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerFastForwardDisabled", this.m_simplePagerFastForwardDisabled__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerFirstPage", this.m_simplePagerFirstPage__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerFirstPageDisabled", this.m_simplePagerFirstPageDisabled__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerLastPage", this.m_simplePagerLastPage__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerLastPageDisabled", this.m_simplePagerLastPageDisabled__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerNextPage", this.m_simplePagerNextPage__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerNextPageDisabled", this.m_simplePagerNextPageDisabled__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerPreviousPage", this.m_simplePagerPreviousPage__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerPreviousPageDisabled", this.m_simplePagerPreviousPageDisabled__());
   SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.put("simplePagerStyle", this.m_simplePagerStyle__());
  }
  return /**@type {ResourcePrototype} */ ($Casts.$to(SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /**
  * @return {SimplePager__ResourcesImpl}
  * @public
  */
 static get f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {SimplePager__ResourcesImpl} value
  * @public
  */
 static set f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {ImageResource}
  * @public
  */
 static get f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {ImageResource} value
  * @public
  */
 static set f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @return {Style}
  * @public
  */
 static get f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_() {
  return (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_);
 }
 /**
  * @param {Style} value
  * @public
  */
 static set f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_(value) {
  (SimplePager__ResourcesImpl.$clinit(), SimplePager__ResourcesImpl.$f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  SimplePager__ResourcesImpl.$clinit = () =>{};
  SimplePager__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  SimplePager__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = SimplePager__ResourcesImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimplePager__ResourcesImpl;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.$1$impl');
  simplePagerFastForwardDisabledInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFastForwardDisabledInitializer$impl');
  simplePagerFastForwardInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFastForwardInitializer$impl');
  simplePagerFirstPageDisabledInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageDisabledInitializer$impl');
  simplePagerFirstPageInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerFirstPageInitializer$impl');
  simplePagerLastPageDisabledInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageDisabledInitializer$impl');
  simplePagerLastPageInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerLastPageInitializer$impl');
  simplePagerNextPageDisabledInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageDisabledInitializer$impl');
  simplePagerNextPageInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerNextPageInitializer$impl');
  simplePagerPreviousPageDisabledInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerPreviousPageDisabledInitializer$impl');
  simplePagerPreviousPageInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerPreviousPageInitializer$impl');
  simplePagerStyleInitializer = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl.simplePagerStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SimplePager__ResourcesImpl, 'org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl');

Resources.$markImplementor(SimplePager__ResourcesImpl);

/** @private {SimplePager__ResourcesImpl} */
SimplePager__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @public {HashMap<?string, ResourcePrototype>} */
SimplePager__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACBUlEQVR4Xr1UPW/TUBTNb+GvQFKpoK5ILGzMqEvFBBIDrAwwMjAyZOrCAEldpRENonEatyTNR5vaju04rhtKKyXD4Z3nvldstyB14EpXz/f4nOP3dV0o/I8Ip7OPjhfhyJ7g8DiQI2viWe6NEcZn947dKayug5rpoNqaoGIGcmRNnO/Jy2pTEUZnr/tHPjabDra652gMF9gezC+TzwuJb+7YII/8rIeMOL64MxwFMJrjS5OrZN34o2YaTQ/kU5f1KnA/6i0bX/tzvPuwnhIyFSaNRZJHPnUpI7r3Dj0Ye6dSUCwtYfXZS9QPLrTZdZixN0Nv6KVnF4Sn375bNtTe3C2WZD589BhVc5LHWgnGpI56bTb2T1A3aZYsQQmLpRKWH6zgU8POYeUvbflx6qjXZq4oeOzqa1KkxUt4/uptDlu+v4KNdiR11GszfxJH27t5MyaXZVhxDvu84yen3nZAvTabxrMn+z0Xte4vOXW1pKdrL1DrELtaOrEtyVsI/jl+CB312owxckJ5x5TwzfuyPpAspu6hYXqgLmXEYM91emMxk58oV5LNVUbMcsXSd0waWScgP4xm13eBF8Si91xs7E4zXZAYK6zaCiWP/KxHKriZvIg1ceRVYZpc0rkcWRPn+9Sm/y34R3BFmwxGPjr9MfYPHDkORC8S/+cf46agkKd1a4Pbxm9xMOL8lsAC4gAAAABJRU5ErkJggg==";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABl0lEQVR4Xr2U207CQBCGeRafxWfxWXwMixhKG6LGBDWCMV55gfEQvfABiD3QljOXY78tW7tb4E4nmTS7/f+PnWG2jcZ/xHq9PloulzKfz2U2m6kna/Zt7c7IxQeLxULSNJUwDGvJPu/R2V4jcsHhdDqVIAgkSRLJsqyW7ANFh95mlEE5CG3AtkSH3maooB9RFKkyhi8fNfP755exRocen81qTCYTieNYCR2nKde3A8Psuh3p3z8ae+gp1wCtVqvj8Xhcik4cR2XH70rKKfJsu67K84srA4gPfwnLj5pWe6VhTp6nrTMZBbG02p6CuXl6vi9BWFSBD/9eGKDi2ZTuZU+cVluBCmBHPM/fDsuP6el+VWEkpSZppk4GjKTUNC20/An4SxgDyAs9W7rM3k1fras9uxs8lD+q9bUB5rroUgE9Dd9KEwno+dUcGfT4DBDBNCOg3NF3fXCD6LcNWrc51fa7mtc+1HfShlVTDzd6m2EEzWSAAWoTAD3x7PPeaPq+oKFcE+6eBvFkvfkM7f9i7AqMOu13fxo/BLQihVOrvFoAAAAASUVORK5CYII=";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACGUlEQVR4Xr2Uz28SQRTH+Vv8VyyYmMariZcmHkzw0gYPxuitofFixKsHEj02nHrosUUIELBpgIoUyo8Cu8uyLLAlaGM5POf7hh3ZbWmTHnzJZHZmv9/Pvnkzs4HA/wh7NN3VzTF1tCGd9yzuMca8X7sybGe21jNGVKnrlClqlCwP6bBkcY8x5vEeOr/XE/Z49r7ZGVC6qFO2/psKrbmnfW/PeR7voYPez+BwnMsH7a5FqWJfGK8WALeXIIzRo30TOujh87MCqEeurFG+KQE7n77Sy8i7a8Cdj3F+hg56+Dwg0Bttk9I/p8rowtxM0tULCm+9oYfBkMoaevg82Vn2xdFxRVNGiKOAvUJmc9rPtujpsw0KChAa6xYfhQ9+BesPJpQraZ7aILNw5C3FE4f0eP0JBUOPOKvlzADEUuFXMEMMMmVDLdFd5vNwRIIWGf2DoY6ylpmSTvAr2GDojAs/9CXYFUVjX7hme+m6XGJIAtFcDfcnOsGvYCNn+uK0YVCm/ksBozG5TDwnT8YU3nzty2zO+qrwwa9giK5uU6pksoiPwKJm7qbkm39o+8PnpczkWYPPA0LgNNcafUpVJjKzG84ZWjxxwHDooF95V03LEXfPEMsaKbO7u+r087Ll3YXez/AEitk4N8UuaWzKnV0yFD3GWTGPg+op+m2BP4IhrkmrO6Bas0/VM517jDF/5x9jVcCI3bo34L7xF8CM9a/Z5QgmAAAAAElFTkSuQmCC";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage2__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABXklEQVR4Xr2UOXKFMAyGOUvOkrPkLKmg4QDUoYDhDED1Wi4ADfu+lA6/54mxxdIlmtF4sH99WELCMP7Dtm37WpZFTNMkxnGUK56xz7W3tos/5nkWbduKoihOjn2cQ8djNdsFn8MwyKCmaUTXdSfHPs6hg54zDkM6EHLAled5LtPnDGmoR1mWMg2I4zgWQRCcIFEUyRU66BHHWUbf96KqqiOIw+q6Fr7vC9M0jz3oEaeB1nX9hli9gQrLskw4jiNBKoxegvgDtl+15bUiWJIkwrZtYVnWJeydaqvBsMlhrutKEEGuYLiEBtuv+aPWC45C42ZpmsoUn26G+AOGBsSB2lsEowDP804w0p8aGOOi1o1/TbRCGIYaDL2GOA0EQzdDQOlyGDk+iKq7ndU99xc1I4eoTs0NPWdohmLSfKoTQS/BPhpVK/qToaAYE8wegbDi+f0bev5j3BkCyfnZn9ov0+Akis8X0HwAAAAASUVORK5CYII=";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage3__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAACFklEQVR4Xr2UQWsaQRTH/Sz9KqkGUui10EN7KAT0UEpzKKQ5BRJ6KZhrDh56LDkVem2M1tia0ESDNeqqidl1dd21q9ha6uFl/m8yo7skKeSQB8PszLz/j/fezNtI5D7M9UYfre6Azs0+nV04PGON/bDvjeb644cXHY/KNYtyRYvSpT7tFh2escY+zuEX1gbMHYzfNc57lD22aL/2hwrNaWActKaUE/tfxTn84B9msPn+5EGr7dDekR2C/NMzYGrOHNsEf+jCrAjqkS+a9L0hxZvJ1BVoBkm8XqPNrQ+8hl++ZHIdAyDQjVaXMj+HWhiNxijxapWylaGOTsFUpPCHLhCd4w4Pf5RNBinYgoAB+OTpM/qca1wDkwM66DXM7v3iFCVoFpkCLj16TKmdXQF7SxvJIAw66DWsIxa49vmiA6IGoAC+SKzomqkMoINew3p9f1A4UTBZHxVVNLYoUn1On7I1iiMyTlNdihhCB72Gef5ouWJ0+A3NwzDiL99Q+sRjMWom05Q+uepvOhU66DUM1rZcfjtwghBRrb/fpm/GXy1GZPIC5DpT7BJ0ARAMPVdt2JQp++yY2vlylfYs9fnbhF/VsEUXjK7vgq7jc++lSy4DZoWWQ33jHH7wDzMChmLiIe6jyUWt8saEAfn6REA8sW/yQw0U/TbDH6Ej2qTZ7hFSr9QtnpuiF7H/3z/GTQYhbuvOgLvaJdZC9Zxz/1KTAAAAAElFTkSuQmCC";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage4__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABXUlEQVR4Xr2UTW6DMBBGc5aepWfpWboiGw6QdRUJxBkgq2xzAbKBEP4SQpYuz+ogY5uom3akEWB/35Nn5GGz+Y94Pp8fj8dD3e93dbvd9JNv1m3takzit2EYVNM0qixLJ1lnH53tXcQkeO/7XpvqulZt2zrJOvvo0NuMOSinKAoH4EuA6G2GDvohZSDOsswBJEmiDoeDfkd3uVx0H23Wpus6VVXVbAyCQMVxrK7XqxdGose3AI3j+GmaBEbudjt1Pp+9MBIf/hk2HbWhRB+MDMNQnU4nDbPLx4f/1zAB7vd752QObDrmF830wbbbrS41z3NvmfjwzzAuIBvm3RJYFEXawJpdpuidC8y4mKUCStN0vioCM0+GHt8CRDBzCOR60HAx+WCiW52CqfajzKQNMlMuN3qbsQiayUXEQK+kTHPw2V80/VXQUMaE2RMQT75/fkOv/xhrgVHS3vvT+AYbgCR1uChEZAAAAABJRU5ErkJggg==";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage5__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB+UlEQVR4Xr2UO08CQRSF+S3+FQUTNbYmNnYm2mhnbC2MjYm1hfZGCxtjBy4iEY3yEBHkocguy7Is68ZHlOI6Z9gZnfWVWHiTm2Fmzvm489pQ6D/C7nhbuunQbaNNN3cWb9HHeFD7bdjuw9Cd0aF8SadERqdYtk3RjMVb9DGOeeiCXiVs52GlctuieFqno9ITndR6lKq++onfPT4eP28QdNAHGTxc93mgVrdISzd9iAD1eP/Eh4nU0iZBD1+QFcJ+JLMNOq6ISvqg5bVNCZRgltBBD58CAr18Y5J2ea/8O4DhyDDNzi/SYcELzLHqLj0q10y1Osu+Pz3LN2Q1H3MwHOE5MTlFe0cVpUokfPBLWLPVpWQGMCF8hwpYOBKhkbFx2tiOKgcDH/wSZrAOjl0APu4PB0ngMI2MjtN+qs5BmIcPfglrtV0nlfsME5UBhsRSd7Wi1HDdhU7wS1jH9aYLZYMSpUe5RAEUy5yZW6BYzlHmEuzOXTEf/BKGqOs2v2NfVba0us6uwos/1l8efmsZk+BTQAi8uWK5SVq+61fXz42dqFKtBDEd9Lbjff0KTMtlb8+gg1xHqS649FjW5jrogwwlsJm4iAl25DEGTV4/cxha9DGOeWXTfwp8EQz2TKr1FhUrTSpc67ytsreI8V+/GN8FjDitPwP+Gm8yFAmEoKDFKwAAAABJRU5ErkJggg==";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage6__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABT0lEQVR4Xr2UPW6DQBCFfZacJWfJWVKZhgNQpzGHgC4t9BZCAsw/2C7XfKusxc6CpRTJk0aInfeed8YzHA7/gfv9/nG9XtU0TWocR/3knXPJ3cVCfpvnWbVtq8qydIJz8vCk1sJCeB+GQYuaplFd1znBeVEUCh586fEE5WAkDbYCHnzpoUE/qqrSZaxFcRw7RgQ8+Oik14FrXy4XR+R5ngrDUNV17eTg931vm91ut88tMnE8HnUEQaCyLHPy6NA/zZartnu9Mmbc0Pd9lSSJlUeH/ldma8M8z/fNlmt+0UxpJM0o9Xw+W3n6hv5pxgCS2JotY3Q6nfS/t84ZvjPArMtWqRhFUeSMDAEfnWUE2DkIcjzSNHVM1rzdLVhq/zbDKMXrMDsKX3pYoJkMIoL1Rpgf4Zy81fRXoKGsCbtnjHjy/vMZev3F2ANCEzL3p3gAbj4vRoLLLUwAAAAASUVORK5CYII=";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage7__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAB/0lEQVR4Xr2UP0/bUBTF81n6VWhAolVXJBY2pLLAVrF2QCxInRlgr8rQpeqWYBoiAoKEEEJCnECIHcdxjLGgqGQ4vPMcGz+3KRIDV7p6fs/n/HzfP6dSrxHOwP9qWC4uO31cXNmyZZ/jSe3YcLzbt1fmAJW6gVzJQPa4j0zJli37HOd76pJeJRz3dlW/7GHnqIPd+m8UmsNRPsjcbw3l+E7RAHXUJxkyPO/+TattQytaMcgQ+8xWHBr0tWIX1NOXZKW4HvnjDvb0oIIQELYrXzaVKqmjnj4FRHqjZUE79ZWqmL+qPhaWlpGenIoqC1M7vUHjwlKrs52bg8NKJxKF1fzY1TEzO4eJ9KTM5IcIp4/+CNbtXSNfIuxpoTe+ZTD9/oOoKACpsEDDZ/roj2Cm6HDbA8EDfhbamH5H0JSEpEew5Doy6aM/gvX6nls4CWCh8LtWk1MkKIQll0Fm2QD9EWzg+fNnDRO50dkKxdmyi4+Ln5Rpxo9Jrn6HqvDRH8EYbcOBVgrOWDhdPu/pf/B5bf2flfGs0aeAGI7rr9YaXWiV68gQr2JjKzP6QJDUUT/2rlq2J+6eKe6h89eU4lVtl3l3TVCfZCjBxeQBzoktzwpT/vxewtiyz3G+Vxb9f8E/gimuSVPcvZreRfXckG2z3QPHn/1jjAsauVsvBrw0HgG6bQmEsWG+BwAAAABJRU5ErkJggg==";
/** @public {?string} @const */
SimplePager__ResourcesImpl.f_externalImage8__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABSklEQVR4Xr2US26DQAyGc5aepWfpWboiGw7Auhs4BNl1C3uEkIAAefBaOnyogzImoG5aSxaa8e8v2LE5HP7DxnH86Pte2raV+/0+Pzlzr7WbNonfuq6TpmmkKIqVc08cnc61bBK83243yfNc6rqWy+Wycu6BokOvGYtRDkINeOXo0GvGbPSjLMu5DJ2In04n64wOPXmadbher3I+n1eQqqokCAI5Ho+rGHrKtUDDMHySpMVpmorneeI4zuw6bn6M/AU2vWqjexVFkbiuO7/RHow88jdhWZatQL+GTa/5pfuVJIlV4haMP4H8BcYAEtCzhdD3/U2Y0a8GmHXRfcMZgTAMX8LQk2eBMKYZgS7XeBzH1tnoNnd1qv3b7KSGPbsZbvSaYRnNZIABPm+EmXjuiVtN3zMaypqwewbEk/PPZ2j/i7FlJBrXsT+1ByVGL0btY0EfAAAAAElFTkSuQmCC";
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerFastForward__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerFastForwardDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerFirstPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerFirstPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerLastPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerLastPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerNextPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerNextPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerPreviousPage__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {ImageResource} */
SimplePager__ResourcesImpl.$f_simplePagerPreviousPageDisabled__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;
/** @private {Style} */
SimplePager__ResourcesImpl.$f_simplePagerStyle__org_gwtproject_user_cellview_client_SimplePager_ResourcesImpl_;

exports = SimplePager__ResourcesImpl; 
//# sourceMappingURL=SimplePager_ResourcesImpl.js.map