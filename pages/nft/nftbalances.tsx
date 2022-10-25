import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';

const NFTBalances: NextPage = (props) => {
    return (
      <Default pageName="NFT MINT">
        <NFTBalances {...props} />
      </Default>
    );
  };
  
  
  export default NFTBalances;