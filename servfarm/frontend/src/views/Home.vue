<template>
  <div class="page-structure">
    <div id="home-style">
      <div id="home-size">
        <h1 id="intro">Hi, We're Farmácia Online São Miguel</h1>
        <img id="intro-img" src="https://riterxcare.com/wp-content/uploads/2018/09/rite-rx-care-manufacturer.jpg" alt="">

      <div class="product-filler">
      <div class="sort">
        <div class="collection-sort">
          <div class="products">
            <div class="product-card">
              <div class="product-image">
            <img src="https://p1.piqsels.com/preview/193/127/591/weak-remedy-medicine-no-person-doctor-science-remedies.jpg">
            <div class="product-info">
              <p>Request manipulated drugs</p>
              <p>0.99 euros</p>
              <div class="tooltip">Sobre
                <span class="tooltiptext">
                  <p>
                    The manipulated products are drugs subject to medical prescription,
                    prepared in a workshop pharmacy, under the responsibility of a pharmacist and respecting good manufacturing practices.
                    These medications have concentrations and presentations adapted to the
                    user's needs, allowing greater adherence to therapy and, as a consequence, better treatment efficiency.
                  </p>
                  <p>
                    A current prescription is required, prescribed by a doctor with a professional
                    collection-sort from the Portuguese Medical Association and must be seen at the time of dismissal.
                  </p>
                  <p>To be able to do a manipulation we always need the
                    prior presentation of a medical prescription, whether delivered in person or sent by email
                    (you can attach it in a photo or digital document format).
                  </p>
                </span>
              </div>
              <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
            </div>
          </div>
        </div>   
          
        <div class="product-card">
          <div class="product-image">
            <img src="https://www.adn.com/resizer/Y2Laudn_v5mwrpH0sLhThYX0sQU=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/adn/PHGRIKHFJNDVTFXBC4VODYVO24.jpg">
            <div class="product-info">
              <p>Vaccines and injectables</p>
              <p>19.99 euros</p>
              <div class="tooltip">Sobre
                <span class="tooltiptext">
                  <p>
                    Each vaccine has a recommended administration 
                    route and site. This information is included in the manufacturer’s package insert for each vaccine.
                    Deviation from the recommended route may reduce vaccine efficacy or increase local adverse reactions.
                  </p>
                  <p>Vaccine administration routes include:</p>
                  <p>- Oral route: administered by mouth;</p>
                  <p>- Subcutaneous route: injected into the area just beneath the skin into the fatty, connective tissue;</p>
                  <p>- Intramuscular route: injected into muscle tissue;</p>
                  <p>- Intradermal route: injected into layers of the skin;</p>
                  <p>- Intranasal route: administered into the nose.</p>
                </span>
              </div>
              <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
            </div>
          </div>
        </div>  

        <div class="product-card">
          <div class="product-image">
            <img src="https://3eaf214443cb92a1.cdn.gocache.net/wp-content/uploads/2018/06/iStock-491965869.jpg">
            <div class="product-info">
              <p>Blood glucose determination</p>
              <p>1.99 euros</p>
              <div class="tooltip">Sobre
                <span class="tooltiptext">
                  <p>
                    The glucose test, is done in order to check the amount of sugar in the blood, which is called glycemia,
                    and is considered the main test to diagnose diabetes.
                  </p>
                  <p>
                    To perform the exam, the person must be fasting, so that the result is not influenced and the result can
                    be a false positive for diabetes, for example. From the result of the exam, the doctor may
                    indicate readjustment of the diet, use of antidiabetic drugs, such as Metformin, for example, or even insulin.
                  </p>
                </span>
              </div>
              <p class="sem-espaço"><button><router-link :to="{ name: 'Checkout' }">Schedule service</router-link></button></p>
            </div>
          </div>
        </div> 
      </div>
      </div>
  </div>
  </div>

      <div id="description">
        <h3 id="description-title">A Pharmacy for everyone</h3>
        <h4 id="description-subtitle">Responsible Healing</h4>
        <p class="description-text">
          We care about the well-being of 
          each customer who walks through our doors. 
          That’s s why we’ve dedicated so much time
          to ensuring we stock the widest range of medical products,
          offer the highest quality health services,
          and retain the best staff possible.
          </p>
          <p class="description-text">
          As a middleman between your doctor’s prescriptions and
          your own well being, we strive to provide personalized
          and professional attention, as well as medication
          management protocols that inspire customers to seek out
          the medications and advice they need in order to get better.
          Trust our Pharmacy to provide you with the care you deserve.
          </p>
      </div>
      <div id="about">
        <h3 id="about-title">Opening hours</h3>
        <h4 id="about-subtitle">Come visit</h4>
        <ul id="about-text">
          <li>Mon-Fri: 9am - 6pm</li>
          <li>Sat: 10am - 2am</li>
          <li>Sun: Closed</li>
        </ul>
      </div>
      <!-- Eventos e calendário para utilizadores autenticados -->
      <div id="btn-agenda">
        <button class="agenda">Check agenda</button>
        <button class="agenda">Mark an appointment</button>
        </div>
      </div>
    
</div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
