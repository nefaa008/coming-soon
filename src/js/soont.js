
                                    $('#monform').submit(function(event) {
                                                    event.preventDefault();
 
                                                    $.ajax({
                                                            type: 'POST',
                                                            url: 'insert.php',
                                                           data: $(this).serialize(),
                                                           // à vérifier , je l'ai commenté dataType: 'json',
                                                            success: function (data) {


                                                           //  alert(data);
                                                              var lan = $('#monform')[0].lan.value;
                                                               var username = $('#monform')[0].username.value;
                                                              
                                                                 $('#monform')[0].reset();



                                                                    if(lan=='en'){$.toast({




    text: "Thank you " + username + "<br><br><br> We will update you soon. <br> <br> <br> <br> ", 
    heading: '<br><b>Welcome to e-electricity </b> <br><br><br>', 
    icon: 'success', 
    showHideTransition: 'fade', 
    allowToastClose: true,
      hideAfter: false,

    stack: 1, 
    position: 'top-left', 
    textAlign: 'center',  
    loader: true,  
    loaderBg: '#9ec600'  
    
   
                });}
                                                                        else if(lan=='fr'){$.toast({

    text: "Merci " + username + "<br><br><br> Nous allons vous informer  bientôt. <br> <br> <br> <br> ", 
    heading: '<br><b>Bienvenue à e-electricity </b> <br><br><br>', 
    icon: 'success', 
    showHideTransition: 'fade', 
    allowToastClose: true,
      hideAfter: false,

    stack: 1, 
    position: 'top-left', 
    textAlign: 'center',  
    loader: true,  
    loaderBg: '#9ec600'  
    
   
                });} else if(lan=="ar") {$.toast({
                    
    text: username + " " + "شـكـرا " + "<br><br><br> سـنعـلمك قريبا، إبـق على تـواصـل <br> <br> <br> <br> ", 
    heading: '<br><b>e-electricity مـرحـبـا بك فـي</b> <br><br><br>', 
    icon: 'success', 
    showHideTransition: 'fade', 
    allowToastClose: true,
      hideAfter: false,

    stack: 1, 
    position: 'top-left', 
    textAlign: 'center',  
    loader: true,  
    loaderBg: '#9ec600'  
    
   
                });                                                                    
                                                                        }


                                                            },

                                                             error: function (xhr, desc, err)
        {

               alert(err);
        }
                                                    });


                                            });




