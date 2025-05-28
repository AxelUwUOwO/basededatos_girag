<?php
require 'db.php';
$id = $_POST['id'];
$estado = $_POST['estado'];

$stmt = $pdo->prepare("UPDATE paquetes SET estado = ? WHERE id = ?");
$stmt->execute([$estado, $id]);
echo json_encode(['mensaje' => 'Estado actualizado']);
