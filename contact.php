<?php
    $servername='localhost';
    $username='root';
    $password='';
    $dbname='contact';
    
    $conn=mysqli_connect($servername,$username,$password,$dbname);
    if(!$conn){
        die("Connection Failed".mysqli_connect_error());
    }
    echo "Connected successfully";

    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $address=$_POST['address'];
        $comment=$_POST['comment'];

        $sql="insert into userinfo(name,email,address,comment) values('$name','$email','$address','$comment')";
        $result=mysqli_query($conn,$sql);
        if($result){
            echo "Inserted Successfully";
        }
        

    }
?>