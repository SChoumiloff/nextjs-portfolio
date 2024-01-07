import Image from 'next/image'

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center'
        }}>
            <Image
                src="/images/404-dataelevation.png"
                alt="Page Not Found"
                // width={500} 
                // height={300}
            />
        </div>
    )
}
