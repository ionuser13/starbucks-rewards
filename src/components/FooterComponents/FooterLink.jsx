import React from 'react';

const FooterLink = ({link, content}) => {
    return <a href={link} className="text-[#00000094] decoration-none py-[0.8rem] mb-[0.8rem] block bg-transparent">{content}</a>
}

export default FooterLink