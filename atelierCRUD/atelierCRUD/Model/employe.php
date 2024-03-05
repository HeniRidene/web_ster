<?php
    class Employe{
        private ?int $id = null;
        private ?string $firstName = null; 
        private ?string $lastName = null;  
        private ?DateTime $dob = null;
        private ?string $email = null;

        public function __construct($a = null,$b,$c,$d,$e) {
            $this->id = $a;
            $this->firstName = $b;
            $this->lastName = $c;
            $this->dob = $d;
            $this->email = $e;
        }

        public function getId(){
            return $this->id;
        }

        public function getFirstName(){
            return $this->firstName;
        }

        public function getLastName(){
            return $this->lastName;
        }

        public function getDob() {
            return $this->dob;
        }
        public function getEmail(){
            return $this->email;
        }

        public function setFirstname($a) {
            $this->firstName = $a;
        }
        public function setLastName($b) {
            $this->lastName = $b;
        }
        public function setDob($d) {
            $this->dob = $d;
        }
        public function setEmail($e) {
            $this->email = $e;
        }
    
    }
?>