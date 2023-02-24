import React from 'react';
import SocialsFooter from '../components/FooterComponents/SocialsFooter';
import FooterLink from "../components/FooterComponents/FooterLink";
import FooterTitle from '../components/FooterComponents/FooterTitle';

const Footer = () => {
    return (
        <div className='text-left'>
            <footer>
                <nav className='ml-[12px]'>
                    <div className='flex'>
                        <div className='w-[190px] max-w-[190px] inline-block'>
                            <FooterTitle title={"About Us"}/>
                            <ul className='inline-block'>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/about-us/"} content={"Our Company"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/coffee/"} content={"Our Coffee"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://stories.starbucks.com/"} content={"Stories and News"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://archive.starbucks.com/"} content={"Starbucks Archive"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://investor.starbucks.com/ir-home/default.aspx"} content={"Investor Relations"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://customerservice.starbucks.com/"} content={"Customer Service"}/>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[190px] max-w-[190px] inline-block ml-[3.2rem]'>
                            <FooterTitle title={"Careers"}/>
                            <ul className='inline-block'>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/careers/working-at-starbucks/culture-and-values/"} content={"Culture and values"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://stories.starbucks.com/stories/inclusion-diversity/"} content={"Inclusion, Diversity and Equity"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/careers/working-at-starbucks/education/"} content={"College Achievement Plan"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://alumni.starbucks.com/login/"} content={"Alumni Community"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/careers/"} content={"U.S. Careers"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/careers/international-careers/"} content={"International Careers"}/>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[190px] max-w-[190px] inline-block ml-[3.2rem]'>
                            <FooterTitle title={"Social Impact"}/>
                            <ul className='inline-block'>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/responsibility/people/"} content={"People"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/responsibility/planet/"} content={"Planet"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/responsibility/reporting-hub/"} content={"Environmental and Social Impact Reporting"}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </footer>
            <SocialsFooter />
        </div>
    )
}

export default Footer;