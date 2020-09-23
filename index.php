<?php include 'header.php' ?>
<div id="layoutSidenav">
    <?php include 'sidebar.php' ?>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid">
                <h1 class="mt-4">Dashboard</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
                <div class="row">
                    <div class="col-xl-3 col-md-6">
                        <div class="card  text-white text-center mb-4">
                            <div class="card-body bg-primary text-uppercase">Bedroom</div>
                            <a href="bedroom.php" style="text-decoration: none;">
                                <div class="card-footer d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-outline-primary">Switch Board</button>
                                </div>
                            </a>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card text-white text-center mb-4">
                            <div class="card-body bg-secondary text-uppercase">Kitchen</div>
                            <a href="kitchen.php" style="text-decoration: none;">
                                <div class="card-footer d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-outline-secondary">Switch Board</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card text-white text-center mb-4">
                            <div class="card-body bg-success text-uppercase">Store Room</div>
                            <a href="storeroom.php" style="text-decoration: none;">
                                <div class="card-footer d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-outline-success">Switch Board</button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="card text-white text-center mb-4">
                            <div class="card-body bg-info text-uppercase">Garden</div>
                            <a href="garden.php" style="text-decoration: none;">
                                <div class="card-footer d-flex align-items-center justify-content-center">
                                    <button type="button" class="btn btn-outline-info">Switch Board</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>

<?php include 'footer.php' ?>


