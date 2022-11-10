import React from "react";
import { Box, Flex, AspectRatio } from '@chakra-ui/react';

const GoogleMap = () => {
    return (
        <Flex justifyContent='center' className="mapouter" h='100%' w='100%'>
            <Box className="gmap_canvas" w='100%'>
                <AspectRatio maxW='100%' maxH={{ base: '500px', lg: '650px', xl: '800px' }} ratio={{ base: 4 / 3, xl: 16 / 9 }}>
                    <iframe id="gmap_canvas" title="googleMap" src="https://maps.google.com/maps?q=310%20W%20Broadway,%20New%20York,%20NY%2010013,%20Estados%20Unidos&t=&z=15&ie=UTF8&iwloc=&output=embed" />
                </AspectRatio>
            </Box>
        </Flex>
    );
}

export default GoogleMap;