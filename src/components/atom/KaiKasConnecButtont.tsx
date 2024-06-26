import React from 'react';
import {Button, ButtonProps, Image} from "@chakra-ui/react";
import KaikasIcon from '@/assets/img/icon_kaikas.png'
import {provider} from "@/App";
const KaiKasConnectButton = (props: ButtonProps & {setAddress: (value: string) => void}) => {
  const {setAddress, ...buttonProps} = props;

  const connectKaikas = async() => {
    try {
      const result = await provider.enable();
      setAddress(result[0]);
    } catch (error) {
      // Handle error. Likely the user rejected the login
      console.error(error);
    }
  }

  return (
    <Button onClick={() => connectKaikas()} fontSize={'14px'} borderRadius={'15px'} minW={'280px'} h={'44px'} w={'100%'} color={'#ffffff'} colorScheme={'messenger'} bgColor={'var(--kaikas-color)'} {...buttonProps}>
      <Image src={KaikasIcon} w={'14px'} mr={'7px'} objectFit={'cover'}/>
      Connect to Kaikas
    </Button>
  );
};

export default KaiKasConnectButton;
