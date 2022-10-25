import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';

const Games: NextPage = (props) => {
    return (
      <Default pageName="Games">
        <Games {...props} />
      </Default>
    );
  };
  
  
  export default Games;