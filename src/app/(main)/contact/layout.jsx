export const metadata = {
    title: "Contact",
    description: "Web Development & Digital Solutions Platform",
};

export default function Contact({ children }) {
    return (
        <section className="w-full h-full min-h-screen antialiased">
            {children}
        </section>
    );
}