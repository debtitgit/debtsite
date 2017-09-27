


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "feedback";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
//echo"Connected Successfully..";
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

/*$_POST['Name']='testsuu';
$_POST['Email']='test';
$_POST['Subject']='test';
$_POST['Compliant']='test'; */
/*$_POST["e_name"]='test';
$_POST["e_mble"]='test';
$_POST["e_mail"]='test';
$_POST["m_date"]='12-09-1990';
$_POST["e_time"]='test';
$_POST["address"]='test';
$_POST["e_pin"]='test';*/

//print_r($_POST);
    //if(isset($_POST['send_now'])){
		$date = str_replace('/', '-', $_POST["e_date"]);
         $sql = "INSERT INTO tbl_enquire (c_name, mble, email,mdate,mtime,address,pincode) VALUE('".$_POST["e_name"]."','".$_POST["e_mble"]."','".$_POST["e_mail"]."','".date("Y-m-d",strtotime($date))."','".$_POST["e_time"]."',
		'".$_POST["e_address"]."','".$_POST["e_pin"]."')";
		//$data = mysql_query ($sql)or die(mysql_error());
    //}

   

if ($conn->query($sql) === TRUE) {
	//echo 'success';
    //echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
