import './Header.css'

// Essa é a área superior do site, o que seria o cabeçalho do site.

const Header = () =>{
    return  (
    <>
        <header>
            <div className='header-field'>
                <h2>The React Project</h2> {/* Título do projeto */}
                <img src='.\src\assets\react.webp' className='logo-style'/>    
            </div> 
        </header>
    </>
    );
};

export default Header;

