import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';

const Webtoons: NextPage = (props) => {
    return (
      <Default pageName="Webtoons">
        <Webtoons {...props} />
      </Default>
    );
  };
  
  
  export default Webtoons;