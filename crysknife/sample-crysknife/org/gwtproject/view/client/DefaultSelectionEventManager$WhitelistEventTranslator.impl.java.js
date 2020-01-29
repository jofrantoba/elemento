goog.module('org.gwtproject.view.client.DefaultSelectionEventManager.WhitelistEventTranslator$impl');

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
class WhitelistEventTranslator extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Set<Integer>} */
  this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_;
 }
 /**
  * @template T
  * @param {Array<number>} whitelistedColumns
  * @return {!WhitelistEventTranslator<T>}
  * @public
  */
 static $create__arrayOf_int(whitelistedColumns) {
  WhitelistEventTranslator.$clinit();
  let $instance = new WhitelistEventTranslator();
  $instance.$ctor__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator__arrayOf_int(whitelistedColumns);
  return $instance;
 }
 /**
  * @param {Array<number>} whitelistedColumns
  * @public
  */
 $ctor__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator__arrayOf_int(whitelistedColumns) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator();
  if (!$Equality.$same(whitelistedColumns, null)) {
   for (let $array = whitelistedColumns, $index = 0; $index < $array.length; $index++) {
    let i = $array[$index];
    this.m_setColumnWhitelisted__int__boolean(i, true);
   }
  }
 }
 /**
  * @override
  * @param {CellPreviewEvent<T>} event
  * @return {boolean}
  * @public
  */
 m_clearCurrentSelection__org_gwtproject_view_client_CellPreviewEvent(event) {
  return false;
 }
 /**
  * @public
  */
 m_clearWhitelist__() {
  this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_.clear();
 }
 /**
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_isColumnWhitelisted__int(index) {
  return this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_.contains(Integer.m_valueOf__int(index));
 }
 /**
  * @param {number} index
  * @param {boolean} isWhitelisted
  * @public
  */
 m_setColumnWhitelisted__int__boolean(index, isWhitelisted) {
  if (isWhitelisted) {
   this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_.add(Integer.m_valueOf__int(index));
  } else {
   this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_.remove(Integer.m_valueOf__int(index));
  }
 }
 /**
  * @override
  * @param {CellPreviewEvent<T>} event
  * @return {SelectAction}
  * @public
  */
 m_translateSelectionEvent__org_gwtproject_view_client_CellPreviewEvent(event) {
  return this.m_isColumnWhitelisted__int(event.m_getColumn__()) ? SelectAction.f_DEFAULT__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction : SelectAction.f_IGNORE__org_gwtproject_view_client_DefaultSelectionEventManager_SelectAction;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator() {
  this.f_whitelist__org_gwtproject_view_client_DefaultSelectionEventManager_WhitelistEventTranslator_ = /**@type {!HashSet<Integer>} */ (HashSet.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  WhitelistEventTranslator.$clinit = () =>{};
  WhitelistEventTranslator.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WhitelistEventTranslator;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectAction = goog.module.get('org.gwtproject.view.client.DefaultSelectionEventManager.SelectAction$impl');
 }
 
}
$Util.$setClassMetadata(WhitelistEventTranslator, 'org.gwtproject.view.client.DefaultSelectionEventManager$WhitelistEventTranslator');

EventTranslator.$markImplementor(WhitelistEventTranslator);

exports = WhitelistEventTranslator; 
//# sourceMappingURL=DefaultSelectionEventManager$WhitelistEventTranslator.js.map