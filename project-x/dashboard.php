<?php
require 'functions/compteur.php';

$annee = (int)date('Y');
$annee_selection = empty($_GET['annee']) ? null : (int)$_GET['annee'];
$mois_selection = empty($_GET['mois']) ? null : $_GET['mois'];
var_dump($annee_selection);
var_dump($mois_selection);
if ($annee_selection && $mois_selection){
    $total = nombre_vues_mois($annee_selection, $mois_selection);
}
else{
    $total = nombre_vues();
}
$mois = [
    "01" => "janvier",
    "02" => "fevrier",
    "03" => "marsr",
    "04" => "avril",
    "05" => "mai",
    "06" => "juin",
    "07" => "juillet",
    "08" => "aout",
    "09" => "sepetembre",
    "10" => "octobre",
    "11" => "novembre",
    "12" => "decembre"
];
?>

<div>
    <div>
        <div class="list-group">
            <?php for ($i =0; $i <5; $i++): ?>
            <a class="list-group-item" <?= $annee - $i === $annee_selection ? 'active' : ''; ?> href="dashboard.php?annee=<?= $annee -$i ?>" ><?= $annee -$i ?></a>
            <?php if ($annee - $i === $annee_selection): ?>
                <div>
                <?php foreach ($mois as $numero => $nom): ?>
                    <a href="dashboard.php?annee=<?= $annee_selection ?>&mois=<?= $numero ?>">
                    <?= $nom ?>
                    </a>
                <?php endforeach; ?>
                </div>
            <?php endif; ?>
            <?php endfor; ?>
        </div>
        <div>
            <div class="card">
                <div class="card-body">
                    <strong style="font-size:3em"> <?= $total ?></strong>
                    <p>Visites total</p>
                </div>
            </div>
        </div>
    </div>
</div>







<?php
require "elements/footer.php";
?>