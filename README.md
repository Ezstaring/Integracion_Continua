# 🧩 API de Productos

Este proyecto es una aplicación **full stack** desarrollada con **Django REST Framework (backend)** y **HTML, CSS y JavaScript (frontend)**, que permite gestionar un inventario de productos: crear, listar, actualizar y eliminar registros de forma dinámica.

---

## 🚀 Características principales

- CRUD completo (Crear, Leer, Actualizar y Eliminar productos).
- Backend implementado con **Django REST Framework**.
- Frontend en **HTML, CSS y JavaScript puro**.
- Comunicación entre frontend y backend mediante **fetch API (JSON)**.
- Base de datos gestionada con **SQLite**.
- Administración mediante panel **Django Admin**.
- Arquitectura limpia y separada por capas (backend/frontend).

---

## 🛠️ Tecnologías utilizadas

### **Backend**
- Python 3.13
- Django 5.2.7
- Django REST Framework
- SQLite3
- CORS Headers

### **Frontend**
- HTML5
- CSS3
- JavaScript (ES6)

---

## 🧱 Estructura del proyecto

```
api_productos/
 ├── backend/
 │    ├── backend/
 │    ├── productos/
 │    ├── manage.py
 │    └── db.sqlite3
 │    └── requirements.txt
 │
 └── frontend/
      ├── index.html
      ├── style.css
      └── app.js
```

---

## ⚙️ Instalación y ejecución

### **1. Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/api_productos.git
cd api_productos/backend
```

### **2. Crear entorno virtual**
```bash
python3 -m venv venv
source venv/bin/activate  # En Mac/Linux
venv\Scripts\activate     # En Windows
```

### **3. Instalar dependencias**
```bash
pip install -r requirements.txt
```

### **4. Aplicar migraciones**
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

### **5. Crear superusuario**
```bash
python3 manage.py createsuperuser
```

### **6. Ejecutar el servidor**
```bash
python3 manage.py runserver
```

El backend estará disponible en:
👉 `http://127.0.0.1:8000/`

---

## 💻 Uso del Frontend

1. Abre la carpeta `/frontend`.
2. Ejecuta el archivo `index.html` con Live Server (o simplemente ábrelo en tu navegador).
3. Desde la interfaz puedes:
   - Agregar nuevos productos.
   - Ver la lista de productos.
   - Eliminar productos.
4. La información se almacena y sincroniza en la base de datos Django.

---

## 🧠 Endpoints principales

| Método | Endpoint | Descripción |
|--------|-----------|-------------|
| `GET` | `/api/productos/` | Listar todos los productos |
| `POST` | `/api/productos/` | Crear un nuevo producto |
| `GET` | `/api/productos/{id}/` | Ver detalles de un producto |
| `PUT` | `/api/productos/{id}/` | Actualizar un producto |
| `DELETE` | `/api/productos/{id}/` | Eliminar un producto |

---

## 👤 Panel de administración

Accede a:
👉 `http://127.0.0.1:8000/admin/`

Con tu usuario y contraseña de superusuario podrás gestionar todos los productos desde una interfaz visual.

---

## 📄 Licencia
Proyecto de uso académico.  
Creado por **Juan David Gonzalez Barrera (Ezstaring)** 🧠 — Estudiante de Ingeniería de Software.

---

## 🧩 Próximos pasos (opcional)
- Implementar autenticación JWT (tokens de usuario).
- Añadir función de editar productos desde el frontend.
- Desplegar el proyecto en **Render** o **Railway**.
- Documentar API con **Swagger o Postman**.
