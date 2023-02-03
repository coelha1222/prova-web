<?php
    require('conn.php');
    
    $name = $_POST['name'];
    $id = $_POST['id'];
    $musica = $_POST['name'];
    $artista = $_POST['name'];
    $genero = $_POST['name'];
    
    $conn->query("INSERT INTO musica (name,id, musica, artista , genero) VALUES ('$nome', '$id', '$musica', '$artista', '$album', '$genero')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>