import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Registro de Entrada": "Entry Registration",
      "Nombre": "Name",
      "Institución": "Institution",
      "Correo": "Email",
      "Tipo de Usuario": "User Type",
      "Departamento": "Department",
      "Registrar entrada": "Register Entry",
      "Acceso Administrador": "Admin Access",
      "Contraseña": "Password",
      "Iniciar sesión": "Log in",
      "Exportar a Excel": "Export to Excel"
    }
  },
  es: {
    translation: {
      "Registro de Entrada": "Registro de Entrada",
      "Nombre": "Nombre",
      "Institución": "Institución",
      "Correo": "Correo",
      "Tipo de Usuario": "Tipo de Usuario",
      "Departamento": "Departamento",
      "Registrar entrada": "Registrar entrada",
      "Acceso Administrador": "Acceso Administrador",
      "Contraseña": "Contraseña",
      "Iniciar sesión": "Iniciar sesión",
      "Exportar a Excel": "Exportar a Excel"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;