import { Button } from "react-native"
import { Container } from "../../components/Container"
import { CustomText } from "../../components/CustomText/style"

export const Home = ({navigation}:{navigation:any})=> {
  return (
    <Container align="center" justify="center">
      <CustomText color="blue"  size="20" >
        Hello
      </CustomText>
      
    </Container>
  )
}