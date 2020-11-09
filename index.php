<!DOCTYPE html>
<html lang="fr">
  <head>
    <?php include_once ("header.html"); ?>
    <title>Dentiste Auterive 31190 Cabinet dentaire des Drs DELIA, SPERTE et ARAGON</title>
  </head>
  
  <body>
    <!-- NAVBAR ================================================== -->
    <?php include_once ("navbar.php"); ?>
    <!-- Carousel ================================================== -->
    <?php include_once ("carousel.html"); ?>
    <!-- /.carousel -->



    <!-- Marketing messaging and featurettes ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

    <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">Questionnaire médical</h3>
          <p class="lead">Cher patient,
          <br/>Afin d’écourter votre temps d’attente au cabinet, nous vous proposons de <strong>télécharger, imprimer puis de remplir le questionnaire médical</strong> à remettre à votre praticien lors de votre rendez-vous.
          <br/>Vous pouvez <a onclick="ga('send', 'event', 'link', 'click', 'questionnaire', 0);" href="files/Questionnaire%20dentaire.pdf" rel="noopener noreferrer" target="_blank">télécharger le questionnaire en cliquant ici</a> ou sur l'image ci-contre.
          </p>
        </div>
        <div class="col-md-5">
          <a onclick="ga('send', 'event', 'link', 'click', 'questionnaire', 1);" href="files/Questionnaire%20dentaire.pdf" rel="noopener noreferrer" target="_blank">
            <img class="featurette-image img-responsive4" src="img/formulaire.png" alt="Questionnaire médical">
          </a>
        </div>
      </div>

      <hr class="featurette-divider">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <a href="cabinet.php#soins">
            <img class="img-circle" src="img/dent.png" alt="dent" style="width: 140px; height: 140px;">
          </a>
          <h2>Soins</h2>
          <p>Les soins proposés par le cabinet des docteurs DELIA, SPERTE et ARAGON</p>
          <p><a class="btn btn-default" href="cabinet.php#soins" role="button">Soins &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href="equipe.php#dentistes">
            <img class="img-circle" src="img/dentiste.png" alt="dentiste" style="width: 140px; height: 140px;">
          </a>
          <h2>Dentistes</h2>
          <p>Les dentistes du cabinet d'Auterive.</p>
          <p><a class="btn btn-default" href="equipe.php#dentistes" role="button">Dentistes &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href="plan.php#horaires">
            <img class="img-circle" src="img/maps.png" alt="location" style="width: 140px; height: 140px;">
          </a>
          <h2>Accès et Horaires</h2>
          <p>L'accès au cabinet dentaire d'Auterive<br/> ainsi que les horaires se trouvent ici</p>
          <p><a class="btn btn-default" href="plan.php#horaires" role="button">Accès et Horaires &raquo;</a></p>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->


      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">Histoire du cabinet</h3>
          <p class="lead">Anciennement centre médical regroupant des médecins généralistes, le cabinet dentaire d'Auterive a vu le jour en Septembre 2000 après quelques mois de travaux de réaménagement.
            <br>Il est passé progressivement d'un chirurgien dentiste et d'une salle de soins, à <strong>trois chirurgiens dentistes</strong> pour deux salles de soins et <strong>trois assistantes dentaires</strong>.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive4" src="img/plaque.jpg" alt="Le cabinet dentaire">
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-5">
          <img class="featurette-image img-responsive4" src="img/salle_attente.jpg" alt="Salle d'attente">
        </div>
        <div class="col-md-7">
          <h3 class="featurette-heading">Salle d'attente</h3>
          <p class="lead">Le cabinet dispose d'une salle d'attente agréable, de lectures récentes, et l'équipe fera le maximum pour respecter vos horaires de rendez-vous afin d'éviter une attente trop longue.</p>
        </div>
      </div>

      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <h3 class="featurette-heading">Parking</h3>
          <p class="lead">Un parking goudronné vous permettra de vous garer facilement. L'absence de marche permet un accès facilité aux brancards et personnes handicapés.</p>
        </div>
        <div class="col-md-5">
          <img class="featurette-image img-responsive4" src="img/parking.jpg" alt="Parking">
        </div>
      </div>

      <hr class="featurette-divider">

      <!-- /END THE FEATURETTES -->


      <!-- FOOTER -->
      <?php include_once ("footer.html"); ?>

    </div><!-- /.container -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="bootstrap/docs/assets/js/docs.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="bootstrap/docs/assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="toast.js"></script>

  </body>
</html>