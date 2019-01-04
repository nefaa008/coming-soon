function HeightBackground(){
	height = $(window).height();
	$("#cover").css({
		'height': height
	})
}
function ShrinkNavbar(){
	$window = $(window);
	$window.scroll(function(){
		if($window.scrollTop() > 50){
			$("#navbar").removeClass('full');
			$("#navbar").addClass('shrink');
		}else{
			$("#navbar").removeClass('shrink');
			$("#navbar").addClass('full');
		}
	})
}


$(document).ready(function(){
	HeightBackground();
	$(window).resize(function(){
		HeightBackground();
	})

})


function setchange() {

					     var placeholderText = {"e-mail":"@e-mail","SMS":"+Mobile phone", "e-mail":"@adresse mail","Sms":"+Numéro GSM", "إيـميـل" :"الـبـريـد الإلـكـتـرونـي","رسـالـة نـصـية" :"رقم الهـاتف"};	

					     var vat = document.getElementById("mailsms");

							var selectedVal = $('#trollSelect').find(':selected').text();
							
							$("#mailsms").css("text-align","center");

							$("#mailsms").val("");

													
							vat.placeholder = placeholderText[selectedVal];


					    		
						    	
	
						}

	function smsfn(){

		
					
							var selectedVal = $('#trollSelect').find(':selected').text();
								if (selectedVal=="SMS" ) {

								
					    		$("#mailsms").css("text-align","left");
					    		$("#mailsms").val("+  ");
					    		}
					    		else if(selectedVal=="Sms" ) {
								$("#mailsms").css("text-align","left");
					    		$("#mailsms").val("+  ");	
					    		} 	else if(selectedVal=="رسـالـة نـصـية") {
									
									$("#mailsms").css("text-align","left");

					    		$("#mailsms").val("  +");	

								
					    	}


					    	

					}




$(document).on('click','#lifr',function(){
						$("#monspan").removeClass('en');
						$("#monspan").removeClass('ar');
						$("#monspan").addClass('fr');
							$("#nfs").removeClass('sp-right');
							$("#lan").val('fr');
							
							var placeholderText = {"e-mail":"@adresse mail","Sms":"+Numéro GSM"};
							
							 var vat = document.getElementById("mailsms");

							var selectedVal = $('#trollSelect').find(':selected').text();
						

							$("#mailsms").val("");

													
							vat.placeholder = placeholderText[selectedVal];

							})
						
$(document).on('click','#lien',function(){
	
						$("#monspan").removeClass('fr');
						$("#monspan").removeClass('ar');
						$("#monspan").addClass('en');
						$("#nfs").removeClass('sp-right');
							$("#lan").val('en');
							
							
							var placeholderText = {"e-mail":"@e-mail","SMS":"+Mobile phone"};
							
							 var vat = document.getElementById("mailsms");

							var selectedVal = $('#trollSelect').find(':selected').text();

							$("#mailsms").val("");

													
							vat.placeholder = placeholderText[selectedVal];

})

$(document).on('click','#liar',function(){
		$("#monspan").removeClass('fr');
						$("#monspan").removeClass('en');						
						$("#monspan").addClass('ar');
						$("#nfs").addClass('sp-right');
												$("#lan").val('ar');
												
												
							var placeholderText = {"إيـميـل" :"الـبـريـد الإلـكـتـرونـي","رسـالـة نـصـية" :"رقم الهـاتف"};
							
							 var vat = document.getElementById("mailsms");

							var selectedVal = $('#trollSelect').find(':selected').text();

							$("#mailsms").val("");

													
							vat.placeholder = placeholderText[selectedVal];
												
												

})

