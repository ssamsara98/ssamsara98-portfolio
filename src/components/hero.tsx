'use client';
import { Stack, Flex, Box, Heading, Text, Image, Icon, IconProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Fade from 'react-reveal/Fade';
import ssamsara98 from '~/assets/ssamsara98.jpg';

export const HeroHome: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <Stack
      id={id}
      align={'center'}
      spacing={{ base: 8, tablet: 10 }}
      py={{ base: 20, tablet: 28 }}
      direction={{ base: 'column', tablet: 'row' }}
    >
      <Fade top>
        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', tablet: '4xl', desktop: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}
          >
            Sulthon Abdul Malik
          </Text>
          <br />
          <Text as={'span'} color={'red.400'}>
            Software Developer
          </Text>
        </Heading>
      </Fade>
      <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
        <Blob
          w={'100%'}
          h={'150%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.100', 'red.300')}
        />
        <Fade bottom>
          <Box
            position={'relative'}
            h={{ base: 'full', tablet: '300px' }}
            rounded={'2xl'}
            boxShadow={'2xl'}
            overflow={'hidden'}
          >
            <Image
              alt={'Sulthon Abdul Malik'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                // 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                ssamsara98.src
              }
            />
          </Box>
        </Fade>
      </Flex>
    </Stack>
  );
};

export const Blob: React.FC<IconProps> = (props) => {
  return (
    <Icon width={'100%'} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
