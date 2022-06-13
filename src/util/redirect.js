const Redirect=(path='register')=>{
  const host=window.location.hostname
  const url=window.location.replace(`/#/${path}`)
  return url
}
export default Redirect;

 const RedirectExternal=(url="")=>{
  const route=window.location.href=url
 return route
}
export {RedirectExternal}
