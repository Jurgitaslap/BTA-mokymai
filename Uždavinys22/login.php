<?php
header("Content-type: application/json; charset=utf-8");
sleep(1.5);
if ($_REQUEST['password1'] != '' && $_REQUEST['password2'] != ''){
    if ($_REQUEST['password1'] == $_REQUEST['password2']){
        if (strlen($_REQUEST['password1']) >= 8) {
            $response = [
                success => true,
                token => 'Slaptažodis pakeistas.'
            ];
        
        } else {  
            $response = [
                success => true,
                token => 'Slaptažodis per trumpas. Turi būti ne mažiau kaip 8 simboliai.'
            ];
        }
    } else {
        $response = [
            success => false,
            error => 'Slaptažodžiai nesutampa - pakartokite dar kartą.'
        ];
    }
} else { 
        $response = [
            success => false,
            error => 'Užpildykite visus laukus!'
        
        ];
}
echo json_encode($response);
?>