<template>
  <div class="page-structure">
    <div class="grid-container">
      
        <div class="card">
          <img id="image" src="https://p1.piqsels.com/preview/193/127/591/weak-remedy-medicine-no-person-doctor-science-remedies.jpg" alt="Manipulated drugs">
          <h4>Manipulated drugs</h4>
          <p class="price">10.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img id="image" src="https://ubmidrupalcandd.s3-eu-west-1.amazonaws.com/styles/article_image_620x420/s3/public/images/cpdarticle/covid%20vaccine.jpg?itok=dcczQ1m-" alt="Vaccines and injectables">
          <h4>Vaccines and injectables</h4>
          <p class="price">19.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img id="image" src="https://res.cloudinary.com/grohealth/image/upload/$wpsize_!_cld_full!,w_2560,h_1707,c_scale/v1588092257/iStock-528072248-scaled.jpg" alt="Weight, height and BMI">
          <h4>Weight,height and BMI</h4>
          <p class="price">4.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   

        <div class="card">
          <img id="image" src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Blood glucose determination">
          <h4>Blood glucose determination</h4>
          <p class="price">1.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>  

        <div class="card">
          <img id="image" src="https://onlinefirstaid.com/wp-content/uploads/2019/02/blood-pressure-1024x683.jpeg" alt="Blood pressure measurement">
          <h4>Blood pressure measurement</h4>
          <p class="price">1.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/12/bloodTestLipoprotein-475986550-770x553-650x428.jpg" alt="Cholesterol assessment">
          <h4>Cholesterol assessment</h4>
          <p class="price">2.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="http://www.healthworkscollective.com/wp-content/uploads/2015/03/Doctor%20and%20patient_4.jpg" alt="Pharmaco-therapeutic follow-up">
          <h4>Pharmaco-therapeutic follow-up</h4>
          <p class="price">9.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://scx2.b-cdn.net/gfx/news/2019/pregnancytest.jpg" alt="Pregnancy tests">
          <h4>Pregnancy tests</h4>
          <p class="price">9.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img id="image" src="https://www.verywellhealth.com/thmb/sbQlk80GBPVRRW49jUvKc26Uogo=/2000x1335/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1154030721-974bcd6d70ff4489ba961317f1f3640f.jpg" alt="Expert advice on dermocosmetics (face, body and hair)">
          <h4>Expert advice on dermocosmetics</h4>
          <p class="price">15.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
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