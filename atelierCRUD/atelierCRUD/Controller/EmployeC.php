<?php
    include "../config.php";
    class EmployeC{
        public function ListEmployees(){
            $sql = "SELECT * FROM employe";
            $db = config::getConnexion();
            try{
                $List = $db->query($sql);
                return $List;
            }
            catch(Exception $e){
                die("Message error = ". $e->getMessage());
            }
        }

        public function deleteEmployees($id){
            $sql = "DELETE FROM employe where id = :id ";
            $db = config::getConnexion();
            $req = $db->prepare($sql);
            $req->bindValue(":id", $id);
            try{
                $req->execute();
            }
            catch(Exception $e){
                die("Message error = ". $e->getMessage());
            }
        }

        public function addEmploye($emp){
            $sql = "INSERT INTO employe VALUES(NULL,:lastName,:firstName,:email,:dob)";
            $db = config::getConnexion();
            try{
                $req = $db->prepare($sql);
                $req->execute([
                    "lastName"=> $emp->getLastName(),
                    "firstName"=> $emp->getFirstName(),
                    "email"=> $emp->getEmail(),
                    "dob"=> $emp->getDob()->format('Y/m/d')
                ]);

        }
        catch(Exception $e){
            die('error d ajout'. $e->getMessage());
        }
    }
}
?>