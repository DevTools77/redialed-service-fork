var wtvrsvc_service_file = true;

var docName = request_headers.query.docName;
var page = session_data.pagestore.loadPage(docName);
var style = request_headers.query.styleName
    .replace(/ /gi, "_")
    .replace(/'/gi, "");
page.style = style;
session_data.pagestore.editPage(page, docName);
headers = `302 Moved temporarily
wtv-expire-all: wtv-author:/block-preview
wtv-expire-all: wtv-author:/preview
wtv-expire-all: wtv-author:/show-blocks
Location: wtv-author:/show-blocks?docName=${docName}`;
