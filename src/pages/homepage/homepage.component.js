import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="Home-Page">
        <Directory />
      </div>
    </div>
  );
};

export default HomePage;
