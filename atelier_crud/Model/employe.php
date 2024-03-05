<?php
class Employe
{
    private ?int $id = null;
    private $firstName = null;
    private $lastName = null;
    private ?DateTime $dob = null;
    private ?string $email = null;

    public function __construct($a = null,$b,$c,$d,$e)
    {
        $this->id = $a;
        $this->firstName = $b;
        $this->lastName = $c;
        $this->dob = $d;
        $this->email = $e;
    }


    public function setFirstname($a)
    {
        $this->firstName =$a;
    }
    public function setLastname($a)
    {
        $this->lastName =$a;
    }
    public function setDob($a)
    {
        $this->dob =$a;
    }
    public function setEmail($a)
    {
        $this->email =$a;
    }
    public function getFirstname()
    {
        return $this->firstName;
    }
    public function getLastname()
    {
        return $this->lastName;
    }
    public function getDob()
    {
        return $this->dob;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getId()
    {
        return $this->id;
    }   
}
?>