import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout, FullLayout } from '~/layout';




function App() {
  return (
    <Router>
      <div >
        <Routes>{
          publicRoutes.map((res, index) => {

            const Page = res.component;
            let Layout = DefaultLayout;
            let fullLayout = FullLayout;
            if (res.layout) {
              console.log(res)
              if (res.fulllayout) {
                fullLayout = res?.fulllayout;
              }
              else {
                Layout = res?.layout;
              }

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
