import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Page404 } from '../pages/page404';
import { RouteInterface } from '../utils/interfaces';

export default function Router(props: {routes: RouteInterface[]}) {
    const routes = props.routes.map((element) => {
        if (!element.protection) {
            return (
                <Route
                    key={element.path}
                    path={element.path}
                    element={element.component}
                >{element.routes && element.routes.map(
                    (route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                        />
                    )
                )}</Route>
            );
        }
        return (
            <Route key={element.path} element={element.protection}>
                <Route path={element.path} element={element.component}>
                    {element.routes && element.routes.map(
                    (route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.component}
                        />
                    )
                )}
                </Route>
            </Route>
        );
    });
    return (
        <BrowserRouter>
            <Routes>
                {routes}
                <Route path='*' element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    );
}