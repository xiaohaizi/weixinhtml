define("tpl/media/img.html.js",[],function(){
return'<div class="appmsgSendedItem simple_img">\n    <a class="title_wrp" href="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=large&source={source}&fileId={id}&ow={ow}" target="_blank">\n        <!-- <img class="icon" src="/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=small&source={source}&fileId={id}&ow={ow}"> -->\n        <span class="js_media_img icon cover" style="background-image:url(/cgi-bin/getimgdata?token={token}&msgid={msgid}&mode=small&source={source}&fileId={id}&ow={ow});"></span>\n        <span class="title">[图片]</span>\n    </a>\n</div>\n';
});