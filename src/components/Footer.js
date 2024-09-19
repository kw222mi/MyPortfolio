import React from "react";
import Layout from "./Layout";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between dark:text-light">
                <span>{new Date().getFullYear()} &copy; All rights Reserved.</span>
            
               
                <Link href="mailto:kw222mi@student.lnu.se" target={"_blank"}>Contact me</Link>

            </Layout>
        </footer>
    )
}

export default Footer