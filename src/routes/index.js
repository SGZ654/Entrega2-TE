import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

// student import
import StudentsRoutes from './StudentsRoutes';

// teacher import
import TeachersRoutes from './TeachersRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes, TeachersRoutes]);
}
