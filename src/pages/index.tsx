import { Button, Flex, Stack, FormLabel, FormControl } from "@chakra-ui/react"
import { Input } from "../components/Form/input"

export default function Home() {
  return (
    <Flex
      w="100%"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        flexDir="column"
        borderRadius={8}
      >
        <Stack spacing="4">
          <Input
              name="email"
              label="E-mail"
              type="email"
          />
          <Input
              name="password"
              label="Senha"
              type="password"
          />
        </Stack>

        <Button
          type="submit"
          size="lg"
          mt="6"
          colorScheme="pink"
          >
          Entrar
        </Button>
        
      </Flex>
    </Flex>
  )
}
