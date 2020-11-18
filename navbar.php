<style>
  .btn-rdv {
    color: #fff !important;
    background-color: #428bca !important;
    border-color: #357ebd !important;
  }

  .w-100{
    width: 100% !important;
  }

  .float-right{
    float: right !important;
  }

  .navbar-wrapper{
    position: unset !important;
  }
</style>

<?php $actual_link = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; ?>

<!-- <?php if ($actual_link != "https://dr-delia-christophe.chirurgiens-dentistes.fr/regles.php") { ?>
<div class="jumbotron">
  <p>
    Le cabinet des Docteurs DELIA, SPERTE et ARAGON reste ouvert pendant la période de confinement en appliquant les protocoles de sécurité permettant de soigner dans les meilleures conditions d'hygiènes et d'asepsies recommandées par la Haute Autorité de la Santé.
<br>  
Les nouvelles restrictions sanitaires ne limitent pas la prise de rendez-vous pour une consultation physique et tous vos rendez-vous sont donc maintenus.
<br>
L’équipe soignante.
  </p>
</div>

<?php } ?> -->

<div class="navbar-wrapper">
  <div class="container">
    <div class="navbar navbar-inverse navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- <a id="menu1" class="navbar-brand" href="https://dr-delia-christophe.chirurgiens-dentistes.fr/">Christophe DELIA</a> -->
        </div>
        <div class="navbar-collapse collapse">
          <nav>
            <ul class="nav navbar-nav w-100">

              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/index.php" || $actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/") { ?>class="active" <?php } ?>><a class="menu1" href="index.php">Accueil</a></li>
              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/equipe.php" || $actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/cabinet.php") { ?>class="active" <?php } ?> class="dropdown">
                <a href="#" class="dropdown-toggle menu1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Le Cabinet <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="cabinet.php">À propos</a></li>
                  <li><a href="equipe.php">L'Équipe</a></li>
                </ul>
              </li>
              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/implants.php" || $actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/gouttieres.php") { ?>class="active" <?php } ?> class="dropdown">
                <a href="#" class="dropdown-toggle menu1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Nos Prestations <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="implants.php">Implants</a></li>
                  <li><a href="gouttieres.php">Smiler's l'orthodontie invisible</a></li>
                  <li><a href="blanchiment.php">Blanchiment dentaire</a></li>
                </ul>
              </li>
              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/qualite.php" || $actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/fiches.php" || $actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/conebeam.php") { ?>class="active" <?php } ?> class="dropdown">
                <a href="#" class="dropdown-toggle menu1" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Divers <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="qualite.php">Charte qualité</a></li>
                  <li><a href="fiches.php">Fiches conseil</a></li>
                  <li><a href="conebeam.php">Cone Beam</a></li>
                </ul>
              </li>
              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/plan.php") { ?>class="active" <?php } ?>><a class="menu1" href="plan.php">Plan d'accès</a></li>
              <li <?php if ($actual_link == "https://dr-delia-christophe.chirurgiens-dentistes.fr/galerie.php") { ?>class="active" <?php } ?>><a class="menu1" href="galerie.php">Galerie</a></li>
              <li class="float-right"><a class="btn-rdv menu1" href="https://rdvdentiste.net/auterive/delia-aragon.html/popup" target="_blank">Prendre rendez-vous</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
