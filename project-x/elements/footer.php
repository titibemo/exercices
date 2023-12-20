<?php
require_once dirname(__DIR__) . DIRECTORY_SEPARATOR ."functions" . DIRECTORY_SEPARATOR ."compteur.php";
ajouter_vue();
?>

<h1>mon footer</h1>

<p>
    Il y a <?= nombre_vues() ?> sur cette page.
</p>