function updateaccount(){url="http://fund.bitreet.com/account/updatestatus";$.post(url,'',function(data)
{});}
function create_record(){var url=window.location.href;$.post("http://fund.bitreet.com/record/create",{description:url},function(data){});}
function headmsg_show(){$('#header_msg_madel').modal({backdrop:'static',keyboard:false});}
function jumptosite(sitestr)
{window.location.href=sitestr;}
function createselect(selectid,obj,selectedvalue){$("#"+selectid).empty();$.each(obj,function(index,val){$("<option></option>").val(index).text(val).appendTo($("#"+selectid));});$("#"+selectid).find("option[value='"+selectedvalue+"']").attr("selected",true);}
function updateselect(selectid,selectedvalue){$("#"+selectid).find("option[value='"+selectedvalue+"']").attr("selected",true);}
function getUrlParam(name)
{var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null)
return unescape(r[2]);return null;}