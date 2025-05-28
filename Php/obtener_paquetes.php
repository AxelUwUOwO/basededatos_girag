<?php
require 'db.php';
$stmt = $pdo->query("SELECT * FROM paquetes ORDER BY fecha_registro DESC");
echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
