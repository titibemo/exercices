<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE rep"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2lignes="" F2etat="inactif" F2defaut=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" arrondiAuto="vrai" totalAffichages="1000" epaisseurPoint="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#rep" algoitem="rep EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#rep#&quot; un café ?&quot;#pasliste" algoitem="rep PREND_LA_VALEUR &quot; un café ?&quot;"/>
        <item code="2#rep#pasliste" algoitem="LIRE rep"/>
        <item code="15#(rep != &quot;o&quot;) &amp;&amp; (rep !=&quot;n&quot;)" algoitem="TANT_QUE ((rep != &quot;o&quot;) &amp;&amp; (rep !=&quot;n&quot;)) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="2#rep#pasliste" algoitem="LIRE rep"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
