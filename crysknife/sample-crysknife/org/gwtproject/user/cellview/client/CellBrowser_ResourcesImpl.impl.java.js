goog.module('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.cellview.client.CellBrowser.Resources$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let ImageResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser.Style$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.$1$impl');
let cellBrowserClosedInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserClosedInitializer$impl');
let cellBrowserOpenBackgroundInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenBackgroundInitializer$impl');
let cellBrowserOpenInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenInitializer$impl');
let cellBrowserSelectedBackgroundInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserSelectedBackgroundInitializer$impl');
let cellBrowserStyleInitializer = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserStyleInitializer$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Resources}
  */
class CellBrowser__ResourcesImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!CellBrowser__ResourcesImpl} */
 static $create__() {
  CellBrowser__ResourcesImpl.$clinit();
  let $instance = new CellBrowser__ResourcesImpl();
  $instance.$ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_cellBrowserClosedInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl() {
  CellBrowser__ResourcesImpl.$f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("cellBrowserClosed", UriUtils.m_fromTrustedString__java_lang_String(CellBrowser__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_), 0, 0, 16, 16, false, false);
 }
 /** @override @return {ImageResource} */
 m_cellBrowserClosed__() {
  return cellBrowserClosedInitializer.m_get__();
 }
 
 m_cellBrowserOpenInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl() {
  CellBrowser__ResourcesImpl.$f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("cellBrowserOpen", UriUtils.m_fromTrustedString__java_lang_String(CellBrowser__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_), 0, 0, 16, 16, false, false);
 }
 /** @override @return {ImageResource} */
 m_cellBrowserOpen__() {
  return cellBrowserOpenInitializer.m_get__();
 }
 
 m_cellBrowserOpenBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl() {
  CellBrowser__ResourcesImpl.$f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("cellBrowserOpenBackground", UriUtils.m_fromTrustedString__java_lang_String(CellBrowser__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_), 0, 0, 82, 26, false, false);
 }
 /** @override @return {ImageResource} */
 m_cellBrowserOpenBackground__() {
  return cellBrowserOpenBackgroundInitializer.m_get__();
 }
 
 m_cellBrowserSelectedBackgroundInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl() {
  CellBrowser__ResourcesImpl.$f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = ImageResourcePrototype.$create__java_lang_String__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int__boolean__boolean("cellBrowserSelectedBackground", UriUtils.m_fromTrustedString__java_lang_String(CellBrowser__ResourcesImpl.f_externalImage2__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_), 0, 0, 82, 26, false, false);
 }
 /** @override @return {ImageResource} */
 m_cellBrowserSelectedBackground__() {
  return cellBrowserSelectedBackgroundInitializer.m_get__();
 }
 
 m_cellBrowserStyleInitializer___$p_org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl() {
  CellBrowser__ResourcesImpl.$f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = $1.$create__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl(this);
 }
 /** @override @return {Style} */
 m_cellBrowserStyle__() {
  return cellBrowserStyleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_cellBrowserClosed__(), this.m_cellBrowserOpen__(), this.m_cellBrowserOpenBackground__(), this.m_cellBrowserSelectedBackground__(), this.m_cellBrowserStyle__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_, null)) {
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.put("cellBrowserClosed", this.m_cellBrowserClosed__());
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.put("cellBrowserOpen", this.m_cellBrowserOpen__());
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.put("cellBrowserOpenBackground", this.m_cellBrowserOpenBackground__());
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.put("cellBrowserSelectedBackground", this.m_cellBrowserSelectedBackground__());
   CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.put("cellBrowserStyle", this.m_cellBrowserStyle__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_.get(name), ResourcePrototype));
 }
 /** @return {CellBrowser__ResourcesImpl} */
 static get f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** CellBrowser__ResourcesImpl */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** ImageResource */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** ImageResource */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** ImageResource */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 /** @return {ImageResource} */
 static get f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** ImageResource */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 /** @return {Style} */
 static get f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_() {
  return (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_);
 }
 
 static set f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_(/** Style */ value) {
  (CellBrowser__ResourcesImpl.$clinit(), CellBrowser__ResourcesImpl.$f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = value);
 }
 
 static $clinit() {
  CellBrowser__ResourcesImpl.$clinit = () =>{};
  CellBrowser__ResourcesImpl.$loadModules();
  j_l_Object.$clinit();
  CellBrowser__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = CellBrowser__ResourcesImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellBrowser__ResourcesImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  ImageResourcePrototype = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.$1$impl');
  cellBrowserClosedInitializer = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserClosedInitializer$impl');
  cellBrowserOpenBackgroundInitializer = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenBackgroundInitializer$impl');
  cellBrowserOpenInitializer = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserOpenInitializer$impl');
  cellBrowserSelectedBackgroundInitializer = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserSelectedBackgroundInitializer$impl');
  cellBrowserStyleInitializer = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl.cellBrowserStyleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellBrowser__ResourcesImpl, 'org.gwtproject.user.cellview.client.CellBrowser_ResourcesImpl');

Resources.$markImplementor(CellBrowser__ResourcesImpl);

/**@private {CellBrowser__ResourcesImpl}*/
CellBrowser__ResourcesImpl.$f__instance0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
CellBrowser__ResourcesImpl.f_resourceMap__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@const {?string}*/
CellBrowser__ResourcesImpl.f_externalImage__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWElEQVR4XmNgGAUYICws7H92Ts5/dHGigYODw38HR8f/ZBsE0oyMYQZNmDCBOMNAmhxBmoEuAdNQ7OTsTJxBMA1wzVAvgfhEGYCukWQvwAwgOxDJ1jiCAQD3hlZxsqImSwAAAABJRU5ErkJggg==";
/**@const {?string}*/
CellBrowser__ResourcesImpl.f_externalImage0__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = "data:image/gif;base64,R0lGODlhEAAQAOMIAEBAQEBBQUFBQUFCQ1NVVXd3d9PT0////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAgALAAAAAAQABAAAAQ2EMlJq704W3OOnkfBedohBMSYHQAQoKp1vIErDARJzadwojpQ4JfqXEyAYrASimWcn6h0WokAADs=";
/**@const {?string}*/
CellBrowser__ResourcesImpl.f_externalImage1__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAAAaCAYAAAAkJwuaAAAAo0lEQVR4Xu3QQQqCYABE4bm3gZBQ4MKFYFAgJCQYGAkGLoSEhATpP9PUHablLL53gIcQPjQdQgg0HdZ1pemwLG+aDvP8oukwTU+aDuM40nQYhoGmQ98/aDp0946mQ3traTo014amQ32paTpU54qmQ1mWNB2OxxNNh0NR0HTI85ymQ5ZlNB3SNKXpsNvtaTok24SmQxzHNB02UUTTIfrFdB75J1/N6jFfDUlx6QAAAABJRU5ErkJggg==";
/**@const {?string}*/
CellBrowser__ResourcesImpl.f_externalImage2__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_ = "data:image/png;base64,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";
/**@private {ImageResource}*/
CellBrowser__ResourcesImpl.$f_cellBrowserClosed__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@private {ImageResource}*/
CellBrowser__ResourcesImpl.$f_cellBrowserOpen__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@private {ImageResource}*/
CellBrowser__ResourcesImpl.$f_cellBrowserOpenBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@private {ImageResource}*/
CellBrowser__ResourcesImpl.$f_cellBrowserSelectedBackground__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;
/**@private {Style}*/
CellBrowser__ResourcesImpl.$f_cellBrowserStyle__org_gwtproject_user_cellview_client_CellBrowser_ResourcesImpl_;

exports = CellBrowser__ResourcesImpl; 
//# sourceMappingURL=CellBrowser_ResourcesImpl.js.map