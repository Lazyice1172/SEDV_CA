<?php

include "dbconnect.php";

$Name=$_POST["fname"];
$LName=$_POST["lname"];
$Email=$_POST["email"];
$Text=$_POST["question"];

mysqli_real_escape_string($conn, $Name);

$sql="INSERT INTO table1(UserID, FName, LName,Email,Text) VALUES ('0','$Name','$LName','$Email','$Text');";



if (mysqli_query($conn, $sql))
{
    echo "New Record created successfully";
}
else
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>