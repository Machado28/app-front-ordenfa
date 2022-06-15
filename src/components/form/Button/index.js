import Button_ from './styled'

const Button= (props)=>{
 return(
     <Button_ onClick={()=>window.location.href=props.redirect} className={props.className} >{props.text}</Button_> 
 )
}
export default Button;