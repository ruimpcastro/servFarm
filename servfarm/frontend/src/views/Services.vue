<template>
  <div class="page-structure">
    <div>
      <div class="card">
        <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg" alt="Glucose test" style="width:100%">
        <h1>Glucose test</h1>
        <p class="price">2.00 euros</p>
        <p id="sobre-serviço">A blood glucose test is used to find out if your blood sugar levels are in the healthy range. It is often used to help diagnose and monitor diabetes.</p>
        <p><button>Schedule service</button></p>
      </div>   
  </div>
 </div>

</template>

<script>
export default {

}
</script>

<style>
#sobre-serviço{
  text-align:left;
  margin-left: 10px;
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