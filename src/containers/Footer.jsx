import React from 'react';
import SocialsFooter from '../components/FooterComponents/SocialsFooter';
import FooterLink from "../components/FooterComponents/FooterLink";
import FooterTitle from '../components/FooterComponents/FooterTitle';
import FooterLinkBottom from '../components/FooterComponents/FooterLinkBottom';

const Footer = () => {
    return (
        <div className='text-left text-[1.6rem]'>
            <footer style={{"box-shadow": "0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%)"}} className="pt-[4.8rem] pb-[14.6rem] bg-[#fff]">
                <nav className='ml-[12px] px-[4rem]'>
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
                        <div className='w-[190px] max-w-[190px] inline-block ml-[3.2rem]'>
                            <FooterTitle title={"For Business Partners"}/>
                            <ul className='inline-block'>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/business/landlord-faq/"} content={"Landlord Support Center"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/business/suppliers/"} content={"Suppliers"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbuckscardb2b.com/s/"} content={"Corporate Gift Card Sales"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.nestlecoffeepartnerssl.com/our-brands/we-proudly-serve-starbucks-coffee-program"} content={"Office and Foodservice Coffee"}/>
                                </li>
                            </ul>
                        </div>
                        <div className='w-[190px] max-w-[190px] inline-block ml-[3.2rem]'>
                            <FooterTitle title={"Order and Pickup"}/>
                            <ul className='inline-block'>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/rewards/mobile-apps/"} content={"Order on the App"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/menu"} content={"Order on the Web"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/ways-to-order/delivery/"} content={"Delivery"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://www.starbucks.com/ways-to-order/"} content={"Order and Pickup Options"}/>
                                </li>
                                <li>
                                    <FooterLink link={"https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer"} content={"Explore and Find Coffee for Home"}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr aria-hidden="true" class="my-[3.2rem]"></hr>
                    <SocialsFooter />
                    <ul className='inline-block mb-[0.4rem] mt-[1.6rem] flex'>
                        <li className="items-center flex text-center">
                            <a href="https://www.starbucks.com/terms/privacy-policy/" className='block no-underline mb-[0.4rem] py-[0.8rem] lg:mb-0 lg:py-[0] lg:pr-[1.6rem] hover:underline'>Privacy Notice</a>
                        </li>
                        <FooterLinkBottom link={"https://www.starbucks.com/terms/starbucks-terms-of-use/"} content={"Terms of Use"}/>
                        <FooterLinkBottom link={"https://www.starbucks.com/personal-information"} content={"Do Not Share My Personal Information"}/>
                        <FooterLinkBottom link={"https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf"} content={"CA Supply Chain Act"}/>
                        <FooterLinkBottom link={"/"} content={"Cookie Preferences"}/>
                    </ul>
                    <p className='md:text-[1.4rem] text-[1.3rem] py-[1.6rem] text-[#00000094]'>© 2023 Starbucks Coffee Company. All rights reserved.</p>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;