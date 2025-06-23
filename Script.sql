-- Inserciones para ConfigurationItem

INSERT INTO ConfigurationItem (
    nombre_ci, tipo_ci, descripcion, numero_serie, version,
    fecha_adquisicion, estado_actual, responsable, fecha_cambio,
    descripcion_cambio, documentacion, nivel_seguridad, cumplimiento,
    estado_configuracion, numero_licencia, fecha_vencimiento, ambiente
) VALUES
('Servidor Web 1', 'Servidor', 'Servidor Apache para hosting web', 'SN-12345', '2.4.51',
 '2023-01-10', 'Activo', 'Juan Pérez', '2024-05-01',
 'Actualización de seguridad', 'Manual técnico disponible en wiki interna', 'Alto', 'PCI-DSS',
 'Configurado', 'LIC-APACHE-01', '2026-01-10', 'PROD'),

('Base de Datos 1', 'Base de Datos', 'MySQL para gestión de datos de clientes', 'SN-67890', '8.0.35',
 '2022-11-05', 'Activo', 'María García', '2024-04-15',
 'Cambio de versión y parcheo', 'Backup y restauración documentada', 'Crítico', 'GDPR',
 'Configurado', 'LIC-MYSQL-2022', '2025-11-05', 'PROD'),

('Switch Core', 'Red', 'Switch principal de la red interna', 'SN-ABCDE', '1.2.0',
 '2021-08-20', 'Mantenimiento', 'Carlos Ruiz', '2023-12-10',
 'Reemplazo de módulo dañado', 'Plano de red actualizado', 'Medio', 'ISO 27001',
 'En revisión', 'LIC-CISCO-001', '2027-08-20', 'DEV');

-- Inserciones para RelacionCI

INSERT INTO RelacionCI (ci_padre_id, ci_hijo_id, tipo_relacion) VALUES
(1, 2, 'Dependencia'),
(2, 3, 'Conectividad'),
(1, 3, 'Monitoreo');
