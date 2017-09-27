<?php


/*** mysql hostname ***/
$hostname = 'localhost';

/*** mysql username ***/
$username = 'thoughtimpulsedb';

/*** mysql password ***/
$password = 'Thought@123';
$dbname = 'thoughtimpulsedb';

try {
    $dbh = new PDO("mysql:host=$hostname;dbname=$dbname", $username, $password,array(PDO::ATTR_PERSISTENT => true));
     $sql = "INSERT INTO tbl_feed (Name, Email, Subject,Compliant) VALUES ('".$_POST["enq_name"]."','".$_POST["enq_email"]."','".$_POST["enq_title"]."','".$_POST["enq_message"]."')";
    
	if ($dbh->query($sql) === TRUE) {
	echo 'success';
    //echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $dbh->error;
}
}
catch(PDOException $e)
    {
    echo $e->getMessage();
    }


$dbh->close();
?>
