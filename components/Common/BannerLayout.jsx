
const BannerLayout = ({ children }) => {
    return (
        <>
            <div className="relative">
                <div
                    className="absolute backdrop-blur-sm bg-fixed w-full h-80"
                    style={{
                        background: 'url(images/background.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                    </div>
                </div>
            </div>
            <div className="relative backdrop-blur-sm bg-Black/5 flex flex-col z-10 w-full h-full min-h-80" style={{minHeight: '320px'}}>
                {children}
            </div>
        </>
    )
}

export default BannerLayout