const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Thakur College of Science and Commerce',
                degree: 'BSC, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Thakur College of Science and Commerce.",
                year: '2020-2023'
            },
            {
                id: 1,
                title: 'Shri TP Bhatia College of Science',
                degree: 'HSC, Science ',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Shri TP Bhatia College of Science.",
                year: '2018-2020'
            },
            {
                id: 2,
                title: 'Holy Infant High School',
                degree: 'SSC',
                detail: "Completed SSC from Holy Infant High School",
                year: '2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'One Percent Startups Combinator PVT LTD',
                role: 'Junior Full Stack Developer',
                url: 'https://www.linkedin.com/company/onepercentstartups/',
                desc: 'As a Junior Full Stack Developer at One Percent Startups Combinator PVT LTD, I specialize in leveraging React, Next.js, and JavaScript to craft dynamic and intuitive user interfaces for web applications. Additionally, I adeptly manage server-side operations, ensuring seamless functionality and performance. Based in Mumbai, India, I continuously contribute to enhancing user experiences and driving innovation within our development projects.',
                year: '04/2023 - Present',
                location: 'Mumbai, India'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
