<?php
// Configurações de conexão com o banco de dados
$servername = 'localhost'; // Nome do servidor
$username = 'root'; // Nome de usuário do banco de dados
$password = ''; // Senha do banco de dados
$dbname = 'teste'; // Nome do banco de dados

// Conecta ao banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    
    // Prepara e executa a consulta SQL para inserir os dados no banco de dados
    $sql = "INSERT INTO dados (nome, email) VALUES ('$name', '$email')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Registro inserido com sucesso!";
    } else {
        echo "Erro ao inserir o registro: " . $conn->error;
    }
    
    // Fecha a conexão com o banco de dados
    $conn->close();
}
?>