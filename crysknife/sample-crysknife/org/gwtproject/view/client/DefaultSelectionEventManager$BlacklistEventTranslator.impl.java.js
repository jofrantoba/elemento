goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.BlacklistEventTranslator$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EventTranslator = goog.require('org.gwtproject.view.client.DefaultSelectionEventManager.EventTranslator$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CellPreviewEvent = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent$impl');
let SelectAction = goog.forwardDeclare('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');

/**
 * @template T
 * @implements {EventTranslator<T>}
  */
class BlacklistEventTranslator extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Set<Integer>}*/
  this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_;
 }
 /** @template T @return {!BlacklistEventTranslator<T>} */
 static $create__arrayOf_int(/** Array<number> */ blacklistedColumns) {
  BlacklistEventTranslator.$clinit();
  let $instance = new BlacklistEventTranslator();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator__arrayOf_int(blacklistedColumns);
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator__arrayOf_int(/** Array<number> */ blacklistedColumns) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator();
  if (!$Equality.$same(blacklistedColumns, null)) {
   for (let $array = blacklistedColumns, $index = 0; $index < $array.length; $index++) {
    let i = $array[$index];
    this.m_setColumnBlacklisted__int__boolean(i, true);
   }
  }
 }
 
 m_clearBlacklist__() {
  this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_.clear();
 }
 /** @override @return {boolean} */
 m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {
  return false;
 }
 /** @return {boolean} */
 m_isColumnBlacklisted__int(/** number */ index) {
  return this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_.contains(Integer.m_valueOf__int(index));
 }
 
 m_setColumnBlacklisted__int__boolean(/** number */ index, /** boolean */ isBlacklisted) {
  if (isBlacklisted) {
   this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_.add(Integer.m_valueOf__int(index));
  } else {
   this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_.remove(Integer.m_valueOf__int(index));
  }
 }
 /** @override @return {SelectAction} */
 m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(/** CellPreviewEvent<T> */ event) {
  return this.m_isColumnBlacklisted__int(event.m_getColumn__()) ? SelectAction.f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction : SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator() {
  this.f_blacklist__org_gwtproject_view_client_DefaultSelectionEventManager_BlacklistEventTranslator_ = /**@type {!HashSet<Integer>}*/ (HashSet.$create__());
 }
 
 static $clinit() {
  BlacklistEventTranslator.$clinit = () =>{};
  BlacklistEventTranslator.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BlacklistEventTranslator;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectAction = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
 }
 
}
$Util.$setClassMetadata(BlacklistEventTranslator, 'org.gwtproject.view.client.DefaultSelectionEventManager$BlacklistEventTranslator');

EventTranslator.$markImplementor(BlacklistEventTranslator);

exports = BlacklistEventTranslator; 
//# sourceMappingURL=DefaultSelectionEventManager$BlacklistEventTranslator.js.map