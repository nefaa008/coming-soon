		<?php


class saveSoon {


	 function resetsoon()  {

	 }
 
        function save() {
                //Put form elements into post variables (this is where you would sanitize your data)
              $return = array();
                $return['msg'] = '';
                $return['error'] = false;
 
				$username = $_POST['username'];
				$mailsms = $_POST['mailsms'];
                $la = $_POST['lan'];

                $type=$_POST['trollSelect'];
		
 			   if (!isset($username) || empty($username)){
                        $return['error'] = true;
                        $return['msg'] .= '<li>Error: Valeur username vide.</li>';
                } else {

                	                        $return['username'] = $username;
                                            $return['mailsms'] = $mailsms;
                                            $return['lan'] = $la;


                }

                if (!isset($mailsms) || empty($mailsms)){
                        $return['error'] = true;
                        $return['msg'] .= '<li>Error: Valeur mailsms vide.</li>';
                }


          if ($return['error'] === false){

				if(!empty($username) AND !empty($mailsms)){


		          mysql_connect("localhost","root","root") or die("erreur");
		          mysql_select_db("soon")	or die("la base de doonées est introuvanle"); 



					mysql_query('INSERT INTO e_electricity_guest_user(username, mailsms, typecontact) VALUES ("'.$username.'", "'.$mailsms.'","'.$type.'")') or die('Erreur:'.mysql_error());
		


                        $return['msg'] = '<li> ok avec succés nefaa </li>';
                }
 
                //Return json encoded results
              
        
 
}
  return json_encode($return);
}
}
 
$a = new saveSoon;
echo $a->save();

		?>