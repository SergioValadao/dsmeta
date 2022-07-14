
import logo from '../../assets/img/logo.svg'

function Header() {
    return (
        <header>
            <div className="Cabecalho">
                <img src={logo} alt="DSMeta" id="logocell" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por 
                    <a href="https://www.linkedin.com/in/sergio-aguiar-valad%C3%A3o-bab55726/"> Sergio Valadão</a></p>
            </div>
        </header>
    )
}
export default Header