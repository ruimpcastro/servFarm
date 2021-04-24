<template>
  <div class="page-structure">
    <div class="grid-container">
      
        <div class="card">
          <img id="image" src="https://p1.piqsels.com/preview/193/127/591/weak-remedy-medicine-no-person-doctor-science-remedies.jpg" alt="Request manipulated drugs">
          <h4>Request manipulated drugs</h4>
          <p class="price">0.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img id="image" src="https://ubmidrupalcandd.s3-eu-west-1.amazonaws.com/styles/article_image_620x420/s3/public/images/cpdarticle/covid%20vaccine.jpg?itok=dcczQ1m-" alt="Vaccines and injectables">
          <h4>Vaccines and injectables</h4>
          <p class="price">19.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img id="image" src="https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2560,h_1707,c_scale/v1588092257/iStock-528072248-scaled.jpg" alt="Weight, height and BMI">
          <h4>Weight,height and BMI</h4>
          <p class="price">4.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   

        <div class="card">
          <img id="image" src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Blood glucose determination">
          <h4>Blood glucose determination</h4>
          <p class="price">1.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>  

        <div class="card">
          <img id="image" src="https://onlinefirstaid.com/wp-content/uploads/2019/02/blood-pressure-1024x683.jpeg" alt="Blood pressure measurement">
          <h4>Blood pressure measurement</h4>
          <p class="price">1.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/12/bloodTestLipoprotein-475986550-770x553-650x428.jpg" alt="Cholesterol assessment">
          <h4>Cholesterol assessment</h4>
          <p class="price">5.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://propamed.com.br/wp-content/uploads/2018/09/Servicio-1aVisita.jpg" alt="Pharmaco-therapeutic follow-up">
          <h4>Pharmaco-therapeutic follow-up</h4>
          <p class="price">14.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://scx2.b-cdn.net/gfx/news/2019/pregnancytest.jpg" alt="Pregnancy tests">
          <h4>Pregnancy tests</h4>
          <p class="price">9.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://www.verywellhealth.com/thmb/sbQlk80GBPVRRW49jUvKc26Uogo=/2000x1335/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1154030721-974bcd6d70ff4489ba961317f1f3640f.jpg" alt="Expert advice on dermocosmetics (face, body and hair)">
          <h4>Expert advice on dermocosmetics</h4>
          <p class="price">15.99 euros</p>
          <div class="tooltip">Sobre
            <span class="tooltiptext">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</span>
          </div>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
          
        </div> 

    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>
/* ---------------Overlay tool-------------------------------------*/
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  visibility: hidden;
  width: 600px;
  height: 250px;
  background-color: rgba(4, 124, 84, 0.671);
  color: rgb(255, 255, 255);
  text-align: left center; /* COMO METO ESTA TRETA CENTRADA MAS SEM TOCAR NOS CANTOS DO BALAO*/
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
  
  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
  opacity: 0;
  transition: opacity 1s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
/* -------------------Caracteristicas das Imagens-------------*/
#image{
  width: 100%;
}
.sem-espaço{
      margin-block-end: 0;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  justify-content: center;
  grid-gap: 30px;
}

.grid-container > div {
  text-align: center;
}

#sobre-serviço {
  text-align:left;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;  
}
#sobre-serviço:hover {
  overflow: visible;
  white-space: normal;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>