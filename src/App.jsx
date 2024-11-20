import './assets/styles/reset.css';
import React from 'react';
import Layout from './layout/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ROUTES, ADMIN_ROUTES } from './routes';

import Educational from './pages/Academic/Home/Educational';
import Corporate from './pages/Corporate/Home/Corporate';
import Login from './pages/Admin/Login';
import CorporateApply from './pages/Contact/CorporateApply';
import Events from './pages/Corporate/Events';
import EventDetails from './pages/Corporate/Events/Details';
import Services from './pages/Corporate/Services';
import AdminHome from './pages/Admin/Home';
import AdminLayout from './layout/AdminLayout';
import AdminUsers from './pages/Admin/Users';
import { AuthProvider } from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from './pages/Admin/Users/NewUser';
import AdminAdvantages from './pages/Admin/Advantages';
import AdvantageForm from './pages/Admin/Advantages/Form';
import AdminEvents from './pages/Admin/Events';
import AcademicApply from './pages/Admin/Applies/Academic';
import CorporativeApply from './pages/Admin/Applies/Corporate';
import Fields from './pages/Academic/Fields';
import Blogs from './pages/Academic/Blog';
import Career from './pages/Academic/Career';
import BlogDetails from './pages/Academic/Blog/Details';
import AdminCategories from './pages/Admin/Categories';
import { Toaster } from 'react-hot-toast';
import AdminBlogs from './pages/Admin/Blogs';
import BlogForm from './pages/Admin/Blogs/Form';
import AdminVacancies from './pages/Admin/Vacancies';
import VacancyForm from './pages/Admin/Vacancies/Form';
import AdminAbout from './pages/Admin/About';
import AdminCategoryForm from './pages/Admin/Categories/Form';
import CareerDetails from './pages/Academic/Career/Details';
import About from './pages/Academic/About';
import FieldsDetails from './pages/Academic/Fields/Details';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import StudentApply from './pages/Academic/Apply';
import AdminCourses from './pages/Admin/Courses';
import CourseForm from './pages/Admin/Courses/Form';
import AdminServices from './pages/Admin/Services';
import ServiceForm from './pages/Admin/Services/Form';
import ServiceDetails from './pages/Corporate/Services/Details';
import AdminMain from './pages/Admin/Main';
import MainForm from './pages/Admin/Main/Form';
import AboutForm from './pages/Admin/About/Form';
import AdminPlans from './pages/Admin/Plan';
import PlanForm from './pages/Admin/Plan/Form';
import TeacherForm from './pages/Admin/Teachers/Form';
import AdminTeachers from './pages/Admin/Teachers';
import AdminEventsForm from './pages/Admin/Events/Form';
import AdminSubjects from './pages/Admin/Subjects';
import SubjectForm from './pages/Admin/Subjects/Form';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path={ROUTES.EDUCATIONAL.HOME.PATH} element={<Educational />} />
            <Route path={ROUTES.EDUCATIONAL.ABOUT.PATH} element={<About />} />
            <Route path={ROUTES.EDUCATIONAL.FIELDS.MAIN.PATH} element={<Fields />} />
            <Route path={ROUTES.EDUCATIONAL.FIELDS.DETAILS.PATH} element={<FieldsDetails />} />
            <Route path={ROUTES.EDUCATIONAL.BLOGS.MAIN.PATH} element={<Blogs />} />
            <Route path={ROUTES.EDUCATIONAL.BLOGS.DETAILS.PATH} element={<BlogDetails />} />
            <Route path={ROUTES.EDUCATIONAL.CAREER.MAIN.PATH} element={<Career />} />
            <Route path={ROUTES.EDUCATIONAL.CAREER.DETAILS.PATH} element={<CareerDetails />} />
            <Route path={ROUTES.CORPORATE.HOME.PATH} element={<Corporate />} />
            <Route path={ROUTES.CORPORATE.CONTACT.PATH} element={<CorporateApply />} />
            <Route path={ROUTES.CORPORATE.SERVICES.MAIN.PATH} element={<Services />} />
            <Route path={ROUTES.CORPORATE.SERVICES.DETAILS.PATH} element={<ServiceDetails />} />
            <Route path={ROUTES.CORPORATE.EVENTS.MAIN.PATH} element={<Events />} />
            <Route path={ROUTES.CORPORATE.EVENTS.DETAILS.PATH} element={<EventDetails />} />
          </Route>

          <Route path={ROUTES.EDUCATIONAL.APPLY.PATH} element={<StudentApply />} />
          <Route path={ADMIN_ROUTES.LOGIN.PATH} element={<Login />} />

          {/* Admin Paneli */}
          <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path={ADMIN_ROUTES.HOME.PATH} element={<AdminHome />} />
            <Route path={ADMIN_ROUTES.MAIN.HOME.PATH} element={<AdminMain />} />
            <Route path={ADMIN_ROUTES.MAIN.EDIT.PATH} element={<MainForm />} />
            <Route path={ADMIN_ROUTES.USERS.MAIN.PATH} element={<AdminUsers />} />
            <Route path={ADMIN_ROUTES.COURSES.MAIN.PATH} element={<AdminCourses />} />
            <Route path={ADMIN_ROUTES.COURSES.NEW_COURSE.PATH} element={<CourseForm />} />
            <Route path={ADMIN_ROUTES.COURSES.EDIT_COURSE.PATH} element={<CourseForm />} />
            <Route path={ADMIN_ROUTES.SUBJECTS.MAIN.PATH} element={<AdminSubjects />} />
            <Route path={ADMIN_ROUTES.SUBJECTS.NEW_SUBJECT.PATH} element={<SubjectForm />} />
            <Route path={ADMIN_ROUTES.SUBJECTS.EDIT_SUBJECT.PATH} element={<SubjectForm />} />
            <Route path={ADMIN_ROUTES.USERS.NEW_USER.PATH} element={<NewUser />} />
            <Route path={ADMIN_ROUTES.CATEGORIES.MAIN.PATH} element={<AdminCategories />} />
            <Route path={ADMIN_ROUTES.CATEGORIES.NEW_CATEGORY.PATH} element={<AdminCategoryForm />} />
            <Route path={ADMIN_ROUTES.CATEGORIES.EDIT_CATEGORY.PATH} element={<AdminCategoryForm />} />
            <Route path={ADMIN_ROUTES.ABOUT.MAIN.PATH} element={<AdminAbout />} />
            <Route path={ADMIN_ROUTES.ABOUT.EDIT_ABOUT.PATH} element={<AboutForm />} />
            <Route path={ADMIN_ROUTES.BLOGS.MAIN.PATH} element={<AdminBlogs />} />
            <Route path={ADMIN_ROUTES.BLOGS.NEW_BLOG.PATH} element={<BlogForm />} />
            <Route path={ADMIN_ROUTES.BLOGS.EDIT_BLOG.PATH} element={<BlogForm />} />
            <Route path={ADMIN_ROUTES.TEACHERS.MAIN.PATH} element={<AdminTeachers />} />
            <Route path={ADMIN_ROUTES.TEACHERS.EDIT_TEACHER.PATH} element={<TeacherForm />} />
            <Route path={ADMIN_ROUTES.TEACHERS.NEW_TEACHER.PATH} element={<TeacherForm />} />
            <Route path={ADMIN_ROUTES.SERVICES.MAIN.PATH} element={<AdminServices />} />
            <Route path={ADMIN_ROUTES.SERVICES.NEW_SERVICE.PATH} element={<ServiceForm />} />
            <Route path={ADMIN_ROUTES.SERVICES.EDIT_SERVICE.PATH} element={<ServiceForm />} />
            <Route path={ADMIN_ROUTES.ADVANTAGES.MAIN.PATH} element={<AdminAdvantages />} />
            <Route path={ADMIN_ROUTES.ADVANTAGES.NEW_ADVANTAGE.PATH} element={<AdvantageForm />} />
            <Route path={ADMIN_ROUTES.ADVANTAGES.EDIT_ADVANTAGE.PATH} element={<AdvantageForm />} />
            <Route path={ADMIN_ROUTES.PLANS.MAIN.PATH} element={<AdminPlans />} />
            <Route path={ADMIN_ROUTES.PLANS.EDIT_PLAN.PATH} element={<PlanForm />} />
            <Route path={ADMIN_ROUTES.PLANS.NEW_PLAN.PATH} element={<PlanForm />} />
            <Route path={ADMIN_ROUTES.EVENTS.MAIN.PATH} element={<AdminEvents />} />
            <Route path={ADMIN_ROUTES.EVENTS.NEW_EVENT.PATH} element={<AdminEventsForm />} />
            <Route path={ADMIN_ROUTES.EVENTS.EDIT_EVENT.PATH} element={<AdminEventsForm />} />
            <Route path={ADMIN_ROUTES.VACANCIES.MAIN.PATH} element={<AdminVacancies />} />
            <Route path={ADMIN_ROUTES.VACANCIES.NEW_VACANCY.PATH} element={<VacancyForm />} />
            <Route path={ADMIN_ROUTES.VACANCIES.EDIT_VACANCY.PATH} element={<VacancyForm />} />
            <Route path={ADMIN_ROUTES.APPLIES.ACADEMIC.PATH} element={<AcademicApply />} />
            <Route path={ADMIN_ROUTES.APPLIES.CORPORATE.PATH} element={<CorporativeApply />} />
          </Route>
        </Routes>
      </AuthProvider>
      <Toaster />
    </Router>
  );
}

export default App;