import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layout';
import { useSelector, /*useDispatch*/ } from 'react-redux'




function App() {



  const { isopen, /*name*/ } = useSelector(state => state.modalMode);
  return (
    <Router>
      <div >
        <Routes>{
          publicRoutes.map((res, index) => {

            const Page = res.component;
            let Layout = DefaultLayout;

            if (res.layout) {
              Layout = res?.layout;
            } else if (res.layout === null) {
              Layout = Fragment
            }
            return <Route key={index}
              path={res.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })
        }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
