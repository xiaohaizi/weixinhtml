define("statistics/article/detail/click-report.js",["statistics/common.js"],function(_){
"use strict";
function E(){
setTimeout(function(){
t("#js_topTab li a:eq(0)",T.INTERFACE_TOP_LEFT),t("#js_topTab li a:eq(1)",T.INTERFACE_TOP_RIGHT),
e("#js_actions div.tabs a:eq(0)",T.INTERFACE_GROUP_TAB_ALL),e("#js_actions div.tabs a:eq(1)",T.INTERFACE_GROUP_TAB_DETAIL),
e("#js_actions div.tabs a:eq(2)",T.INTERFACE_GROUP_TAB_COMPARE),e("#js_date_container span.date_title",T.INTERFACE_GROUP_ALL_FILTER_DATE),
e("#js_sort_key a",T.INTERFACE_GROUP_ALL_FILTER_SORT_TYPE),e("#js_sort_type a",T.INTERFACE_GROUP_ALL_FILTER_SORT_DIR),
e("#js_search_title a",T.INTERFACE_GROUP_ALL_FILTER_SEARCH),t("a.js_article_item_compare",T.INTERFACE_GROUP_ALL_ITEM_LINK_COMPARE),
t("a.js_article_item_detail",T.INTERFACE_GROUP_ALL_ITEM_LINK_DETAIL),e("#js_detail_tabbar div.tabs a:eq(0)",T.INTERFACE_GROUP_DETAIL_TAB_INT),
e("#js_detail_tabbar div.tabs a:eq(1)",T.INTERFACE_GROUP_DETAIL_TAB_ORI),e("#js_detail_tabbar div.tabs a:eq(2)",T.INTERFACE_GROUP_DETAIL_TAB_SHARE),
e("#js_detail_tabbar div.tabs a:eq(3)",T.INTERFACE_GROUP_DETAIL_TAB_FAV),t("#js_provinces th.rank",T.INTERFACE_GROUP_DETAIL_PROVINCE_SORT),
t("#js_detail_table_content th.rank_area:eq(1)",T.INTERFACE_GROUP_DETAIL_TABLE_INT_USER),
t("#js_detail_table_content th.rank_area:eq(2)",T.INTERFACE_GROUP_DETAIL_TABLE_INT_COUNT),
t("#js_detail_table_content th.rank_area:eq(3)",T.INTERFACE_GROUP_DETAIL_TABLE_ORI_USER),
t("#js_detail_table_content th.rank_area:eq(4)",T.INTERFACE_GROUP_DETAIL_TABLE_ORI_COUNT),
t("#js_detail_table_content th.rank_area:eq(5)",T.INTERFACE_GROUP_DETAIL_TABLE_SHARE_USER),
t("#js_detail_table_content th.rank_area:eq(6)",T.INTERFACE_GROUP_DETAIL_TABLE_SHARE_COUNT),
t("#js_detail_table_content th.rank_area:eq(0)",T.INTERFACE_GROUP_DETAIL_TABLE_FAV_USER);
},2);
}
var a=_("statistics/common.js"),t=a.delegateClickReport,e=a.directClickReport,T=a.reportKeys;
return{
init:E,
pager:function(){
e("#js_province_pager a.page_prev",T.INTERFACE_GROUP_DETAIL_PROVINCE_PREV),e("#js_province_pager a.page_next",T.INTERFACE_GROUP_DETAIL_PROVINCE_NEXT),
e("#js_province_pager a.page_go",T.INTERFACE_GROUP_DETAIL_PROVINCE_JUMP);
}
};
});