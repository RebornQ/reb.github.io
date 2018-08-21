function SetCwinHeight(id) {
	document.domain='reb.mallotec.com'
    var iframeid = document.getElementById(id); //iframe id
    if (document.getElementById) {
        if (iframeid && !window.opera) {
    		console.log("iframeid:" + iframeid.contentDocument);
            if (iframeid.contentDocument && iframeid.contentDocument.body.offsetHeight) {
                iframeid.height = iframeid.contentDocument.body.offsetHeight + 50;
            } else if (iframeid.Document && iframeid.Document.body.scrollHeight) {
                frameid.height = iframeid.Document.body.scrollHeight + 50;
            }
        }
    }
}

function iFrameHeight(id) {
// 	console.log(document.getElementById(id).contentWindow);
    var ifm= document.getElementById(id);
    var subWeb = document.frames ? document.frames[id].document : ifm.contentDocument;
    console.log("subWeb:" + document.frames[id].document + "/" + ifm.contentDocument);
    if(ifm != null && subWeb != null) {
    	ifm.height = subWeb.body.scrollHeight;
    	console.log("iFrameHeight:", ifm.height);
    }
}