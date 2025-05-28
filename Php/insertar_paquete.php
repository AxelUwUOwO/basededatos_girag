<?php
require 'db.php';

$codigo = trim($_POST['codigo']);
$descripcion = trim($_POST['descripcion']);

// Validaciones estrictas
if (empty($codigo) || empty($descripcion)) {
    echo json_encode(['mensaje' => 'Todos los campos son obligatorios.']);
    exit;
}

if (!preg_match('/^[A-Z0-9\-]{3,50}$/i', $codigo)) {
    echo json_encode(['mensaje' => 'Código inválido: solo letras, números o guiones (3-50 caracteres).']);
    exit;
}

if (strlen($descripcion) > 500) {
    echo json_encode(['mensaje' => 'La descripción no puede superar los 500 caracteres.']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO paquetes (codigo, descripcion) VALUES (?, ?)");
    $stmt->execute([$codigo, $descripcion]);
    echo json_encode(['mensaje' => 'Paquete registrado con éxito.']);
} catch (PDOException $e) {
    if ($e->errorInfo[1] == 1062) {
        echo json_encode(['mensaje' => 'El código del paquete ya existe.']);
    } else {
        echo json_encode(['mensaje' => 'Error en servidor: ' . $e->getMessage()]);
    }
}
