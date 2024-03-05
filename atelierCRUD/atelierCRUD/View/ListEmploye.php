<?php
    include "../Controller/EmployeC.php";
    $empC = new EmployeC();
    $list = $empC->ListEmployees();
    print_r($list);

?>
<html>

<head><title>a9wa page</title></head>

<body>
<a href="addEmploye.php">AddEmploye</a>
    <center>
        <h1>List of employes</h1>
        
    </center>
    <table border="1" align="center" width="70%">
        <tr>
            <th>Id Employe</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        <?php
        foreach ($list as $employe) {
        ?>
            <tr>
                <td><?php echo $employe['id']; ?></td>
                <td><?= $employe['firstname']; ?></td>
                <td><?php echo $employe['lastname']; ?></td>
                <td><?=  $employe['email']; ?></td>
                <td><?php echo $employe['dob']; ?></td>
                <td><input type="submit" value="update"></td>
                <td><a href="Delete.php?id=<?php echo $employe['id'];?>">Delete</a></td>
            </tr>
        <?php
        }
        ?>
    </table>
</body>

</html>