CREATE DATABASE girag_logistica;

USE girag_logistica;

CREATE TABLE paquetes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT NOT NULL,
    estado ENUM('En bodega', 'En tránsito', 'Entregado', 'Retenido') DEFAULT 'En bodega',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
