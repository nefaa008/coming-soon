'use strict';
var app = angular.module('app', ['pascalprecht.translate']);


app.run(['$rootScope', function($rootScope) {
  $rootScope.lang = 'en';

  $rootScope.default_float = 'left';
  $rootScope.opposite_float = 'right';

  $rootScope.default_direction = 'ltr';
  $rootScope.opposite_direction = 'rtl';
}]);

app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('en', {
		'HI': 'HI, I\'m',
		'PLACEHOLDERNAME': 'First name',
		'SEND': ', send me an',
		'AT': 'at',
		'LAUNCH': 'when you launch.',
		'UPDATE': 'Update me',
		'REQUIRED': 'Required field',
		'SELECTMAIL': 'e-mail',
		'SELECTSMS': 'SMS',
		'PLACEHOLDERMAIL': '@e-mail',
		'PLACEHOLDERSMS': '+Number phone',
		'HELLOPRO' :'HELLO PROFESSIONAL',
		'HELLOWORLD':'HELLO WORLD...',
		'SOON':'coming soon',
		'keepin':'---------- Keep in touch ------------',
	    'copyright':'Copyright © e-electricity 2017, All right reserved',


		});
	$translateProvider.translations('fr', {
		'HI': 'Je suis',
		'PLACEHOLDERNAME': 'Nom et prénom',
		'SEND': ',envoyez-moi un',
		'AT': 'à',
		'LAUNCH': 'au lancement de la plateforme.',
		'UPDATE': 'Je valide',
		'REQUIRED': 'Champ obligatoire',
		'SELECTMAIL': 'e-mail',
		'SELECTSMS': 'Sms',
		'PLACEHOLDERMAIL': '@adresse mail',
		'PLACEHOLDERSMS': 'GSMS',
		'HELLOPRO' :'BIENVENUE',
		'HELLOWORLD':'Notre site sera bientôt en ligne',
		'SOON':'',
		'keepin':'---------- Keep in touch ------------',
	    'copyright':'Copyright © e-electricity 2017, All right reserved',

		


	});
	
		$translateProvider.translations('ar', {
		'HI': 'مـرحـبـا، إسـمـي',
		'PLACEHOLDERNAME': 'الإســم الأول',
		'SEND': 'أرسـلـوا لــي ،',
		'AT': 'عــلــى ',
		'LAUNCH': 'عــنــد تـفـعـيـل الـبـوابــة.',
		'UPDATE': 'أبـقـنـي عـلـى إطـلاع',
		'REQUIRED': 'خـانـة ضـروريـة',
		'SELECTMAIL': 'إيـميـل',
		'SELECTSMS': 'رسـالـة نـصـية',
		'PLACEHOLDERMAIL': 'الـبـريـد الإلـكـتـرونـي',
		'PLACEHOLDERSMS': 'رقم الهـاتف',
		'HELLOPRO' :' ...مرحبا جميعا',
		'SOON':'',
		'HELLOWORLD':'تــرقـبـوا مـوقـعـنـا عــلــى الأنـتـرنـت...قريبا',
		'keepin':'---------- Keep in touch ------------',
	    'copyright':'Copyright © e-electricity 2017, All right reserved',


	});


	$translateProvider.preferredLanguage('en');
	$translateProvider.useMissingTranslationHandlerLog()
	}]);

//	$scope.changeLanguage = function (key) {
	//	$translate.use(key);
	//	};
	//	});



app.controller('Ctrl', ['$scope', '$rootScope', '$translate',
  function($scope, $rootScope, $translate) {
    $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };

    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      var language = data.language;

      $rootScope.lang = language;

      $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
      $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';
      

      $rootScope.default_float = language === 'ar' ? 'right' : 'left';
      $rootScope.opposite_float = language === 'ar' ? 'left' : 'right';
    });
}]);

