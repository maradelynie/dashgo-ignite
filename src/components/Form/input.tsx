import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChekraInputProps } from "@chakra-ui/react"

interface InputProps extends ChekraInputProps{
    name: string;
    label?:string;
} 

export function Input( {name, label, ...rest} : InputProps ) {
    return(
        <FormControl>
            { !! label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                type="password"
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                bgColor: "gray.900"
                }}
                {...rest}
            />
        </FormControl>
    )
}

