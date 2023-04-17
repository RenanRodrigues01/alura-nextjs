import Link from 'next/link'

export async function getStaticProps() {
    const Faq_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(Faq_URL)
        .then(responseServer =>{
            return responseServer.json() 
        })
        .then( response => {return response})
    return {
      props: {
        faq,
      }, // will be passed to the page component as props
    }
}

export default function FaqPage ({ faq }) {
    return(
        <div>
            <h1>Page - FAQ</h1>
            <Link href="/">Voltar para Home</Link>
            <div>
                <ul>
                    {faq.map( ({answer, question}) => (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}