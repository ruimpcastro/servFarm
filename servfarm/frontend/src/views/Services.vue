<template>
  <div class="page-structure">
    <div class="grid-container">
      
        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Manipulated drugs" style="width:100%">
          <h4>Manipulated drugs</h4>
          <p class="price">10.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Administration of vaccines and injectables" style="width:100%">
          <h4>Administration of vaccines and injectables</h4>
          <p class="price">19.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   
      
        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Weight, height and BMI" style="width:100%">
          <h4>Weight, height and BMI</h4>
          <p class="price">4.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>   

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Blood glucose determination" style="width:100%">
          <h4>Blood glucose determination</h4>
          <p class="price">1.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div>  

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Blood pressure measurement" style="width:100%">
          <h4>Blood pressure measurement</h4>
          <p class="price">1.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Cholesterol assessment" style="width:100%">
          <h4>Cholesterol assessment</h4>
          <p class="price">2.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Pharmaco-therapeutic follow-up" style="width:100%">
          <h4>Pharmaco-therapeutic follow-up</h4>
          <p class="price">9.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Pregnancy tests" style="width:100%">
          <h4>Pregnancy tests</h4>
          <p class="price">9.99 euros</p>
          <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
          <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
        </div> 

        <div class="card">
          <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Expert advice on dermocosmetics (face, body and hair)" style="width:100%">
          <h4>Expert advice on dermocosmetics (face, body and hair)</h4>
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