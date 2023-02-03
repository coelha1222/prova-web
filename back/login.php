<?php
    require('conn.php');

    $nome = $_POST['nome'];
    $senha = $_POST['senha'];
    
    $result = $conn->query("SELECT id, nome FROM users WHERE nome = '$nome' AND password = '$senha'");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    if (sizeof($data) == 0) {
        http_response_code(403);
        exit();
    }
    
    echo json_encode($data[0]);
?>