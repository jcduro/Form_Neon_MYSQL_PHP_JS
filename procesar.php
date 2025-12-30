<?php
// Ajusta la ruta a tu conexión PDO
require_once __DIR__ . '/conexion.php'; // <-- verifica que este archivo existe y crea $pdo

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['status' => 'error', 'msg' => 'Método no permitido']));
}

// Recolección y limpieza
$nombre   = trim($_POST['nombre']   ?? '');
$correo   = trim($_POST['correo']   ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$pais     = trim($_POST['pais']     ?? '');
$ciudad   = trim($_POST['ciudad']   ?? '');

// Validaciones
if (!$nombre || !$correo || !$telefono || !$pais || !$ciudad) {
    http_response_code(400);
    exit(json_encode(['status' => 'error', 'msg' => 'Faltan campos obligatorios']));
}

if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit(json_encode(['status' => 'error', 'msg' => 'Correo inválido']));
}

try {
    $sql = "INSERT INTO form_neon (nombre, correo, telefono, pais, ciudad)
            VALUES (:nombre, :correo, :telefono, :pais, :ciudad)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':nombre'   => $nombre,
        ':correo'   => $correo,
        ':telefono' => $telefono,
        ':pais'     => $pais,
        ':ciudad'   => $ciudad
    ]);

// Al final del try
header('Location: /form_neon.php?ok=1');
exit;
} catch (PDOException $e) {
    error_log('Error al insertar: ' . $e->getMessage());
    http_response_code(500);
    header('Location: /form_neon.php?error=1');
   exit;
}


