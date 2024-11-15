var IsIE = navigator.appName.indexOf("Microsoft") != -1;
var IsNetscape = !IsIE;
var IsMac = navigator.platform.indexOf("MacPPC") != -1;
var IsWin = !IsMac;
var IsNS6 = navigator.appVersion.substr(0, 1) > "4";
var IsSafari = navigator.appVersion.indexOf("Safari") != -1;


//set taskbar height for IE on Windows
//set
var scrHeight;
if(IsWin && IsIE)
	scrHeight = screen.height;
else
	scrHeight = screen.availHeight;

var flashWindow;

function rootWindow(redirectURL) 
{
	//open the flash player window, fullscreen, no chrome
	if(IsIE)
	{
		//d'oh - scrollbars=yes causes NO SCROLLBARS on IE/Win!
		//scrollbars=yes added. it may cause the student view not look right but 
		//we need the scrollbars for assessment. 
		//ales//
		flashWindow = window.open(redirectURL, "WorkSpace", "fullscreen=1,toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=1,resizable=0,top=0,left=0");
		//flashWindow = window.open(redirectURL, "WorkSpace", "fullscreen=0,toolbar=1,location=1,directories=1,status=1,menuBar=1,scrollBars=1,resizable=1");
		//d'oh - IE/Mac can't take a hint and size to full screen
		if(IsMac)
		{
			if ( (flashWindow!=null) && (typeof(flashWindow) !="undefined") && (typeof(flashWindow.location.hash)=="string") )
			{
				flashWindow.resizeTo(window.screen.width, window.screen.height);
			}
		}
	}
	else
	{
		//allow for bug in NS4x that computes height of task bar incorrectly
		var ah = IsNS6 ? window.screen.availHeight : window.screen.availHeight - 32;
		var aw = IsNS6 ? window.screen.availWidth : window.screen.availWidth - 15;
		
		if(IsSafari)
		{
			sw = window.screen.width;
			sh = window.screen.height;
			
			flashWindow = window.open(redirectURL, 'WorkSpace', 'toolbars=no,scrollbars=yes,width=' + sw + ',height=' + sh + ',screenX=0,screenY=0');
			//ales//
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'location=1,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=,innerHeight=,screenX=0,screenY=0');
		}
		else if(IsNS6)
			//ales//
			flashWindow = window.open(redirectURL, 'WorkSpace', 'toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=1,resizable=0",outerWidth=' + aw + ',outerHeight=' + ah + ',top=0, left=0,screenX=0,screenY=0');
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'toolbar=1,location=1,directories=1,status=0,menuBar=0,scrollBars=1,resizable=0",outerWidth=' + aw + ',outerHeight=' + ah + ',screenX=0,screenY=0');
		
		else
			//ales//
			flashWindow = window.open(redirectURL, 'WorkSpace', 'location=0,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=' + aw + ',innerHeight=' + ah + ',top=0, left=0,screenX=0,screenY=0');
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'location=1,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=' + aw + ',innerHeight=' + ah + ',screenX=0,screenY=0');
	}
	
	if ( (flashWindow!=null) && (typeof(flashWindow) !="undefined") && (typeof(flashWindow.location.hash)=="string") )
	{
		flashWindow.focus();
	}
	//window.blur();
}
function maxWindow(redirectURL)
{
	//open the flash player window, fullscreen, no chrome
	if(IsIE)
	{
		//d'oh - scrollbars=yes causes NO SCROLLBARS on IE/Win!
		//scrollbars=yes added. it may cause the student view not look right but 
		//we need the scrollbars for assessment. 
		//ales//
		flashWindow = window.open(redirectURL, "", "fullscreen=1,toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=1,resizable=0,top=0,left=0");
		//flashWindow = window.open(redirectURL, "WorkSpace", "fullscreen=0,toolbar=1,location=1,directories=1,status=1,menuBar=1,scrollBars=1,resizable=1");
		//d'oh - IE/Mac can't take a hint and size to full screen
		if(IsMac)
		{
			flashWindow.resizeTo(window.screen.width, window.screen.height);
		}
	}
	else
	{
		//allow for bug in NS4x that computes height of task bar incorrectly
		var ah = IsNS6 ? window.screen.availHeight : window.screen.availHeight - 32;
		var aw = IsNS6 ? window.screen.availWidth : window.screen.availWidth - 15;
		
		if(IsSafari)
		{
			sw = window.screen.width;
			sh = window.screen.height;
			
			flashWindow = window.open(redirectURL, '', 'toolbars=no,scrollbars=yes,width=' + sw + ',height=' + sh + ',screenX=0,screenY=0');
			//ales//
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'location=1,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=,innerHeight=,screenX=0,screenY=0');
		}
		else if(IsNS6)
			//ales//
			flashWindow = window.open(redirectURL, '', 'toolbar=0,location=0,directories=0,status=0,menuBar=0,scrollBars=1,resizable=0",outerWidth=' + aw + ',outerHeight=' + ah + ',top=0, left=0,screenX=0,screenY=0');
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'toolbar=1,location=1,directories=1,status=0,menuBar=0,scrollBars=1,resizable=0",outerWidth=' + aw + ',outerHeight=' + ah + ',screenX=0,screenY=0');
		
		else
			//ales//
			flashWindow = window.open(redirectURL, '', 'location=0,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=' + aw + ',innerHeight=' + ah + ',top=0, left=0,screenX=0,screenY=0');
			//flashWindow = window.open(redirectURL, 'WorkSpace', 'location=1,directories=0,status=0,menuBar=0,scrollbars=yes,innerWidth=' + aw + ',innerHeight=' + ah + ',screenX=0,screenY=0');
	}
	flashWindow.focus();
	//window.blur();
}

function old_maxWindow(URLToShow)
{
		//open the flash player window
		/*if(IsNetscape)
		{
			netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserWrite");    
		}*/

		if(IsIE)
		{
		var wState = "fullscreen,scrollbars";
		//var wState = "";
		//"fullscreen=yes,channelmode=no,directories=no,location=no,menubar=no,resizeable=no,scrollbars=no,status=no,tit//lebar=no,toolbar=no";

		
		//ales//
		var flashWindow = window.open(URLToShow, "NewWindow", wState);
		//var flashWindow = window.open(URLToShow, "NewWindow", "");
		if(flashWindow.opener == null) flashWindow.opener = self;
		
		
		
		
		//flashWindow.moveTo(0,0);
		//flashWindow.resizeTo(screen.availWidth, scrHeight);

		}
		else
		{
		//ales//
		var wState = "toolbar=no,status=no,titlebar=no,resizeable=no,directories=no,scrollbars=no,personalBar=no,alwaysRaised=yes,width=800,height=600,top=0,left=0";
                //ales//var wState = "fullscreen,scrollbars";
		//var wState = "";
		var flashWindow=window.open(URLToShow, "NewWindow", wState);
		window.opener = self;
		//if (!flashWindow.opener) flashWindow.opener = self;
		}



}

	function newWindow(url)
	{
		var helpWindow
		if (helpWindow != null){
			if(!helpWindow.closed)
				helpWindow.close()	// close it, so by opening it again it should get proper focus.
		 }
		 helpWindow = window.open(url, 'helpWin', 'resizable=no,width=760,height=460,scrollbars=yes,toolbar=no,menubar=yes')
		 helpWindow.focus()
		alert("OK");
	}

	function helpWindow(url)
	{
		var helpWindow
		if (helpWindow != null){
			if(!helpWindow.closed)
				helpWindow.close()	// close it, so by opening it again it should get proper focus.
		 }
		 helpWindow = window.open(url, 'helpWin', 'resizable=yes,width=760,height=460,scrollbars=yes,toolbar=no,menubar=yes')
		 helpWindow.focus()
	}
 
 
    
    
function Close() { NewWindow.close(); }


function openChromeWindow(url,name) 
	{
	var miniWin = window.open(url, name, 'width=800,height=450,scrollbars=yes,toolbar=yes,location=yes,status=yes,resizable=yes,menubar=yes')
	miniWin.opener = self;
	//miniWin.focus()
	}
function miniWindow(url,name) 
	{
	var miniWin = window.open(url, name, 'width=560,height=400,scrollbars=yes')
	//miniWin.opener=self;
	if (!miniWin.closed)
		{miniWin.focus();}
	}


function newWindow(url,name)
	{
	var miniWin = window.open(url, name)
	}

function reloadWindowByHREF(url)
{
parent.location.href = url;
}

