import Button_ from './styled'

const Button= (props={redirect:"https://localhost:3333/#/"})=>{
 return(
     <Button_  href={props.redirect} className={props.className} >{props.text}</Button_> 
 )
}
export default Button;