<?php
    include "../Controller/EmployeC.php";
    $empC = new EmployeC();
    $empC->deleteEmployees($_GET['id']);
    header('Location:ListEmploye.php');
?>