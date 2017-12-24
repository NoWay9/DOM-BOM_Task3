var navigatorMessageMap = {
	'mac': 'macos',
  'iphone': 'macos',
  'win': 'windows'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
  key = key.toLowerCase();
	var version = navigatorMessageMap[key];

  if (platform.indexOf(key) >= 0){
        if(key == "win")
       {var $apple = document.querySelectorAll('[data-version="macos"]')[0];
       document.body.removeChild($apple);}
       else if(key == 'mac'){
        var $wind = document.querySelectorAll('[data-version="windows"]')[0];
        document.body.removeChild($wind);}
       }
       
      
	}
