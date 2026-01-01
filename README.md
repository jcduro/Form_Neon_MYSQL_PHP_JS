
## 📑 Descripcion

<p align="center">
  Formulario neon azul + listado dinámico 100 % responsive.<br>
  Guarda país/ciudad en MySQL vía AJAX <i>sin recargar</i>.
</p>

---

## 📑 Índice
- [🖼️ Vista Previa](#-vista-previa)
- [🚀 Demo](#-demo)
- [🛠️ Lenguajes y Herramientas](#️-lenguajes-y-herramientas)
- [📦 Características](#-características)
- [🗃️ Base de datos](#️-base-de-datos)
- [📂 Estructura](#-estructura)
- [🤝 Contribuir](#-contribuir)
- [📄 Licencia](#-licencia)

---

## 🖼️ Vista previa

![Formulario_Neon](preview_formneon.gif)

--- 

## 🚀 Demo
[Formulario_Neon](https://jcduro.bexartideas.com/proyectos/dashjc/form_neon/form_neon.php)


---

## 📊 Lenguajes y Herramientas

[![My Skills](https://skillicons.dev/icons?i=html,css,js,php,mysql,github,vscode,windows,&theme=light&perline=8)](https://skillicons.dev)

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
**Tabla:** `form_neon`  

---

```sql

CREATE TABLE form_neon (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  ciudad VARCHAR(100) NOT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

```bash
git clone https://github.com/TU_USUARIO/form_neon.git
```
---

## 📂 Estructura

```text
form_neon/
├── index.html              # Vista principal
├── procesar.php            # Guardado (AJAX)
├── listar.php              # Listado de registros
├── css/form_neon.css       # Estilos neon + responsive
├── js/form_neon.js         # Lógica país/ciudad + AJAX
└── conexion/conexion.php   # Conexión PDO
```
---

## 🤝 Contribuir
¡Las mejoras son bienvenidas!
Haz un fork → PR y listo.

--- 

## 📄 Licencia
Este proyecto está bajo la MIT License - ver el archivo LICENSE para detalles.
<div align="center">
  Hecho con 💙 y neones
</div>

