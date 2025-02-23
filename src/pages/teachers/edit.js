import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TeacherForm from './components/TeacherForm';

const Edit = () => {
  const { teacherId } = useParams(); // Obtener el ID del profesor desde la URL
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API para obtener los datos del profesor
    const fetchTeacherData = async () => {
      // Aquí podrías hacer una llamada a una API para obtener los datos del profesor
      // Por ejemplo: const response = await fetch(`/api/teachers/${teacherId}`);
      // const teacherData = await response.json();

      // Simulación de datos obtenidos de la API
      const teacherData = {
        name: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        address: '123 Main Street',
        age: 20,
        gender: 'male',
        typeDocument: 'passport',
        typeSubject: ['machine_learning'], // Asegúrate de que sea un array para selección múltiple
        numberDocument: '328d32099203',
        dateBirth: '2023-05-18'
      };
      setTeacher(teacherData);
    };

    fetchTeacherData();
  }, [teacherId]); // Dependencia en teacherId para volver a ejecutar si cambia

  if (!teacher) {
    return <div>Loading...</div>; // Puedes mostrar un indicador de carga mientras se obtienen los datos
  }

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
