goog.module('org.gwtproject.aria.client.Roles$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AlertRole = goog.forwardDeclare('org.gwtproject.aria.client.AlertRole$impl');
let AlertRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.AlertRoleImpl$impl');
let AlertdialogRole = goog.forwardDeclare('org.gwtproject.aria.client.AlertdialogRole$impl');
let AlertdialogRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.AlertdialogRoleImpl$impl');
let ApplicationRole = goog.forwardDeclare('org.gwtproject.aria.client.ApplicationRole$impl');
let ApplicationRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ApplicationRoleImpl$impl');
let ArticleRole = goog.forwardDeclare('org.gwtproject.aria.client.ArticleRole$impl');
let ArticleRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ArticleRoleImpl$impl');
let BannerRole = goog.forwardDeclare('org.gwtproject.aria.client.BannerRole$impl');
let BannerRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.BannerRoleImpl$impl');
let ButtonRole = goog.forwardDeclare('org.gwtproject.aria.client.ButtonRole$impl');
let ButtonRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ButtonRoleImpl$impl');
let CheckboxRole = goog.forwardDeclare('org.gwtproject.aria.client.CheckboxRole$impl');
let CheckboxRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.CheckboxRoleImpl$impl');
let ColumnheaderRole = goog.forwardDeclare('org.gwtproject.aria.client.ColumnheaderRole$impl');
let ColumnheaderRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ColumnheaderRoleImpl$impl');
let ComboboxRole = goog.forwardDeclare('org.gwtproject.aria.client.ComboboxRole$impl');
let ComboboxRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ComboboxRoleImpl$impl');
let ComplementaryRole = goog.forwardDeclare('org.gwtproject.aria.client.ComplementaryRole$impl');
let ComplementaryRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ComplementaryRoleImpl$impl');
let ContentinfoRole = goog.forwardDeclare('org.gwtproject.aria.client.ContentinfoRole$impl');
let ContentinfoRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ContentinfoRoleImpl$impl');
let DefinitionRole = goog.forwardDeclare('org.gwtproject.aria.client.DefinitionRole$impl');
let DefinitionRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.DefinitionRoleImpl$impl');
let DialogRole = goog.forwardDeclare('org.gwtproject.aria.client.DialogRole$impl');
let DialogRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.DialogRoleImpl$impl');
let DirectoryRole = goog.forwardDeclare('org.gwtproject.aria.client.DirectoryRole$impl');
let DirectoryRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.DirectoryRoleImpl$impl');
let DocumentRole = goog.forwardDeclare('org.gwtproject.aria.client.DocumentRole$impl');
let DocumentRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.DocumentRoleImpl$impl');
let FormRole = goog.forwardDeclare('org.gwtproject.aria.client.FormRole$impl');
let FormRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.FormRoleImpl$impl');
let GridRole = goog.forwardDeclare('org.gwtproject.aria.client.GridRole$impl');
let GridRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.GridRoleImpl$impl');
let GridcellRole = goog.forwardDeclare('org.gwtproject.aria.client.GridcellRole$impl');
let GridcellRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.GridcellRoleImpl$impl');
let GroupRole = goog.forwardDeclare('org.gwtproject.aria.client.GroupRole$impl');
let GroupRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.GroupRoleImpl$impl');
let HeadingRole = goog.forwardDeclare('org.gwtproject.aria.client.HeadingRole$impl');
let HeadingRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.HeadingRoleImpl$impl');
let ImgRole = goog.forwardDeclare('org.gwtproject.aria.client.ImgRole$impl');
let ImgRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ImgRoleImpl$impl');
let LinkRole = goog.forwardDeclare('org.gwtproject.aria.client.LinkRole$impl');
let LinkRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.LinkRoleImpl$impl');
let ListRole = goog.forwardDeclare('org.gwtproject.aria.client.ListRole$impl');
let ListRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ListRoleImpl$impl');
let ListboxRole = goog.forwardDeclare('org.gwtproject.aria.client.ListboxRole$impl');
let ListboxRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ListboxRoleImpl$impl');
let ListitemRole = goog.forwardDeclare('org.gwtproject.aria.client.ListitemRole$impl');
let ListitemRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ListitemRoleImpl$impl');
let LogRole = goog.forwardDeclare('org.gwtproject.aria.client.LogRole$impl');
let LogRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.LogRoleImpl$impl');
let MainRole = goog.forwardDeclare('org.gwtproject.aria.client.MainRole$impl');
let MainRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MainRoleImpl$impl');
let MarqueeRole = goog.forwardDeclare('org.gwtproject.aria.client.MarqueeRole$impl');
let MarqueeRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MarqueeRoleImpl$impl');
let MathRole = goog.forwardDeclare('org.gwtproject.aria.client.MathRole$impl');
let MathRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MathRoleImpl$impl');
let MenuRole = goog.forwardDeclare('org.gwtproject.aria.client.MenuRole$impl');
let MenuRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MenuRoleImpl$impl');
let MenubarRole = goog.forwardDeclare('org.gwtproject.aria.client.MenubarRole$impl');
let MenubarRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MenubarRoleImpl$impl');
let MenuitemRole = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemRole$impl');
let MenuitemRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemRoleImpl$impl');
let MenuitemcheckboxRole = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemcheckboxRole$impl');
let MenuitemcheckboxRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemcheckboxRoleImpl$impl');
let MenuitemradioRole = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemradioRole$impl');
let MenuitemradioRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.MenuitemradioRoleImpl$impl');
let NavigationRole = goog.forwardDeclare('org.gwtproject.aria.client.NavigationRole$impl');
let NavigationRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.NavigationRoleImpl$impl');
let NoteRole = goog.forwardDeclare('org.gwtproject.aria.client.NoteRole$impl');
let NoteRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.NoteRoleImpl$impl');
let OptionRole = goog.forwardDeclare('org.gwtproject.aria.client.OptionRole$impl');
let OptionRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.OptionRoleImpl$impl');
let PresentationRole = goog.forwardDeclare('org.gwtproject.aria.client.PresentationRole$impl');
let PresentationRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.PresentationRoleImpl$impl');
let ProgressbarRole = goog.forwardDeclare('org.gwtproject.aria.client.ProgressbarRole$impl');
let ProgressbarRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ProgressbarRoleImpl$impl');
let RadioRole = goog.forwardDeclare('org.gwtproject.aria.client.RadioRole$impl');
let RadioRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RadioRoleImpl$impl');
let RadiogroupRole = goog.forwardDeclare('org.gwtproject.aria.client.RadiogroupRole$impl');
let RadiogroupRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RadiogroupRoleImpl$impl');
let RegionRole = goog.forwardDeclare('org.gwtproject.aria.client.RegionRole$impl');
let RegionRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RegionRoleImpl$impl');
let Role = goog.forwardDeclare('org.gwtproject.aria.client.Role$impl');
let RowRole = goog.forwardDeclare('org.gwtproject.aria.client.RowRole$impl');
let RowRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RowRoleImpl$impl');
let RowgroupRole = goog.forwardDeclare('org.gwtproject.aria.client.RowgroupRole$impl');
let RowgroupRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RowgroupRoleImpl$impl');
let RowheaderRole = goog.forwardDeclare('org.gwtproject.aria.client.RowheaderRole$impl');
let RowheaderRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.RowheaderRoleImpl$impl');
let ScrollbarRole = goog.forwardDeclare('org.gwtproject.aria.client.ScrollbarRole$impl');
let ScrollbarRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ScrollbarRoleImpl$impl');
let SearchRole = goog.forwardDeclare('org.gwtproject.aria.client.SearchRole$impl');
let SearchRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.SearchRoleImpl$impl');
let SeparatorRole = goog.forwardDeclare('org.gwtproject.aria.client.SeparatorRole$impl');
let SeparatorRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.SeparatorRoleImpl$impl');
let SliderRole = goog.forwardDeclare('org.gwtproject.aria.client.SliderRole$impl');
let SliderRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.SliderRoleImpl$impl');
let SpinbuttonRole = goog.forwardDeclare('org.gwtproject.aria.client.SpinbuttonRole$impl');
let SpinbuttonRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.SpinbuttonRoleImpl$impl');
let StatusRole = goog.forwardDeclare('org.gwtproject.aria.client.StatusRole$impl');
let StatusRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.StatusRoleImpl$impl');
let TabRole = goog.forwardDeclare('org.gwtproject.aria.client.TabRole$impl');
let TabRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TabRoleImpl$impl');
let TablistRole = goog.forwardDeclare('org.gwtproject.aria.client.TablistRole$impl');
let TablistRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TablistRoleImpl$impl');
let TabpanelRole = goog.forwardDeclare('org.gwtproject.aria.client.TabpanelRole$impl');
let TabpanelRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TabpanelRoleImpl$impl');
let TextboxRole = goog.forwardDeclare('org.gwtproject.aria.client.TextboxRole$impl');
let TextboxRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TextboxRoleImpl$impl');
let TimerRole = goog.forwardDeclare('org.gwtproject.aria.client.TimerRole$impl');
let TimerRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TimerRoleImpl$impl');
let ToolbarRole = goog.forwardDeclare('org.gwtproject.aria.client.ToolbarRole$impl');
let ToolbarRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.ToolbarRoleImpl$impl');
let TooltipRole = goog.forwardDeclare('org.gwtproject.aria.client.TooltipRole$impl');
let TooltipRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TooltipRoleImpl$impl');
let TreeRole = goog.forwardDeclare('org.gwtproject.aria.client.TreeRole$impl');
let TreeRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TreeRoleImpl$impl');
let TreegridRole = goog.forwardDeclare('org.gwtproject.aria.client.TreegridRole$impl');
let TreegridRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TreegridRoleImpl$impl');
let TreeitemRole = goog.forwardDeclare('org.gwtproject.aria.client.TreeitemRole$impl');
let TreeitemRoleImpl = goog.forwardDeclare('org.gwtproject.aria.client.TreeitemRoleImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Roles extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Roles} */
 static $create__() {
  Roles.$clinit();
  let $instance = new Roles();
  $instance.$ctor__org_gwtproject_aria_client_Roles__();
  return $instance;
 }
 
 $ctor__org_gwtproject_aria_client_Roles__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {AlertdialogRole} */
 static m_getAlertdialogRole__() {
  Roles.$clinit();
  return Roles.f_ALERTDIALOG__org_gwtproject_aria_client_Roles_;
 }
 /** @return {AlertRole} */
 static m_getAlertRole__() {
  Roles.$clinit();
  return Roles.f_ALERT__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ApplicationRole} */
 static m_getApplicationRole__() {
  Roles.$clinit();
  return Roles.f_APPLICATION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ArticleRole} */
 static m_getArticleRole__() {
  Roles.$clinit();
  return Roles.f_ARTICLE__org_gwtproject_aria_client_Roles_;
 }
 /** @return {BannerRole} */
 static m_getBannerRole__() {
  Roles.$clinit();
  return Roles.f_BANNER__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ButtonRole} */
 static m_getButtonRole__() {
  Roles.$clinit();
  return Roles.f_BUTTON__org_gwtproject_aria_client_Roles_;
 }
 /** @return {CheckboxRole} */
 static m_getCheckboxRole__() {
  Roles.$clinit();
  return Roles.f_CHECKBOX__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ColumnheaderRole} */
 static m_getColumnheaderRole__() {
  Roles.$clinit();
  return Roles.f_COLUMNHEADER__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ComboboxRole} */
 static m_getComboboxRole__() {
  Roles.$clinit();
  return Roles.f_COMBOBOX__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ComplementaryRole} */
 static m_getComplementaryRole__() {
  Roles.$clinit();
  return Roles.f_COMPLEMENTARY__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ContentinfoRole} */
 static m_getContentinfoRole__() {
  Roles.$clinit();
  return Roles.f_CONTENTINFO__org_gwtproject_aria_client_Roles_;
 }
 /** @return {DefinitionRole} */
 static m_getDefinitionRole__() {
  Roles.$clinit();
  return Roles.f_DEFINITION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {DialogRole} */
 static m_getDialogRole__() {
  Roles.$clinit();
  return Roles.f_DIALOG__org_gwtproject_aria_client_Roles_;
 }
 /** @return {DirectoryRole} */
 static m_getDirectoryRole__() {
  Roles.$clinit();
  return Roles.f_DIRECTORY__org_gwtproject_aria_client_Roles_;
 }
 /** @return {DocumentRole} */
 static m_getDocumentRole__() {
  Roles.$clinit();
  return Roles.f_DOCUMENT__org_gwtproject_aria_client_Roles_;
 }
 /** @return {FormRole} */
 static m_getFormRole__() {
  Roles.$clinit();
  return Roles.f_FORM__org_gwtproject_aria_client_Roles_;
 }
 /** @return {GridcellRole} */
 static m_getGridcellRole__() {
  Roles.$clinit();
  return Roles.f_GRIDCELL__org_gwtproject_aria_client_Roles_;
 }
 /** @return {GridRole} */
 static m_getGridRole__() {
  Roles.$clinit();
  return Roles.f_GRID__org_gwtproject_aria_client_Roles_;
 }
 /** @return {GroupRole} */
 static m_getGroupRole__() {
  Roles.$clinit();
  return Roles.f_GROUP__org_gwtproject_aria_client_Roles_;
 }
 /** @return {HeadingRole} */
 static m_getHeadingRole__() {
  Roles.$clinit();
  return Roles.f_HEADING__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ImgRole} */
 static m_getImgRole__() {
  Roles.$clinit();
  return Roles.f_IMG__org_gwtproject_aria_client_Roles_;
 }
 /** @return {LinkRole} */
 static m_getLinkRole__() {
  Roles.$clinit();
  return Roles.f_LINK__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ListboxRole} */
 static m_getListboxRole__() {
  Roles.$clinit();
  return Roles.f_LISTBOX__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ListitemRole} */
 static m_getListitemRole__() {
  Roles.$clinit();
  return Roles.f_LISTITEM__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ListRole} */
 static m_getListRole__() {
  Roles.$clinit();
  return Roles.f_LIST__org_gwtproject_aria_client_Roles_;
 }
 /** @return {LogRole} */
 static m_getLogRole__() {
  Roles.$clinit();
  return Roles.f_LOG__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MainRole} */
 static m_getMainRole__() {
  Roles.$clinit();
  return Roles.f_MAIN__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MarqueeRole} */
 static m_getMarqueeRole__() {
  Roles.$clinit();
  return Roles.f_MARQUEE__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MathRole} */
 static m_getMathRole__() {
  Roles.$clinit();
  return Roles.f_MATH__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MenubarRole} */
 static m_getMenubarRole__() {
  Roles.$clinit();
  return Roles.f_MENUBAR__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MenuitemcheckboxRole} */
 static m_getMenuitemcheckboxRole__() {
  Roles.$clinit();
  return Roles.f_MENUITEMCHECKBOX__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MenuitemradioRole} */
 static m_getMenuitemradioRole__() {
  Roles.$clinit();
  return Roles.f_MENUITEMRADIO__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MenuitemRole} */
 static m_getMenuitemRole__() {
  Roles.$clinit();
  return Roles.f_MENUITEM__org_gwtproject_aria_client_Roles_;
 }
 /** @return {MenuRole} */
 static m_getMenuRole__() {
  Roles.$clinit();
  return Roles.f_MENU__org_gwtproject_aria_client_Roles_;
 }
 /** @return {NavigationRole} */
 static m_getNavigationRole__() {
  Roles.$clinit();
  return Roles.f_NAVIGATION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {NoteRole} */
 static m_getNoteRole__() {
  Roles.$clinit();
  return Roles.f_NOTE__org_gwtproject_aria_client_Roles_;
 }
 /** @return {OptionRole} */
 static m_getOptionRole__() {
  Roles.$clinit();
  return Roles.f_OPTION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {PresentationRole} */
 static m_getPresentationRole__() {
  Roles.$clinit();
  return Roles.f_PRESENTATION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ProgressbarRole} */
 static m_getProgressbarRole__() {
  Roles.$clinit();
  return Roles.f_PROGRESSBAR__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RadiogroupRole} */
 static m_getRadiogroupRole__() {
  Roles.$clinit();
  return Roles.f_RADIOGROUP__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RadioRole} */
 static m_getRadioRole__() {
  Roles.$clinit();
  return Roles.f_RADIO__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RegionRole} */
 static m_getRegionRole__() {
  Roles.$clinit();
  return Roles.f_REGION__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RowgroupRole} */
 static m_getRowgroupRole__() {
  Roles.$clinit();
  return Roles.f_ROWGROUP__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RowheaderRole} */
 static m_getRowheaderRole__() {
  Roles.$clinit();
  return Roles.f_ROWHEADER__org_gwtproject_aria_client_Roles_;
 }
 /** @return {RowRole} */
 static m_getRowRole__() {
  Roles.$clinit();
  return Roles.f_ROW__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ScrollbarRole} */
 static m_getScrollbarRole__() {
  Roles.$clinit();
  return Roles.f_SCROLLBAR__org_gwtproject_aria_client_Roles_;
 }
 /** @return {SearchRole} */
 static m_getSearchRole__() {
  Roles.$clinit();
  return Roles.f_SEARCH__org_gwtproject_aria_client_Roles_;
 }
 /** @return {SeparatorRole} */
 static m_getSeparatorRole__() {
  Roles.$clinit();
  return Roles.f_SEPARATOR__org_gwtproject_aria_client_Roles_;
 }
 /** @return {SliderRole} */
 static m_getSliderRole__() {
  Roles.$clinit();
  return Roles.f_SLIDER__org_gwtproject_aria_client_Roles_;
 }
 /** @return {SpinbuttonRole} */
 static m_getSpinbuttonRole__() {
  Roles.$clinit();
  return Roles.f_SPINBUTTON__org_gwtproject_aria_client_Roles_;
 }
 /** @return {StatusRole} */
 static m_getStatusRole__() {
  Roles.$clinit();
  return Roles.f_STATUS__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TablistRole} */
 static m_getTablistRole__() {
  Roles.$clinit();
  return Roles.f_TABLIST__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TabpanelRole} */
 static m_getTabpanelRole__() {
  Roles.$clinit();
  return Roles.f_TABPANEL__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TabRole} */
 static m_getTabRole__() {
  Roles.$clinit();
  return Roles.f_TAB__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TextboxRole} */
 static m_getTextboxRole__() {
  Roles.$clinit();
  return Roles.f_TEXTBOX__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TimerRole} */
 static m_getTimerRole__() {
  Roles.$clinit();
  return Roles.f_TIMER__org_gwtproject_aria_client_Roles_;
 }
 /** @return {ToolbarRole} */
 static m_getToolbarRole__() {
  Roles.$clinit();
  return Roles.f_TOOLBAR__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TooltipRole} */
 static m_getTooltipRole__() {
  Roles.$clinit();
  return Roles.f_TOOLTIP__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TreegridRole} */
 static m_getTreegridRole__() {
  Roles.$clinit();
  return Roles.f_TREEGRID__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TreeitemRole} */
 static m_getTreeitemRole__() {
  Roles.$clinit();
  return Roles.f_TREEITEM__org_gwtproject_aria_client_Roles_;
 }
 /** @return {TreeRole} */
 static m_getTreeRole__() {
  Roles.$clinit();
  return Roles.f_TREE__org_gwtproject_aria_client_Roles_;
 }
 /** @return {Role} */
 static m_roleOf__org_gwtproject_dom_client_Element(/** Object */ element) {
  let /** Map<?string, Role> */ $$q;
  Roles.$clinit();
  $Asserts.$assertWithMessage(!$Equality.$same(element, null), "Element cannot be null.");
  let roleAttributeValue = $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(element, "role") ? $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String(element, "role") : "";
  return /**@type {Role}*/ ($Casts.$to(/**@type {Stream<Role>}*/ (/**@type {Stream<?string>}*/ (Arrays.m_stream__arrayOf_java_lang_Object(j_l_String.m_split__java_lang_String__java_lang_String(roleAttributeValue, "\\s+"))).m_map__java_util_function_Function(($$q = Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_, j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {?string}*/ ($Casts.$to(arg0, j_l_String));
   return /**@type {Role}*/ ($Casts.$to($$q.get(arg0_1), Role));
  })))).m_filter__java_util_function_Predicate(Predicate.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {Role}*/ ($Casts.$to(arg0_2, Role));
   return Objects.m_nonNull__java_lang_Object(arg0_3);
  })).m_findFirst__().m_orElse__java_lang_Object(null), Role));
 }
 
 static $clinit() {
  Roles.$clinit = () =>{};
  Roles.$loadModules();
  j_l_Object.$clinit();
  Roles.f_ALERTDIALOG__org_gwtproject_aria_client_Roles_ = AlertdialogRoleImpl.$create__java_lang_String("alertdialog");
  Roles.f_ALERT__org_gwtproject_aria_client_Roles_ = AlertRoleImpl.$create__java_lang_String("alert");
  Roles.f_APPLICATION__org_gwtproject_aria_client_Roles_ = ApplicationRoleImpl.$create__java_lang_String("application");
  Roles.f_ARTICLE__org_gwtproject_aria_client_Roles_ = ArticleRoleImpl.$create__java_lang_String("article");
  Roles.f_BANNER__org_gwtproject_aria_client_Roles_ = BannerRoleImpl.$create__java_lang_String("banner");
  Roles.f_BUTTON__org_gwtproject_aria_client_Roles_ = ButtonRoleImpl.$create__java_lang_String("button");
  Roles.f_CHECKBOX__org_gwtproject_aria_client_Roles_ = CheckboxRoleImpl.$create__java_lang_String("checkbox");
  Roles.f_COLUMNHEADER__org_gwtproject_aria_client_Roles_ = ColumnheaderRoleImpl.$create__java_lang_String("columnheader");
  Roles.f_COMBOBOX__org_gwtproject_aria_client_Roles_ = ComboboxRoleImpl.$create__java_lang_String("combobox");
  Roles.f_COMPLEMENTARY__org_gwtproject_aria_client_Roles_ = ComplementaryRoleImpl.$create__java_lang_String("complementary");
  Roles.f_CONTENTINFO__org_gwtproject_aria_client_Roles_ = ContentinfoRoleImpl.$create__java_lang_String("contentinfo");
  Roles.f_DEFINITION__org_gwtproject_aria_client_Roles_ = DefinitionRoleImpl.$create__java_lang_String("definition");
  Roles.f_DIALOG__org_gwtproject_aria_client_Roles_ = DialogRoleImpl.$create__java_lang_String("dialog");
  Roles.f_DIRECTORY__org_gwtproject_aria_client_Roles_ = DirectoryRoleImpl.$create__java_lang_String("directory");
  Roles.f_DOCUMENT__org_gwtproject_aria_client_Roles_ = DocumentRoleImpl.$create__java_lang_String("document");
  Roles.f_FORM__org_gwtproject_aria_client_Roles_ = FormRoleImpl.$create__java_lang_String("form");
  Roles.f_GRIDCELL__org_gwtproject_aria_client_Roles_ = GridcellRoleImpl.$create__java_lang_String("gridcell");
  Roles.f_GRID__org_gwtproject_aria_client_Roles_ = GridRoleImpl.$create__java_lang_String("grid");
  Roles.f_GROUP__org_gwtproject_aria_client_Roles_ = GroupRoleImpl.$create__java_lang_String("group");
  Roles.f_HEADING__org_gwtproject_aria_client_Roles_ = HeadingRoleImpl.$create__java_lang_String("heading");
  Roles.f_IMG__org_gwtproject_aria_client_Roles_ = ImgRoleImpl.$create__java_lang_String("img");
  Roles.f_LINK__org_gwtproject_aria_client_Roles_ = LinkRoleImpl.$create__java_lang_String("link");
  Roles.f_LISTBOX__org_gwtproject_aria_client_Roles_ = ListboxRoleImpl.$create__java_lang_String("listbox");
  Roles.f_LISTITEM__org_gwtproject_aria_client_Roles_ = ListitemRoleImpl.$create__java_lang_String("listitem");
  Roles.f_LIST__org_gwtproject_aria_client_Roles_ = ListRoleImpl.$create__java_lang_String("list");
  Roles.f_LOG__org_gwtproject_aria_client_Roles_ = LogRoleImpl.$create__java_lang_String("log");
  Roles.f_MAIN__org_gwtproject_aria_client_Roles_ = MainRoleImpl.$create__java_lang_String("main");
  Roles.f_MARQUEE__org_gwtproject_aria_client_Roles_ = MarqueeRoleImpl.$create__java_lang_String("marquee");
  Roles.f_MATH__org_gwtproject_aria_client_Roles_ = MathRoleImpl.$create__java_lang_String("math");
  Roles.f_MENUBAR__org_gwtproject_aria_client_Roles_ = MenubarRoleImpl.$create__java_lang_String("menubar");
  Roles.f_MENUITEMCHECKBOX__org_gwtproject_aria_client_Roles_ = MenuitemcheckboxRoleImpl.$create__java_lang_String("menuitemcheckbox");
  Roles.f_MENUITEMRADIO__org_gwtproject_aria_client_Roles_ = MenuitemradioRoleImpl.$create__java_lang_String("menuitemradio");
  Roles.f_MENUITEM__org_gwtproject_aria_client_Roles_ = MenuitemRoleImpl.$create__java_lang_String("menuitem");
  Roles.f_MENU__org_gwtproject_aria_client_Roles_ = MenuRoleImpl.$create__java_lang_String("menu");
  Roles.f_NAVIGATION__org_gwtproject_aria_client_Roles_ = NavigationRoleImpl.$create__java_lang_String("navigation");
  Roles.f_NOTE__org_gwtproject_aria_client_Roles_ = NoteRoleImpl.$create__java_lang_String("note");
  Roles.f_OPTION__org_gwtproject_aria_client_Roles_ = OptionRoleImpl.$create__java_lang_String("option");
  Roles.f_PRESENTATION__org_gwtproject_aria_client_Roles_ = PresentationRoleImpl.$create__java_lang_String("presentation");
  Roles.f_PROGRESSBAR__org_gwtproject_aria_client_Roles_ = ProgressbarRoleImpl.$create__java_lang_String("progressbar");
  Roles.f_RADIOGROUP__org_gwtproject_aria_client_Roles_ = RadiogroupRoleImpl.$create__java_lang_String("radiogroup");
  Roles.f_RADIO__org_gwtproject_aria_client_Roles_ = RadioRoleImpl.$create__java_lang_String("radio");
  Roles.f_REGION__org_gwtproject_aria_client_Roles_ = RegionRoleImpl.$create__java_lang_String("region");
  Roles.f_ROWGROUP__org_gwtproject_aria_client_Roles_ = RowgroupRoleImpl.$create__java_lang_String("rowgroup");
  Roles.f_ROWHEADER__org_gwtproject_aria_client_Roles_ = RowheaderRoleImpl.$create__java_lang_String("rowheader");
  Roles.f_ROW__org_gwtproject_aria_client_Roles_ = RowRoleImpl.$create__java_lang_String("row");
  Roles.f_SCROLLBAR__org_gwtproject_aria_client_Roles_ = ScrollbarRoleImpl.$create__java_lang_String("scrollbar");
  Roles.f_SEARCH__org_gwtproject_aria_client_Roles_ = SearchRoleImpl.$create__java_lang_String("search");
  Roles.f_SEPARATOR__org_gwtproject_aria_client_Roles_ = SeparatorRoleImpl.$create__java_lang_String("separator");
  Roles.f_SLIDER__org_gwtproject_aria_client_Roles_ = SliderRoleImpl.$create__java_lang_String("slider");
  Roles.f_SPINBUTTON__org_gwtproject_aria_client_Roles_ = SpinbuttonRoleImpl.$create__java_lang_String("spinbutton");
  Roles.f_STATUS__org_gwtproject_aria_client_Roles_ = StatusRoleImpl.$create__java_lang_String("status");
  Roles.f_TABLIST__org_gwtproject_aria_client_Roles_ = TablistRoleImpl.$create__java_lang_String("tablist");
  Roles.f_TABPANEL__org_gwtproject_aria_client_Roles_ = TabpanelRoleImpl.$create__java_lang_String("tabpanel");
  Roles.f_TAB__org_gwtproject_aria_client_Roles_ = TabRoleImpl.$create__java_lang_String("tab");
  Roles.f_TEXTBOX__org_gwtproject_aria_client_Roles_ = TextboxRoleImpl.$create__java_lang_String("textbox");
  Roles.f_TIMER__org_gwtproject_aria_client_Roles_ = TimerRoleImpl.$create__java_lang_String("timer");
  Roles.f_TOOLBAR__org_gwtproject_aria_client_Roles_ = ToolbarRoleImpl.$create__java_lang_String("toolbar");
  Roles.f_TOOLTIP__org_gwtproject_aria_client_Roles_ = TooltipRoleImpl.$create__java_lang_String("tooltip");
  Roles.f_TREEGRID__org_gwtproject_aria_client_Roles_ = TreegridRoleImpl.$create__java_lang_String("treegrid");
  Roles.f_TREEITEM__org_gwtproject_aria_client_Roles_ = TreeitemRoleImpl.$create__java_lang_String("treeitem");
  Roles.f_TREE__org_gwtproject_aria_client_Roles_ = TreeRoleImpl.$create__java_lang_String("tree");
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_ = /**@type {!HashMap<?string, Role>}*/ (HashMap.$create__());
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("region", Roles.f_REGION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("alert", Roles.f_ALERT__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("dialog", Roles.f_DIALOG__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("alertdialog", Roles.f_ALERTDIALOG__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("application", Roles.f_APPLICATION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("document", Roles.f_DOCUMENT__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("article", Roles.f_ARTICLE__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("banner", Roles.f_BANNER__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("button", Roles.f_BUTTON__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("checkbox", Roles.f_CHECKBOX__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("gridcell", Roles.f_GRIDCELL__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("columnheader", Roles.f_COLUMNHEADER__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("group", Roles.f_GROUP__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("combobox", Roles.f_COMBOBOX__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("complementary", Roles.f_COMPLEMENTARY__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("contentinfo", Roles.f_CONTENTINFO__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("definition", Roles.f_DEFINITION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("list", Roles.f_LIST__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("directory", Roles.f_DIRECTORY__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("form", Roles.f_FORM__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("grid", Roles.f_GRID__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("heading", Roles.f_HEADING__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("img", Roles.f_IMG__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("link", Roles.f_LINK__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("listbox", Roles.f_LISTBOX__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("listitem", Roles.f_LISTITEM__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("log", Roles.f_LOG__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("main", Roles.f_MAIN__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("marquee", Roles.f_MARQUEE__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("math", Roles.f_MATH__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("menu", Roles.f_MENU__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("menubar", Roles.f_MENUBAR__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("menuitem", Roles.f_MENUITEM__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("menuitemcheckbox", Roles.f_MENUITEMCHECKBOX__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("option", Roles.f_OPTION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("radio", Roles.f_RADIO__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("menuitemradio", Roles.f_MENUITEMRADIO__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("navigation", Roles.f_NAVIGATION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("note", Roles.f_NOTE__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("presentation", Roles.f_PRESENTATION__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("progressbar", Roles.f_PROGRESSBAR__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("radiogroup", Roles.f_RADIOGROUP__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("row", Roles.f_ROW__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("rowgroup", Roles.f_ROWGROUP__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("rowheader", Roles.f_ROWHEADER__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("search", Roles.f_SEARCH__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("separator", Roles.f_SEPARATOR__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("scrollbar", Roles.f_SCROLLBAR__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("slider", Roles.f_SLIDER__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("spinbutton", Roles.f_SPINBUTTON__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("status", Roles.f_STATUS__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("tab", Roles.f_TAB__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("tablist", Roles.f_TABLIST__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("tabpanel", Roles.f_TABPANEL__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("textbox", Roles.f_TEXTBOX__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("timer", Roles.f_TIMER__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("toolbar", Roles.f_TOOLBAR__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("tooltip", Roles.f_TOOLTIP__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("tree", Roles.f_TREE__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("treegrid", Roles.f_TREEGRID__org_gwtproject_aria_client_Roles_);
  Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_.put("treeitem", Roles.f_TREEITEM__org_gwtproject_aria_client_Roles_);
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Roles;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Predicate = goog.module.get('java.util.function.Predicate$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AlertRoleImpl = goog.module.get('org.gwtproject.aria.client.AlertRoleImpl$impl');
  AlertdialogRoleImpl = goog.module.get('org.gwtproject.aria.client.AlertdialogRoleImpl$impl');
  ApplicationRoleImpl = goog.module.get('org.gwtproject.aria.client.ApplicationRoleImpl$impl');
  ArticleRoleImpl = goog.module.get('org.gwtproject.aria.client.ArticleRoleImpl$impl');
  BannerRoleImpl = goog.module.get('org.gwtproject.aria.client.BannerRoleImpl$impl');
  ButtonRoleImpl = goog.module.get('org.gwtproject.aria.client.ButtonRoleImpl$impl');
  CheckboxRoleImpl = goog.module.get('org.gwtproject.aria.client.CheckboxRoleImpl$impl');
  ColumnheaderRoleImpl = goog.module.get('org.gwtproject.aria.client.ColumnheaderRoleImpl$impl');
  ComboboxRoleImpl = goog.module.get('org.gwtproject.aria.client.ComboboxRoleImpl$impl');
  ComplementaryRoleImpl = goog.module.get('org.gwtproject.aria.client.ComplementaryRoleImpl$impl');
  ContentinfoRoleImpl = goog.module.get('org.gwtproject.aria.client.ContentinfoRoleImpl$impl');
  DefinitionRoleImpl = goog.module.get('org.gwtproject.aria.client.DefinitionRoleImpl$impl');
  DialogRoleImpl = goog.module.get('org.gwtproject.aria.client.DialogRoleImpl$impl');
  DirectoryRoleImpl = goog.module.get('org.gwtproject.aria.client.DirectoryRoleImpl$impl');
  DocumentRoleImpl = goog.module.get('org.gwtproject.aria.client.DocumentRoleImpl$impl');
  FormRoleImpl = goog.module.get('org.gwtproject.aria.client.FormRoleImpl$impl');
  GridRoleImpl = goog.module.get('org.gwtproject.aria.client.GridRoleImpl$impl');
  GridcellRoleImpl = goog.module.get('org.gwtproject.aria.client.GridcellRoleImpl$impl');
  GroupRoleImpl = goog.module.get('org.gwtproject.aria.client.GroupRoleImpl$impl');
  HeadingRoleImpl = goog.module.get('org.gwtproject.aria.client.HeadingRoleImpl$impl');
  ImgRoleImpl = goog.module.get('org.gwtproject.aria.client.ImgRoleImpl$impl');
  LinkRoleImpl = goog.module.get('org.gwtproject.aria.client.LinkRoleImpl$impl');
  ListRoleImpl = goog.module.get('org.gwtproject.aria.client.ListRoleImpl$impl');
  ListboxRoleImpl = goog.module.get('org.gwtproject.aria.client.ListboxRoleImpl$impl');
  ListitemRoleImpl = goog.module.get('org.gwtproject.aria.client.ListitemRoleImpl$impl');
  LogRoleImpl = goog.module.get('org.gwtproject.aria.client.LogRoleImpl$impl');
  MainRoleImpl = goog.module.get('org.gwtproject.aria.client.MainRoleImpl$impl');
  MarqueeRoleImpl = goog.module.get('org.gwtproject.aria.client.MarqueeRoleImpl$impl');
  MathRoleImpl = goog.module.get('org.gwtproject.aria.client.MathRoleImpl$impl');
  MenuRoleImpl = goog.module.get('org.gwtproject.aria.client.MenuRoleImpl$impl');
  MenubarRoleImpl = goog.module.get('org.gwtproject.aria.client.MenubarRoleImpl$impl');
  MenuitemRoleImpl = goog.module.get('org.gwtproject.aria.client.MenuitemRoleImpl$impl');
  MenuitemcheckboxRoleImpl = goog.module.get('org.gwtproject.aria.client.MenuitemcheckboxRoleImpl$impl');
  MenuitemradioRoleImpl = goog.module.get('org.gwtproject.aria.client.MenuitemradioRoleImpl$impl');
  NavigationRoleImpl = goog.module.get('org.gwtproject.aria.client.NavigationRoleImpl$impl');
  NoteRoleImpl = goog.module.get('org.gwtproject.aria.client.NoteRoleImpl$impl');
  OptionRoleImpl = goog.module.get('org.gwtproject.aria.client.OptionRoleImpl$impl');
  PresentationRoleImpl = goog.module.get('org.gwtproject.aria.client.PresentationRoleImpl$impl');
  ProgressbarRoleImpl = goog.module.get('org.gwtproject.aria.client.ProgressbarRoleImpl$impl');
  RadioRoleImpl = goog.module.get('org.gwtproject.aria.client.RadioRoleImpl$impl');
  RadiogroupRoleImpl = goog.module.get('org.gwtproject.aria.client.RadiogroupRoleImpl$impl');
  RegionRoleImpl = goog.module.get('org.gwtproject.aria.client.RegionRoleImpl$impl');
  Role = goog.module.get('org.gwtproject.aria.client.Role$impl');
  RowRoleImpl = goog.module.get('org.gwtproject.aria.client.RowRoleImpl$impl');
  RowgroupRoleImpl = goog.module.get('org.gwtproject.aria.client.RowgroupRoleImpl$impl');
  RowheaderRoleImpl = goog.module.get('org.gwtproject.aria.client.RowheaderRoleImpl$impl');
  ScrollbarRoleImpl = goog.module.get('org.gwtproject.aria.client.ScrollbarRoleImpl$impl');
  SearchRoleImpl = goog.module.get('org.gwtproject.aria.client.SearchRoleImpl$impl');
  SeparatorRoleImpl = goog.module.get('org.gwtproject.aria.client.SeparatorRoleImpl$impl');
  SliderRoleImpl = goog.module.get('org.gwtproject.aria.client.SliderRoleImpl$impl');
  SpinbuttonRoleImpl = goog.module.get('org.gwtproject.aria.client.SpinbuttonRoleImpl$impl');
  StatusRoleImpl = goog.module.get('org.gwtproject.aria.client.StatusRoleImpl$impl');
  TabRoleImpl = goog.module.get('org.gwtproject.aria.client.TabRoleImpl$impl');
  TablistRoleImpl = goog.module.get('org.gwtproject.aria.client.TablistRoleImpl$impl');
  TabpanelRoleImpl = goog.module.get('org.gwtproject.aria.client.TabpanelRoleImpl$impl');
  TextboxRoleImpl = goog.module.get('org.gwtproject.aria.client.TextboxRoleImpl$impl');
  TimerRoleImpl = goog.module.get('org.gwtproject.aria.client.TimerRoleImpl$impl');
  ToolbarRoleImpl = goog.module.get('org.gwtproject.aria.client.ToolbarRoleImpl$impl');
  TooltipRoleImpl = goog.module.get('org.gwtproject.aria.client.TooltipRoleImpl$impl');
  TreeRoleImpl = goog.module.get('org.gwtproject.aria.client.TreeRoleImpl$impl');
  TreegridRoleImpl = goog.module.get('org.gwtproject.aria.client.TreegridRoleImpl$impl');
  TreeitemRoleImpl = goog.module.get('org.gwtproject.aria.client.TreeitemRoleImpl$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Roles, 'org.gwtproject.aria.client.Roles');

/**@type {AlertdialogRole}*/
Roles.f_ALERTDIALOG__org_gwtproject_aria_client_Roles_;
/**@type {AlertRole}*/
Roles.f_ALERT__org_gwtproject_aria_client_Roles_;
/**@type {ApplicationRole}*/
Roles.f_APPLICATION__org_gwtproject_aria_client_Roles_;
/**@type {ArticleRole}*/
Roles.f_ARTICLE__org_gwtproject_aria_client_Roles_;
/**@type {BannerRole}*/
Roles.f_BANNER__org_gwtproject_aria_client_Roles_;
/**@type {ButtonRole}*/
Roles.f_BUTTON__org_gwtproject_aria_client_Roles_;
/**@type {CheckboxRole}*/
Roles.f_CHECKBOX__org_gwtproject_aria_client_Roles_;
/**@type {ColumnheaderRole}*/
Roles.f_COLUMNHEADER__org_gwtproject_aria_client_Roles_;
/**@type {ComboboxRole}*/
Roles.f_COMBOBOX__org_gwtproject_aria_client_Roles_;
/**@type {ComplementaryRole}*/
Roles.f_COMPLEMENTARY__org_gwtproject_aria_client_Roles_;
/**@type {ContentinfoRole}*/
Roles.f_CONTENTINFO__org_gwtproject_aria_client_Roles_;
/**@type {DefinitionRole}*/
Roles.f_DEFINITION__org_gwtproject_aria_client_Roles_;
/**@type {DialogRole}*/
Roles.f_DIALOG__org_gwtproject_aria_client_Roles_;
/**@type {DirectoryRole}*/
Roles.f_DIRECTORY__org_gwtproject_aria_client_Roles_;
/**@type {DocumentRole}*/
Roles.f_DOCUMENT__org_gwtproject_aria_client_Roles_;
/**@type {FormRole}*/
Roles.f_FORM__org_gwtproject_aria_client_Roles_;
/**@type {GridcellRole}*/
Roles.f_GRIDCELL__org_gwtproject_aria_client_Roles_;
/**@type {GridRole}*/
Roles.f_GRID__org_gwtproject_aria_client_Roles_;
/**@type {GroupRole}*/
Roles.f_GROUP__org_gwtproject_aria_client_Roles_;
/**@type {HeadingRole}*/
Roles.f_HEADING__org_gwtproject_aria_client_Roles_;
/**@type {ImgRole}*/
Roles.f_IMG__org_gwtproject_aria_client_Roles_;
/**@type {LinkRole}*/
Roles.f_LINK__org_gwtproject_aria_client_Roles_;
/**@type {ListboxRole}*/
Roles.f_LISTBOX__org_gwtproject_aria_client_Roles_;
/**@type {ListitemRole}*/
Roles.f_LISTITEM__org_gwtproject_aria_client_Roles_;
/**@type {ListRole}*/
Roles.f_LIST__org_gwtproject_aria_client_Roles_;
/**@type {LogRole}*/
Roles.f_LOG__org_gwtproject_aria_client_Roles_;
/**@type {MainRole}*/
Roles.f_MAIN__org_gwtproject_aria_client_Roles_;
/**@type {MarqueeRole}*/
Roles.f_MARQUEE__org_gwtproject_aria_client_Roles_;
/**@type {MathRole}*/
Roles.f_MATH__org_gwtproject_aria_client_Roles_;
/**@type {MenubarRole}*/
Roles.f_MENUBAR__org_gwtproject_aria_client_Roles_;
/**@type {MenuitemcheckboxRole}*/
Roles.f_MENUITEMCHECKBOX__org_gwtproject_aria_client_Roles_;
/**@type {MenuitemradioRole}*/
Roles.f_MENUITEMRADIO__org_gwtproject_aria_client_Roles_;
/**@type {MenuitemRole}*/
Roles.f_MENUITEM__org_gwtproject_aria_client_Roles_;
/**@type {MenuRole}*/
Roles.f_MENU__org_gwtproject_aria_client_Roles_;
/**@type {NavigationRole}*/
Roles.f_NAVIGATION__org_gwtproject_aria_client_Roles_;
/**@type {NoteRole}*/
Roles.f_NOTE__org_gwtproject_aria_client_Roles_;
/**@type {OptionRole}*/
Roles.f_OPTION__org_gwtproject_aria_client_Roles_;
/**@type {PresentationRole}*/
Roles.f_PRESENTATION__org_gwtproject_aria_client_Roles_;
/**@type {ProgressbarRole}*/
Roles.f_PROGRESSBAR__org_gwtproject_aria_client_Roles_;
/**@type {RadiogroupRole}*/
Roles.f_RADIOGROUP__org_gwtproject_aria_client_Roles_;
/**@type {RadioRole}*/
Roles.f_RADIO__org_gwtproject_aria_client_Roles_;
/**@type {RegionRole}*/
Roles.f_REGION__org_gwtproject_aria_client_Roles_;
/**@type {RowgroupRole}*/
Roles.f_ROWGROUP__org_gwtproject_aria_client_Roles_;
/**@type {RowheaderRole}*/
Roles.f_ROWHEADER__org_gwtproject_aria_client_Roles_;
/**@type {RowRole}*/
Roles.f_ROW__org_gwtproject_aria_client_Roles_;
/**@type {ScrollbarRole}*/
Roles.f_SCROLLBAR__org_gwtproject_aria_client_Roles_;
/**@type {SearchRole}*/
Roles.f_SEARCH__org_gwtproject_aria_client_Roles_;
/**@type {SeparatorRole}*/
Roles.f_SEPARATOR__org_gwtproject_aria_client_Roles_;
/**@type {SliderRole}*/
Roles.f_SLIDER__org_gwtproject_aria_client_Roles_;
/**@type {SpinbuttonRole}*/
Roles.f_SPINBUTTON__org_gwtproject_aria_client_Roles_;
/**@type {StatusRole}*/
Roles.f_STATUS__org_gwtproject_aria_client_Roles_;
/**@type {TablistRole}*/
Roles.f_TABLIST__org_gwtproject_aria_client_Roles_;
/**@type {TabpanelRole}*/
Roles.f_TABPANEL__org_gwtproject_aria_client_Roles_;
/**@type {TabRole}*/
Roles.f_TAB__org_gwtproject_aria_client_Roles_;
/**@type {TextboxRole}*/
Roles.f_TEXTBOX__org_gwtproject_aria_client_Roles_;
/**@type {TimerRole}*/
Roles.f_TIMER__org_gwtproject_aria_client_Roles_;
/**@type {ToolbarRole}*/
Roles.f_TOOLBAR__org_gwtproject_aria_client_Roles_;
/**@type {TooltipRole}*/
Roles.f_TOOLTIP__org_gwtproject_aria_client_Roles_;
/**@type {TreegridRole}*/
Roles.f_TREEGRID__org_gwtproject_aria_client_Roles_;
/**@type {TreeitemRole}*/
Roles.f_TREEITEM__org_gwtproject_aria_client_Roles_;
/**@type {TreeRole}*/
Roles.f_TREE__org_gwtproject_aria_client_Roles_;
/**@type {Map<?string, Role>}*/
Roles.f_ROLES_MAP__org_gwtproject_aria_client_Roles_;

exports = Roles; 
//# sourceMappingURL=Roles.js.map