<template>
  <NuxtLayout>
    <div class="main-content pa-md-4">
      <h1>Spaghetti alla Carbonara</h1>
      <v-card class="d-md-flex flex-md-row align-md-center py-md-4">
        <v-card-item class="w-25">
          <v-list>
            <v-list-item>
              <Icon
                name="icon-park-outline:chef-hat-one"
                size="1em"
              /> 
              Difficoltà: 
              <Icon
                name="icon-park:chef-hat-one"
                size="1em"
              /> 
              <Icon
                name="icon-park:chef-hat-one"
                size="1em"
              /> 
              <Icon
                name="icon-park-twotone:chef-hat-one"
                size="1em"
              />
              <Icon
                name="icon-park-twotone:chef-hat-one"
                size="1em"
              />
              <Icon
                name="icon-park-twotone:chef-hat-one"
                size="1em"
              />
            </v-list-item>
            <v-list-item>
              <Icon
                name="material-symbols:nest-clock-farsight-analog-outline-rounded"
                size="1em"
              /> 
              Preparazione: 30 min
            </v-list-item>
            <v-list-item>
              <Icon
                name="ph:cooking-pot-fill"
                size="1em"
              /> 
              Cottura: 20 min
            </v-list-item>
            <v-list-item>
              <Icon
                name="emojione-monotone:fork-and-knife-with-plate"
                size="1em"
              /> 
              Dosi: 4 persone
            </v-list-item>
            <v-list-item>
              <Icon
                name="uil:euro-circle"
                size="1em"
              /> 
              Costo: basso
            </v-list-item>
          </v-list>
        </v-card-item>
        <v-img
          cover
          height="300"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          class="w-50"
        />
        <v-card-item class="w-25">
          <v-table density="compact">
            <thead>
              <tr>
                <th colspan="3" class="text-left">
                  {{ table.title }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in nutrition"
                :key="item.name"
              >
                <td class="w-50">{{ item.name }}</td>
                <td class="w-25 text-right">{{ item.unitofmeasure }}</td>
                <td class="w-25 text-right">{{ item.quantity }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card-item>
      </v-card>

      <v-card>
        <v-card-title> Varianti: </v-card-title>
        <v-tabs
          bg-color="deep-purple-darken-4"
          center-active
        >
          <v-tab><NuxtLink>Carbonara di zucchine</NuxtLink></v-tab>
          <v-tab><NuxtLink>Carbonara di pollo</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di salmone</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di zucchine</NuxtLink></v-tab>
          <v-tab><NuxtLink>Carbonara di pollo</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di salmone</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di zucchine</NuxtLink></v-tab>
          <v-tab><NuxtLink>Carbonara di pollo</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di salmone</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di zucchine</NuxtLink></v-tab>
          <v-tab><NuxtLink>Carbonara di pollo</NuxtLink> </v-tab>
          <v-tab><NuxtLink>Carbonara di salmone</NuxtLink> </v-tab>
        </v-tabs>
      </v-card>

      <div class="ma-md-8">
        <h2 class="mt-md-2">Storia della Carbonara:</h2>
        <p class="text-justify">
          Dove sono nati gli spaghetti alla carbonara? Il Vicolo della Scrofa, per chi conosce Roma, è una delle stradine più caratteristiche e ricche di simboli. Proprio in una trattoria di questa strada, da cui il nome del vicolo, pare sia stata realizzata la prima carbonara, nel 1944. La storia più attendibile su questo primo piatto, infatti, racconta l'incontro tra gli ingredienti a disposizione dei soldati americani e la fantasia di un cuoco romano. Il risultato fu il prototipo degli spaghetti alla carbonara: uova, bacon (poi guanciale) e formaggio. Man a mano la ricetta è evoluta fino a quella che tutti conosciamo oggi e possiamo apprezzare a casa di amici romani veraci (e voraci!), nelle trattorie come nei ristoranti stellati della Capitale, in tutta Italia e all'estero, nelle innumerevoli versioni: con o senza pepe, con un tuorlo per persona o l'aggiunta di almeno un uovo intero, con guanciale o pancetta tesa.
Il condimento per la carbonara si prepara in una manciata di minuti, come tante altre prelibatezze romane (pensiamo alla cacio e pepe!). Pensate che occorrono soltanto guanciale speziato tagliato a striscioline, una crema dorata a base di tuorli (nella nostra versione) e tanto Pecorino romano grattugiato al momento.
Nella sua semplicità e nella ricchezza delle materie prime, la ricetta degli spaghetti alla carbonara è parente stretta di altri due capisaldi della cucina genuina italiana: l'amatriciana e la gricia! Strizza l'occhio anche alla pasta alla zozzona, un piatto robusto che unisce il meglio delle preparazioni di base della cucina laziale. Fate un tuffo nella Roma popolare insieme a noi e scoprite come realizzare dei cremosissimi spaghetti alla carbonara, fateci sapere se la nostra versione vi piace.
        </p>
      </div>
      <v-divider></v-divider>

      <div class="ma-md-8"> 
        <h2>Preparazione:</h2>
        <div class="d-md-flex flex-md-row flex-md-wrap">
          <v-card class="ingredients pa-md-2" width="500px">
            <v-card-title>Ingredienti:</v-card-title>
            <v-list class="d-md-flex flex-md-row flex-md-wrap w-100" elevation="1">
              <v-list-item class="w-50">Spaghetti <span>320 g</span></v-list-item>
              <v-list-item class="w-50">Tuorli (di uova medie) <span>6</span></v-list-item>
              <v-list-item class="w-50">Pepe nero <span>q.b.</span></v-list-item>
              <v-list-item class="w-50">Guanciale <span>150 g</span></v-list-item>
              <v-list-item class="w-50">Pecorino romano <span>50 g</span></v-list-item>
            </v-list>
          </v-card>
          <p class="text-justify">
            Per preparare gli spaghetti alla carbonara cominciate mettendo sul fuoco una pentola con l’acqua salata per cuocere la pasta. Nel frattempo eliminate la cotenna dal guanciale e tagliatelo prima a fette e poi a striscioline spesse circa 1cm. La cotenna avanzata potrà essere riutilizzata per insaporire altre preparazioni. 
            Versate i pezzetti di guanciale in una padella antiaderente e rosolate per circa 10 minuti a fiamma medio alta, fate attenzione a non bruciarlo altrimenti rilascerà un aroma troppo forte. Nel frattempo tuffate gli spaghetti nell’acqua bollente e cuoceteli al dente. Intanto versate i tuorli in una ciotola.
            Aggiungete il Pecorino e insaporite con il pepe nero. Amalgamate il tutto con una frusta a mano, sino ad ottenere una crema liscia.
            <br>
            Intanto il guanciale sarà giunto a cottura; spegnete il fuoco e utilizzando un mestolo prelevatelo dalla padella, lasciando il fondo di cottura all'interno della padella stessa. Trasferite il guanciale in una ciotolina e tenetelo da parte. Versate una mestolata d’acqua della pasta in padella, insieme al grasso del guanciale.
            Scolate la pasta al dente direttamente nel tegame con il fondo di cottura. Saltatela brevemente per insaporirla. Togliete dal fuoco e versate il composto di uova e Pecorino nel tegame. Mescolate velocemente per amalgamare.
            Per renderla ben cremosa, al bisogno, potete aggiungere poca acqua di cottura della pasta. Aggiungete il guanciale, mescolate un'ultima volta e servite subito gli spaghetti alla carbonara aggiungendo ancora del pecorino in superficie e un pizzico di pepe nero.
          </p>
        </div>
      </div>
      
      <v-card>
        <v-card-title class="font-weight-bold">Conservazione:</v-card-title>
        <v-card-text>
          Consigliamo di consumare al momento gli spaghetti alla carbonara.
        </v-card-text>
      </v-card>

      <div class="ma-md-8">
        <h3>Consigli:</h3>
        <p class="text-justify"> 
          Il guanciale non dovrà essere rosolato troppo, altrimenti potrebbe rilasciare un gusto amarognolo. Inoltre è bene aggiungere il guanciale solo all'ultimo per mantenere la sua croccantezza.
          <v-divider class="my-md-6"></v-divider>
          Per evitare l'effetto frittata è importante aggiungere il composto di tuorli solo a fuoco spento. La mantecatura è un passaggio importante, bisogna mescolare sino a che la cremina non si è addensata. E potete regolare la consistenza aggiungendo acqua di cottura della pasta.
          <v-divider class="my-md-6"></v-divider>
          Potete utilizzare metà dose di Pecorino e metà dose di Parmigiano per una versione più delicata.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>

export default {
  data () {
    return {
      table: {
        title : "Valori Nutrizionali"
      }, 
      nutrition: [
        {
          name: 'Energia',
          unitofmeasure: 'Kcal',
          quantity: 680,
        },
        {
          name: 'Carboidrati',
          unitofmeasure: 'g',
          quantity: 66.9,
        },
        {
          name: 'di cui zuccheri',
          unitofmeasure: 'g',
          quantity: 2.9,
        },
        {
          name: 'Proteine',
          unitofmeasure: 'g',
          quantity: 19.3,
        },
        {
          name: 'Grassi',
          unitofmeasure: 'g',
          quantity: 13.57,
        },
        {
          name: 'di cui saturi',
          unitofmeasure: 'g',
          quantity: 13.57,
        },
        {
          name: 'Fibre',
          unitofmeasure: 'g',
          quantity: 2.2,
        },
        {
          name: 'Colesterolo',
          unitofmeasure: 'mg',
          quantity: 383,
        },
        {
          name: 'Sodio',
          unitofmeasure: 'mg',
          quantity: 586,
        },
      ],
    }
  },
}

</script>


<style scoped>
.main-content {
  min-height: 100%;
}

table th{
  background-image: linear-gradient(to bottom right, #fff, #f4f4f4);
}

.ingredients {
  height: max-content;
  background-image: linear-gradient(to bottom right, #fff, #f4f4f4);
  border: 1px solid #f4f4f4;
}

</style>