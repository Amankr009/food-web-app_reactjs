const Footer = () => {
    const date = new Date()

    return (
        <div className="text-center mt-8 font-mono">@Copyright {date.getFullYear()}</div>
    )
}

export default Footer;