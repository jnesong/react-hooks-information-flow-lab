function Header ({leDark, lesDarkMode}){
return (
<header>
<h2>Shopster</h2>
<button onClick={lesDarkMode}>
  {leDark ? "Dark" : "Light"} Mode
</button>
</header>
)
}

export default Header