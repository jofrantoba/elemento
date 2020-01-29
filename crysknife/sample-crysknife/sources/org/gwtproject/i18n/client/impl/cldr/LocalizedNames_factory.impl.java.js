goog.module('org.gwtproject.i18n.client.impl.cldr.LocalizedNames_factory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DefaultLocalizedNames = goog.forwardDeclare('org.gwtproject.i18n.client.DefaultLocalizedNames$impl');
let LocalizedNames = goog.forwardDeclare('org.gwtproject.i18n.client.LocalizedNames$impl');
let LocalizedNamesImpl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');
let LocalizedNamesImpl__af = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_af$impl');
let LocalizedNamesImpl__agq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_agq$impl');
let LocalizedNamesImpl__ak = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ak$impl');
let LocalizedNamesImpl__am = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_am$impl');
let LocalizedNamesImpl__ar = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar$impl');
let LocalizedNamesImpl__ar__LY = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_LY$impl');
let LocalizedNamesImpl__ar__SA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_SA$impl');
let LocalizedNamesImpl__as = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_as$impl');
let LocalizedNamesImpl__asa = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_asa$impl');
let LocalizedNamesImpl__ast = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ast$impl');
let LocalizedNamesImpl__az = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_az$impl');
let LocalizedNamesImpl__az__Cyrl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_az_Cyrl$impl');
let LocalizedNamesImpl__bas = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bas$impl');
let LocalizedNamesImpl__be = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_be$impl');
let LocalizedNamesImpl__bem = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bem$impl');
let LocalizedNamesImpl__bez = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bez$impl');
let LocalizedNamesImpl__bg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bg$impl');
let LocalizedNamesImpl__bm = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bm$impl');
let LocalizedNamesImpl__bn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn$impl');
let LocalizedNamesImpl__bn__IN = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn_IN$impl');
let LocalizedNamesImpl__bo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo$impl');
let LocalizedNamesImpl__bo__IN = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo_IN$impl');
let LocalizedNamesImpl__br = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_br$impl');
let LocalizedNamesImpl__brx = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_brx$impl');
let LocalizedNamesImpl__bs = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bs$impl');
let LocalizedNamesImpl__bs__Cyrl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bs_Cyrl$impl');
let LocalizedNamesImpl__ca = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ca$impl');
let LocalizedNamesImpl__ccp = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ccp$impl');
let LocalizedNamesImpl__ce = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ce$impl');
let LocalizedNamesImpl__cgg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cgg$impl');
let LocalizedNamesImpl__chr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_chr$impl');
let LocalizedNamesImpl__ckb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ckb$impl');
let LocalizedNamesImpl__cs = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cs$impl');
let LocalizedNamesImpl__cu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cu$impl');
let LocalizedNamesImpl__cy = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cy$impl');
let LocalizedNamesImpl__da = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_da$impl');
let LocalizedNamesImpl__dav = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dav$impl');
let LocalizedNamesImpl__de = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de$impl');
let LocalizedNamesImpl__de__AT = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_AT$impl');
let LocalizedNamesImpl__de__CH = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_CH$impl');
let LocalizedNamesImpl__dje = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dje$impl');
let LocalizedNamesImpl__dsb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dsb$impl');
let LocalizedNamesImpl__dua = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dua$impl');
let LocalizedNamesImpl__dyo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dyo$impl');
let LocalizedNamesImpl__dz = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dz$impl');
let LocalizedNamesImpl__ebu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ebu$impl');
let LocalizedNamesImpl__ee = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ee$impl');
let LocalizedNamesImpl__el = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_el$impl');
let LocalizedNamesImpl__en = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en$impl');
let LocalizedNamesImpl__en__GB = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en_GB$impl');
let LocalizedNamesImpl__eo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_eo$impl');
let LocalizedNamesImpl__es = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es$impl');
let LocalizedNamesImpl__es__419 = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_419$impl');
let LocalizedNamesImpl__es__AR = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_AR$impl');
let LocalizedNamesImpl__es__BO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_BO$impl');
let LocalizedNamesImpl__es__CL = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CL$impl');
let LocalizedNamesImpl__es__CO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CO$impl');
let LocalizedNamesImpl__es__CR = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CR$impl');
let LocalizedNamesImpl__es__DO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_DO$impl');
let LocalizedNamesImpl__es__EC = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_EC$impl');
let LocalizedNamesImpl__es__GT = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_GT$impl');
let LocalizedNamesImpl__es__HN = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_HN$impl');
let LocalizedNamesImpl__es__MX = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_MX$impl');
let LocalizedNamesImpl__es__NI = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_NI$impl');
let LocalizedNamesImpl__es__PA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PA$impl');
let LocalizedNamesImpl__es__PE = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PE$impl');
let LocalizedNamesImpl__es__PR = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PR$impl');
let LocalizedNamesImpl__es__PY = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PY$impl');
let LocalizedNamesImpl__es__SV = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_SV$impl');
let LocalizedNamesImpl__es__US = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_US$impl');
let LocalizedNamesImpl__es__VE = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_VE$impl');
let LocalizedNamesImpl__et = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_et$impl');
let LocalizedNamesImpl__eu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_eu$impl');
let LocalizedNamesImpl__ewo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ewo$impl');
let LocalizedNamesImpl__fa = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fa$impl');
let LocalizedNamesImpl__fa__AF = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fa_AF$impl');
let LocalizedNamesImpl__ff = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ff$impl');
let LocalizedNamesImpl__fi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fi$impl');
let LocalizedNamesImpl__fil = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fil$impl');
let LocalizedNamesImpl__fo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fo$impl');
let LocalizedNamesImpl__fr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr$impl');
let LocalizedNamesImpl__fr__BE = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_BE$impl');
let LocalizedNamesImpl__fr__CA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_CA$impl');
let LocalizedNamesImpl__fur = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fur$impl');
let LocalizedNamesImpl__fy = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fy$impl');
let LocalizedNamesImpl__ga = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ga$impl');
let LocalizedNamesImpl__gd = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gd$impl');
let LocalizedNamesImpl__gl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gl$impl');
let LocalizedNamesImpl__gsw = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gsw$impl');
let LocalizedNamesImpl__gu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gu$impl');
let LocalizedNamesImpl__guz = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_guz$impl');
let LocalizedNamesImpl__gv = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gv$impl');
let LocalizedNamesImpl__ha = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ha$impl');
let LocalizedNamesImpl__haw = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_haw$impl');
let LocalizedNamesImpl__he = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_he$impl');
let LocalizedNamesImpl__hi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hi$impl');
let LocalizedNamesImpl__hr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hr$impl');
let LocalizedNamesImpl__hsb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hsb$impl');
let LocalizedNamesImpl__hu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hu$impl');
let LocalizedNamesImpl__hy = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hy$impl');
let LocalizedNamesImpl__ia = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ia$impl');
let LocalizedNamesImpl__id = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_id$impl');
let LocalizedNamesImpl__ig = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ig$impl');
let LocalizedNamesImpl__ii = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ii$impl');
let LocalizedNamesImpl__is = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_is$impl');
let LocalizedNamesImpl__it = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_it$impl');
let LocalizedNamesImpl__ja = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ja$impl');
let LocalizedNamesImpl__jgo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jgo$impl');
let LocalizedNamesImpl__jmc = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jmc$impl');
let LocalizedNamesImpl__jv = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jv$impl');
let LocalizedNamesImpl__ka = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ka$impl');
let LocalizedNamesImpl__kab = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kab$impl');
let LocalizedNamesImpl__kam = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kam$impl');
let LocalizedNamesImpl__kde = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kde$impl');
let LocalizedNamesImpl__kea = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kea$impl');
let LocalizedNamesImpl__khq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_khq$impl');
let LocalizedNamesImpl__ki = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ki$impl');
let LocalizedNamesImpl__kk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kk$impl');
let LocalizedNamesImpl__kkj = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kkj$impl');
let LocalizedNamesImpl__kl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kl$impl');
let LocalizedNamesImpl__kln = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kln$impl');
let LocalizedNamesImpl__km = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_km$impl');
let LocalizedNamesImpl__kn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kn$impl');
let LocalizedNamesImpl__ko = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko$impl');
let LocalizedNamesImpl__ko__KP = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko_KP$impl');
let LocalizedNamesImpl__kok = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kok$impl');
let LocalizedNamesImpl__ks = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ks$impl');
let LocalizedNamesImpl__ksb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksb$impl');
let LocalizedNamesImpl__ksf = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksf$impl');
let LocalizedNamesImpl__ksh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksh$impl');
let LocalizedNamesImpl__ku = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ku$impl');
let LocalizedNamesImpl__kw = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kw$impl');
let LocalizedNamesImpl__ky = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ky$impl');
let LocalizedNamesImpl__lag = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lag$impl');
let LocalizedNamesImpl__lb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lb$impl');
let LocalizedNamesImpl__lg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lg$impl');
let LocalizedNamesImpl__lkt = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lkt$impl');
let LocalizedNamesImpl__ln = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ln$impl');
let LocalizedNamesImpl__lo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lo$impl');
let LocalizedNamesImpl__lrc = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lrc$impl');
let LocalizedNamesImpl__lt = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lt$impl');
let LocalizedNamesImpl__lu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lu$impl');
let LocalizedNamesImpl__luo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_luo$impl');
let LocalizedNamesImpl__luy = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_luy$impl');
let LocalizedNamesImpl__lv = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lv$impl');
let LocalizedNamesImpl__mas = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mas$impl');
let LocalizedNamesImpl__mer = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mer$impl');
let LocalizedNamesImpl__mfe = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mfe$impl');
let LocalizedNamesImpl__mg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mg$impl');
let LocalizedNamesImpl__mgh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mgh$impl');
let LocalizedNamesImpl__mgo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mgo$impl');
let LocalizedNamesImpl__mi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mi$impl');
let LocalizedNamesImpl__mk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mk$impl');
let LocalizedNamesImpl__ml = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ml$impl');
let LocalizedNamesImpl__mn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mn$impl');
let LocalizedNamesImpl__mr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mr$impl');
let LocalizedNamesImpl__ms = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ms$impl');
let LocalizedNamesImpl__mt = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mt$impl');
let LocalizedNamesImpl__mua = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mua$impl');
let LocalizedNamesImpl__my = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_my$impl');
let LocalizedNamesImpl__mzn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mzn$impl');
let LocalizedNamesImpl__naq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_naq$impl');
let LocalizedNamesImpl__nb = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nb$impl');
let LocalizedNamesImpl__nd = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nd$impl');
let LocalizedNamesImpl__nds = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nds$impl');
let LocalizedNamesImpl__ne = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ne$impl');
let LocalizedNamesImpl__nl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl$impl');
let LocalizedNamesImpl__nl__BE = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl_BE$impl');
let LocalizedNamesImpl__nmg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nmg$impl');
let LocalizedNamesImpl__nn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nn$impl');
let LocalizedNamesImpl__nnh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nnh$impl');
let LocalizedNamesImpl__nus = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nus$impl');
let LocalizedNamesImpl__nyn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nyn$impl');
let LocalizedNamesImpl__om = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_om$impl');
let LocalizedNamesImpl__or = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_or$impl');
let LocalizedNamesImpl__os = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_os$impl');
let LocalizedNamesImpl__pa = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pa$impl');
let LocalizedNamesImpl__pa__Arab = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pa_Arab$impl');
let LocalizedNamesImpl__pl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pl$impl');
let LocalizedNamesImpl__prg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_prg$impl');
let LocalizedNamesImpl__ps = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ps$impl');
let LocalizedNamesImpl__pt = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt$impl');
let LocalizedNamesImpl__pt__AO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_AO$impl');
let LocalizedNamesImpl__pt__CH = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_CH$impl');
let LocalizedNamesImpl__pt__CV = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_CV$impl');
let LocalizedNamesImpl__pt__GQ = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_GQ$impl');
let LocalizedNamesImpl__pt__GW = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_GW$impl');
let LocalizedNamesImpl__pt__LU = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_LU$impl');
let LocalizedNamesImpl__pt__MO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_MO$impl');
let LocalizedNamesImpl__pt__MZ = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_MZ$impl');
let LocalizedNamesImpl__pt__PT = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_PT$impl');
let LocalizedNamesImpl__pt__ST = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_ST$impl');
let LocalizedNamesImpl__pt__TL = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_TL$impl');
let LocalizedNamesImpl__qu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_qu$impl');
let LocalizedNamesImpl__rm = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rm$impl');
let LocalizedNamesImpl__rn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rn$impl');
let LocalizedNamesImpl__ro = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro$impl');
let LocalizedNamesImpl__ro__MD = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro_MD$impl');
let LocalizedNamesImpl__rof = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rof$impl');
let LocalizedNamesImpl__ru = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru$impl');
let LocalizedNamesImpl__ru__UA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru_UA$impl');
let LocalizedNamesImpl__rw = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rw$impl');
let LocalizedNamesImpl__rwk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rwk$impl');
let LocalizedNamesImpl__sah = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sah$impl');
let LocalizedNamesImpl__saq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_saq$impl');
let LocalizedNamesImpl__sbp = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sbp$impl');
let LocalizedNamesImpl__sd = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sd$impl');
let LocalizedNamesImpl__se = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_se$impl');
let LocalizedNamesImpl__se__FI = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_se_FI$impl');
let LocalizedNamesImpl__seh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_seh$impl');
let LocalizedNamesImpl__ses = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ses$impl');
let LocalizedNamesImpl__sg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sg$impl');
let LocalizedNamesImpl__shi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_shi$impl');
let LocalizedNamesImpl__shi__Latn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_shi_Latn$impl');
let LocalizedNamesImpl__si = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_si$impl');
let LocalizedNamesImpl__sk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sk$impl');
let LocalizedNamesImpl__sl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sl$impl');
let LocalizedNamesImpl__smn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_smn$impl');
let LocalizedNamesImpl__sn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sn$impl');
let LocalizedNamesImpl__so = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_so$impl');
let LocalizedNamesImpl__sq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sq$impl');
let LocalizedNamesImpl__sr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr$impl');
let LocalizedNamesImpl__sr__Cyrl__BA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_BA$impl');
let LocalizedNamesImpl__sr__Cyrl__ME = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_ME$impl');
let LocalizedNamesImpl__sr__Cyrl__XK = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_XK$impl');
let LocalizedNamesImpl__sr__Latn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn$impl');
let LocalizedNamesImpl__sr__Latn__BA = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_BA$impl');
let LocalizedNamesImpl__sr__Latn__ME = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_ME$impl');
let LocalizedNamesImpl__sr__Latn__XK = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_XK$impl');
let LocalizedNamesImpl__sv = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sv$impl');
let LocalizedNamesImpl__sw = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw$impl');
let LocalizedNamesImpl__sw__CD = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw_CD$impl');
let LocalizedNamesImpl__sw__KE = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw_KE$impl');
let LocalizedNamesImpl__ta = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ta$impl');
let LocalizedNamesImpl__te = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_te$impl');
let LocalizedNamesImpl__teo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_teo$impl');
let LocalizedNamesImpl__tg = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tg$impl');
let LocalizedNamesImpl__th = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_th$impl');
let LocalizedNamesImpl__ti = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ti$impl');
let LocalizedNamesImpl__tk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tk$impl');
let LocalizedNamesImpl__to = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_to$impl');
let LocalizedNamesImpl__tr = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tr$impl');
let LocalizedNamesImpl__tt = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tt$impl');
let LocalizedNamesImpl__twq = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_twq$impl');
let LocalizedNamesImpl__tzm = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tzm$impl');
let LocalizedNamesImpl__ug = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ug$impl');
let LocalizedNamesImpl__uk = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uk$impl');
let LocalizedNamesImpl__ur = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ur$impl');
let LocalizedNamesImpl__ur__IN = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ur_IN$impl');
let LocalizedNamesImpl__uz = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz$impl');
let LocalizedNamesImpl__uz__Arab = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz_Arab$impl');
let LocalizedNamesImpl__uz__Cyrl = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz_Cyrl$impl');
let LocalizedNamesImpl__vai = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vai$impl');
let LocalizedNamesImpl__vai__Latn = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vai_Latn$impl');
let LocalizedNamesImpl__vi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vi$impl');
let LocalizedNamesImpl__vo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vo$impl');
let LocalizedNamesImpl__vun = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vun$impl');
let LocalizedNamesImpl__wae = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_wae$impl');
let LocalizedNamesImpl__wo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_wo$impl');
let LocalizedNamesImpl__xh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_xh$impl');
let LocalizedNamesImpl__xog = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_xog$impl');
let LocalizedNamesImpl__yav = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yav$impl');
let LocalizedNamesImpl__yi = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yi$impl');
let LocalizedNamesImpl__yo = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yo$impl');
let LocalizedNamesImpl__yo__BJ = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yo_BJ$impl');
let LocalizedNamesImpl__yue = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yue$impl');
let LocalizedNamesImpl__yue__Hans = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yue_Hans$impl');
let LocalizedNamesImpl__zgh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zgh$impl');
let LocalizedNamesImpl__zh = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh$impl');
let LocalizedNamesImpl__zh__Hans__HK = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hans_HK$impl');
let LocalizedNamesImpl__zh__Hant = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant$impl');
let LocalizedNamesImpl__zh__Hant__HK = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_HK$impl');
let LocalizedNamesImpl__zh__Hant__MO = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_MO$impl');
let LocalizedNamesImpl__zh__Hant__TW = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_TW$impl');
let LocalizedNamesImpl__zu = goog.forwardDeclare('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zu$impl');

class LocalizedNames__factory extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!LocalizedNames__factory}
  * @public
  */
 static $create__() {
  LocalizedNames__factory.$clinit();
  let $instance = new LocalizedNames__factory();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNames_factory__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_LocalizedNames_factory__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {LocalizedNames}
  * @public
  */
 static m_create__() {
  LocalizedNames__factory.$clinit();
  if ($Equality.$same("", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl.$create__();
  }
  if ($Equality.$same("fi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fi.$create__();
  }
  if ($Equality.$same("ksf", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ksf.$create__();
  }
  if ($Equality.$same("ks", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ks.$create__();
  }
  if ($Equality.$same("ce", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ce.$create__();
  }
  if ($Equality.$same("khq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__khq.$create__();
  }
  if ($Equality.$same("mgo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mgo.$create__();
  }
  if ($Equality.$same("nnh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nnh.$create__();
  }
  if ($Equality.$same("zh_Hant_MO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh__Hant__MO.$create__();
  }
  if ($Equality.$same("en", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__en.$create__();
  }
  if ($Equality.$same("sg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sg.$create__();
  }
  if ($Equality.$same("my", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__my.$create__();
  }
  if ($Equality.$same("cu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__cu.$create__();
  }
  if ($Equality.$same("or", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__or.$create__();
  }
  if ($Equality.$same("hr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__hr.$create__();
  }
  if ($Equality.$same("uz", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__uz.$create__();
  }
  if ($Equality.$same("ccp", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ccp.$create__();
  }
  if ($Equality.$same("fy", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fy.$create__();
  }
  if ($Equality.$same("fa_AF", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fa__AF.$create__();
  }
  if ($Equality.$same("tr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__tr.$create__();
  }
  if ($Equality.$same("es_419", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__419.$create__();
  }
  if ($Equality.$same("es_CO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__CO.$create__();
  }
  if ($Equality.$same("sq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sq.$create__();
  }
  if ($Equality.$same("ln", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ln.$create__();
  }
  if ($Equality.$same("te", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__te.$create__();
  }
  if ($Equality.$same("ff", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ff.$create__();
  }
  if ($Equality.$same("sw", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sw.$create__();
  }
  if ($Equality.$same("ar_LY", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ar__LY.$create__();
  }
  if ($Equality.$same("es_DO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__DO.$create__();
  }
  if ($Equality.$same("sbp", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sbp.$create__();
  }
  if ($Equality.$same("ps", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ps.$create__();
  }
  if ($Equality.$same("to", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__to.$create__();
  }
  if ($Equality.$same("lag", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lag.$create__();
  }
  if ($Equality.$same("guz", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__guz.$create__();
  }
  if ($Equality.$same("es_MX", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__MX.$create__();
  }
  if ($Equality.$same("dz", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dz.$create__();
  }
  if ($Equality.$same("es_SV", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__SV.$create__();
  }
  if ($Equality.$same("sw_KE", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sw__KE.$create__();
  }
  if ($Equality.$same("sd", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sd.$create__();
  }
  if ($Equality.$same("luo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__luo.$create__();
  }
  if ($Equality.$same("ko_KP", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ko__KP.$create__();
  }
  if ($Equality.$same("mr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mr.$create__();
  }
  if ($Equality.$same("gsw", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__gsw.$create__();
  }
  if ($Equality.$same("tzm", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__tzm.$create__();
  }
  if ($Equality.$same("eu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__eu.$create__();
  }
  if ($Equality.$same("th", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__th.$create__();
  }
  if ($Equality.$same("pt_GW", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__GW.$create__();
  }
  if ($Equality.$same("ja", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ja.$create__();
  }
  if ($Equality.$same("sn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sn.$create__();
  }
  if ($Equality.$same("luy", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__luy.$create__();
  }
  if ($Equality.$same("dsb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dsb.$create__();
  }
  if ($Equality.$same("it", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__it.$create__();
  }
  if ($Equality.$same("yi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yi.$create__();
  }
  if ($Equality.$same("nmg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nmg.$create__();
  }
  if ($Equality.$same("sah", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sah.$create__();
  }
  if ($Equality.$same("hy", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__hy.$create__();
  }
  if ($Equality.$same("ar", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ar.$create__();
  }
  if ($Equality.$same("ar_SA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ar__SA.$create__();
  }
  if ($Equality.$same("es_BO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__BO.$create__();
  }
  if ($Equality.$same("mgh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mgh.$create__();
  }
  if ($Equality.$same("he", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__he.$create__();
  }
  if ($Equality.$same("naq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__naq.$create__();
  }
  if ($Equality.$same("zgh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zgh.$create__();
  }
  if ($Equality.$same("bg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bg.$create__();
  }
  if ($Equality.$same("de_CH", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__de__CH.$create__();
  }
  if ($Equality.$same("ki", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ki.$create__();
  }
  if ($Equality.$same("dua", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dua.$create__();
  }
  if ($Equality.$same("pt_LU", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__LU.$create__();
  }
  if ($Equality.$same("uz_Arab", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__uz__Arab.$create__();
  }
  if ($Equality.$same("vo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__vo.$create__();
  }
  if ($Equality.$same("ig", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ig.$create__();
  }
  if ($Equality.$same("dje", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dje.$create__();
  }
  if ($Equality.$same("sk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sk.$create__();
  }
  if ($Equality.$same("vai_Latn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__vai__Latn.$create__();
  }
  if ($Equality.$same("sr_Latn_ME", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Latn__ME.$create__();
  }
  if ($Equality.$same("mzn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mzn.$create__();
  }
  if ($Equality.$same("kok", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kok.$create__();
  }
  if ($Equality.$same("ia", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ia.$create__();
  }
  if ($Equality.$same("wo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__wo.$create__();
  }
  if ($Equality.$same("es_CL", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__CL.$create__();
  }
  if ($Equality.$same("fr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fr.$create__();
  }
  if ($Equality.$same("ko", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ko.$create__();
  }
  if ($Equality.$same("mas", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mas.$create__();
  }
  if ($Equality.$same("ksb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ksb.$create__();
  }
  if ($Equality.$same("mfe", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mfe.$create__();
  }
  if ($Equality.$same("nyn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nyn.$create__();
  }
  if ($Equality.$same("ti", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ti.$create__();
  }
  if ($Equality.$same("gu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__gu.$create__();
  }
  if ($Equality.$same("yav", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yav.$create__();
  }
  if ($Equality.$same("am", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__am.$create__();
  }
  if ($Equality.$same("id", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__id.$create__();
  }
  if ($Equality.$same("ru", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ru.$create__();
  }
  if ($Equality.$same("az", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__az.$create__();
  }
  if ($Equality.$same("bas", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bas.$create__();
  }
  if ($Equality.$same("kl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kl.$create__();
  }
  if ($Equality.$same("bn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bn.$create__();
  }
  if ($Equality.$same("de_AT", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__de__AT.$create__();
  }
  if ($Equality.$same("mua", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mua.$create__();
  }
  if ($Equality.$same("ku", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ku.$create__();
  }
  if ($Equality.$same("ms", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ms.$create__();
  }
  if ($Equality.$same("pa", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pa.$create__();
  }
  if ($Equality.$same("nd", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nd.$create__();
  }
  if ($Equality.$same("ro", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ro.$create__();
  }
  if ($Equality.$same("uk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__uk.$create__();
  }
  if ($Equality.$same("ga", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ga.$create__();
  }
  if ($Equality.$same("fo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fo.$create__();
  }
  if ($Equality.$same("lg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lg.$create__();
  }
  if ($Equality.$same("ug", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ug.$create__();
  }
  if ($Equality.$same("ky", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ky.$create__();
  }
  if ($Equality.$same("brx", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__brx.$create__();
  }
  if ($Equality.$same("vi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__vi.$create__();
  }
  if ($Equality.$same("bez", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bez.$create__();
  }
  if ($Equality.$same("mi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mi.$create__();
  }
  if ($Equality.$same("hi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__hi.$create__();
  }
  if ($Equality.$same("ebu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ebu.$create__();
  }
  if ($Equality.$same("kkj", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kkj.$create__();
  }
  if ($Equality.$same("pt_MO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__MO.$create__();
  }
  if ($Equality.$same("pt_GQ", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__GQ.$create__();
  }
  if ($Equality.$same("as", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__as.$create__();
  }
  if ($Equality.$same("saq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__saq.$create__();
  }
  if ($Equality.$same("yo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yo.$create__();
  }
  if ($Equality.$same("af", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__af.$create__();
  }
  if ($Equality.$same("lt", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lt.$create__();
  }
  if ($Equality.$same("nn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nn.$create__();
  }
  if ($Equality.$same("az_Cyrl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__az__Cyrl.$create__();
  }
  if ($Equality.$same("os", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__os.$create__();
  }
  if ($Equality.$same("seh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__seh.$create__();
  }
  if ($Equality.$same("de", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__de.$create__();
  }
  if ($Equality.$same("sr_Cyrl_ME", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Cyrl__ME.$create__();
  }
  if ($Equality.$same("pt_MZ", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__MZ.$create__();
  }
  if ($Equality.$same("ml", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ml.$create__();
  }
  if ($Equality.$same("gd", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__gd.$create__();
  }
  if ($Equality.$same("et", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__et.$create__();
  }
  if ($Equality.$same("pt_CH", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__CH.$create__();
  }
  if ($Equality.$same("sw_CD", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sw__CD.$create__();
  }
  if ($Equality.$same("bem", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bem.$create__();
  }
  if ($Equality.$same("pt_CV", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__CV.$create__();
  }
  if ($Equality.$same("ur_IN", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ur__IN.$create__();
  }
  if ($Equality.$same("mt", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mt.$create__();
  }
  if ($Equality.$same("asa", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__asa.$create__();
  }
  if ($Equality.$same("teo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__teo.$create__();
  }
  if ($Equality.$same("om", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__om.$create__();
  }
  if ($Equality.$same("mg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mg.$create__();
  }
  if ($Equality.$same("vai", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__vai.$create__();
  }
  if ($Equality.$same("bo_IN", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bo__IN.$create__();
  }
  if ($Equality.$same("zh_Hant_TW", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh__Hant__TW.$create__();
  }
  if ($Equality.$same("se_FI", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__se__FI.$create__();
  }
  if ($Equality.$same("haw", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__haw.$create__();
  }
  if ($Equality.$same("chr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__chr.$create__();
  }
  if ($Equality.$same("es_HN", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__HN.$create__();
  }
  if ($Equality.$same("cgg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__cgg.$create__();
  }
  if ($Equality.$same("bo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bo.$create__();
  }
  if ($Equality.$same("kk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kk.$create__();
  }
  if ($Equality.$same("nl_BE", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nl__BE.$create__();
  }
  if ($Equality.$same("es_AR", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__AR.$create__();
  }
  if ($Equality.$same("gl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__gl.$create__();
  }
  if ($Equality.$same("es", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es.$create__();
  }
  if ($Equality.$same("sr_Cyrl_XK", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Cyrl__XK.$create__();
  }
  if ($Equality.$same("sl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sl.$create__();
  }
  if ($Equality.$same("nds", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nds.$create__();
  }
  if ($Equality.$same("rwk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__rwk.$create__();
  }
  if ($Equality.$same("br", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__br.$create__();
  }
  if ($Equality.$same("tt", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__tt.$create__();
  }
  if ($Equality.$same("zh_Hant", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh__Hant.$create__();
  }
  if ($Equality.$same("be", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__be.$create__();
  }
  if ($Equality.$same("si", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__si.$create__();
  }
  if ($Equality.$same("fa", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fa.$create__();
  }
  if ($Equality.$same("yue_Hans", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yue__Hans.$create__();
  }
  if ($Equality.$same("lv", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lv.$create__();
  }
  if ($Equality.$same("nus", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nus.$create__();
  }
  if ($Equality.$same("ewo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ewo.$create__();
  }
  if ($Equality.$same("nb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nb.$create__();
  }
  if ($Equality.$same("ksh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ksh.$create__();
  }
  if ($Equality.$same("es_EC", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__EC.$create__();
  }
  if ($Equality.$same("ast", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ast.$create__();
  }
  if ($Equality.$same("da", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__da.$create__();
  }
  if ($Equality.$same("ses", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ses.$create__();
  }
  if ($Equality.$same("dyo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dyo.$create__();
  }
  if ($Equality.$same("pt_PT", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__PT.$create__();
  }
  if ($Equality.$same("zu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zu.$create__();
  }
  if ($Equality.$same("zh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh.$create__();
  }
  if ($Equality.$same("sr_Latn_BA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Latn__BA.$create__();
  }
  if ($Equality.$same("twq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__twq.$create__();
  }
  if ($Equality.$same("sr_Cyrl_BA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Cyrl__BA.$create__();
  }
  if ($Equality.$same("lrc", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lrc.$create__();
  }
  if ($Equality.$same("cs", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__cs.$create__();
  }
  if ($Equality.$same("kln", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kln.$create__();
  }
  if ($Equality.$same("kam", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kam.$create__();
  }
  if ($Equality.$same("pt_AO", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__AO.$create__();
  }
  if ($Equality.$same("ne", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ne.$create__();
  }
  if ($Equality.$same("en_GB", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__en__GB.$create__();
  }
  if ($Equality.$same("agq", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__agq.$create__();
  }
  if ($Equality.$same("rn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__rn.$create__();
  }
  if ($Equality.$same("es_PA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__PA.$create__();
  }
  if ($Equality.$same("ka", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ka.$create__();
  }
  if ($Equality.$same("sr_Latn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Latn.$create__();
  }
  if ($Equality.$same("bs_Cyrl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bs__Cyrl.$create__();
  }
  if ($Equality.$same("kn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kn.$create__();
  }
  if ($Equality.$same("es_US", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__US.$create__();
  }
  if ($Equality.$same("pt_ST", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__ST.$create__();
  }
  if ($Equality.$same("fr_CA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fr__CA.$create__();
  }
  if ($Equality.$same("ur", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ur.$create__();
  }
  if ($Equality.$same("kea", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kea.$create__();
  }
  if ($Equality.$same("hsb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__hsb.$create__();
  }
  if ($Equality.$same("ro_MD", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ro__MD.$create__();
  }
  if ($Equality.$same("jv", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__jv.$create__();
  }
  if ($Equality.$same("kw", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kw.$create__();
  }
  if ($Equality.$same("smn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__smn.$create__();
  }
  if ($Equality.$same("ii", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ii.$create__();
  }
  if ($Equality.$same("pt", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt.$create__();
  }
  if ($Equality.$same("mer", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mer.$create__();
  }
  if ($Equality.$same("zh_Hant_HK", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh__Hant__HK.$create__();
  }
  if ($Equality.$same("sr_Latn_XK", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr__Latn__XK.$create__();
  }
  if ($Equality.$same("ru_UA", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ru__UA.$create__();
  }
  if ($Equality.$same("pl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pl.$create__();
  }
  if ($Equality.$same("bs", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bs.$create__();
  }
  if ($Equality.$same("kab", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kab.$create__();
  }
  if ($Equality.$same("yue", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yue.$create__();
  }
  if ($Equality.$same("lu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lu.$create__();
  }
  if ($Equality.$same("ak", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ak.$create__();
  }
  if ($Equality.$same("tk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__tk.$create__();
  }
  if ($Equality.$same("fr_BE", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fr__BE.$create__();
  }
  if ($Equality.$same("xog", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__xog.$create__();
  }
  if ($Equality.$same("es_VE", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__VE.$create__();
  }
  if ($Equality.$same("rm", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__rm.$create__();
  }
  if ($Equality.$same("dav", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__dav.$create__();
  }
  if ($Equality.$same("mk", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mk.$create__();
  }
  if ($Equality.$same("jgo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__jgo.$create__();
  }
  if ($Equality.$same("es_NI", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__NI.$create__();
  }
  if ($Equality.$same("ta", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ta.$create__();
  }
  if ($Equality.$same("cy", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__cy.$create__();
  }
  if ($Equality.$same("pt_TL", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pt__TL.$create__();
  }
  if ($Equality.$same("es_PR", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__PR.$create__();
  }
  if ($Equality.$same("shi", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__shi.$create__();
  }
  if ($Equality.$same("ca", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ca.$create__();
  }
  if ($Equality.$same("lkt", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lkt.$create__();
  }
  if ($Equality.$same("es_GT", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__GT.$create__();
  }
  if ($Equality.$same("sr", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sr.$create__();
  }
  if ($Equality.$same("es_PY", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__PY.$create__();
  }
  if ($Equality.$same("yo_BJ", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__yo__BJ.$create__();
  }
  if ($Equality.$same("gv", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__gv.$create__();
  }
  if ($Equality.$same("mn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__mn.$create__();
  }
  if ($Equality.$same("sv", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__sv.$create__();
  }
  if ($Equality.$same("lo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lo.$create__();
  }
  if ($Equality.$same("hu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__hu.$create__();
  }
  if ($Equality.$same("is", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__is.$create__();
  }
  if ($Equality.$same("bm", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bm.$create__();
  }
  if ($Equality.$same("el", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__el.$create__();
  }
  if ($Equality.$same("shi_Latn", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__shi__Latn.$create__();
  }
  if ($Equality.$same("nl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__nl.$create__();
  }
  if ($Equality.$same("rof", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__rof.$create__();
  }
  if ($Equality.$same("wae", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__wae.$create__();
  }
  if ($Equality.$same("zh_Hans_HK", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__zh__Hans__HK.$create__();
  }
  if ($Equality.$same("uz_Cyrl", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__uz__Cyrl.$create__();
  }
  if ($Equality.$same("se", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__se.$create__();
  }
  if ($Equality.$same("qu", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__qu.$create__();
  }
  if ($Equality.$same("fur", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fur.$create__();
  }
  if ($Equality.$same("km", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__km.$create__();
  }
  if ($Equality.$same("ee", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ee.$create__();
  }
  if ($Equality.$same("kde", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__kde.$create__();
  }
  if ($Equality.$same("bn_IN", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__bn__IN.$create__();
  }
  if ($Equality.$same("pa_Arab", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__pa__Arab.$create__();
  }
  if ($Equality.$same("xh", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__xh.$create__();
  }
  if ($Equality.$same("es_CR", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__CR.$create__();
  }
  if ($Equality.$same("fil", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__fil.$create__();
  }
  if ($Equality.$same("so", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__so.$create__();
  }
  if ($Equality.$same("tg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__tg.$create__();
  }
  if ($Equality.$same("prg", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__prg.$create__();
  }
  if ($Equality.$same("rw", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__rw.$create__();
  }
  if ($Equality.$same("lb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__lb.$create__();
  }
  if ($Equality.$same("vun", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__vun.$create__();
  }
  if ($Equality.$same("es_PE", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__es__PE.$create__();
  }
  if ($Equality.$same("eo", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__eo.$create__();
  }
  if ($Equality.$same("jmc", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__jmc.$create__();
  }
  if ($Equality.$same("ckb", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ckb.$create__();
  }
  if ($Equality.$same("ha", $Util.$getDefine("locale"))) {
   return LocalizedNamesImpl__ha.$create__();
  }
  return DefaultLocalizedNames.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  LocalizedNames__factory.$clinit = () =>{};
  LocalizedNames__factory.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LocalizedNames__factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DefaultLocalizedNames = goog.module.get('org.gwtproject.i18n.client.DefaultLocalizedNames$impl');
  LocalizedNamesImpl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl$impl');
  LocalizedNamesImpl__af = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_af$impl');
  LocalizedNamesImpl__agq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_agq$impl');
  LocalizedNamesImpl__ak = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ak$impl');
  LocalizedNamesImpl__am = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_am$impl');
  LocalizedNamesImpl__ar = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar$impl');
  LocalizedNamesImpl__ar__LY = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_LY$impl');
  LocalizedNamesImpl__ar__SA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ar_SA$impl');
  LocalizedNamesImpl__as = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_as$impl');
  LocalizedNamesImpl__asa = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_asa$impl');
  LocalizedNamesImpl__ast = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ast$impl');
  LocalizedNamesImpl__az = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_az$impl');
  LocalizedNamesImpl__az__Cyrl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_az_Cyrl$impl');
  LocalizedNamesImpl__bas = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bas$impl');
  LocalizedNamesImpl__be = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_be$impl');
  LocalizedNamesImpl__bem = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bem$impl');
  LocalizedNamesImpl__bez = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bez$impl');
  LocalizedNamesImpl__bg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bg$impl');
  LocalizedNamesImpl__bm = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bm$impl');
  LocalizedNamesImpl__bn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn$impl');
  LocalizedNamesImpl__bn__IN = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bn_IN$impl');
  LocalizedNamesImpl__bo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo$impl');
  LocalizedNamesImpl__bo__IN = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bo_IN$impl');
  LocalizedNamesImpl__br = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_br$impl');
  LocalizedNamesImpl__brx = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_brx$impl');
  LocalizedNamesImpl__bs = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bs$impl');
  LocalizedNamesImpl__bs__Cyrl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_bs_Cyrl$impl');
  LocalizedNamesImpl__ca = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ca$impl');
  LocalizedNamesImpl__ccp = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ccp$impl');
  LocalizedNamesImpl__ce = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ce$impl');
  LocalizedNamesImpl__cgg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cgg$impl');
  LocalizedNamesImpl__chr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_chr$impl');
  LocalizedNamesImpl__ckb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ckb$impl');
  LocalizedNamesImpl__cs = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cs$impl');
  LocalizedNamesImpl__cu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cu$impl');
  LocalizedNamesImpl__cy = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_cy$impl');
  LocalizedNamesImpl__da = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_da$impl');
  LocalizedNamesImpl__dav = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dav$impl');
  LocalizedNamesImpl__de = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de$impl');
  LocalizedNamesImpl__de__AT = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_AT$impl');
  LocalizedNamesImpl__de__CH = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_de_CH$impl');
  LocalizedNamesImpl__dje = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dje$impl');
  LocalizedNamesImpl__dsb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dsb$impl');
  LocalizedNamesImpl__dua = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dua$impl');
  LocalizedNamesImpl__dyo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dyo$impl');
  LocalizedNamesImpl__dz = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_dz$impl');
  LocalizedNamesImpl__ebu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ebu$impl');
  LocalizedNamesImpl__ee = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ee$impl');
  LocalizedNamesImpl__el = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_el$impl');
  LocalizedNamesImpl__en = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en$impl');
  LocalizedNamesImpl__en__GB = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_en_GB$impl');
  LocalizedNamesImpl__eo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_eo$impl');
  LocalizedNamesImpl__es = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es$impl');
  LocalizedNamesImpl__es__419 = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_419$impl');
  LocalizedNamesImpl__es__AR = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_AR$impl');
  LocalizedNamesImpl__es__BO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_BO$impl');
  LocalizedNamesImpl__es__CL = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CL$impl');
  LocalizedNamesImpl__es__CO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CO$impl');
  LocalizedNamesImpl__es__CR = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_CR$impl');
  LocalizedNamesImpl__es__DO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_DO$impl');
  LocalizedNamesImpl__es__EC = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_EC$impl');
  LocalizedNamesImpl__es__GT = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_GT$impl');
  LocalizedNamesImpl__es__HN = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_HN$impl');
  LocalizedNamesImpl__es__MX = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_MX$impl');
  LocalizedNamesImpl__es__NI = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_NI$impl');
  LocalizedNamesImpl__es__PA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PA$impl');
  LocalizedNamesImpl__es__PE = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PE$impl');
  LocalizedNamesImpl__es__PR = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PR$impl');
  LocalizedNamesImpl__es__PY = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_PY$impl');
  LocalizedNamesImpl__es__SV = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_SV$impl');
  LocalizedNamesImpl__es__US = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_US$impl');
  LocalizedNamesImpl__es__VE = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_es_VE$impl');
  LocalizedNamesImpl__et = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_et$impl');
  LocalizedNamesImpl__eu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_eu$impl');
  LocalizedNamesImpl__ewo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ewo$impl');
  LocalizedNamesImpl__fa = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fa$impl');
  LocalizedNamesImpl__fa__AF = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fa_AF$impl');
  LocalizedNamesImpl__ff = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ff$impl');
  LocalizedNamesImpl__fi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fi$impl');
  LocalizedNamesImpl__fil = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fil$impl');
  LocalizedNamesImpl__fo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fo$impl');
  LocalizedNamesImpl__fr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr$impl');
  LocalizedNamesImpl__fr__BE = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_BE$impl');
  LocalizedNamesImpl__fr__CA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fr_CA$impl');
  LocalizedNamesImpl__fur = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fur$impl');
  LocalizedNamesImpl__fy = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_fy$impl');
  LocalizedNamesImpl__ga = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ga$impl');
  LocalizedNamesImpl__gd = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gd$impl');
  LocalizedNamesImpl__gl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gl$impl');
  LocalizedNamesImpl__gsw = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gsw$impl');
  LocalizedNamesImpl__gu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gu$impl');
  LocalizedNamesImpl__guz = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_guz$impl');
  LocalizedNamesImpl__gv = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_gv$impl');
  LocalizedNamesImpl__ha = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ha$impl');
  LocalizedNamesImpl__haw = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_haw$impl');
  LocalizedNamesImpl__he = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_he$impl');
  LocalizedNamesImpl__hi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hi$impl');
  LocalizedNamesImpl__hr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hr$impl');
  LocalizedNamesImpl__hsb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hsb$impl');
  LocalizedNamesImpl__hu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hu$impl');
  LocalizedNamesImpl__hy = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_hy$impl');
  LocalizedNamesImpl__ia = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ia$impl');
  LocalizedNamesImpl__id = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_id$impl');
  LocalizedNamesImpl__ig = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ig$impl');
  LocalizedNamesImpl__ii = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ii$impl');
  LocalizedNamesImpl__is = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_is$impl');
  LocalizedNamesImpl__it = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_it$impl');
  LocalizedNamesImpl__ja = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ja$impl');
  LocalizedNamesImpl__jgo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jgo$impl');
  LocalizedNamesImpl__jmc = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jmc$impl');
  LocalizedNamesImpl__jv = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_jv$impl');
  LocalizedNamesImpl__ka = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ka$impl');
  LocalizedNamesImpl__kab = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kab$impl');
  LocalizedNamesImpl__kam = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kam$impl');
  LocalizedNamesImpl__kde = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kde$impl');
  LocalizedNamesImpl__kea = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kea$impl');
  LocalizedNamesImpl__khq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_khq$impl');
  LocalizedNamesImpl__ki = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ki$impl');
  LocalizedNamesImpl__kk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kk$impl');
  LocalizedNamesImpl__kkj = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kkj$impl');
  LocalizedNamesImpl__kl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kl$impl');
  LocalizedNamesImpl__kln = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kln$impl');
  LocalizedNamesImpl__km = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_km$impl');
  LocalizedNamesImpl__kn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kn$impl');
  LocalizedNamesImpl__ko = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko$impl');
  LocalizedNamesImpl__ko__KP = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ko_KP$impl');
  LocalizedNamesImpl__kok = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kok$impl');
  LocalizedNamesImpl__ks = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ks$impl');
  LocalizedNamesImpl__ksb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksb$impl');
  LocalizedNamesImpl__ksf = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksf$impl');
  LocalizedNamesImpl__ksh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ksh$impl');
  LocalizedNamesImpl__ku = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ku$impl');
  LocalizedNamesImpl__kw = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_kw$impl');
  LocalizedNamesImpl__ky = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ky$impl');
  LocalizedNamesImpl__lag = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lag$impl');
  LocalizedNamesImpl__lb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lb$impl');
  LocalizedNamesImpl__lg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lg$impl');
  LocalizedNamesImpl__lkt = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lkt$impl');
  LocalizedNamesImpl__ln = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ln$impl');
  LocalizedNamesImpl__lo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lo$impl');
  LocalizedNamesImpl__lrc = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lrc$impl');
  LocalizedNamesImpl__lt = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lt$impl');
  LocalizedNamesImpl__lu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lu$impl');
  LocalizedNamesImpl__luo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_luo$impl');
  LocalizedNamesImpl__luy = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_luy$impl');
  LocalizedNamesImpl__lv = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_lv$impl');
  LocalizedNamesImpl__mas = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mas$impl');
  LocalizedNamesImpl__mer = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mer$impl');
  LocalizedNamesImpl__mfe = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mfe$impl');
  LocalizedNamesImpl__mg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mg$impl');
  LocalizedNamesImpl__mgh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mgh$impl');
  LocalizedNamesImpl__mgo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mgo$impl');
  LocalizedNamesImpl__mi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mi$impl');
  LocalizedNamesImpl__mk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mk$impl');
  LocalizedNamesImpl__ml = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ml$impl');
  LocalizedNamesImpl__mn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mn$impl');
  LocalizedNamesImpl__mr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mr$impl');
  LocalizedNamesImpl__ms = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ms$impl');
  LocalizedNamesImpl__mt = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mt$impl');
  LocalizedNamesImpl__mua = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mua$impl');
  LocalizedNamesImpl__my = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_my$impl');
  LocalizedNamesImpl__mzn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_mzn$impl');
  LocalizedNamesImpl__naq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_naq$impl');
  LocalizedNamesImpl__nb = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nb$impl');
  LocalizedNamesImpl__nd = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nd$impl');
  LocalizedNamesImpl__nds = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nds$impl');
  LocalizedNamesImpl__ne = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ne$impl');
  LocalizedNamesImpl__nl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl$impl');
  LocalizedNamesImpl__nl__BE = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nl_BE$impl');
  LocalizedNamesImpl__nmg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nmg$impl');
  LocalizedNamesImpl__nn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nn$impl');
  LocalizedNamesImpl__nnh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nnh$impl');
  LocalizedNamesImpl__nus = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nus$impl');
  LocalizedNamesImpl__nyn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_nyn$impl');
  LocalizedNamesImpl__om = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_om$impl');
  LocalizedNamesImpl__or = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_or$impl');
  LocalizedNamesImpl__os = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_os$impl');
  LocalizedNamesImpl__pa = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pa$impl');
  LocalizedNamesImpl__pa__Arab = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pa_Arab$impl');
  LocalizedNamesImpl__pl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pl$impl');
  LocalizedNamesImpl__prg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_prg$impl');
  LocalizedNamesImpl__ps = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ps$impl');
  LocalizedNamesImpl__pt = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt$impl');
  LocalizedNamesImpl__pt__AO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_AO$impl');
  LocalizedNamesImpl__pt__CH = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_CH$impl');
  LocalizedNamesImpl__pt__CV = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_CV$impl');
  LocalizedNamesImpl__pt__GQ = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_GQ$impl');
  LocalizedNamesImpl__pt__GW = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_GW$impl');
  LocalizedNamesImpl__pt__LU = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_LU$impl');
  LocalizedNamesImpl__pt__MO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_MO$impl');
  LocalizedNamesImpl__pt__MZ = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_MZ$impl');
  LocalizedNamesImpl__pt__PT = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_PT$impl');
  LocalizedNamesImpl__pt__ST = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_ST$impl');
  LocalizedNamesImpl__pt__TL = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_pt_TL$impl');
  LocalizedNamesImpl__qu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_qu$impl');
  LocalizedNamesImpl__rm = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rm$impl');
  LocalizedNamesImpl__rn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rn$impl');
  LocalizedNamesImpl__ro = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro$impl');
  LocalizedNamesImpl__ro__MD = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ro_MD$impl');
  LocalizedNamesImpl__rof = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rof$impl');
  LocalizedNamesImpl__ru = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru$impl');
  LocalizedNamesImpl__ru__UA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ru_UA$impl');
  LocalizedNamesImpl__rw = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rw$impl');
  LocalizedNamesImpl__rwk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_rwk$impl');
  LocalizedNamesImpl__sah = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sah$impl');
  LocalizedNamesImpl__saq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_saq$impl');
  LocalizedNamesImpl__sbp = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sbp$impl');
  LocalizedNamesImpl__sd = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sd$impl');
  LocalizedNamesImpl__se = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_se$impl');
  LocalizedNamesImpl__se__FI = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_se_FI$impl');
  LocalizedNamesImpl__seh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_seh$impl');
  LocalizedNamesImpl__ses = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ses$impl');
  LocalizedNamesImpl__sg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sg$impl');
  LocalizedNamesImpl__shi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_shi$impl');
  LocalizedNamesImpl__shi__Latn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_shi_Latn$impl');
  LocalizedNamesImpl__si = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_si$impl');
  LocalizedNamesImpl__sk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sk$impl');
  LocalizedNamesImpl__sl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sl$impl');
  LocalizedNamesImpl__smn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_smn$impl');
  LocalizedNamesImpl__sn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sn$impl');
  LocalizedNamesImpl__so = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_so$impl');
  LocalizedNamesImpl__sq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sq$impl');
  LocalizedNamesImpl__sr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr$impl');
  LocalizedNamesImpl__sr__Cyrl__BA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_BA$impl');
  LocalizedNamesImpl__sr__Cyrl__ME = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_ME$impl');
  LocalizedNamesImpl__sr__Cyrl__XK = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Cyrl_XK$impl');
  LocalizedNamesImpl__sr__Latn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn$impl');
  LocalizedNamesImpl__sr__Latn__BA = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_BA$impl');
  LocalizedNamesImpl__sr__Latn__ME = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_ME$impl');
  LocalizedNamesImpl__sr__Latn__XK = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sr_Latn_XK$impl');
  LocalizedNamesImpl__sv = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sv$impl');
  LocalizedNamesImpl__sw = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw$impl');
  LocalizedNamesImpl__sw__CD = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw_CD$impl');
  LocalizedNamesImpl__sw__KE = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_sw_KE$impl');
  LocalizedNamesImpl__ta = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ta$impl');
  LocalizedNamesImpl__te = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_te$impl');
  LocalizedNamesImpl__teo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_teo$impl');
  LocalizedNamesImpl__tg = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tg$impl');
  LocalizedNamesImpl__th = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_th$impl');
  LocalizedNamesImpl__ti = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ti$impl');
  LocalizedNamesImpl__tk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tk$impl');
  LocalizedNamesImpl__to = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_to$impl');
  LocalizedNamesImpl__tr = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tr$impl');
  LocalizedNamesImpl__tt = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tt$impl');
  LocalizedNamesImpl__twq = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_twq$impl');
  LocalizedNamesImpl__tzm = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_tzm$impl');
  LocalizedNamesImpl__ug = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ug$impl');
  LocalizedNamesImpl__uk = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uk$impl');
  LocalizedNamesImpl__ur = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ur$impl');
  LocalizedNamesImpl__ur__IN = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_ur_IN$impl');
  LocalizedNamesImpl__uz = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz$impl');
  LocalizedNamesImpl__uz__Arab = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz_Arab$impl');
  LocalizedNamesImpl__uz__Cyrl = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_uz_Cyrl$impl');
  LocalizedNamesImpl__vai = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vai$impl');
  LocalizedNamesImpl__vai__Latn = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vai_Latn$impl');
  LocalizedNamesImpl__vi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vi$impl');
  LocalizedNamesImpl__vo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vo$impl');
  LocalizedNamesImpl__vun = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_vun$impl');
  LocalizedNamesImpl__wae = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_wae$impl');
  LocalizedNamesImpl__wo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_wo$impl');
  LocalizedNamesImpl__xh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_xh$impl');
  LocalizedNamesImpl__xog = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_xog$impl');
  LocalizedNamesImpl__yav = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yav$impl');
  LocalizedNamesImpl__yi = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yi$impl');
  LocalizedNamesImpl__yo = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yo$impl');
  LocalizedNamesImpl__yo__BJ = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yo_BJ$impl');
  LocalizedNamesImpl__yue = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yue$impl');
  LocalizedNamesImpl__yue__Hans = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_yue_Hans$impl');
  LocalizedNamesImpl__zgh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zgh$impl');
  LocalizedNamesImpl__zh = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh$impl');
  LocalizedNamesImpl__zh__Hans__HK = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hans_HK$impl');
  LocalizedNamesImpl__zh__Hant = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant$impl');
  LocalizedNamesImpl__zh__Hant__HK = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_HK$impl');
  LocalizedNamesImpl__zh__Hant__MO = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_MO$impl');
  LocalizedNamesImpl__zh__Hant__TW = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zh_Hant_TW$impl');
  LocalizedNamesImpl__zu = goog.module.get('org.gwtproject.i18n.client.impl.cldr.LocalizedNamesImpl_zu$impl');
 }
 
}
$Util.$setClassMetadata(LocalizedNames__factory, 'org.gwtproject.i18n.client.impl.cldr.LocalizedNames_factory');

exports = LocalizedNames__factory; 
//# sourceMappingURL=LocalizedNames_factory.js.map