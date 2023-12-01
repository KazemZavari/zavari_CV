

const SocialNetworks = () => {
    return (
        <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/reayhs" target="_blank">
                <i className="fa-brands fa-telegram border-[2px] border-white p-2 rounded-[100%]
                    hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>

            <a href="https://www.instagram.com/iburakz/" target="_blank">
                <i className="fa-brands fa-whatsapp border-[2px] border-white p-2 rounded-[100%]
                hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>
            <a
                href="https://github.com/Reayhs/react-tailwind-portfolio"
                target="_blank"
            >
                <i className="fa-brands fa-github border-[2px] border-white p-2 rounded-[100%]
             hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange">
                </i>
            </a>
            <a href="https://twitter.com/reayhs" target="_blank">
                <i className="fa-brands fa-linkedin border-[2px] border-white p-2 rounded-[100%]
                    hover:scale-110 hover:bg-white hover:text-Gray hover:border-Orange"></i>
            </a>
        </div>
    )
}

export default SocialNetworks