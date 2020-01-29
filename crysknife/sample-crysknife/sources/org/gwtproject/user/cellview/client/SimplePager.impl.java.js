goog.module('org.gwtproject.user.cellview.client.SimplePager$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractPager = goog.require('org.gwtproject.user.cellview.client.AbstractPager$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let NumberFormat = goog.forwardDeclare('org.gwtproject.i18n.client.NumberFormat$impl');
let ImageButton = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.ImageButton$impl');
let ImageButtonsConstants = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.ImageButtonsConstants$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.Resources$impl');
let Style = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.Style$impl');
let TextLocation = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager.TextLocation$impl');
let SimplePager__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
let HTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HTML$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
let HorizontalPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HorizontalPanel$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class SimplePager extends AbstractPager {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ImageButton} */
  this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {number} */
  this.f_fastForwardRows__org_gwtproject_user_cellview_client_SimplePager_ = 0;
  /** @public {ImageButton} */
  this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {HTML} */
  this.f_label__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {ImageButton} */
  this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {ImageButton} */
  this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {ImageButton} */
  this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {Resources} */
  this.f_resources__org_gwtproject_user_cellview_client_SimplePager_;
  /** @public {Style} */
  this.f_style__org_gwtproject_user_cellview_client_SimplePager_;
 }
 /**
  * @return {Resources}
  * @public
  */
 static m_getDefaultResources__() {
  if ($Equality.$same(SimplePager.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_SimplePager_, null)) {
   SimplePager.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_SimplePager_ = SimplePager__ResourcesImpl.$create__();
  }
  return SimplePager.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_SimplePager_;
 }
 /**
  * Factory method corresponding to constructor 'SimplePager()'.
  * @return {!SimplePager}
  * @public
  */
 static $create__() {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager()'.
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__() {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation(TextLocation.f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation)'.
  * @param {TextLocation} location
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation(location) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation(location);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation)'.
  * @param {TextLocation} location
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation(location) {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean(location, SimplePager.m_getDefaultResources__(), true, SimplePager.f_DEFAULT_FAST_FORWARD_ROWS__org_gwtproject_user_cellview_client_SimplePager_, false);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation, boolean, boolean)'.
  * @param {TextLocation} location
  * @param {boolean} showFastForwardButton
  * @param {boolean} showLastPageButton
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__boolean(location, showFastForwardButton, showLastPageButton) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__boolean(location, showFastForwardButton, showLastPageButton);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation, boolean, boolean)'.
  * @param {TextLocation} location
  * @param {boolean} showFastForwardButton
  * @param {boolean} showLastPageButton
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__boolean(location, showFastForwardButton, showLastPageButton) {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__int__boolean(location, showFastForwardButton, SimplePager.f_DEFAULT_FAST_FORWARD_ROWS__org_gwtproject_user_cellview_client_SimplePager_, showLastPageButton);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation, boolean, int, boolean)'.
  * @param {TextLocation} location
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__int__boolean(location, showFastForwardButton, fastForwardRows, showLastPageButton) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__int__boolean(location, showFastForwardButton, fastForwardRows, showLastPageButton);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation, boolean, int, boolean)'.
  * @param {TextLocation} location
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__boolean__int__boolean(location, showFastForwardButton, fastForwardRows, showLastPageButton) {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean(location, SimplePager.m_getDefaultResources__(), showFastForwardButton, fastForwardRows, showLastPageButton);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean, ImageButtonsConstants)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @param {ImageButtonsConstants} imageButtonConstants
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, imageButtonConstants) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, imageButtonConstants);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean, ImageButtonsConstants)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @param {ImageButtonsConstants} imageButtonConstants
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, imageButtonConstants) {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, true, imageButtonConstants);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean, boolean, ImageButtonsConstants)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @param {boolean} showFirstPageButton
  * @param {ImageButtonsConstants} imageButtonConstants
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, showFirstPageButton, imageButtonConstants) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, showFirstPageButton, imageButtonConstants);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean, boolean, ImageButtonsConstants)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @param {boolean} showFirstPageButton
  * @param {ImageButtonsConstants} imageButtonConstants
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, showFirstPageButton, imageButtonConstants) {
  this.$ctor__org_gwtproject_user_cellview_client_AbstractPager__();
  this.$init___$p_org_gwtproject_user_cellview_client_SimplePager();
  this.f_resources__org_gwtproject_user_cellview_client_SimplePager_ = resources;
  this.f_fastForwardRows__org_gwtproject_user_cellview_client_SimplePager_ = fastForwardRows;
  this.f_style__org_gwtproject_user_cellview_client_SimplePager_ = resources.m_simplePagerStyle__();
  this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_ensureInjected__();
  let disabledStyle = this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_disabledButton__();
  if (showFirstPageButton) {
   this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_ = ImageButton.$create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resources.m_simplePagerFirstPage__(), resources.m_simplePagerFirstPageDisabled__(), disabledStyle, imageButtonConstants.m_firstPage__());
   this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(ClickHandler.$adapt((/** ClickEvent */ event) =>{
    this.m_firstPage__();
   }));
  } else {
   this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_ = null;
  }
  this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_ = ImageButton.$create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resources.m_simplePagerNextPage__(), resources.m_simplePagerNextPageDisabled__(), disabledStyle, imageButtonConstants.m_nextPage__());
  this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(ClickHandler.$adapt((/** ClickEvent */ event_1) =>{
   this.m_nextPage__();
  }));
  this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_ = ImageButton.$create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resources.m_simplePagerPreviousPage__(), resources.m_simplePagerPreviousPageDisabled__(), disabledStyle, imageButtonConstants.m_prevPage__());
  this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(ClickHandler.$adapt((/** ClickEvent */ event_2) =>{
   this.m_previousPage__();
  }));
  if (showLastPageButton) {
   this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_ = ImageButton.$create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resources.m_simplePagerLastPage__(), resources.m_simplePagerLastPageDisabled__(), disabledStyle, imageButtonConstants.m_lastPage__());
   this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(ClickHandler.$adapt((/** ClickEvent */ event_3) =>{
    this.m_lastPage__();
   }));
  } else {
   this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_ = null;
  }
  if (showFastForwardButton) {
   this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_ = ImageButton.$create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resources.m_simplePagerFastForward__(), resources.m_simplePagerFastForwardDisabled__(), disabledStyle, imageButtonConstants.m_fastForward__());
   this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(ClickHandler.$adapt((/** ClickEvent */ event_4) =>{
    this.m_setPage__int(this.m_getPage__() + this.m_getFastForwardPages___$p_org_gwtproject_user_cellview_client_SimplePager());
   }));
  } else {
   this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_ = null;
  }
  let layout = HorizontalPanel.$create__();
  layout.m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(HasVerticalAlignment.f_ALIGN_MIDDLE__org_gwtproject_user_client_ui_HasVerticalAlignment);
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(layout);
  if ($Equality.$same(location, TextLocation.f_LEFT__org_gwtproject_user_cellview_client_SimplePager_TextLocation)) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_label__org_gwtproject_user_cellview_client_SimplePager_);
  }
  if (showFirstPageButton) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_);
  }
  layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_);
  if ($Equality.$same(location, TextLocation.f_CENTER__org_gwtproject_user_cellview_client_SimplePager_TextLocation)) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_label__org_gwtproject_user_cellview_client_SimplePager_);
  }
  layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_);
  if (showFastForwardButton) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_);
  }
  if (showLastPageButton) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_);
  }
  if ($Equality.$same(location, TextLocation.f_RIGHT__org_gwtproject_user_cellview_client_SimplePager_TextLocation)) {
   layout.m_add__org_gwtproject_user_client_ui_Widget(this.f_label__org_gwtproject_user_cellview_client_SimplePager_);
  }
  if (showFirstPageButton) {
   $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_button__());
  }
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_button__());
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_label__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_pageDetails__());
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_button__());
  if (showFastForwardButton) {
   $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_button__());
  }
  if (showLastPageButton) {
   $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_button__());
  }
  this.m_setDisplay__org_gwtproject_view_client_HasRows(null);
 }
 /**
  * Factory method corresponding to constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @return {!SimplePager}
  * @public
  */
 static $create__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton) {
  SimplePager.$clinit();
  let $instance = new SimplePager();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePager(TextLocation, Resources, boolean, int, boolean)'.
  * @param {TextLocation} location
  * @param {Resources} resources
  * @param {boolean} showFastForwardButton
  * @param {number} fastForwardRows
  * @param {boolean} showLastPageButton
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton) {
  this.$ctor__org_gwtproject_user_cellview_client_SimplePager__org_gwtproject_user_cellview_client_SimplePager_TextLocation__org_gwtproject_user_cellview_client_SimplePager_Resources__boolean__int__boolean__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants(location, resources, showFastForwardButton, fastForwardRows, showLastPageButton, ImageButtonsConstants.f_INSTANCE__org_gwtproject_user_cellview_client_SimplePager_ImageButtonsConstants);
 }
 /**
  * @override
  * @public
  */
 m_firstPage__() {
  super.m_firstPage__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getPage__() {
  return super.m_getPage__();
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getPageCount__() {
  return super.m_getPageCount__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasNextPage__() {
  return super.m_hasNextPage__();
 }
 /**
  * @override
  * @param {number} pages
  * @return {boolean}
  * @public
  */
 m_hasNextPages__int(pages) {
  return super.m_hasNextPages__int(pages);
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_hasPage__int(index) {
  return super.m_hasPage__int(index);
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasPreviousPage__() {
  return super.m_hasPreviousPage__();
 }
 /**
  * @override
  * @param {number} pages
  * @return {boolean}
  * @public
  */
 m_hasPreviousPages__int(pages) {
  return super.m_hasPreviousPages__int(pages);
 }
 /**
  * @override
  * @public
  */
 m_lastPage__() {
  super.m_lastPage__();
 }
 /**
  * @override
  * @public
  */
 m_lastPageStart__() {
  super.m_lastPageStart__();
 }
 /**
  * @override
  * @public
  */
 m_nextPage__() {
  super.m_nextPage__();
 }
 /**
  * @override
  * @public
  */
 m_previousPage__() {
  super.m_previousPage__();
 }
 /**
  * @override
  * @param {HasRows} display
  * @public
  */
 m_setDisplay__org_gwtproject_view_client_HasRows(display) {
  let disableButtons = ($Equality.$same(display, null) || display.m_getRowCount__() == 0);
  this.m_setFastForwardDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disableButtons);
  this.m_setNextPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disableButtons);
  this.m_setPrevPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disableButtons);
  super.m_setDisplay__org_gwtproject_view_client_HasRows(display);
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setPage__int(index) {
  super.m_setPage__int(index);
 }
 /**
  * @override
  * @param {number} pageSize
  * @public
  */
 m_setPageSize__int(pageSize) {
  super.m_setPageSize__int(pageSize);
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setPageStart__int(index) {
  super.m_setPageStart__int(index);
 }
 /**
  * @public
  */
 m_startLoading__() {
  this.m_getDisplay__().m_setRowCount__int__boolean(0, true);
  this.f_label__org_gwtproject_user_cellview_client_SimplePager_.m_setHTML__java_lang_String("");
 }
 /**
  * @return {?string}
  * @public
  */
 m_createText__() {
  let formatter = NumberFormat.m_getFormat__java_lang_String("#,###");
  let display = this.m_getDisplay__();
  let range = display.m_getVisibleRange__();
  let pageStart = range.m_getStart__() + 1;
  let pageSize = range.m_getLength__();
  let dataSize = display.m_getRowCount__();
  let endIndex = Math.min(dataSize, pageStart + pageSize - 1);
  endIndex = Math.max(pageStart, endIndex);
  let exact = display.m_isRowCountExact__();
  return j_l_String.m_valueOf__java_lang_Object(formatter.m_format__double(pageStart)) + "-" + j_l_String.m_valueOf__java_lang_Object(formatter.m_format__double(endIndex)) + j_l_String.m_valueOf__java_lang_Object((exact ? " of " : " of over ")) + j_l_String.m_valueOf__java_lang_Object(formatter.m_format__double(dataSize));
 }
 /**
  * @override
  * @public
  */
 m_onRangeOrRowCountChanged__() {
  let display = this.m_getDisplay__();
  this.f_label__org_gwtproject_user_cellview_client_SimplePager_.m_setText__java_lang_String(this.m_createText__());
  this.m_setPrevPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(!this.m_hasPreviousPage__());
  if (this.m_isRangeLimited__() || !display.m_isRowCountExact__()) {
   this.m_setNextPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(!this.m_hasNextPage__());
   this.m_setFastForwardDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(!this.m_hasNextPages__int(this.m_getFastForwardPages___$p_org_gwtproject_user_cellview_client_SimplePager()));
  }
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isNextButtonDisabled___$pp_org_gwtproject_user_cellview_client() {
  return this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_.m_isDisabled__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isPreviousButtonDisabled___$pp_org_gwtproject_user_cellview_client() {
  return this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_.m_isDisabled__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getFastForwardPages___$p_org_gwtproject_user_cellview_client_SimplePager() {
  let pageSize = this.m_getPageSize__();
  return pageSize > 0 ? $Primitives.$coerceDivision(this.f_fastForwardRows__org_gwtproject_user_cellview_client_SimplePager_ / pageSize) : 0;
 }
 /**
  * @param {boolean} disabled
  * @public
  */
 m_setFastForwardDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disabled) {
  if ($Equality.$same(this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_, null)) {
   return;
  }
  if (disabled) {
   this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_setResource__org_gwtproject_resources_client_ImageResource(this.f_resources__org_gwtproject_user_cellview_client_SimplePager_.m_simplePagerFastForwardDisabled__());
   $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_disabledButton__());
  } else {
   this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_setResource__org_gwtproject_resources_client_ImageResource(this.f_resources__org_gwtproject_user_cellview_client_SimplePager_.m_simplePagerFastForward__());
   $Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.f_fastForward__org_gwtproject_user_cellview_client_SimplePager_.m_getElement__()), this.f_style__org_gwtproject_user_cellview_client_SimplePager_.m_disabledButton__());
  }
 }
 /**
  * @param {boolean} disabled
  * @public
  */
 m_setNextPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disabled) {
  this.f_nextPage__org_gwtproject_user_cellview_client_SimplePager_.m_setDisabled__boolean(disabled);
  if (!$Equality.$same(this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_, null)) {
   this.f_lastPage__org_gwtproject_user_cellview_client_SimplePager_.m_setDisabled__boolean(disabled);
  }
 }
 /**
  * @param {boolean} disabled
  * @public
  */
 m_setPrevPageButtonsDisabled__boolean_$p_org_gwtproject_user_cellview_client_SimplePager(disabled) {
  if (!$Equality.$same(this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_, null)) {
   this.f_firstPage__org_gwtproject_user_cellview_client_SimplePager_.m_setDisabled__boolean(disabled);
  }
  this.f_prevPage__org_gwtproject_user_cellview_client_SimplePager_.m_setDisabled__boolean(disabled);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_SimplePager() {
  this.f_label__org_gwtproject_user_cellview_client_SimplePager_ = HTML.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  SimplePager.$clinit = () =>{};
  SimplePager.$loadModules();
  AbstractPager.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimplePager;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  ClickHandler = goog.module.get('org.gwtproject.event.dom.client.ClickHandler$impl');
  NumberFormat = goog.module.get('org.gwtproject.i18n.client.NumberFormat$impl');
  ImageButton = goog.module.get('org.gwtproject.user.cellview.client.SimplePager.ImageButton$impl');
  ImageButtonsConstants = goog.module.get('org.gwtproject.user.cellview.client.SimplePager.ImageButtonsConstants$impl');
  TextLocation = goog.module.get('org.gwtproject.user.cellview.client.SimplePager.TextLocation$impl');
  SimplePager__ResourcesImpl = goog.module.get('org.gwtproject.user.cellview.client.SimplePager_ResourcesImpl$impl');
  HTML = goog.module.get('org.gwtproject.user.client.ui.HTML$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
  HorizontalPanel = goog.module.get('org.gwtproject.user.client.ui.HorizontalPanel$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(SimplePager, 'org.gwtproject.user.cellview.client.SimplePager');

/** @public {number} @const */
SimplePager.f_DEFAULT_FAST_FORWARD_ROWS__org_gwtproject_user_cellview_client_SimplePager_ = 1000;
/** @public {Resources} */
SimplePager.f_DEFAULT_RESOURCES__org_gwtproject_user_cellview_client_SimplePager_;

exports = SimplePager; 
//# sourceMappingURL=SimplePager.js.map