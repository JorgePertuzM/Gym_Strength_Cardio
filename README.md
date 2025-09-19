## Instalación y configuración del proyecto

### 1. Clonar el repositorio

```bash
    git@github.com:JorgePertuzM/Gym_Strength_Cardio.git
```

```Bash
    cd Gym_Strength_Cardio
```

### 2. Instalar dependencias

```bash
    npm install
```

### 3. Configurar variables de entorno

Crea un archivo **.env** en la raíz del proyecto con el siguiente contenido:

```Bash
    # App
    APP_PORT=3000
    APP_HOST=localhost
    NODE_ENV=development

    # Database
    DB_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mydbgym?schema=public"
```

Y un archivo **.env.test** para pruebas:

```Bash
    # App
    APP_PORT=4001
    APP_HOST=localhost
    NODE_ENV=test

    # Database
    DB_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mydbgym_test?schema=public"
```
Cambia ***YOUR_PASSWORD*** por la contraseña real de tu usuario de PostgreSQL.