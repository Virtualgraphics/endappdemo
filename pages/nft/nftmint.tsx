import { Default } from 'components/layouts/Default';
import { GetServerSideProps, NextPage } from 'next';

const NFTMint: NextPage = (props) => {
    return (
      <Default pageName="NFT MINT">
        <NFTMint {...props} />
      </Default>
    );
  };
  
  
  export default NFTMint;