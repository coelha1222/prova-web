<?php

    require 'conn.php';

    $Id = $_GET['id'];

    $result = $conn->query("SELECT * FROM musica WHERE id = $Id");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    
    echo json_encode($data);
