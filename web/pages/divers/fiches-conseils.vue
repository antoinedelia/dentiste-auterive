<!-- pages/divers/fiches-conseils.vue -->
<template>
    <div>
        <!-- En-tête de la page -->
        <div class="bg-slate-50 py-12">
            <div class="container mx-auto px-6 text-center">
                <h1 class="text-4xl font-bold text-sky-800">Fiches Conseils</h1>
                <p class="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">Nos conseils et informations pratiques pour
                    prendre soin de votre sourire.</p>
            </div>
        </div>

        <!-- Contenu principal de la page -->
        <div class="container mx-auto px-6 py-16">
            <div class="max-w-4xl mx-auto space-y-12">
                <!-- Boucle sur chaque catégorie de fiches -->
                <section v-for="category in fichesCategories"
                         :key="category.title">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6">{{ category.title }}</h2>
                    <div class="border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                        <!-- Boucle sur chaque fiche dans la catégorie -->
                        <AccordionItem v-for="fiche in category.fiches"
                                       :key="fiche.title"
                                       :title="fiche.title">
                            <!-- Le contenu de la fiche est placé ici -->
                            <div v-html="fiche.content"></div>
                        </AccordionItem>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

useHead({
    title: 'Fiches Conseils',
    meta: [
        { name: 'description', content: 'Retrouvez toutes nos fiches conseils sur les soins dentaires, l\'hygiène, les pathologies et les prothèses pour une santé bucco-dentaire optimale.' }
    ]
});

// --- VOS DONNÉES SONT ICI ---
const fichesCategories = ref([
    {
        title: 'Informations Pratiques',
        fiches: [
            {
                title: 'Soins dentaires',
                content: `
          <h4>Chirurgien-dentiste ou Odontologiste</h4>
          <p>Il s'occupe médicalement de la sphère oro-faciale : la bouche, les dents, les gencives et les maxillaires. Il soulage, restaure et veille aussi à l'esthétique d'un sourire. Il traite aussi bien les caries que les infections plus graves de la cavité buccale. Il s'occupe des soins dentaires, de la réalisation de couronnes et autres prothèses dentaires avec l'aide du prothésiste. Il est également habitué à diagnostiquer et traiter la cause de douleurs orale et faciale et à gérer les urgences dentaires (douleurs, infections, traumatismes).</p>
          <h4>Stomatologue</h4>
          <p>Médecin spécialisé dans les problèmes de la cavité buccale, il est en charge d'extractions dentaires difficiles ou qui nécessitent une anesthésie générale. Il pratique également des opérations plus complexes : malformations, traumatismes de la face, cancer, implants… La stomatologie est en effet une spécialité de la chirurgie et une branche de la chirurgie maxillo-faciale.</p>
          <h4>Orthodontiste</h4>
          <p>C'est l'un des trois spécialistes reconnu comme tel avec la chirurgie orale et la médecine bucco-dentaire. Un orthodontiste est un chirurgien-dentiste spécialisé en orthopédie dento-faciale. Il surveille la croissance des mâchoires, corrige les malpositions dentaires des enfants ou des adultes et rétablit leur bon alignement à l'aide d'appareils orthodontiques. Le spécialiste qualifié en orthopédie dento-faciale s'engage à n'exercer que l'orthodontie.</p>
          <h4>Endodontiste</h4>
          <p>Il traite essentiellement la prévention, le diagnostic et le traitement des problèmes concernant l'intérieur de la dent, en particulier ceux concernant les canaux des dents qui contiennent la pulpe dentaire.</p>
          <h4>Parodontiste</h4>
          <p>Un parodontiste est un dentiste plus spécialisé dans la prévention, le diagnostic et le traitement des maladies associées aux tissus de support des dents : maladies des gencives, déchaussement des dents, lésions dermatologiques qui se manifestent dans la bouche, troubles osseux.</p>
          <h4>Pédodontiste</h4>
          <p>Chirurgien-dentiste spécialisé pour les enfants, il pratique les soins dentaires, enseigne l'hygiène buccale, s'occupe des problèmes spécifiques au développement de leurs dents.</p>
          <h4>Occlusodontiste</h4>
          <p>Il prend en charge les problèmes de la mâchoire comme le bruxisme (grincement des dents nocturnes dans 80% des cas), les questions d'occlusion dentaire, les douleurs articulaires au niveau des mandibules.</p>
        `
            },
            {
                title: 'Honoraires et remboursements',
                content: `
          <p>Les honoraires qui vous seront demandés en contrepartie tiennent compte de la complexité des soins qui vous sont dispensés. À partir du 1er Juin 2014, la nomenclature a évolué vers la CCAM (Classification Commune des Actes Médicaux).</p>
          <h4>Comment fonctionnent les remboursements d'honoraires ?</h4>
          <ol>
            <li><strong>Les actes « conventionnés » :</strong> Soins dentaires courants, détartrage, carie... La Sécurité Sociale vous remboursera 70 % du tarif de convention. Votre mutuelle viendra compléter les 30% restants.</li>
            <li><strong>Les dépassements d'honoraires :</strong> Certains actes (inlay, prothèse, chirurgie…) font appel à des technologies ou à des matériaux plus élaborés. Le complément d'honoraires peut être pris en charge par votre mutuelle.</li>
            <li><strong>Les actes dits "hors nomenclature" (parodontologie, implants) :</strong> La Sécurité Sociale ne les prend pas en charge. Votre mutuelle pourra participer aux frais en fonction de votre contrat.</li>
            <li><strong>Le programme M'T dents :</strong> Votre enfant peut bénéficier d'un examen bucco-dentaire gratuit à 6, 9, 12, 15 ou 18 ans.</li>
          </ol>
        `
            }
        ]
    },
    {
        title: 'Dents chez l\'adulte',
        fiches: [
            {
                title: 'Plaque dentaire',
                content: `
          <h4>Comment se forme la plaque dentaire ?</h4>
          <p>Quelques minutes après un brossage, des bactéries adhèrent à la surface dentaire et sécrètent un substrat très adhérent. C'est ce que l'on appelle la plaque dentaire.</p>
          <h4>Pourquoi l'éliminer ?</h4>
          <p>Les bactéries contenues dans la plaque agressent notre organisme. Localement, elles peuvent provoquer des caries, des abcès ou des parodontites. Elles peuvent aussi passer dans la circulation sanguine et être responsables d'infections diverses (pulmonaires, cardiaques…).</p>
        `
            },
            {
                title: 'Détartrage',
                content: `
          <h4>Comment se forme le tartre ?</h4>
          <p>Si la plaque dentaire n'est pas retirée par un brossage efficace, elle se minéralise et durcit pour former le tartre. Le tartre étant poreux, de nombreux microbes viennent s'y loger.</p>
          <h4>Pourquoi un détartrage ?</h4>
          <p>Un détartrage régulier redonne aux dents un aspect esthétique normal et recrée un environnement sain pour les dents et les gencives, prévenant l'apparition de maladies.</p>
        `
            },
            {
                title: 'Hypersensibilité',
                content: `
          <h4>Quelle est son origine ?</h4>
          <p>Une partie de la dent non recouverte d'émail peut être exposée (fracture au collet, brossage agressif, récession de la gencive), ce qui entraîne une hypersensibilité au chaud, au froid, ou au sucre.</p>
          <h4>Traitement de l'hypersensibilité</h4>
          <p>Elle peut être traitée au cabinet par application de produits spécifiques, ou à domicile par utilisation de dentifrices et gels adaptés. Dans certains cas, une greffe de gencive peut être envisagée.</p>
        `
            },
            {
                title: 'Conserver une haleine fraîche',
                content: `
          <h4>Contrôler la mauvaise haleine</h4>
          <p>La mauvaise odeur est due aux bactéries et débris de nourriture. Il faut distinguer l'halitose transitoire (matin, aliments) de l'halitose vraie, plus persistante.</p>
          <h4>Nos conseils</h4>
          <ul>
            <li>Brossage des dents, du palais et de la langue, surtout avant de dormir.</li>
            <li>Utilisation du fil dentaire.</li>
            <li>Bonne hydratation pour éviter la sécheresse buccale.</li>
            <li>Nettoyage des appareils mobiles.</li>
          </ul>
        `
            },
        ]
    },
    {
        title: 'Dents de l\'enfance à l\'adolescence',
        fiches: [
            {
                title: "Première visite",
                content: `
          <h4>Quand ?</h4>
          <p>La première visite doit avoir lieu vers 4-5 ans. Elle permet de vous donner les conseils préventifs (brossage, fluor, alimentation) et de créer un premier contact positif.</p>
          <h4>Comment se déroule-t-elle ?</h4>
          <p>C'est une simple "prise de contact", sans soins. Il est important de rassurer votre enfant et de ne pas lui transmettre vos propres appréhensions.</p>
          <h4>Les rendez-vous à ne pas manquer</h4>
          <p>Les dates clés du suivi sont ensuite à 6, 9, 12, 15 et 18 ans, dans le cadre du programme M'T dents de l'Assurance Maladie.</p>
        `
            },
            {
                title: "Pourquoi soigner les dents de lait",
                content: `<p>La carie est une infection. Si elle n'est pas soignée, elle peut former un abcès, affecter la santé générale de l'enfant et mettre en péril le germe de la dent définitive située juste en dessous (défauts de forme, de couleur, etc.). Il est donc crucial de faire consulter les jeunes enfants régulièrement.</p>`
            },
            {
                title: "Les caries du jeune enfant",
                content: `
          <h4>La carie du biberon</h4>
          <p>Les enfants qui s'endorment avec un biberon autre que de l'eau pure ont un fort risque de développer des caries multiples. Le biberon ne doit contenir que de l'eau en dehors des repas.</p>
          <h4>Prévention</h4>
          <p>L'utilisation d'un dentifrice au fluor adapté à l'âge, la limitation du sucre et l'apprentissage des bons gestes de brossage sont les piliers de la prévention.</p>
        `
            },
            {
                title: "Éviter les caries grâce au scellement des sillons",
                content: `
          <h4>En quoi consiste l'intervention ?</h4>
          <p>C'est un acte simple et indolore qui consiste à couler une résine fluide et protectrice dans les sillons des molaires permanentes pour empêcher les bactéries de s'y loger.</p>
          <h4>Pourquoi ?</h4>
          <p>Les sillons sont souvent trop profonds pour être nettoyés par la brosse, et l'émail des dents est plus fragile dans les années qui suivent leur éruption. Cela concerne donc les enfants de 6 à 15 ans.</p>
        `
            },
            {
                title: "Dents cassées",
                content: `
          <h4>Dents de lait (jusqu'à 6-7 ans)</h4>
          <p>Consultez votre dentiste, mais sans urgence absolue sauf si vous voyez une goutte de sang au niveau de la fracture. Ne jamais réimplanter une dent de lait expulsée.</p>
          <h4>Dents permanentes (à partir de 7 ans)</h4>
          <p>C'est une urgence si vous voyez du sang ou si la dent est expulsée. Essayez de retrouver le morceau, conservez-le dans du sérum physiologique ou du lait. Si la dent est expulsée, rincez-la sans la frotter et essayez de la remettre en place. Consultez en urgence. Plus le délai de réimplantation est court, plus les chances de succès sont élevées.</p>
        `
            },
        ]
    },
    {
        title: 'Les pathologies',
        fiches: [
            {
                title: "Caries",
                content: `<p>La carie est une infection qui détruit la dent. Non traitée, elle atteint le nerf et provoque des rages de dents ou des abcès. Pour la soigner, on retire la partie cariée et on reconstitue la dent, parfois après l'avoir dévitalisée.</p>`
            },
            {
                title: "La dévitalisation",
                content: `<p>Lorsqu'une carie profonde ou un choc a endommagé le nerf de manière irréversible, il faut le retirer, désinfecter les canaux et les obturer pour conserver la dent. Une dent dévitalisée est plus fragile et doit souvent être protégée par une couronne.</p>`
            },
            {
                title: "Les aphtes",
                content: `<p>Ce sont des ulcérations douloureuses souvent liées au stress, à des carences ou à des traumatismes. Ils guérissent seuls mais des traitements peuvent soulager la douleur.</p>`
            },
            {
                title: "Les abcès",
                content: `<p>Un abcès est une accumulation de pus due à une infection. Il peut être d'origine dentaire (dent nécrosée) ou parodontale (gencive). C'est une urgence qui nécessite la prise d'antibiotiques et un traitement de la cause.</p>`
            },
            {
                title: "Le bruxisme",
                content: `<p>C'est le grincement ou le serrement involontaire des dents, souvent la nuit. Il peut user prématurément les dents et causer des douleurs. Le traitement principal est le port d'une gouttière de protection nocturne pour limiter les dégâts.</p>`
            },
            {
                title: "L'examen radiologique panoramique",
                content: `<p>C'est une radio de l'ensemble de la denture, des mâchoires et des sinus. Elle est indispensable pour dépister de nombreuses anomalies non visibles à l'œil nu (caries, kystes, position des dents de sagesse, perte osseuse, etc.).</p>`
            },
        ]
    },
    {
        title: 'Les gencives',
        fiches: [
            {
                title: "Les gingivites",
                content: `<p>C'est une inflammation de la gencive, qui devient rouge, gonflée et saigne au brossage. Elle est le plus souvent causée par la plaque dentaire et le tartre. Le traitement repose sur un détartrage et une amélioration de l'hygiène.</p>`
            },
            {
                title: "Le traitement des parodontites",
                content: `<p>La parodontite est une aggravation de la gingivite, où l'infection atteint l'os de soutien des dents, provoquant un "déchaussement". Le traitement initial est le surfaçage. Un entretien à vie (maintenance parodontale) est ensuite crucial pour maintenir les résultats.</p>`
            },
            {
                title: "Le surfaçage",
                content: `<p>C'est un nettoyage en profondeur sous-gingival, réalisé sous anesthésie locale, pour éliminer tartre et bactéries des racines dentaires. Il permet de stopper l'infection et de permettre à la gencive de se rattacher à la dent.</p>`
            },
        ]
    },
    {
        title: 'Les prothèses',
        fiches: [
            {
                title: "Les différents types de prothèses dentaires",
                content: `<p>Il existe des prothèses fixes (couronnes, bridges) qui s'appuient sur les dents ou sur des implants, et des prothèses amovibles (partielles ou complètes) qui s'appuient sur la gencive et parfois sur les dents restantes.</p>`
            },
            {
                title: "Les inlays et les onlays",
                content: `<p>Ce sont des pièces en céramique ou composite réalisées au laboratoire qui permettent de reconstituer de manière très précise et durable une partie de dent abîmée, en évitant souvent de devoir la couronner.</p>`
            },
            {
                title: "Les prothèses amovibles partielles",
                content: `<p>Elles remplacent quelques dents. Elles peuvent être en résine ou, pour plus de confort et de stabilité, posséder un châssis métallique (stellite) qui s'appuie à la fois sur la gencive et sur les dents restantes.</p>`
            },
            {
                title: "Les bridges et ponts dentaires",
                content: `<p>Un bridge remplace une dent absente en s'appuyant sur les dents voisines. Avec l'avènement des implants, qui évitent de toucher aux dents adjacentes, leur utilisation tend à diminuer.</p>`
            },
            {
                title: "Les prothèses amovibles complètes",
                content: `<p>Communément appelés "dentiers", elles remplacent toutes les dents d'une mâchoire. Leur stabilité peut être grandement améliorée grâce à la pose d'implants.</p>`
            },
            {
                title: "Les inlay-cores",
                content: `<p>Lorsqu'une dent est très délabrée, on ne peut plus y poser directement une couronne. L'inlay-core est une pièce métallique ancrée dans la racine qui sert de "faux-moignon" solide pour supporter la future couronne.</p>`
            },
        ]
    },
    {
        title: 'Les implants',
        fiches: [
            {
                title: "Qu'est-ce qu'un implant dentaire ?",
                content: `<p>C'est une racine artificielle en titane posée dans l'os de la mâchoire. Après cicatrisation (ostéointégration), elle sert de support à une prothèse. Pour poser un implant, un volume d'os suffisant est nécessaire (évalué par scanner).</p>`
            },
            {
                title: "Pose d'implants dentaires",
                content: `<p>L'intervention se fait au cabinet sous anesthésie locale. On prépare un logement dans l'os pour y visser l'implant. La gencive est ensuite suturée par-dessus (technique enfouie) ou autour (technique non-enfouie).</p>`
            },
            {
                title: "L'analyse pré-implantaire",
                content: `<p>C'est le projet de la future prothèse qui guide la pose de l'implant. Une planification rigoureuse (parfois avec des guides chirurgicaux) est la clé d'un résultat esthétique et fonctionnel réussi.</p>`
            },
            {
                title: "Douleur et implants dentaires",
                content: `<p>Les suites opératoires sont généralement simples, surtout pour un ou deux implants. Une douleur légère, un gonflement (œdème) ou un bleu (hématome) peuvent apparaître et sont bien contrôlés par la prescription de médicaments adaptés.</p>`
            },
            {
                title: "La maintenance implantaire",
                content: `<p>Comme les dents, les implants peuvent se "déchausser" (péri-implantite) à cause d'une infection si l'hygiène est insuffisante. Un nettoyage rigoureux et des visites de contrôle régulières sont donc essentiels pour garantir leur longévité.</p>`
            },
            {
                title: "Votre passeport implantaire",
                content: `<p>Nous vous remettons un passeport de traçabilité qui contient toutes les informations sur votre implant (marque, modèle, numéro de lot). Ce document vous permet d'être suivi n'importe où dans le monde.</p>`
            },
        ]
    },
    {
        title: 'Les choix esthétiques',
        fiches: [
            {
                title: "Le blanchiment",
                content: `<p>Après un bilan et un détartrage, le blanchiment peut se faire au cabinet ou à domicile (technique ambulatoire) avec des gouttières sur-mesure. Une dent dévitalisée qui a noirci peut aussi bénéficier d'une technique de blanchiment interne spécifique.</p>`
            },
            {
                title: "Les colorations dentaires",
                content: `<p>Les colorants alimentaires (café, thé), le tabac ou certains médicaments peuvent tacher les dents. Un détartrage-polissage est souvent efficace. Il faut éviter les dentifrices trop abrasifs. Il est parfois possible de remplacer d'anciens amalgames par des composites plus esthétiques.</p>`
            },
        ]
    },
    {
        title: 'Prendre soin de ses dents',
        fiches: [
            {
                title: "Les 10 règles d'or d'une bonne hygiène dentaire",
                content: `<ol><li>Brossage 2 fois par jour, 2 minutes, avec une brosse à poils souples.</li><li>Mouvement de la gencive vers la dent.</li><li>Utiliser des brossettes interdentaires ou du fil dentaire tous les jours.</li><li>Brosser la langue.</li><li>Le dentifrice doit être fluoré.</li><li>Ne pas abuser des bains de bouche antiseptiques.</li><li>Changer de brosse tous les 3 mois.</li><li>Limiter les aliments sucrés et acides.</li><li>Ne rien manger/boire après le brossage du soir.</li><li>Une visite de contrôle annuelle est indispensable.</li></ol>`
            },
            {
                title: "Brosse à dents manuelle ou brosse à dents électrique ?",
                content: `<p>La brosse à dents électrique est souvent plus efficace pour éliminer la plaque. La brosse manuelle, si elle est bien utilisée, reste excellente. Le plus important est d'utiliser une brosse à poils souples et de la changer tous les 3 mois.</p>`
            },
        ]
    },
    {
        title: 'Quiz',
        fiches: [
            {
                title: "Vrai ou faux ?",
                content: `
          <p><strong>Le blanchiment abîme-t-il les dents ?</strong><br><strong>FAUX.</strong> Réalisé sous contrôle, il est inoffensif pour les tissus dentaires.</p>
          <p><strong>Les caries font-elles toujours mal ?</strong><br><strong>FAUX.</strong> Plus de la moitié des caries ne sont pas douloureuses au début, d'où l'intérêt du dépistage.</p>
          <p><strong>Le déchaussement des dents est-il une fatalité avec l'âge ?</strong><br><strong>FAUX.</strong> Des traitements et une bonne prévention permettent de le maîtriser.</p>
          <p><strong>Une gencive qui saigne est une gencive malade.</strong><br><strong>VRAI.</strong> C'est le signe d'une inflammation (gingivite) qui doit être traitée.</p>
          <p><strong>Une dent dévitalisée ne peut pas avoir de carie.</strong><br><strong>FAUX.</strong> Elle peut se carier comme une dent vivante, mais la carie ne sera pas douloureuse.</p>
          <p><strong>Les sodas, même sans sucre, sont mauvais pour les dents.</strong><br><strong>VRAI.</strong> Leur acidité attaque l'émail des dents.</p>
        `
            }
        ]
    }
]);
</script>
