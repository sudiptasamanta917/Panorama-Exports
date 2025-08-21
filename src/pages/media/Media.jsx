import React from "react";

const Media = () => {
    const pressCoverage = [
        {
            title: "Driving Innovation in Web Development",
            source: "Business Standard",
            date: "July 2025",
            link: "#",
        },
        {
            title: "A Fresh Approach to Digital Solutions",
            source: "TechCrunch",
            date: "June 2025",
            link: "#",
        },
        {
            title: "How Our Company is Building the Future of Software in West Bengal",
            source: "YourStory",
            date: "May 2025",
            link: "#",
        },
    ];

    // const certificates = [
    //     { src: "/certificates/c1.png", alt: "GOTS" },
    //     { src: "/certificates/c2.png", alt: "GRS" },
    //     { src: "/certificates/c3.png", alt: "Higg Index" },
    //     { src: "/certificates/c4.png", alt: "ISO" },
    //     { src: "/certificates/c5.png", alt: "SMETA" },
    //     { src: "/certificates/c6.png", alt: "WRAP" },
    //     { src: "/certificates/c7.png", alt: "ZED Gold" },
    //     { src: "/certificates/c8.png", alt: "Sedex" },
    // ];

    const events = [
        {
            title: "Tech Expo India",
            desc: "Showcased our latest software solutions.",
            date: "August 2025",
        },
        {
            title: "Startup Bengal Conclave",
            desc: "Invited speaker on innovation in software.",
            date: "July 2025",
        },
        {
            title: "Best Emerging Software Company",
            desc: "Recognized for innovation and impact.",
            date: "March 2025",
        },
    ];

    return (
        <div className="">
            <div className="bg-blue-950 h-20"></div>
            {/* Hero Section */}
            <div className="text-center my-12">
                <h1 className="text-4xl font-bold text-gray-800">
                    In the Media
                </h1>
                <p className="text-gray-600 mt-2">
                    See how our work, innovation, and achievements are making
                    headlines.
                </p>
            </div>

            <div className="w-[90%] mx-auto">
                {/* Press Coverage */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Press Coverage
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {pressCoverage.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="p-6 bg-white shadow-md rounded-lg border hover:shadow-lg transition"
                            >
                                <h3 className="font-bold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.source} • {item.date}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Events */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Events & Conferences
                    </h2>
                    <div className="space-y-4">
                        {events.map((event, idx) => (
                            <div
                                key={idx}
                                className="p-6 bg-white border rounded-lg shadow-sm"
                            >
                                <h3 className="font-semibold text-lg">
                                    {event.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {event.date}
                                </p>
                                <p className="text-gray-700 mt-2">
                                    {event.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Media Contact */}
                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Media Inquiries
                    </h2>
                    <p className="text-gray-600">📧 media@yourcompany.com</p>
                    <p className="text-gray-600">📞 +91 9XXXXXXXXX</p>
                </section>
            </div>
        </div>
    );
};

export default Media;
