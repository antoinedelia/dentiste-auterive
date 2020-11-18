<!DOCTYPE html>
<html lang="fr">
  <head>
    <?php include_once ("header.html"); ?>
    <title>Galerie photos - Dentiste Auterive 31190 Cabinet dentaire des Drs DELIA, SPERTE et ARAGON</title>
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
      <div class="row">
        <h2 class="featurette-heading">Galerie</h2>
        <div class="diy-slideshow">
          <figure class="show">
            <img src="img/neige.JPG" class="img_galerie" alt="Neige au cabinet"/><figcaption>Le cabinet sous la neige</figcaption> 
          </figure>
          <figure>
            <img src="img/arbre.JPG" class="img_galerie" alt="Arbres devant le cabinet"/><figcaption></figcaption> 
          </figure>
          <figure>
            <img src="img/entree.jpg" class="img_galerie" alt="L'entrée du cabinet"/><figcaption>L'accueil du cabinet d'Auterive</figcaption> 
          </figure>
          <figure>
            <img src="img/bureau.jpg" class="img_galerie" alt="Le bureau du Docteur Delia"/><figcaption>Bureau du Docteur DELIA</figcaption> 
          </figure>
          <figure>
            <img src="img/cabinet3.jpeg" class="img_galerie" alt="Salle de soin du Docteur Delia"/><figcaption>Salle de soin du Docteur Delia</figcaption> 
          </figure>
          <figure>
            <img src="img/cabinet4.jpeg" class="img_galerie" alt="Salle de soin du Docteur Sperte"/><figcaption>Salle de soin du Docteur Sperte</figcaption> 
          </figure>
          <figure>
            <img src="img/equipe.jpg" class="img_galerie" alt="L'équipe du cabinet"/><figcaption>L'équipe du cabinet</figcaption> 
          </figure>
          <figure>
            <img src="img/delia_masque.jpg" class="img_galerie" alt="Nous sommes équipés pour vous recevoir !"/><figcaption>Nous sommes équipés pour vous recevoir !</figcaption> 
          </figure>
          <span class="prev">&laquo;</span>
          <span class="next">&raquo;</span>
        </div>
      </div>

      <hr class="featurette-divider">

      <!-- FOOTER -->
      <?php include_once ("footer.html"); ?>      

    </div><!-- /.container -->
    <script>
        (function(){
  
        var counter = 0, // to keep track of current slide
            $items = document.querySelectorAll('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
            numItems = $items.length; // total number of slides

        // this function is what cycles the slides, showing the next or previous slide and hiding all the others
        var showCurrent = function(){
          var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
          
          // remove .show from whichever element currently has it 
          // http://stackoverflow.com/a/16053538/2006057
          [].forEach.call( $items, function(el){
            el.classList.remove('show');
          });
          
          // add .show to the one item that's supposed to have it
          $items[itemToShow].classList.add('show');    
        };

        // add click events to prev & next buttons 
        document.querySelector('.next').addEventListener('click', function() {
             counter++;
             showCurrent();
          }, false);

        document.querySelector('.prev').addEventListener('click', function() {
             counter--;
             showCurrent();
          }, false);
          
        })();  
    </script>
  </body>
</html>