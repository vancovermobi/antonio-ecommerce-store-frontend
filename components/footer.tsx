"use client"
import Image from "next/image";
import Link from "next/link";
import {  Facebook, Mail, MapPin, Send, Smartphone, Twitter, Youtube } from "lucide-react";

import Container from "@/components/ui/container";

const zaloIcon = '/zalo_icon.png'
const googleplusIcon = '/google-plus.png'
const shopeeIcon = '/shopee-icon.png'

const Footer = () => {
    
    const handleSubmit = () => {

    }
    return ( 
        <footer className="bg-[#202325] relative overflow-hidden">
            {/* footer top */}
            <div className="footer-top px-0 pt-20 pb-10 sm:pt-10 sm:pb-5">
                <Container>
                <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  mx-3">
                    {/* Col - 1  */}
                    <div className="w-[600] px-3 text-white">
                        {/* Liên hệ */}
                        <div className="mb-10">
                            <h6 className="text-2xl mb-4 tracking-[0.15em] font-semibold">Liên Hệ</h6>
                            <ul>
                                <li className="mb-3 list-none flex items-center">
                                    <MapPin className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 mr-4" />
                                    <p className="lg:text-1xs md:text-[14] sm:text-[16px] leading-6">Số 34, Đường số 12, Phường Trường Thọ, Tp.Thủ Đức, Tp.HCM</p>
                                </li>
                                <li className="mb-3 list-none flex items-center">
                                    <Mail className="h-4 w-4 mr-4" />
                                    <p className="text-1xs tracking-[0.1em]">camel@gmail.com</p>
                                </li>
                                <li className="list-none flex items-center">
                                    <Smartphone className="h-4 w-4 mr-4" />
                                    <p className="text-1xs tracking-[0.2em]">+ 0911.655.065</p>
                                </li>
                            </ul>
                        </div>
                        {/* Widget media */}
                        <div className="mb-10">
                            <Link href={'/shoope'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Image src={shopeeIcon} alt="shoopeIcon" width={200} height={200} 
                                className="h-8 w-8 rounded-full"/>
                            </Link>
                            <Link href={'/facebook'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Facebook className="h-8 w-8 p-1 bg-blue-600 text-white rounded-full"/>
                            </Link>
                            <Link href={'/zalo'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Image src={zaloIcon} alt="zaloicon" width={200} height={200} 
                                className="h-8 w-8 bg-white rounded-full"/>
                            </Link>
                            <Link href={'/twitter'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Twitter className="h-8 w-8 p-1 bg-blue-600 text-white rounded-full"/>
                            </Link>
                            <Link href={'/google'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Image src={googleplusIcon} alt="googleplusIcon" width={200} height={200} 
                                className="h-8 w-8 rounded-full"/>
                            </Link>
                            <Link href={'/youtube'} className="inline-block pt-0 pl-0 pr-2 pb-1">                           
                                <Youtube className="h-8 w-8 p-1 bg-red-600 text-white rounded-full"/>
                            </Link>
                        </div>
                    </div>

                    {/* Col - 2 */}
                    <div className="px-3 text-white">
                        <div className="mb-10">
                            <h6 className="text-2xl mb-4 tracking-[0.15em] font-semibold">
                                Liên kết
                            </h6>
                            <div className="flex flex-col gap-y-4">
                                <Link href={'/gioithieu'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Giới thiệu</span>
                                </Link>
                                <Link href={'/lienhe'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Liên hệ</span>
                                </Link>
                                <Link href={'/cauhoi'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Câu hỏi thường gặp</span>
                                </Link>
                                <Link href={'/csbaomat'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Chính sách bảo mật</span>
                                </Link>
                                <Link href={'/csdoitrahang'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Chính sách đổi trả hàng</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Col - 3 */}
                    <div className="px-3 text-white">
                        <div className="mb-10">
                            <h6 className="text-2xl mb-4 tracking-[0.15em] font-semibold">
                                Tài Khoản
                            </h6>
                            <div className="flex flex-col gap-y-4">
                                <Link href={'/taikhoan'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Tài khoản</span>
                                </Link>
                                <Link href={'/cuahang'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Cửa hàng</span>
                                </Link>
                                <Link href={'/giohang'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Giỏ hàng</span>
                                </Link>
                                <Link href={'/thanhtoan'}>
                                    <span className="hover:text-[#FF324D] transition delay-100">Phương thức Thanh toán</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Col - 4 */}
                    <div className="md:w-96 lg:w-80 sm:w-[300] px-3 text-white">
                        <div className="mb-10">
                            <h6 className="text-2xl mb-4 font-semibold">
                                Đăng Ký Bản Tin Của Chúng Tôi
                            </h6>
                            <p className="block break-normal leading-8 mb-4 pr-2">Nếu bạn muốn nhận email từ chúng tôi mỗi khi chúng tôi có ưu đãi đặc biệt mới, hãy đăng ký tại đây!</p>
                            <div className="flex flex-col gap-y-4">
                                <form className="flex items-center justify-between" onSubmit={() => handleSubmit}>
                                    <input 
                                        type="text" 
                                        required 
                                        name="email"
                                        placeholder="Nhập địa chỉ Email"
                                        className="w-full p-1 mr-2 border-none"
                                    />
                                    <button type="submit"
                                        className="h-8 w-8 ml-auto shrink-0 bg-[#FF324D] rounded-full items-center"
                                    >
                                        <Send className="h-6 w-6 text-center"/>
                                    </button>
                                </form>
                            </div>
            </div>
        </div>
                </div>   
                </Container>
            </div>

            {/* footer bottom */}
            <div className="mx-auto py-10 sm:py-3 relative border-t">
                <Container>
                <div className="flex flex-row flex-wrap items-center mx-3"> 
                    <div className="relative w-full px-3"> 
                        <p className="text-center text-1xl text-white">
                            &copy; 2023 Camel, Inc. All rights reserved by NND.Corp
                        </p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                </Container>
            </div>
        </footer>
    );
}
 
export default Footer;