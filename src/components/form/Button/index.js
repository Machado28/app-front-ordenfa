import Button_ from './styled'

const Button= (props)=>{
 return(
     <Button_ className={props.className} >{props.text}</Button_> 
 )

}
export default Button;