<?php

session_start();

$title = "";
require "./template/_header.php";

?>

<?php

if(isset($_SESSION["username"])){

    echo "Bonjour " . ($_SESSION["username"]) . " Ce n'est pas vous ?" . "<a href=\"./deconnexion.php\">se déconnecter</a>";

}




?>


<div class="class1">blabla 1</div>
<div class="class2">blabla 2</div>
<div class="class3">blabla 3</div>
<div class="class4">blabla 4</div>





<a href="./test.php">page quelconque</a>
<a href="./test.php">page déconnexion</a>