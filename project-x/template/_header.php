<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet perso</title>
	<link rel="stylesheet" href="/ressources/styles/style.css">
    
</head>
<body>
    <header>
        <h1 class="titre">Bienvenue sur le projet X</h1>

    <?php 
    if(!isset($_SESSION["username"])){
        echo "<a href=\"./connexion.php\">Se connecter</a>";

    }

    if(isset($_SESSION["username"])){
        
        echo '<p class="msg"> Bonjour ' . $_SESSION['username'] . '<br>'. 'ce nest pas vous ?' . '<br>' . '<a href=\"./connexion.php\">Se déconnecter</a>' . ' </p>';
    }
    
    ?>
    
   

    </header>

