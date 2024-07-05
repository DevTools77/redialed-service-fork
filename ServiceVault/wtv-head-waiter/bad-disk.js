var minisrv_service_file = true;

// remove restrictions once this page is shown, since the user will be 'trapped' anyway
session_data.disableLockdown();
session_data.delete("wtv-my-disk-sucks-sucks-sucks");
session_data.baddisk = false;

//determine which customer support string to give based on manufacturer
switch (session_data.getManufacturer()) {
    case "Mitsubishi":
        var cService = "Call Mitsubishi customer service at 1-800-332-2119."
        break;
    case "Philips":
        var cService = "Call Philips customer service at 1-888-813-7069."
        break;
    case "Sony":
    case "Sony/DirecTV":
        var cService = "Call Sony customer service at 1-888-772-7669."
        break;
    case "Samsung":
        var cService = "Call Samsung customer service at 1-800-726-7864."
        break;
    case "Thomson":
    case "Thomson/DirecTV":
        var cService = "Call RCA/Thomson customer service at 1-800-722-9599."
        break;
    default:
        var cService = "Contact the manufacturer's customer service department."
}

headers = `200 OK
Content-type: text/html`;

data = `<html>
<head> 
<display switchtowebmode nooptions nostatus skipback clearback> <title>Please Call</title> 
</head> 
<body bgcolor="#191919" text="#42CC55" link="36d5ff" fontsize="large" hspace=0 vspace=0> 
<table cellspacing=0 cellpadding=0> 
<tr><td width=104 height=74 valign=middle align=center bgcolor="3B3A4D"> 
<img src="wtv-flashrom:/ROMCache/WebTVLogoJewel.gif" width=86 height=64><td width=20 valign=top align=left bgcolor="3B3A4D">
<img src="ROMCache/Spacer.gif"
width=1 height=1>
<td colspan=10 width=436 valign=middle align=left bgcolor="3B3A4D">
<font color="D6DFD0" size="+2">
<blackface>
<shadow>
<img src="ROMCache/Spacer.gif"
width=1 height=4>
<br>
Please Call
</shadow>
</blackface>
</font>
<tr>
<td colspan=12 width=560 height=10 valign=top align=left>
<img src="file://ROM/Cache/Shadow.gif" width=560 height=6>
<tr>
<td width=104 height=10 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=67 valign=top align=left>
<td width=20 valign=top align=left>
<td width=68 valign=top align=left>
<td width=20 valign=top align=left>
<tr>
<td width=104 valign=middle align=center>
<td width=20 valign=middle align=center>
<td colspan=9 width=100 height=258 valign=top align=left>
<font size=+1>
Your Internet terminal needs to be repaired
or replaced before you can connect to WebTV.
<p>${cService}
<tr><td colspan=2> 
<td colspan=99 abswidth=436 absheight=2 bgcolor=2B2B2B> <img src="wtv-flashrom:/ROMCache/Spacer.gif" width=1 height=1> <tr><td absheight=1> 
<tr><td colspan=2> 
<td colspan=99 abswidth=436 absheight=2 bgcolor=0D0D0D> <img src="wtv-flashrom:/ROMCache/Spacer.gif" width=1 height=1> <tr><td height=7> 
<tr> 
<td width=104 valign=middle align=center> <td width=20 valign=middle align=center> <td colspan=9 width=416 valign=top align=left> <table cellspacing=0 cellpadding=0> 
<tr> 
<td width=306 valign=top align=right><td width=20> <td width=112 valign=top align=right> 
<form action="client:poweroff"> <FONT COLOR="#E7CE4A" SIZE=-1><input type="Submit" value="Power Off" BORDERIMAGE="file://ROM/Borders/ButtonBorder2.bif" usestyle selected></font> 
<input type="Hidden" name="version" value=""> </form> 
</table>
</BODY>
</html>`;