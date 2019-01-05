function updateaccount(){
        url = "http://fund.bitreet.com/account/updatestatus";
        $.post(url,'', function (data)
        {
        });    
    }
function create_record() {
    var url = window.location.href;
    $.post("http://fund.bitreet.com/record/create", {description: url}, function (data) {
    });
}
function headmsg_show() {
    $('#header_msg_madel').modal({backdrop: 'static', keyboard: false});
}
function jumptosite(sitestr)
{
    window.location.href = sitestr;
}
function createselect(selectid, obj, selectedvalue) {
    $("#" + selectid).empty();

    $.each(obj, function (index, val) {
        $("<option></option>")
                .val(index)
                .text(val)
                .appendTo($("#" + selectid));
    });
    $("#" + selectid).find("option[value='" + selectedvalue + "']").attr("selected", true);
}
function updateselect(selectid, selectedvalue) {
    $("#" + selectid).find("option[value='" + selectedvalue + "']").attr("selected", true);
}
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
} 