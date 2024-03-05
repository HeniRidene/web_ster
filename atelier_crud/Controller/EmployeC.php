<?php
include "../config.php";
class EmployeC
{ public function ListEmployees(){
    $sql="SELECT * FROM employe";
    $db = config::getConnexion();
    try{
        $list = $db->query($sql);
        return $list;
    }
    catch (Exception $e){
        die('Message Erreur: '.$e->getMessage());
    }
} 
public function deleteEmployees($id){
    $sql="DELETE FROM employe WHERE id = :id";
    $db = config::getConnexion();
    try{
        $query = $db->prepare($sql);
        $query->execute([
            'id' => $id
        ]);
    }
    catch (Exception $e){
        die('Message Erreur: '.$e->getMessage());
    }
}
public function addEmployees($employe){
    $sql="INSERT INTO employe
     VALUES (NULL,:firstName,:lastName,:DoB,:email)";
    $db = config::getConnexion();
    try{
        $rec = $db->prepare($sql);
        $rec->execute([
            'firstName' => $employe->getFirstname(),
            'lastName' => $employe->getLastname(),
            'DoB' => $employe->getDob()->format('Y/m/d'),
            'email' => $employe->getEmail()
        ]);
    }
    catch (Exception $e){
        die('Message Erreur: '.$e->getMessage());
    }
}}
?>