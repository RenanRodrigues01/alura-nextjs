import Link from 'next/link'

function TitleStile ({ children, as }) {
    const Tag = as;
    return(
        <>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: red;
                }
            `}</style>
        </>
    )
}

export default function index (){
    return(
        <div>
            <TitleStile as="h2">Home- Page</TitleStile>
            <Link href="/faq">ir para FAQ</Link>
        </div>
    )
}