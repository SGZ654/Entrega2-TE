import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentForm from './components/studentForm';

const Edit = () => {
  const { studentId } = useParams(); // Obtener el ID del estudiante desde la URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API para obtener los datos del estudiante
    const fetchStudentData = async () => {
      // Aquí podrías hacer una llamada a una API para obtener los datos del estudiante
      // Por ejemplo: const response = await fetch(`/api/students/${studentId}`);
      // const studentData = await response.json();

      // Simulación de datos obtenidos de la API
      const studentData = {
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
      setStudent(studentData);
    };

    fetchStudentData();
  }, [studentId]); // Dependencia en studentId para volver a ejecutar si cambia

  if (!student) {
    return <div>Loading...</div>; // Puedes mostrar un indicador de carga mientras se obtienen los datos
  }

  return <StudentForm student={student} isEdit />;
};

export default Edit;
