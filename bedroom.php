<?php include 'header.php' ?>
<div id="layoutSidenav">
  <?php  include 'sidebar.php' ?>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Bedroom</li>
        </ol>
        <div class="row">
          <div class="col-xl-3 col-md-6">
            <div class="card  text-white text-center mb-4">
              <div class="card-body bg-primary text-uppercase bedroomLightOneStatus "></div>
              <div class="card-footer d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-outline-primary buttonBedroomLightOne">ON / OFF</button>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card  text-white text-center mb-4">
              <div class="card-body bg-info text-uppercase bedroomFanStatus"></div>
              <div class="card-footer d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-outline-info buttonBedroomFan">ON / OFF</button>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card text-white text-center mb-4">
              <div class="card-body bg-success text-uppercase bedroomTvStatus"></div>
              <div class="card-footer d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-outline-success buttonBedroomTv">ON / OFF</button>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="card text-white text-center mb-4">
              <div class="card-body bg-danger text-uppercase beddroomLightTwoStatus"></div>
              <div class="card-footer d-flex align-items-center justify-content-center">
                <button type="button" class="btn btn-outline-danger buttonBeddroomLightTwo">ON / OFF</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>

<?php include 'footer.php' ?>


