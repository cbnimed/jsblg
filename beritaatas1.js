//<![CDATA[
var rcp_numposts=7;
var rcp_snippet_length=150;
var rcp_info='yes';
var rcp_comment='Comments';
var rcp_disable='T?t Nh?n xét';
function recent_posts(json){var dw='';a=location.href;y=a.indexOf('?m=0');dw+='<ul>';for(var i=0;i<rcp_numposts;i++){var entry=json.feed.entry[i];var rcp_posttitle=entry.title.$t;if('content'in entry){var rcp_get_snippet=entry.content.$t}else{if('summary'in entry){var rcp_get_snippet=entry.summary.$t}else{var rcp_get_snippet="";}};rcp_get_snippet=rcp_get_snippet.replace(/<[^>]*>/g,"");if(rcp_get_snippet.length<rcp_snippet_length){var rcp_snippet=rcp_get_snippet}else{rcp_get_snippet=rcp_get_snippet.substring(0,rcp_snippet_length);var space=rcp_get_snippet.lastIndexOf(" ");rcp_snippet=rcp_get_snippet.substring(0,space)+"&#133;";};for(var j=0;j<entry.link.length;j++){if('thr$total'in entry){var rcp_commentsNum=entry.thr$total.$t+' '+rcp_comment}else{rcp_commentsNum=rcp_disable};if(entry.link[j].rel=='alternate'){var rcp_posturl=entry.link[j].href;if(y!=-1){rcp_posturl=rcp_posturl+'?m=0'}var rcp_postdate=entry.published.$t;if('media$thumbnail'in entry){var rcp_thumb=entry.media$thumbnail.url}else{rcp_thumb="http://lh3.ggpht.com/--Z8SVBQZ4X8/TdDxPVMl_sI/AAAAAAAAAAA/jhAgjCpZtRQ/no-image.png"};}};dw+='<li>';dw+='<a href="'+rcp_posturl+'"><img alt="'+rcp_posttitle+'" src="'+rcp_thumb+'"/></a>';dw+='<div><a href="'+rcp_posturl+'" rel="nofollow" title="'+rcp_snippet+'">'+rcp_posttitle+'</a></div>';if(rcp_info=='yes'){dw+='<span>'+rcp_postdate.substring(8,10)+'/'+rcp_postdate.substring(5,7)+'/'+rcp_postdate.substring(0,4)+' - '+rcp_commentsNum+'</span>';};dw+='<div style="clear:both"></div></li>';};dw+='</ul>';document.getElementById('recent-posts').innerHTML=dw;};document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results='+rcp_numposts+'&callback=recent_posts\"><\/script>');
//]]>