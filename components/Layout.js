import Nav from './nav';

const layout = ({ page }) =>
  <>
    <Nav />
    <div className="container">
      {page}
    </div>;
  </>;


export default layout;
