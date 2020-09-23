<?php include 'header.php' ?>
<div id="layoutSidenav">
    <?php  include 'sidebar.php' ?>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Store Room</li>
                </ol>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <div class="card  text-white text-center mb-4">
                            <div class="card-body bg-primary">Light is OFF</div>
                            <div class="card-footer d-flex align-items-center justify-content-center">
                                <button type="button" class="btn btn-outline-primary">ON / OFF</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card  text-white text-center mb-4">
                            <div class="card-body bg-danger">Security Camera is OFF</div>
                            <div class="card-footer d-flex align-items-center justify-content-center">
                                <button type="button" class="btn btn-outline-danger">ON / OFF</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card text-white text-center mb-4">
                            <div class="card-body bg-success">Fan is ON</div>
                            <div class="card-footer d-flex align-items-center justify-content-center">
                                <button type="button" class="btn btn-outline-primary text-uppercase">ON / OFF</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card text-white text-center mb-4">
                            <div class="card-body bg-info">Door Lock</div>
                            <div class="card-footer d-flex align-items-center justify-content-center">
                                <button type="button" class="btn btn-outline-info text-uppercase">LOCK / unlock</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 2nd Row -->
                <!-- <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <div class="card  text-white text-center mb-4">
                            <div class="card-body bg-primary"> OFF</div>
                            <div class="card-footer d-flex align-items-center justify-content-between">
                                <button type="button" class="btn btn-outline-primary">ON</button>
                                <button type="button" class="btn btn-outline-danger">OFF</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div> -->
            </div>
        </main>
    </div>
</div>

<?php include 'footer.php' ?>


