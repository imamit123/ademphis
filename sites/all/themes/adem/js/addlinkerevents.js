/****************************************************
     Author: Brian J Clifton
     Url: http://www.advanced-web-metrics.com/scripts
     This script is free to use as long as this info is left in
     
     Combined script for tracking external links, file downloads and mailto links
     
     All scripts presented have been tested and validated by the author and are believed to be correct
     as of the date of publication or posting. The Google Analytics software on which they depend is 
     subject to change, however; and therefore no warranty is expressed or implied that they will
     work as described in the future. Always check the most current Google Analytics documentation.

     Thanks to Nick Mikailovski (Google) for intitial discussions & Holger Tempel from webalytics.de
     for pointing out the original flaw of doing this in IE.

****************************************************/
// Only links written to the page (already in the DOM) will be tagged
// This version is for ga.js (last updated Jan 15th 2009)
// Updated for async and various javascript checks by Rehan Asif of E-Nor on January 19, 2011.


function addLinkerEvents() {
	var as = document.getElementsByTagName("a");
	var extDoc = [".pdf"];

	// List of local sites that should not be treated as an outbound link. Include at least your own domain here
	if (location.hostname.indexOf("sugarcrm.com") > -1) {
		var extTrack = ["sugarcrm.com"];
		}
	else if (location.hostname.indexOf("sugarexchange.com") > -1) {
		var extTrack = ["sugarexchange.com"];
		}
	else if (location.hostname.indexOf("sugarforge.org") > -1) {
		var extTrack = ["sugarforge.org"];
		}
	else {
		var extTrack = ["sugarcrm.com", "sugarexchange.com", "sugarforge.org"];
		}

	
	/*If you edit no further below this line, Top Content will report as follows:
		/vp/ext/url-of-external-site
	*/
	
	for(var i=0; i<as.length; i++) {
		var flag = 0;
		var tmp = as[i].getAttribute("onclick");

		// IE6-IE7 fix (null values error) with thanks to Julien Bissonnette for this
		if (tmp != null) {
			tmp = String(tmp);
			if (tmp.indexOf('_gaq.push') > -1) 
				continue;
		}

		// Tracking outbound links off site - not the GATC
		for (var j=0; j<extTrack.length; j++) {	
			if (as[i].href.indexOf(extTrack[j]) == -1 && as[i].href.indexOf('google-analytics.com') == -1 ) {
				flag++;
			}
		}
		
		if (flag == extTrack.length && as[i].href.indexOf("mailto:") == -1 && as[i].onclick == undefined && as[i].href.indexOf('javascript') == -1){
			as[i].onclick = function(){ var splitResult = this.href.split("//");_gaq.push(['_trackPageview', '/vp/ext/' +splitResult[1]]) + ";" +((tmp != undefined) ? tmp+";" : "");};
				//alert(as[i] +"  ext/" +splitResult[1])
		}
		
		// Tracking electronic documents
		for (var j=0; j<extDoc.length; j++) {
			if (as[i].href.indexOf(extTrack[0]) != -1 && as[i].href.indexOf(extDoc[j]) != -1 && as[i].onclick == undefined && as[i].href.indexOf('javascript') == -1) {
				as[i].onclick = function(){ var splitResult = this.href.split(extTrack[0]);_gaq.push(['_trackEvent', 'PDF', this.href, window.location.href, , false]) + ";" +((tmp != undefined) ? tmp+";" : "");}
				break;
			}
		}
	}
}