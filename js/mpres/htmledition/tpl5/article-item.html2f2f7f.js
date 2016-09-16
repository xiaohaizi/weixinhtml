define("tpl/statistics/article-item.html.js",[],function(){
return'<tr>\n    <td class="table_cell"><div class="article_title">{title}</div></td>\n    <td class="table_cell">{publish_date}</td>\n    <td class="table_cell tr">{target_user}</td>\n    <td class="table_cell tr">{int_page_read_user}</td>\n    <td class="table_cell tr">{share_user}</td>\n    <td class="table_cell">\n        <span class="table_action arrow js_fold">\n            数据概况\n            <i class="arrow arrow_up"></i>\n            <i class="arrow arrow_down"></i>\n        </span>\n        <span class="table_action js_article_item_detail link_detail">详情</span>\n    </td>\n</tr>\n<tr class="tr_chosen js_infos" style="display: none">\n    <td colspan="6">\n        <div class="row_detail">\n            <div class="read_from">\n                <div class="read_detail_title">阅读来源分布</div>\n                <div class="empty-pie js_pie" style="height: 300px; width: 400px;">\n                </div>\n                <div class="nodata js_no_data">\n                    <div class="single_no_data">暂无数据</div>\n                </div>\n            </div>\n            <div class="read_tend">\n\n                <div class="read_detail_title">阅读发展趋势</div>\n                <div class="read_panel">\n                    <div class="js_dropdown"></div>\n                </div>\n                <div style="height: 300px" class="js_chart"></div>\n            </div>\n        </div>\n        <div class="row_detail js_media_wrap">\n            <div class="media_wrap">\n                <div class="media_wrap_title">多媒体数据概况</div>\n                <div class="table_wrp with_border js_media_table"></div>\n                <div class="pagination media_pagination js_pager"></div>\n            </div>\n        </div>\n    </td>\n</tr>';
});