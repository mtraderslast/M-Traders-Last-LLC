export const metadata = {
    title: "Services",
    description: "Web Development & Digital Solutions Platform",
};

export default function Services({ children }) {
    return (
        <section className="w-full h-full min-h-screen antialiased">
            {children}
        </section>
    );
}