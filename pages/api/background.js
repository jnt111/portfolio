const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'New York University',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from New York University.",
                year: '2008-2012'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Vention',
                role: 'Senior Full Stack Developer',
                url: 'https://ventionteams.com/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '09/2020 - Present',
                location: 'New York, NY'
            },
            {
                id: 2,
                title: 'Coalesce',
                role: 'Full Stack Developer',
                url: 'http://www.coalesce.nyc/',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '03/2014 - 09/2020',
                location: 'New York, NY'
            },
            {
                id: 3,
                title: 'Saritasa',
                role: 'Software Developer',
                url: 'https://www.saritasa.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '11/2012 - 02/2014',
                location: 'New York, NY'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
