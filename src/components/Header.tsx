import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
    return(
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
           <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
           >
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxW={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input
                color="gray.50"
                variant="unstyled"
                placeholder="Buscar na plataforma"
                px="4"
                mr="4"
                _placeholder={{
                    color:"gray.400"
                }}/>
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>

            <Flex
                ml="auto"
                align="center"
            >
                <HStack
                  spacing="8"
                  mx="8"
                  pr="8"
                  py="1"
                  color="gray.300"
                  borderRightWidth={1}
                  borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20"/>  
                    <Icon as={RiUserAddLine} fontSize="20"/>  
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text>Mara Oliveira</Text>
                        <Text color="gray.300" fontSize="small" >maradelynie@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Mara Oliveira" src="https://github.com/maradelynie.png"/>
                </Flex>
            </Flex>



        </Flex>
    )
}

