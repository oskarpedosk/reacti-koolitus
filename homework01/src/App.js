import './App.css'
import book_img from './static/images/daodejing.jpg'

function App() {
    const author = 'Laozi'
    const title = 'Daodejing ehk Tee väe raamat'
    const book_url = 'https://www.goodreads.com/book/show/2691694-the-daodejing-of-laozi'
    const description = `Laozi oli Vana-Hiina müstik ja filosoof. Filosoofilise sisuga tekst esitab lugejale küsimusi, 
    paneb mõtlema elust ning pakub paljudele lugejatele uusi ideid ja inspiratsiooni. Daodejingi peetakse üheks taoismi alustekstideks ja see on siiamaani üks enimtõlgitud raamatuid.`
    const publication = '~400 eKr.'
    
    return (
        <div className="container d-flex">
            <a href={book_url}>
                <img className='book-cover' src={book_img} alt='daodejing' />
            </a>
            <div className='book-info'>
                <p className='title'>{title}</p>
                <p>Autor: <span className='author'>{author}</span></p>
                <p>Ilmunud: {publication}</p>
                <p>{description}</p>
            </div>
        </div>
    )
 }
 export default App