&lt;!-- markdownlint-disable MD033 --&gt;
&lt;h1 align="center"&gt;
  &lt;img src="https://img.shields.io/badge/🌐-Form_Neon-00f3ff?style=for-the-badge&logo=html5&logoColor=white" alt="Form Neon"&gt;
&lt;/h1&gt;

&lt;p align="center"&gt;
  Formulario neon azul + listado dinámico 100 % responsive.&lt;br&gt;
  Guarda país/ciudad en MySQL vía AJAX &lt;i&gt;sin recargar&lt;/i&gt;.
&lt;/p&gt;

---

## 📑 Índice
- [🚀 Demo](#-demo)
- [🛠️ Tecnologías](#️-tecnologías)
- [📦 Características](#-características)
- [🗃️ Base de datos](#️-base-de-datos)
- [⚙️ Instalación](#️-instalación)
- [📂 Estructura](#-estructura)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## 🚀 Demo
![Vista previa](preview.gif)  
*(próximamente)*

---

## 🛠️ Tecnologías
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

---

## 📦 Características
| ✅ | Descripción |
|---|---|
| 🎨 | Diseño **neon azul** con sombras y bordes luminosos |
| 📱 | Totalmente **responsive** |
| 🔄 | Envío **AJAX** (sin recargar página) |
| 🌍 | Selector dinámico de **país → ciudad** |
| 🛡️ | Prevención de **SQL-injection** con PDO y prepared statements |
| 📋 | Listado **en tiempo real** tras cada registro |
| ⚡ | Código **limpio y comentado** |

---

## 🗃️ Base de datos
**Nombre:** `form_neon`  
**Tabla:** `registros`

```sql
CREATE DATABASE form_neon CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE form_neon;

CREATE TABLE registros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

bash
git clone https://github.com/TU_USUARIO/form_neon.git


📂 Estructura


form_neon/
├── index.html              # Vista principal
├── procesar.php            # Guardado (AJAX)
├── listar.php              # Listado de registros
├── css/form_neon.css       # Estilos neon + responsive
├── js/form_neon.js         # Lógica país/ciudad + AJAX
└── conexion/conexion.php   # Conexión PDO


🤝 Contribuir
¡Las mejoras son bienvenidas!
Haz un fork → PR y listo.
📄 Licencia
Este proyecto está bajo la MIT License - ver el archivo LICENSE para detalles.
<div align="center">
  Hecho con 💙 y neones
</div>

