import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const EndappLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/enDAPPDarkBG.svg' : '/endDAPPLightBG.svg'}
      height={45}
      width={150}
      alt="Moralis"
    />
  );
};

export default EndappLogo;
