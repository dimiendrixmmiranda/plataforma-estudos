import Footer from "./footer/Footer";
import Header from "./header/Header";

interface TemplateProps {
    children: React.ReactNode
}

export default function Template({ children }: TemplateProps) {
    return (
        <div className="flex flex-col relative">
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    )
}

