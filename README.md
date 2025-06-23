# sa_tarea3_201122881
## Autor

Douglas  <br>
201122881 <br>
Software avanzado <br>
Escuela de Ciencias y Sistemas, USAC

# CMDB API - Configuration Management Database

API RESTful para gestionar ítems de configuración (CIs) en una base de datos CMDB. Incluye operaciones CRUD para elementos, relaciones entre ellos, ambientes (DEV/QA/PROD), historial de cambios y soporte para auditoría básica.

---

## Tecnologías utilizadas

- Node.js con Express
- MySQL
- dotenv para configuración
- Arquitectura modular MVC
- Estilo RESTful

---

## Estructura del proyecto

```
cmdb-api/
├── controllers/          # Lógica de negocio (handlers)
│   ├── ci.controller.js
│   └── relacion.controller.js
├── models/               # Conexión y acceso a datos
│   ├── db.js
│   ├── ci.model.js
│   └── relacion.model.js
├── routes/               # Rutas de la API
│   ├── ci.routes.js
│   └── relacion.routes.js
├── seed/                 # Script de carga de datos de ejemplo
│   └── seed.js
├── app.js                # Punto de entrada principal
├── .env                  # Variables de entorno
└── README.md             # Documentación
```

---

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/dougdari/sa_tarea3_201122881
cd cmdb-api
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` y configura tu base de datos:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123H@mbre
DB_NAME=cmdb
DB_PORT=3306
PORT=3000
```

---

## Ejecutar el proyecto

### En modo desarrollo con nodemon

```bash
npm run dev
```

### En modo producción

```bash
node app.js
```

---

## Insertar datos de ejemplo

```bash
node seed/seed.js
```

---

## Esquema de la base de datos (MySQL)

```sql
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
```

---

## Documentación de la API

### Configuration Items (CI)

#### `GET /api/cis`

Obtiene todos los ítems de configuración.

#### `GET /api/cis/:id`

Obtiene un ítem específico por su ID.

#### `POST /api/cis`

Crea un nuevo ítem de configuración.

##### Ejemplo de request:

```json
{
  "nombre_ci": "Servidor1",
  "tipo_ci": "Hardware",
  "descripcion": "Servidor principal",
  "numero_serie": "SN123456",
  "version": "v1.0",
  "fecha_adquisicion": "2022-01-01",
  "estado_actual": "Activo",
  "responsable": "Infraestructura",
  "fecha_cambio": "2022-02-01",
  "descripcion_cambio": "Instalación inicial",
  "documentacion": "https://doc.link",
  "nivel_seguridad": "Alto",
  "cumplimiento": "Cumple",
  "estado_configuracion": "Aprobado",
  "numero_licencia": "XYZ123",
  "fecha_vencimiento": "2025-01-01",
  "ambiente": "PROD"
}
```

#### `PUT /api/cis/:id`

Actualiza un ítem de configuración existente.

#### `DELETE /api/cis/:id`

Elimina un ítem por su ID.

---

### Relaciones entre CIs

#### `GET /api/relaciones`

Lista todas las relaciones entre ítems.

#### `GET /api/relaciones/:id`

Obtiene una relación específica.

#### `POST /api/relaciones`

Crea una nueva relación entre dos ítems.

##### Ejemplo de request:

```json
{
  "ci_padre_id": 1,
  "ci_hijo_id": 2,
  "tipo_relacion": "depende de"
}
```

#### `PUT /api/relaciones/:id`

Actualiza una relación entre ítems.

#### `DELETE /api/relaciones/:id`

Elimina una relación específica.

---

## Autenticación

Actualmente la API no requiere autenticación. Puede extenderse fácilmente con JWT o sesiones.

---

## Consideraciones

- El campo `ambiente` puede ser: `"DEV"`, `"QA"` o `"PROD"`.
- Toda relación entre CIs debe tener un tipo (`depende de`, `usa`, `conectado a`, etc.)
- Se recomienda mantener la trazabilidad con `descripcion_cambio` y `fecha_cambio`.


---

## Estado del proyecto

Funcional  
En progreso: búsqueda avanzada, Swagger, seguridad con JWT.
