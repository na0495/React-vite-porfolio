import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Loadable = (Component: any) => (props: any) => {

    return (
      <Suspense fallback={"loading"}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function MainRouter() {
    return useRoutes([
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/aboutme',
            element: <AboutMePage />
        },
        {
            path: '/skills',
            element: <SkillsPage />
        },
        {
            path: '/project',
            element: <ProjectPage />
        },
        {
            path: '/resume',
            element: <ResumePage />
        },
        {
            path: '/project',
            element: <ProjectPage />
        },
        {
            path: '/singelpage',
            element: <SingelPage />
        },
        {
            path: '/github',
            element: <GithubPage />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])
}

const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const AboutMePage = Loadable(lazy(() => import('../pages/LandingPage')));
const SkillsPage = Loadable(lazy(() => import('../pages/LandingPage')));
const ProjectPage = Loadable(lazy(() => import('../pages/LandingPage')));
const ResumePage = Loadable(lazy(() => import('../pages/LandingPage')));
const SingelPage = Loadable(lazy(() => import('../pages/LandingPage')));
const GithubPage = Loadable(lazy(() => import('../pages/LandingPage')));
const NotFound = Loadable(lazy(() => import('../pages/LandingPage')));
