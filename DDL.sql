CREATE TABLE ConfigurationItem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_ci VARCHAR(100) NOT NULL,
    tipo_ci VARCHAR(50) NOT NULL,
    descripcion TEXT,
    numero_serie VARCHAR(100),
    version VARCHAR(50),
    fecha_adquisicion DATE,
    estado_actual VARCHAR(50),
    responsable VARCHAR(100),
    fecha_cambio DATE,
    descripcion_cambio TEXT,
    documentacion TEXT,
    nivel_seguridad VARCHAR(50),
    cumplimiento VARCHAR(50),
    estado_configuracion VARCHAR(50),
    numero_licencia VARCHAR(100),
    fecha_vencimiento DATE,
    ambiente VARCHAR(10)
);

CREATE TABLE RelacionCI (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ci_padre_id INT,
    ci_hijo_id INT,
    tipo_relacion VARCHAR(50),
    FOREIGN KEY (ci_padre_id) REFERENCES ConfigurationItem(id),
    FOREIGN KEY (ci_hijo_id) REFERENCES ConfigurationItem(id)
);
